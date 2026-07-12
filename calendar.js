export function buildIcs(result, includePublicDaysOff = false, generatedAt = new Date()) {
  const now = generatedAt.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//AI Company//Shift Photo MVP//JA",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:シフト",
    "X-WR-TIMEZONE:Asia/Tokyo",
    "BEGIN:VTIMEZONE",
    "TZID:Asia/Tokyo",
    "X-LIC-LOCATION:Asia/Tokyo",
    "BEGIN:STANDARD",
    "TZOFFSETFROM:+0900",
    "TZOFFSETTO:+0900",
    "TZNAME:JST",
    "DTSTART:19700101T000000",
    "END:STANDARD",
    "END:VTIMEZONE",
  ];
  const calendarRows = [
    ...result.workRows,
    ...result.offRows.filter((row) => row.code === "X" || (includePublicDaysOff && row.code === "-")),
  ].sort((a, b) => a.date.localeCompare(b.date));

  calendarRows.forEach((row) => {
    lines.push("BEGIN:VEVENT");
    lines.push(`UID:shift-${row.date}-${row.code}@shift-photo-mvp.local`);
    lines.push(`DTSTAMP:${now}`);
    if (row.entry.is_work) {
      lines.push(`SUMMARY:${icsEscape(`勤務 ${row.code}`)}`);
      lines.push(`DTSTART;TZID=Asia/Tokyo:${toIcsDateTime(row.date, row.entry.start_time)}`);
      lines.push(`DTEND;TZID=Asia/Tokyo:${toIcsDateTime(row.date, row.entry.end_time)}`);
      lines.push(`DESCRIPTION:${icsEscape(buildEventDescription(row))}`);
      lines.push("X-MICROSOFT-CDO-REMINDER:FALSE");
    } else {
      lines.push(`SUMMARY:${icsEscape(row.entry.label)}`);
      lines.push(`DTSTART;VALUE=DATE:${row.date.replaceAll("-", "")}`);
      lines.push(`DTEND;VALUE=DATE:${addDaysISO(row.date, 1).replaceAll("-", "")}`);
      lines.push("TRANSP:TRANSPARENT");
    }
    lines.push("END:VEVENT");
  });
  lines.push("END:VCALENDAR");
  return `${lines.join("\r\n")}\r\n`;
}

export function calendarFilename(result) {
  const start = result.period?.start ?? result.validRows[0]?.date ?? "shift";
  const end = result.period?.end ?? result.validRows.at(-1)?.date ?? "calendar";
  return `shift-${start}_${end}.ics`;
}

function addDaysISO(date, amount) {
  const value = new Date(`${date}T00:00:00Z`);
  value.setUTCDate(value.getUTCDate() + amount);
  return value.toISOString().slice(0, 10);
}

function buildEventDescription(row) {
  return [
    `勤務記号: ${row.code}`,
    `勤務時間: ${normalizeTimeLabel(row.entry.start_time)}-${normalizeTimeLabel(row.entry.end_time)}`,
    `残業: ${minutesToJapanese(row.entry.overtime_minutes)}`,
    `深夜残業: ${minutesToJapanese(row.entry.night_overtime_minutes)}`,
  ].join("\n");
}

function toIcsDateTime(date, time) {
  const [year, month, day] = date.split("-").map(Number);
  const [hourRaw, minuteRaw = 0] = time.split(":").map(Number);
  const value = new Date(Date.UTC(year, month - 1, day + Math.floor(hourRaw / 24), hourRaw % 24, minuteRaw));
  return [
    value.getUTCFullYear(),
    pad2(value.getUTCMonth() + 1),
    pad2(value.getUTCDate()),
    "T",
    pad2(value.getUTCHours()),
    pad2(value.getUTCMinutes()),
    "00",
  ].join("");
}

function normalizeTimeLabel(value) {
  if (!value) return "";
  const [hourRaw, minuteRaw = "0"] = String(value).split(":");
  const hour = Number(hourRaw);
  const minute = String(Number(minuteRaw)).padStart(2, "0");
  if (hour >= 24) return `翌日${hour - 24}:${minute}`;
  return `${hour}:${minute}`;
}

function minutesToJapanese(value) {
  const minutes = Number(value) || 0;
  const sign = minutes < 0 ? "-" : "";
  const absolute = Math.abs(minutes);
  return `${sign}${Math.floor(absolute / 60)}時間${pad2(absolute % 60)}分`;
}

function pad2(value) {
  return String(value).padStart(2, "0");
}

function icsEscape(value) {
  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}
