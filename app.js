const DEFAULT_MASTER = [
  ["A", "A勤務", "05:30", "14:00", 30, 0, true],
  ["AV", "AV勤務", "05:30", "14:00", 30, 0, true],
  ["AJ", "AJ勤務", "05:30", "19:30", 360, 0, true],
  ["AM", "AM勤務", "05:30", "19:30", 360, 0, true],
  ["AK", "AK勤務", "05:30", "20:30", 420, 0, true],
  ["B", "B勤務", "06:00", "14:00", 0, 0, true],
  ["BV", "BV勤務", "06:00", "14:00", 0, 0, true],
  ["BJ", "BJ勤務", "06:00", "19:30", 330, 0, true],
  ["BM", "BM勤務", "06:00", "19:30", 330, 0, true],
  ["BK", "BK勤務", "06:00", "20:30", 390, 0, true],
  ["C", "C勤務", "06:30", "14:30", 0, 0, true],
  ["CV", "CV勤務", "06:30", "14:30", 0, 0, true],
  ["CJ", "CJ勤務", "06:30", "19:30", 300, 0, true],
  ["CM", "CM勤務", "06:30", "19:30", 300, 0, true],
  ["CK", "CK勤務", "06:30", "20:30", 360, 0, true],
  ["R", "R勤務", "13:30", "21:30", 0, 0, true],
  ["S", "S勤務", "14:00", "21:30", -30, 0, true],
  ["T", "T勤務", "14:30", "22:00", -30, 0, true],
  ["O", "O勤務", "07:00", "19:00", 240, 0, true],
  ["L", "L勤務", "07:00", "14:00", -60, 0, true],
  ["E", "E勤務", "07:00", "14:00", -60, 0, true],
  ["G", "G勤務", "08:30", "14:00", -150, 0, true],
  ["J", "J勤務", "14:00", "19:30", -150, 0, true],
  ["M", "M勤務", "14:00", "19:30", -150, 0, true],
  ["K", "K勤務", "14:00", "20:30", -90, 0, true],
  ["LJ", "LJ勤務", "07:00", "19:30", 270, 0, true],
  ["LM", "LM勤務", "07:00", "19:30", 270, 0, true],
  ["LK", "LK勤務", "07:00", "20:30", 330, 0, true],
  ["LR", "LR勤務", "07:00", "21:30", 390, 0, true],
  ["LS", "LS勤務", "07:00", "21:30", 390, 0, true],
  ["LT", "LT勤務", "07:00", "22:00", 420, 0, true],
  ["EJ", "EJ勤務", "07:00", "19:30", 270, 0, true],
  ["EM", "EM勤務", "07:00", "19:30", 270, 0, true],
  ["EK", "EK勤務", "07:00", "20:30", 330, 0, true],
  ["ER", "ER勤務", "07:00", "21:30", 390, 0, true],
  ["ES", "ES勤務", "07:00", "21:30", 390, 0, true],
  ["ET", "ET勤務", "07:00", "22:00", 420, 0, true],
  ["GJ", "GJ勤務", "08:30", "19:30", 180, 0, true],
  ["GM", "GM勤務", "08:30", "19:30", 180, 0, true],
  ["GK", "GK勤務", "08:30", "20:30", 240, 0, true],
  ["GR", "GR勤務", "08:30", "21:30", 300, 0, true],
  ["GS", "GS勤務", "08:30", "21:30", 300, 0, true],
  ["GT", "GT勤務", "08:30", "22:00", 330, 0, true],
  ["Z", "Z勤務", "06:00", "15:00", 60, 0, true],
  ["ZJ", "ZJ勤務", "06:00", "19:30", 330, 0, true],
  ["ZM", "ZM勤務", "06:00", "19:30", 330, 0, true],
  ["ZK", "ZK勤務", "06:00", "20:30", 390, 0, true],
  ["ZR", "ZR勤務", "06:00", "21:30", 450, 0, true],
  ["ZS", "ZS勤務", "06:00", "21:30", 450, 0, true],
  ["U", "U勤務", "05:00", "14:15", 75, 0, true],
  ["D", "D勤務", "05:15", "13:15", 0, 0, true],
  ["DJ", "DJ勤務", "05:15", "19:30", 315, 0, true],
  ["DM", "DM勤務", "05:15", "19:30", 315, 0, true],
  ["F", "F勤務", "05:30", "16:45", 135, 0, true],
  ["P", "P勤務", "06:30", "21:15", 345, 0, true],
  ["Q", "Q勤務", "07:00", "21:30", 330, 0, true],
  ["N", "N勤務", "13:30", "24:00", 90, 120, true],
  ["W", "W勤務", "13:15", "24:15", 120, 135, true],
  ["Y", "Y勤務", "16:00", "24:30", 30, 150, true],
  ["X", "有休", "", "", 0, 0, false],
  ["-", "公休", "", "", 0, 0, false],
].map(([code, label, start, end, overtime, night, isWork]) => ({
  code,
  label,
  start_time: start,
  end_time: end,
  overtime_minutes: overtime,
  night_overtime_minutes: night,
  is_work: isWork,
  effective_from: "2026-01-01",
  effective_to: null,
  version: "2026-06-current",
}));

const DEFAULT_TEMPLATE = {
  template_id: "monthly_grid_sun_start_v1",
  label: "月間シフト表 日曜始まり",
  shift_period_rule: "毎月19日から翌月18日",
  columns: ["日", "月", "火", "水", "木", "金", "土"],
};

const SAMPLE_SHIFT = `date,code
2026-06-19,BJ
2026-06-20,T
2026-06-21,-
2026-06-22,A
2026-06-23,BJ
2026-06-24,R
2026-06-25,-
2026-06-26,AV
2026-06-27,LR
2026-06-28,T
2026-06-29,-
2026-06-30,AM
2026-07-01,CJ
2026-07-02,-
2026-07-03,-
2026-07-04,A
2026-07-05,AM
2026-07-06,GT
2026-07-07,-
2026-07-08,AJ
2026-07-09,LM
2026-07-10,S
2026-07-11,-
2026-07-12,A
2026-07-13,B
2026-07-14,GT
2026-07-15,-
2026-07-16,A
2026-07-17,BJ
2026-07-18,GR`;

const OCR_LANGUAGE = "jpn+eng";
const OCR_MIN_ROWS_TO_PROCEED = 20;
const CHATGPT_URL = "https://chatgpt.com/";
const VALID_SHIFT_CODES = DEFAULT_MASTER.map((item) => item.code).join(" / ");
const CHATGPT_PROMPT = `このシフト表写真を読み取ってください。

出力は次の形式だけにしてください。説明文は不要です。
下のYYYY-MM-DDは日付の書き方の説明です。実際の日付は必ず写真から読み取ってください。

# name: 写真に書かれている氏名
# period: 写真から読み取った開始日 to 写真から読み取った終了日
date,code
YYYY-MM-DD,勤務記号
YYYY-MM-DD,勤務記号

ルール:
- シフト期間は毎月19日から翌月18日です。
- 日付は必ずYYYY-MM-DD形式にしてください。
- 例のYYYY-MM-DDをそのまま使わず、写真に書かれている年月に合わせてください。
- 勤務記号は写真の文字をそのまま半角英大文字で出してください。
- 勤務記号は次の一覧にあるものだけ使ってください: ${VALID_SHIFT_CODES}
- 有休、×、✕、✗、Xに見える日は「X」で出してください。
- 公休、休み、空欄、ー、−、-に見える日は「-」で出してください。
- OT、TO、ZTなど、一覧にない記号に見える日は推測せず「確認」で出してください。
- 読めない日は推測せず、codeを「確認」にしてください。`;

const els = {
  headerLead: document.querySelector("#headerLead"),
  statusBadge: document.querySelector("#statusBadge"),
  openChatGptBtn: document.querySelector("#openChatGptBtn"),
  copyChatGptPromptBtn: document.querySelector("#copyChatGptPromptBtn"),
  promptFallback: document.querySelector("#promptFallback"),
  chatGptPromptFallback: document.querySelector("#chatGptPromptFallback"),
  chatGptResultInput: document.querySelector("#chatGptResultInput"),
  manualOcrState: document.querySelector("#manualOcrState"),
  photoInput: document.querySelector("#photoInput"),
  photoPreview: document.querySelector("#photoPreview"),
  photoTools: document.querySelector("#photoTools"),
  photoStateText: document.querySelector("#photoStateText"),
  rotateLeftBtn: document.querySelector("#rotateLeftBtn"),
  rotateRightBtn: document.querySelector("#rotateRightBtn"),
  retryOcrBtn: document.querySelector("#retryOcrBtn"),
  detectedName: document.querySelector("#detectedName"),
  detectedPeriod: document.querySelector("#detectedPeriod"),
  shiftInput: document.querySelector("#shiftInput"),
  uploadIssues: document.querySelector("#uploadIssues"),
  demoBtn: document.querySelector("#demoBtn"),
  startReviewBtn: document.querySelector("#startReviewBtn"),
  loadSampleBtn: document.querySelector("#loadSampleBtn"),
  samplePhotoButtons: document.querySelector("#samplePhotoButtons"),
  backToUploadBtn: document.querySelector("#backToUploadBtn"),
  backToReviewBtn: document.querySelector("#backToReviewBtn"),
  reviewPeriod: document.querySelector("#reviewPeriod"),
  totalOvertime: document.querySelector("#totalOvertime"),
  totalNight: document.querySelector("#totalNight"),
  workCount: document.querySelector("#workCount"),
  offCount: document.querySelector("#offCount"),
  issues: document.querySelector("#issues"),
  toggleDaysBtn: document.querySelector("#toggleDaysBtn"),
  dayList: document.querySelector("#dayList"),
  confirmReviewBtn: document.querySelector("#confirmReviewBtn"),
  finishPeriod: document.querySelector("#finishPeriod"),
  finishOvertime: document.querySelector("#finishOvertime"),
  finishNight: document.querySelector("#finishNight"),
  finishBtn: document.querySelector("#finishBtn"),
  calendarPrepBtn: document.querySelector("#calendarPrepBtn"),
  calendarPanel: document.querySelector("#calendarPanel"),
  calendarPreview: document.querySelector("#calendarPreview"),
  saveCalendarBtn: document.querySelector("#saveCalendarBtn"),
  completeMessage: document.querySelector("#completeMessage"),
  completeSteps: document.querySelector("#completeSteps"),
  completeTools: document.querySelector("#completeTools"),
  sampleCalendarNotice: document.querySelector("#sampleCalendarNotice"),
  downloadCalendarBtn: document.querySelector("#downloadCalendarBtn"),
  homeBtn: document.querySelector("#homeBtn"),
  editSheet: document.querySelector("#editSheet"),
  editTitle: document.querySelector("#editTitle"),
  editDateLabel: document.querySelector("#editDateLabel"),
  editCode: document.querySelector("#editCode"),
  editCodeHint: document.querySelector("#editCodeHint"),
  editStart: document.querySelector("#editStart"),
  editEnd: document.querySelector("#editEnd"),
  cancelEditBtn: document.querySelector("#cancelEditBtn"),
  saveEditBtn: document.querySelector("#saveEditBtn"),
  masterInput: document.querySelector("#masterInput"),
  templateInput: document.querySelector("#templateInput"),
  ocrRawOutput: document.querySelector("#ocrRawOutput"),
  formatMasterBtn: document.querySelector("#formatMasterBtn"),
  resetMasterBtn: document.querySelector("#resetMasterBtn"),
};

const state = {
  rows: [],
  result: null,
  screen: "upload",
  sampleMode: false,
  photoSelected: false,
  selectedFile: null,
  demoPreview: false,
  imageObjectUrl: "",
  imageRotation: 0,
  ocrRunId: 0,
  ocrStatus: "idle",
  rawOcrText: "",
  ocrConfidence: null,
  ocrError: "",
  manualImportMessage: "",
  manualImportType: "warn",
  detectedEmployeeName: "",
  reviewConfirmed: false,
  selectedEditDate: null,
  lastEditTrigger: null,
  completionWithCalendar: false,
};

function init() {
  if (new URLSearchParams(window.location.search).has("dev")) {
    document.body.classList.add("dev-mode");
    document.querySelectorAll(".admin-panel").forEach((node) => {
      node.hidden = false;
    });
  }
  els.masterInput.value = JSON.stringify(DEFAULT_MASTER, null, 2);
  els.templateInput.value = JSON.stringify(DEFAULT_TEMPLATE, null, 2);
  if (els.chatGptPromptFallback) els.chatGptPromptFallback.value = CHATGPT_PROMPT;
  bindEvents();
  renderAll();
  runChairmanCommandFromUrl();
}

function runChairmanCommandFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const command = params.get("kaicho") || params.get("chairman");
  if (command) runChairmanCommand(command);
}

function runChairmanCommand(command = "complete") {
  const normalized = String(command).trim().toLowerCase();
  if (normalized === "complete" || normalized === "done") {
    showChairmanCompletePreview(false);
    return true;
  }
  if (normalized === "calendar" || normalized === "ics" || normalized === "calendar-complete") {
    showChairmanCompletePreview(true);
    return true;
  }
  if (normalized === "next") {
    prepareChairmanPreviewData();
    goTo("next");
    return true;
  }
  if (normalized === "review") {
    prepareChairmanPreviewData();
    goTo("review");
    return true;
  }
  return false;
}

function prepareChairmanPreviewData() {
  loadDemoData("chairman");
  state.sampleMode = false;
  state.reviewConfirmed = true;
}

function showChairmanCompletePreview(withCalendar) {
  prepareChairmanPreviewData();
  complete(withCalendar);
}

function bindEvents() {
  els.openChatGptBtn?.addEventListener("click", openChatGpt);
  els.copyChatGptPromptBtn?.addEventListener("click", copyChatGptPrompt);
  els.chatGptResultInput?.addEventListener("input", handleManualPasteInput);
  els.photoInput?.addEventListener("change", handlePhoto);
  els.rotateLeftBtn?.addEventListener("click", () => rotatePhoto(-90));
  els.rotateRightBtn?.addEventListener("click", () => rotatePhoto(90));
  els.retryOcrBtn?.addEventListener("click", retryCurrentPhotoOcr);
  els.shiftInput.addEventListener("input", () => {
    state.sampleMode = false;
    state.reviewConfirmed = false;
    recalc();
  });
  els.loadSampleBtn.addEventListener("click", () => {
    loadDemoData("admin");
  });
  els.samplePhotoButtons?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-sample-url]");
    if (!button) return;
    loadFixturePhoto(button.dataset.sampleUrl, button.dataset.sampleLabel);
  });
  els.demoBtn?.addEventListener("click", startDemoOcrFlow);
  els.startReviewBtn.addEventListener("click", importChatGptResultAndReview);
  els.backToUploadBtn.addEventListener("click", () => goTo("upload"));
  els.backToReviewBtn.addEventListener("click", () => goTo("review"));
  els.toggleDaysBtn.addEventListener("click", () => {
    els.dayList.hidden = !els.dayList.hidden;
    els.toggleDaysBtn.textContent = els.dayList.hidden ? "気になる日だけ確認する" : "日付を閉じる";
  });
  els.confirmReviewBtn.addEventListener("click", () => {
    state.reviewConfirmed = true;
    goTo("next");
  });
  els.finishBtn.addEventListener("click", () => complete(false));
  els.calendarPrepBtn.addEventListener("click", () => {
    els.calendarPanel.hidden = false;
    renderCalendarState();
    els.saveCalendarBtn.focus();
  });
  els.saveCalendarBtn.addEventListener("click", saveCalendarFileAndComplete);
  els.downloadCalendarBtn.addEventListener("click", () => {
    if (state.result?.ok) download("shift_calendar.ics", buildIcs(state.result), "text/calendar");
  });
  els.homeBtn.addEventListener("click", resetForNewShift);
  els.cancelEditBtn.addEventListener("click", closeEditSheet);
  els.saveEditBtn.addEventListener("click", saveEditedDay);
  els.editCode.addEventListener("change", updateEditTimes);
  document.addEventListener("keydown", handleGlobalKeydown);
  els.formatMasterBtn.addEventListener("click", formatAdminJson);
  els.resetMasterBtn.addEventListener("click", () => {
    els.masterInput.value = JSON.stringify(DEFAULT_MASTER, null, 2);
    els.templateInput.value = JSON.stringify(DEFAULT_TEMPLATE, null, 2);
    recalc();
  });
  els.masterInput.addEventListener("input", recalc);
}

function openChatGpt() {
  window.open(CHATGPT_URL, "_blank", "noopener,noreferrer");
}

async function copyChatGptPrompt() {
  const copied = await copyTextToClipboard(CHATGPT_PROMPT);
  if (copied) {
    state.manualImportType = "ok";
    state.manualImportMessage = "コピーできました。ChatGPTで貼り付けて送信してください。";
  } else {
    state.manualImportType = "warn";
    state.manualImportMessage = "自動コピーできませんでした。下の文章を長押ししてコピーしてください。";
    if (els.promptFallback) els.promptFallback.open = true;
  }
  renderAll();
  if (!copied) selectPromptFallbackText();
}

async function copyTextToClipboard(text) {
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      // Fall through to the file:// friendly copy path.
    }
  }
  return legacyCopyText(text);
}

function legacyCopyText(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "0";
  textarea.style.left = "0";
  textarea.style.width = "1px";
  textarea.style.height = "1px";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);
  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch (error) {
    copied = false;
  }
  textarea.remove();
  return copied;
}

function selectPromptFallbackText() {
  if (!els.chatGptPromptFallback) return;
  els.chatGptPromptFallback.focus();
  els.chatGptPromptFallback.select();
  els.chatGptPromptFallback.setSelectionRange(0, els.chatGptPromptFallback.value.length);
}

function handleManualPasteInput() {
  state.sampleMode = false;
  state.reviewConfirmed = false;
  state.manualImportMessage = "";
  state.ocrStatus = els.chatGptResultInput.value.trim() ? "manualEditing" : "idle";
  renderAll();
}

function importChatGptResultAndReview() {
  const pastedText = els.chatGptResultInput?.value.trim() ?? "";
  if (!pastedText && state.result?.ok) {
    goTo("review");
    return;
  }
  if (!pastedText) {
    state.manualImportType = "warn";
    state.manualImportMessage = "ChatGPTから返ってきた文章を貼り付けてください。";
    renderAll();
    return;
  }

  const parsed = parseChatGptResult(pastedText);
  if (!parsed.rows.length) {
    state.result = null;
    state.rows = [];
    state.ocrStatus = "manualFailed";
    state.manualImportType = "error";
    state.manualImportMessage = "日付と勤務記号を読み取れませんでした。ChatGPTの返答を全部貼ってください。";
    renderAll();
    return;
  }

  state.detectedEmployeeName = parsed.name;
  state.sampleMode = false;
  state.photoSelected = true;
  state.reviewConfirmed = false;
  state.ocrStatus = "manualReady";
  state.manualImportType = "ok";
  state.manualImportMessage = `${parsed.rows.length}日分を取り込みました。次の画面で内容を確認してください。`;
  els.shiftInput.value = buildShiftCsv(parsed);
  recalc();

  if (state.result?.ok) {
    goTo("review");
  } else {
    state.manualImportType = "warn";
    state.manualImportMessage = "確認が必要な日があります。次の画面で気になる日を選んで直してください。";
    goTo("review");
  }
}

function parseChatGptResult(text) {
  const normalized = stripCodeFence(String(text ?? ""));
  const jsonParsed = parseChatGptJson(normalized);
  if (jsonParsed.rows.length) return jsonParsed;

  const context = detectManualContext(normalized);
  const rows = [];
  normalized.split(/\r?\n/).forEach((line) => {
    const parsed = parseManualShiftLine(line, context);
    if (parsed) rows.push(parsed);
  });
  return {
    name: context.name,
    periodText: context.periodText,
    rows: dedupeRows(rows),
  };
}

function stripCodeFence(text) {
  return text.replace(/```(?:csv|json)?/gi, "").replace(/```/g, "").trim();
}

function parseChatGptJson(text) {
  try {
    const value = JSON.parse(text);
    const sourceRows = Array.isArray(value) ? value : value.rows ?? value.shifts ?? value.data ?? [];
    const rows = Array.isArray(sourceRows)
      ? sourceRows
          .map((row) => ({
            date: normalizeManualDate(row.date ?? row.day ?? row.work_date),
            code: normalizeManualCode(row.code ?? row.shift ?? row.shift_code),
          }))
          .filter((row) => row.date && row.code)
      : [];
    return {
      name: String(value.name ?? value.employeeName ?? value.employee_name ?? "").trim(),
      periodText: String(value.period ?? "").trim(),
      rows: dedupeRows(rows),
    };
  } catch (error) {
    return { name: "", periodText: "", rows: [] };
  }
}

function detectManualContext(text) {
  const nameMatch = text.match(/^\s*#?\s*(?:name|名前|氏名|対象者)\s*[:：]\s*(.+?)\s*$/im);
  const periodMatch =
    text.match(/^\s*#?\s*(?:period|期間|シフト期間)\s*[:：]\s*(.+?)\s*$/im) ??
    text.match(/(20\d{2})[\/\-年](\d{1,2})[\/\-月](19)日?\s*(?:to|〜|~|から|-)\s*(?:(20\d{2})[\/\-年])?(\d{1,2})[\/\-月](18)日?/i);
  const startMatch = periodMatch?.[0]?.match(/20\d{2}[\/\-年]\d{1,2}[\/\-月]19/);
  const startDate = startMatch ? normalizeManualDate(startMatch[0]) : "";
  return {
    name: nameMatch?.[1]?.trim() ?? "",
    periodText: periodMatch?.[1]?.trim() ?? periodMatch?.[0]?.trim() ?? "",
    periodStart: startDate,
  };
}

function parseManualShiftLine(line, context) {
  const trimmed = String(line ?? "").trim();
  if (!trimmed || trimmed.startsWith("#") || /^date\s*,?\s*code$/i.test(trimmed)) return null;
  const codePattern = manualCodePattern();
  const match =
    trimmed.match(new RegExp(`(20\\d{2}[\\/\\-]\\d{1,2}[\\/\\-]\\d{1,2})\\s*[,，\\t ]+\\s*${codePattern}`)) ??
    trimmed.match(new RegExp(`(\\d{1,2}[\\/\\-]\\d{1,2})\\s*[,，\\t ]+\\s*${codePattern}`));
  if (!match) return null;
  const date = normalizeManualDate(match[1], context.periodStart);
  const code = normalizeManualCode(match[2]);
  return date && code ? { date, code } : null;
}

function manualCodePattern() {
  return "([A-Za-z]{1,5}|[-ー−‐‑‒–—]|[×✕✗]|有休?|休み?|公休|確認)";
}

function normalizeManualDate(value, periodStart = "") {
  const text = String(value ?? "").trim().replace(/[年月]/g, "/").replace(/日/g, "");
  const full = text.match(/^(20\d{2})[\/\-](\d{1,2})[\/\-](\d{1,2})$/);
  if (full) return datePartsToISO(Number(full[1]), Number(full[2]), Number(full[3]));
  const short = text.match(/^(\d{1,2})[\/\-](\d{1,2})$/);
  if (!short || !periodStart) return "";
  const [startYear, startMonth] = periodStart.split("-").map(Number);
  const month = Number(short[1]);
  const day = Number(short[2]);
  const year = month < startMonth ? startYear + 1 : startYear;
  return datePartsToISO(year, month, day);
}

function normalizeManualCode(value) {
  const code = normalizeOcrCode(value);
  return code === "" && String(value).trim() === "確認" ? "確認" : code;
}

function datePartsToISO(year, month, day) {
  const date = new Date(year, month - 1, day);
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) return "";
  return dateToISO(date);
}

function dedupeRows(rows) {
  const seen = new Set();
  return rows
    .filter((row) => {
      if (seen.has(row.date)) return false;
      seen.add(row.date);
      return true;
    })
    .sort((a, b) => a.date.localeCompare(b.date));
}

function buildShiftCsv(parsed) {
  const comments = [];
  if (parsed.name) comments.push(`# name: ${parsed.name}`);
  if (parsed.periodText) comments.push(`# period: ${parsed.periodText}`);
  return [...comments, "date,code", ...parsed.rows.map((row) => `${row.date},${row.code}`)].join("\n");
}

function handlePhoto(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  handlePhotoFile(file);
}

function handlePhotoFile(file) {
  if (state.imageObjectUrl) URL.revokeObjectURL(state.imageObjectUrl);
  state.photoSelected = true;
  state.sampleMode = false;
  state.selectedFile = file;
  state.demoPreview = false;
  state.imageObjectUrl = URL.createObjectURL(file);
  state.imageRotation = 0;
  state.ocrStatus = "reading";
  state.rawOcrText = "";
  state.ocrConfidence = null;
  state.ocrError = "";
  state.detectedEmployeeName = "";
  state.reviewConfirmed = false;
  els.shiftInput.value = "";
  state.rows = [];
  state.result = null;
  renderPhotoPreview();
  els.photoStateText.textContent = "写真を受け取りました。試作読み取りをしています。";
  setStatus("pending", "読み取り中");
  renderAll();
  runFreeOcr(file);
}

async function loadFixturePhoto(url, label) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`検証用写真を読み込めませんでした: ${label}`);
    const blob = await response.blob();
    const file = new File([blob], `${label}.jpeg`, { type: blob.type || "image/jpeg" });
    handlePhotoFile(file);
  } catch (error) {
    state.ocrStatus = "ocrFailed";
    state.ocrError = error.message || "検証用写真を読み込めませんでした。";
    renderAll();
  }
}

function renderPhotoPreview() {
  els.photoPreview.innerHTML = "";
  if (state.demoPreview) {
    renderDemoPhotoPreview();
    els.photoTools.hidden = true;
    return;
  }
  if (!state.imageObjectUrl) {
    els.photoPreview.innerHTML = "<span>まだ写真がありません</span>";
    els.photoTools.hidden = true;
    return;
  }
  const image = document.createElement("img");
  image.src = state.imageObjectUrl;
  image.alt = "選んだシフト写真";
  image.style.transform = `rotate(${state.imageRotation}deg)`;
  image.classList.toggle("rotated", Math.abs(state.imageRotation % 180) === 90);
  els.photoPreview.appendChild(image);
  els.photoTools.hidden = false;
}

function renderDemoPhotoPreview() {
  els.photoPreview.innerHTML = `
    <div class="demo-shift-card" aria-label="デモ用シフト表">
      <header><span>サンプル利用者</span><span>2026 6/19〜</span></header>
      <div class="demo-shift-grid">
        <span class="head">日</span><span class="head">月</span><span class="head">火</span><span class="head">水</span><span class="head">木</span><span class="head">金</span><span class="head">土</span>
        <span>21<strong>-</strong></span><span>22<strong>A</strong></span><span>23<strong>BJ</strong></span><span>24<strong>R</strong></span><span>25<strong>-</strong></span><span>26<strong>AV</strong></span><span>27<strong>LR</strong></span>
        <span>28<strong>T</strong></span><span>29<strong>-</strong></span><span>30<strong>AM</strong></span><span>1<strong>CJ</strong></span><span>2<strong>-</strong></span><span>3<strong>-</strong></span><span>4<strong>A</strong></span>
        <span>5<strong>AM</strong></span><span>6<strong>GT</strong></span><span class="off">7<strong>-</strong></span><span>8<strong>AJ</strong></span><span>9<strong>LM</strong></span><span>10<strong>S</strong></span><span class="off">11<strong>-</strong></span>
      </div>
    </div>
  `;
}

function rotatePhoto(delta) {
  if (!state.selectedFile) return;
  state.imageRotation = (state.imageRotation + delta + 360) % 360;
  renderPhotoPreview();
  retryCurrentPhotoOcr();
}

function retryCurrentPhotoOcr() {
  if (!state.selectedFile) return;
  state.ocrStatus = "reading";
  state.rawOcrText = "";
  state.ocrConfidence = null;
  state.ocrError = "";
  state.detectedEmployeeName = "";
  state.reviewConfirmed = false;
  els.shiftInput.value = "";
  state.rows = [];
  state.result = null;
  els.photoStateText.textContent = "写真をもう一度読み取っています。";
  setStatus("pending", "読み取り中");
  renderAll();
  runFreeOcr(state.selectedFile);
}

function loadDemoData(source) {
  els.shiftInput.value = SAMPLE_SHIFT;
  state.sampleMode = true;
  state.photoSelected = true;
  state.demoPreview = source === "button";
  state.ocrStatus = source === "photo" ? "ocrReady" : "demoButton";
  state.rawOcrText = source === "photo" ? state.rawOcrText : "";
  state.ocrConfidence = source === "photo" ? state.ocrConfidence : null;
  state.ocrError = "";
  state.reviewConfirmed = false;
  recalc();
}

function startDemoOcrFlow() {
  if (state.imageObjectUrl) {
    URL.revokeObjectURL(state.imageObjectUrl);
    state.imageObjectUrl = "";
  }
  state.sampleMode = true;
  state.photoSelected = true;
  state.selectedFile = null;
  state.demoPreview = true;
  state.imageRotation = 0;
  state.ocrStatus = "reading";
  state.rawOcrText = "";
  state.ocrConfidence = null;
  state.ocrError = "";
  state.detectedEmployeeName = "";
  state.reviewConfirmed = false;
  state.rows = [];
  state.result = null;
  els.shiftInput.value = "";
  renderPhotoPreview();
  els.photoStateText.textContent = "デモ用のシフト写真を読み取っています。";
  setStatus("pending", "読み取り中");
  renderAll();
  window.setTimeout(() => {
    loadDemoData("button");
    renderPhotoPreview();
    els.photoStateText.textContent = "デモ用の読み取りが終わりました。内容を確認してください。";
  }, 800);
}

async function runFreeOcr(file) {
  const runId = ++state.ocrRunId;
  try {
    if (!window.Tesseract?.recognize) {
      throw new Error("無料OCRを読み込めませんでした。通信状態を確認してください。");
    }
    const image = await prepareImageForOcr(file);
    const result = await window.Tesseract.recognize(image, OCR_LANGUAGE, {
      logger: (progress) => updateOcrProgress(progress, runId),
    });
    if (runId !== state.ocrRunId) return;
    const data = result.data ?? {};
    state.rawOcrText = data.text ?? "";
    state.ocrConfidence = Number.isFinite(data.confidence) ? Math.round(data.confidence) : null;
    state.detectedEmployeeName = detectEmployeeNameFromOcrText(state.rawOcrText);
    if (els.ocrRawOutput) els.ocrRawOutput.value = state.rawOcrText;

    const rows = extractShiftRowsFromOcr(data);
    els.shiftInput.value = ["date,code", ...rows.map((row) => `${row.date},${row.code}`)].join("\n");
    state.sampleMode = false;
    state.reviewConfirmed = false;
    state.ocrStatus = rows.length >= OCR_MIN_ROWS_TO_PROCEED ? "ocrReady" : "ocrNeedsReview";
    els.photoStateText.textContent = rows.length
      ? "無料OCRの読み取りが終わりました。内容を確認してください。"
      : "無料OCRでは勤務表を十分に読めませんでした。";
    recalc();
  } catch (error) {
    if (runId !== state.ocrRunId) return;
    state.ocrStatus = "ocrFailed";
    state.ocrError = error.message || "無料OCRで読み取れませんでした。";
    state.result = null;
    state.rows = [];
    els.shiftInput.value = "";
    els.photoStateText.textContent = "無料OCRで読み取れませんでした。";
    renderAll();
  }
}

function updateOcrProgress(progress, runId) {
  if (runId !== state.ocrRunId || !progress?.status) return;
  const percent = Number.isFinite(progress.progress) ? ` ${Math.round(progress.progress * 100)}%` : "";
  const label = progress.status.includes("recognizing")
    ? "文字を読んでいます"
    : progress.status.includes("loading")
      ? "無料OCRを準備しています"
      : "読み取り中";
  els.photoStateText.textContent = `${label}${percent}`;
  setStatus("pending", "読み取り中");
}

async function prepareImageForOcr(file) {
  const bitmap = await createImageBitmap(file);
  const maxWidth = 1800;
  const scale = Math.min(1, maxWidth / bitmap.width);
  const sourceWidth = Math.round(bitmap.width * scale);
  const sourceHeight = Math.round(bitmap.height * scale);
  const rotation = ((state.imageRotation % 360) + 360) % 360;
  const turnsSideways = rotation === 90 || rotation === 270;
  const width = turnsSideways ? sourceHeight : sourceWidth;
  const height = turnsSideways ? sourceWidth : sourceHeight;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.save();
  if (rotation === 90) {
    ctx.translate(width, 0);
    ctx.rotate(Math.PI / 2);
  } else if (rotation === 180) {
    ctx.translate(width, height);
    ctx.rotate(Math.PI);
  } else if (rotation === 270) {
    ctx.translate(0, height);
    ctx.rotate((Math.PI * 3) / 2);
  }
  ctx.drawImage(bitmap, 0, 0, sourceWidth, sourceHeight);
  ctx.restore();

  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  for (let index = 0; index < data.length; index += 4) {
    const gray = data[index] * 0.299 + data[index + 1] * 0.587 + data[index + 2] * 0.114;
    const contrasted = Math.max(0, Math.min(255, (gray - 128) * 1.35 + 138));
    data[index] = contrasted;
    data[index + 1] = contrasted;
    data[index + 2] = contrasted;
  }
  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL("image/png");
}

function extractShiftRowsFromOcr(data) {
  const text = data.text ?? "";
  const period = detectPeriodFromOcrText(text);
  if (!period) return [];

  const masterCodes = new Set(parseMaster().map((item) => item.code));
  const words = normalizeOcrWords(data);
  const dateWords = words.filter((word) => /^\d{1,2}$/.test(word.text) && Number(word.text) >= 1 && Number(word.text) <= 31);
  const codeWords = words.filter((word) => masterCodes.has(normalizeOcrCode(word.text)));
  const assignments = new Map();

  codeWords.forEach((codeWord) => {
    const code = normalizeOcrCode(codeWord.text);
    const candidates = dateWords
      .map((dateWord) => {
        const dy = codeWord.cy - dateWord.cy;
        const dx = Math.abs(codeWord.cx - dateWord.cx);
        return { dateWord, dy, dx, score: dy + dx * 1.6 };
      })
      .filter((candidate) => candidate.dy > 8 && candidate.dy < 105 && candidate.dx < 85)
      .sort((a, b) => a.score - b.score);
    const best = candidates[0];
    if (!best) return;
    const date = dateFromPeriodDay(period, Number(best.dateWord.text));
    if (!date || assignments.has(date)) return;
    assignments.set(date, code);
  });

  const wordRows = [...assignments.entries()]
    .map(([date, code]) => ({ date, code }))
    .filter((row) => row.date >= period.start && row.date <= period.end)
    .sort((a, b) => a.date.localeCompare(b.date));

  if (wordRows.length >= 6) return wordRows;
  return extractRowsFromOcrLines(text, period, masterCodes);
}

function normalizeOcrWords(data) {
  const rawWords = Array.isArray(data.words) ? data.words : [];
  return rawWords
    .map((word) => {
      const text = String(word.text ?? "").trim();
      const bbox = word.bbox ?? {};
      const x0 = Number(bbox.x0 ?? word.x0 ?? 0);
      const y0 = Number(bbox.y0 ?? word.y0 ?? 0);
      const x1 = Number(bbox.x1 ?? word.x1 ?? x0);
      const y1 = Number(bbox.y1 ?? word.y1 ?? y0);
      return {
        text,
        cx: (x0 + x1) / 2,
        cy: (y0 + y1) / 2,
      };
    })
    .filter((word) => word.text);
}

function extractRowsFromOcrLines(text, period, masterCodes) {
  const rows = [];
  const seen = new Set();
  const pattern = /(?:^|\D)(\d{1,2})\D{0,8}([A-Z]{1,4}|[-ー−])/gi;
  let match = pattern.exec(text);
  while (match) {
    const day = Number(match[1]);
    const code = normalizeOcrCode(match[2]);
    const date = dateFromPeriodDay(period, day);
    if (date && masterCodes.has(code) && !seen.has(date)) {
      rows.push({ date, code });
      seen.add(date);
    }
    match = pattern.exec(text);
  }
  return rows.sort((a, b) => a.date.localeCompare(b.date));
}

function detectPeriodFromOcrText(text) {
  const normalized = String(text ?? "").replace(/\s+/g, " ");
  const year = normalized.match(/20\d{2}/)?.[0] ?? String(new Date().getFullYear());
  const monthMatch = normalized.match(/(?:^|\D)(1[0-2]|0?[1-9])\s*[\/／]\s*19\s*[~〜～]/);
  if (!monthMatch) return null;
  const start = new Date(Number(year), Number(monthMatch[1]) - 1, 19);
  const end = new Date(start.getFullYear(), start.getMonth() + 1, 18);
  return {
    start: dateToISO(start),
    end: dateToISO(end),
    startYear: start.getFullYear(),
    startMonth: start.getMonth() + 1,
    nextYear: end.getFullYear(),
    nextMonth: end.getMonth() + 1,
  };
}

function detectEmployeeNameFromOcrText(text) {
  const lines = String(text ?? "")
    .split(/\r?\n/)
    .map((line) => line.replace(/[^\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}ー\s]/gu, "").trim())
    .filter(Boolean)
    .filter((line) => !/^[日月火水木金土]+$/.test(line))
    .filter((line) => !/(勤務|シフト|受信|事故|確認|会社)/.test(line));
  const candidate = lines
    .map((line) => line.replace(/\s+/g, " "))
    .find((line) => line.replace(/\s/g, "").length >= 2 && line.replace(/\s/g, "").length <= 12);
  return candidate ?? "";
}

function dateFromPeriodDay(period, day) {
  if (!period || day < 1 || day > 31) return null;
  const year = day >= 19 ? period.startYear : period.nextYear;
  const month = day >= 19 ? period.startMonth : period.nextMonth;
  const date = new Date(year, month - 1, day);
  if (date.getMonth() !== month - 1) return null;
  const iso = dateToISO(date);
  return iso >= period.start && iso <= period.end ? iso : null;
}

function normalizeOcrCode(value) {
  const raw = String(value ?? "").trim();
  if (/^(x|×|✕|✗|有|有休)$/i.test(raw)) return "X";
  if (/^(休|休み|公休|‐|‑|‒|–|—|ー|−|-)$/i.test(raw)) return "-";
  return raw
    .trim()
    .toUpperCase()
    .replace(/[‐‑‒–—ー−]/g, "-")
    .replace(/[^A-Z-]/g, "");
}

function recalc() {
  try {
    state.rows = parseShiftText(els.shiftInput.value);
    state.result = calculate(state.rows, parseMaster());
  } catch (error) {
    state.result = {
      rows: [],
      validRows: [],
      workRows: [],
      offRows: [],
      issues: [{ type: "error", text: error.message }],
      totalOvertime: 0,
      totalNight: 0,
      period: null,
      ok: false,
    };
  }
  renderAll();
}

function parseMaster() {
  const value = JSON.parse(els.masterInput.value);
  if (!Array.isArray(value)) throw new Error("勤務コード設定を確認してください");
  return value.map((item) => ({
    code: String(item.code ?? "").trim().toUpperCase(),
    label: String(item.label ?? item.code ?? ""),
    start_time: String(item.start_time ?? ""),
    end_time: String(item.end_time ?? ""),
    overtime_minutes: Number(item.overtime_minutes ?? 0),
    night_overtime_minutes: Number(item.night_overtime_minutes ?? 0),
    is_work: Boolean(item.is_work),
    effective_from: String(item.effective_from ?? "1900-01-01"),
    effective_to: item.effective_to ? String(item.effective_to) : null,
    version: String(item.version ?? "unversioned"),
  }));
}

function parseShiftText(text) {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .map((line, index) => parseShiftLine(line, index + 1))
    .filter(Boolean);
}

function parseShiftLine(line, sourceLine) {
  const parts = line.includes(",") ? line.split(",") : line.split(/\s+/);
  const [dateRaw, codeRaw] = parts.map((part) => part?.trim());
  if (sourceLine === 1 && /^date$/i.test(dateRaw ?? "")) return null;
  return {
    sourceLine,
    date: dateRaw ?? "",
    code: String(codeRaw ?? "").trim().toUpperCase(),
    original: line,
  };
}

function calculate(rows, master) {
  const issues = [];
  const period = resolveShiftPeriod(rows);
  const dateCounts = countBy(rows.filter((row) => isISODate(row.date)).map((row) => row.date));
  const resolved = rows.map((row) => {
    const dateOk = isISODate(row.date);
    const matches = dateOk ? findEffectiveMaster(master, row.code, row.date) : [];
    const issueCodes = [];
    if (!dateOk) issueCodes.push("date");
    if (dateOk && matches.length === 0) issueCodes.push("unknown");
    if (dateOk && matches.length > 1) issueCodes.push("duplicateCode");
    if (dateOk && dateCounts.get(row.date) > 1) issueCodes.push("duplicateDate");
    if (period && dateOk && (row.date < period.start || row.date > period.end)) issueCodes.push("outOfPeriod");
    return { ...row, entry: matches.length === 1 ? matches[0] : null, issueCodes };
  });

  if (!rows.length) issues.push({ type: "warn", text: "写真の読み取り結果がまだありません" });
  if (!period && rows.length) issues.push({ type: "error", text: "シフト期間を読み取れませんでした" });
  addRowIssueSummaries(issues, resolved);
  if (period) addPeriodIssues(issues, resolved, period);

  const validRows = resolved.filter((row) => row.entry && !row.issueCodes.length);
  const workRows = validRows.filter((row) => row.entry.is_work);
  const offRows = validRows.filter((row) => !row.entry.is_work);
  const totalOvertime = validRows.reduce((sum, row) => sum + row.entry.overtime_minutes, 0);
  const totalNight = validRows.reduce((sum, row) => sum + row.entry.night_overtime_minutes, 0);

  if (rows.length && !issues.some((issue) => issue.type === "error")) {
    issues.unshift({ type: "ok", text: "自動読み取りは完了しました。間違っていそうな日だけ直せます" });
  }

  return {
    rows: resolved,
    validRows,
    workRows,
    offRows,
    totalOvertime,
    totalNight,
    period,
    issues,
    ok: rows.length > 0 && !issues.some((issue) => issue.type === "error"),
  };
}

function addRowIssueSummaries(issues, rows) {
  const unknown = rows.filter((row) => row.issueCodes.includes("unknown"));
  const invalidDates = rows.filter((row) => row.issueCodes.includes("date"));
  const duplicateDates = [...new Set(rows.filter((row) => row.issueCodes.includes("duplicateDate")).map((row) => row.date))];
  const outOfPeriod = rows.filter((row) => row.issueCodes.includes("outOfPeriod"));

  if (invalidDates.length) issues.push({ type: "error", text: `日付が読めない行があります: ${invalidDates.length}件` });
  if (unknown.length) {
    issues.push({ type: "error", text: `勤務記号を確認してください: ${unknown.map((row) => row.code || "空欄").join(", ")}` });
  }
  if (duplicateDates.length) issues.push({ type: "error", text: `同じ日付が重なっています: ${duplicateDates.join(", ")}` });
  if (outOfPeriod.length) issues.push({ type: "error", text: "19日から翌月18日の期間外の日付があります" });
}

function addPeriodIssues(issues, rows, period) {
  const expected = enumerateDates(period.start, period.end);
  const present = new Set(rows.filter((row) => isISODate(row.date)).map((row) => row.date));
  const missing = expected.filter((date) => !present.has(date));
  if (missing.length) {
    issues.push({ type: "error", text: `読み取れていない日があります: ${formatMonthDay(missing[0])} ほか${missing.length}日` });
  }
}

function resolveShiftPeriod(rows) {
  const firstDate = rows.map((row) => row.date).find(isISODate);
  if (!firstDate) return null;
  const [year, month, day] = firstDate.split("-").map(Number);
  const start = day >= 19 ? new Date(year, month - 1, 19) : new Date(year, month - 2, 19);
  const end = new Date(start.getFullYear(), start.getMonth() + 1, 18);
  return {
    start: dateToISO(start),
    end: dateToISO(end),
    label: `${start.getFullYear()}年${start.getMonth() + 1}月19日〜${end.getMonth() + 1}月18日`,
  };
}

function findEffectiveMaster(master, code, date) {
  return master.filter((item) => {
    if (item.code !== code) return false;
    if (item.effective_from && item.effective_from > date) return false;
    if (item.effective_to && item.effective_to < date) return false;
    return true;
  });
}

function renderAll() {
  renderScreen();
  renderUpload();
  renderReview();
  renderNext();
  renderEditOptions();
}

function renderScreen() {
  document.querySelectorAll(".screen").forEach((screen) => screen.classList.remove("active"));
  document.querySelector(`#${state.screen}Screen`)?.classList.add("active");
  document.querySelectorAll("[data-step-pill]").forEach((pill) => {
    pill.classList.toggle("active", pill.dataset.stepPill === (state.screen === "complete" ? "next" : state.screen));
  });
}

function renderUpload() {
  const result = state.result;
  const hasRows = Boolean(result?.rows.length);
  const pastedText = els.chatGptResultInput?.value.trim() ?? "";
  els.startReviewBtn.disabled = !pastedText && !result?.ok;
  if (els.detectedName) {
    els.detectedName.textContent = state.sampleMode
      ? "サンプル利用者（デモ）"
      : state.detectedEmployeeName || (state.photoSelected ? "未確認" : "写真から読み取り");
  }
  if (els.detectedPeriod) {
    els.detectedPeriod.textContent = result?.period?.label ?? (state.photoSelected ? "未確認" : "写真から読み取り");
  }
  if (els.manualOcrState) {
    if (state.ocrStatus === "manualReady" && result?.ok) {
      els.manualOcrState.textContent = "取り込みました。内容確認へ進めます。";
    } else if (pastedText) {
      els.manualOcrState.textContent = "貼り付けできています。下のボタンを押してください。";
    } else {
      els.manualOcrState.textContent = "ChatGPTから戻ってきたら、この上の枠に貼り付けます。";
    }
  }
  let uploadMessages = result?.issues ?? [
    pastedText
      ? { type: "warn", text: "貼り付けた内容で確認へ進んでください" }
      : { type: "warn", text: "先にChatGPTで読み取った文章を貼り付けてください" },
  ];
  if (state.manualImportMessage) {
    uploadMessages = [{ type: state.manualImportType, text: state.manualImportMessage }];
    if (result?.issues?.length && state.manualImportType !== "ok") {
      uploadMessages = [...uploadMessages, ...result.issues];
    }
  }
  if (state.ocrStatus === "manualReady" && result?.ok) {
    uploadMessages = [{ type: "ok", text: state.manualImportMessage || "読み取り内容を取り込みました" }];
  }
  if (state.ocrStatus === "manualFailed") {
    uploadMessages = [{ type: "error", text: state.manualImportMessage || "読み取り内容を取り込めませんでした" }];
  }
  if (state.ocrStatus === "reading") {
    uploadMessages = [{ type: "warn", text: "写真を読み取っています。少し待ってください" }];
  }
  if (state.ocrStatus === "demoReady") {
    uploadMessages = [
      { type: "ok", text: "試作読み取りが完了しました。読み取り内容を確認できます" },
      { type: "warn", text: "現在は確認用データです。本番OCR接続後に写真の内容を読み取ります" },
    ];
  }
  if (state.ocrStatus === "demoButton") {
    uploadMessages = [
      { type: "ok", text: "無料読み込みデモが完了しました。読み取り内容を確認できます" },
      { type: "warn", text: "練習用データではカレンダー用ファイルの保存はできません" },
    ];
  }
  if (state.ocrStatus === "ocrReady") {
    uploadMessages = [
      { type: "ok", text: `無料OCRで${state.rows.length}日分を読み取りました。内容を確認してください` },
      { type: "warn", text: "無料OCRのため、勤務記号が違う日は修正してください" },
    ];
  }
  if (state.ocrStatus === "ocrNeedsReview") {
    uploadMessages = [
      { type: "error", text: "無料OCRだけでは十分に読み取れませんでした" },
      { type: "warn", text: "表が画面いっぱいに入る写真で、向きも直してもう一度試してください" },
    ];
  }
  if (state.ocrStatus === "ocrFailed") {
    uploadMessages = [
      { type: "error", text: state.ocrError || "無料OCRで読み取れませんでした" },
      { type: "warn", text: "通信状態を確認するか、デモで画面の流れを確認してください" },
    ];
  }
  renderMessages(els.uploadIssues, uploadMessages);
  if (state.ocrStatus === "reading") setStatus("pending", "読み取り中");
  else if (state.ocrStatus === "manualFailed") setStatus("error", "要確認");
  else if (state.ocrStatus === "ocrNeedsReview" || state.ocrStatus === "ocrFailed") setStatus("error", "要確認");
  else if (!hasRows) setStatus("pending", "未確認");
  else if (result.ok) setStatus("ok", "確認できます");
  else setStatus("error", "要確認");
}

function renderReview() {
  const result = state.result;
  els.reviewPeriod.textContent = result?.period?.label ?? "対象期間を確認しています";
  els.totalOvertime.textContent = minutesToJapanese(result?.totalOvertime ?? 0);
  els.totalNight.textContent = minutesToJapanese(result?.totalNight ?? 0);
  els.workCount.textContent = `${result?.workRows.length ?? 0}日`;
  els.offCount.textContent = `${result?.offRows.length ?? 0}日`;
  renderMessages(els.issues, result?.issues ?? []);
  renderDayList(result);
  els.confirmReviewBtn.disabled = !result?.ok;
}

function renderDayList(result) {
  els.dayList.innerHTML = "";
  if (!result?.rows.length) return;
  result.rows
    .slice()
    .sort((a, b) => a.date.localeCompare(b.date))
    .forEach((row) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `day-button ${row.issueCodes.length ? "error" : ""}`;
      const status = row.issueCodes.length ? "確認" : row.entry?.is_work ? "勤務" : "休み";
      button.innerHTML = `
        <span class="day-date">${escapeHtml(formatDateWithWeekday(row.date))}</span>
        <strong class="day-code">${escapeHtml(row.code || "確認")}</strong>
        <span class="day-time">${escapeHtml(formatRowTime(row))}</span>
        <small class="day-status">${escapeHtml(status)}</small>
      `;
      button.addEventListener("click", () => openEditSheet(row.date));
      els.dayList.appendChild(button);
    });
}

function renderNext() {
  const result = state.result;
  els.finishPeriod.textContent = result?.period?.label ?? "対象期間";
  els.finishOvertime.textContent = `残業 ${minutesToJapanese(result?.totalOvertime ?? 0)}`;
  els.finishNight.textContent = `深夜残業 ${minutesToJapanese(result?.totalNight ?? 0)}`;
  renderCalendarState();
}

function renderCalendarState() {
  const result = state.result;
  const canSaveCalendar = Boolean(result?.ok && state.reviewConfirmed && !state.sampleMode);
  els.sampleCalendarNotice.hidden = !state.sampleMode;
  els.saveCalendarBtn.disabled = !canSaveCalendar;
  els.calendarPreview.innerHTML = result?.ok
    ? `対象期間: <strong>${escapeHtml(result.period?.label ?? "未確認")}</strong><br>勤務日: <strong>${result.workRows.length}日</strong><br>形式: .ics`
    : "先にシフト内容を確認してください。";
}

function renderEditOptions() {
  els.editCode.innerHTML = "";
  const master = parseMaster();
  const groups = [
    { label: "勤務", items: master.filter((item) => item.is_work) },
    { label: "休み", items: master.filter((item) => !item.is_work) },
  ];
  groups.forEach((group) => {
    if (!group.items.length) return;
    const optgroup = document.createElement("optgroup");
    optgroup.label = group.label;
    group.items.forEach((item) => {
      const option = document.createElement("option");
      option.value = item.code;
      option.textContent = formatShiftOptionLabel(item);
      optgroup.appendChild(option);
    });
    els.editCode.appendChild(optgroup);
  });
}

function renderMessages(container, messages) {
  container.innerHTML = "";
  messages.forEach((message) => {
    const node = document.createElement("div");
    node.className = `message ${message.type}`;
    node.textContent = message.text;
    container.appendChild(node);
  });
}

function goTo(screen) {
  state.screen = screen;
  if (screen !== "next") {
    els.calendarPanel.hidden = true;
  }
  renderAll();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function complete(withCalendar) {
  state.screen = "complete";
  state.completionWithCalendar = withCalendar;
  els.completeMessage.textContent = withCalendar
    ? "カレンダー用ファイルを保存しました。保存しただけでは、まだカレンダーには入りません。ダウンロードしたファイルを開いて、追加を押してください。"
    : "これで終了です。画面を閉じて大丈夫です。カレンダー追加はしていません。";
  if (withCalendar) {
    els.completeSteps.hidden = false;
    els.completeTools.hidden = false;
  } else {
    els.completeSteps.hidden = true;
    els.completeTools.hidden = true;
  }
  renderAll();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function saveCalendarFileAndComplete() {
  if (!state.result?.ok || state.sampleMode) return;
  download("shift_calendar.ics", buildIcs(state.result), "text/calendar");
  complete(true);
}

function resetForNewShift() {
  if (state.imageObjectUrl) {
    URL.revokeObjectURL(state.imageObjectUrl);
    state.imageObjectUrl = "";
  }
  state.rows = [];
  state.result = null;
  state.screen = "upload";
  state.sampleMode = false;
  state.photoSelected = false;
  state.selectedFile = null;
  state.demoPreview = false;
  state.imageRotation = 0;
  state.ocrStatus = "idle";
  state.rawOcrText = "";
  state.ocrConfidence = null;
  state.ocrError = "";
  state.manualImportMessage = "";
  state.manualImportType = "warn";
  state.detectedEmployeeName = "";
  state.reviewConfirmed = false;
  state.selectedEditDate = null;
  state.completionWithCalendar = false;
  els.chatGptResultInput.value = "";
  els.shiftInput.value = "";
  els.dayList.hidden = true;
  els.toggleDaysBtn.textContent = "気になる日だけ確認する";
  if (els.photoInput) els.photoInput.value = "";
  if (els.ocrRawOutput) els.ocrRawOutput.value = "";
  renderAll();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openEditSheet(date) {
  const row = state.result?.rows.find((item) => item.date === date);
  if (!row) return;
  state.selectedEditDate = date;
  state.lastEditTrigger = document.activeElement;
  els.editDateLabel.textContent = formatDateForUser(row.date);
  const hasCurrentCode = Boolean(els.editCode.querySelector(`option[value="${cssEscape(row.code)}"]`));
  if (hasCurrentCode) {
    els.editCode.value = row.code;
  } else {
    els.editCode.selectedIndex = 0;
  }
  updateEditTimes();
  if (!hasCurrentCode && els.editCodeHint) {
    els.editCodeHint.textContent = `現在の読み取り: ${row.code || "空欄"}。正しいシフトを選んで保存してください。`;
  }
  els.editSheet.hidden = false;
  els.editCode.focus();
}

function closeEditSheet() {
  els.editSheet.hidden = true;
  state.selectedEditDate = null;
  if (state.lastEditTrigger?.focus) state.lastEditTrigger.focus();
  state.lastEditTrigger = null;
}

function saveEditedDay() {
  const code = els.editCode.value;
  const date = state.selectedEditDate;
  if (!date) return;
  state.rows = state.rows.map((row) => (row.date === date ? { ...row, code } : row));
  els.shiftInput.value = ["date,code", ...state.rows.map((row) => `${row.date},${row.code}`)].join("\n");
  state.reviewConfirmed = false;
  closeEditSheet();
  recalc();
}

function handleGlobalKeydown(event) {
  if (els.editSheet.hidden) return;
  if (event.key === "Escape") {
    event.preventDefault();
    closeEditSheet();
    return;
  }
  if (event.key !== "Tab") return;
  const focusables = Array.from(
    els.editSheet.querySelectorAll("button, input, select, textarea, [href], [tabindex]:not([tabindex='-1'])"),
  ).filter((node) => !node.disabled && node.offsetParent !== null);
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function updateEditTimes() {
  const code = els.editCode.value;
  const entry = findEffectiveMaster(parseMaster(), code, state.selectedEditDate ?? dateToISO(new Date()))[0];
  els.editStart.value = entry?.is_work ? normalizeTimeLabel(entry.start_time) : "休み";
  els.editEnd.value = entry?.is_work ? normalizeTimeLabel(entry.end_time) : "休み";
  if (els.editCodeHint) {
    els.editCodeHint.textContent = entry ? formatShiftHint(entry) : "この勤務記号は確認が必要です。";
  }
}

function formatAdminJson() {
  try {
    els.masterInput.value = JSON.stringify(parseMaster(), null, 2);
    els.templateInput.value = JSON.stringify(JSON.parse(els.templateInput.value), null, 2);
    recalc();
  } catch (error) {
    state.result = {
      rows: [],
      validRows: [],
      workRows: [],
      offRows: [],
      issues: [{ type: "error", text: error.message }],
      totalOvertime: 0,
      totalNight: 0,
      period: null,
      ok: false,
    };
    renderAll();
  }
}

function buildIcs(result) {
  const now = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//AI Company//Shift Photo MVP//JA",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
  ];
  result.workRows.forEach((row, index) => {
    lines.push("BEGIN:VEVENT");
    lines.push(`UID:shift-${row.date}-${row.code}-${index}@shift-photo-mvp.local`);
    lines.push(`DTSTAMP:${now}`);
    lines.push(`SUMMARY:${icsEscape(`勤務 ${row.code}`)}`);
    lines.push(`DTSTART;TZID=Asia/Tokyo:${toIcsDateTime(row.date, row.entry.start_time)}`);
    lines.push(`DTEND;TZID=Asia/Tokyo:${toIcsDateTime(row.date, row.entry.end_time)}`);
    lines.push(`DESCRIPTION:${icsEscape(buildEventDescription(row))}`);
    lines.push("END:VEVENT");
  });
  lines.push("END:VCALENDAR");
  return `${lines.join("\r\n")}\r\n`;
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
  const [hourRaw, minuteRaw] = time.split(":").map(Number);
  const dateObj = new Date(year, month - 1, day, hourRaw, minuteRaw || 0, 0);
  return [
    dateObj.getFullYear(),
    pad2(dateObj.getMonth() + 1),
    pad2(dateObj.getDate()),
    "T",
    pad2(dateObj.getHours()),
    pad2(dateObj.getMinutes()),
    "00",
  ].join("");
}

function download(filename, content, type) {
  const blob = new Blob([content], { type: `${type};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function setStatus(type, text) {
  els.statusBadge.className = `status-badge ${type}`;
  els.statusBadge.textContent = text;
}

function countBy(values) {
  const counts = new Map();
  values.forEach((value) => counts.set(value, (counts.get(value) ?? 0) + 1));
  return counts;
}

function enumerateDates(startISO, endISO) {
  const dates = [];
  const cursor = new Date(`${startISO}T00:00:00`);
  const end = new Date(`${endISO}T00:00:00`);
  while (cursor <= end) {
    dates.push(dateToISO(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }
  return dates;
}

function minutesToJapanese(minutes) {
  const sign = minutes < 0 ? "-" : "";
  const abs = Math.abs(minutes);
  return `${sign}${Math.floor(abs / 60)}時間${String(abs % 60).padStart(2, "0")}分`;
}

function formatRowTime(row) {
  if (!row.entry) return "内容を確認してください";
  if (!row.entry.is_work) return row.entry.label;
  return `${normalizeTimeLabel(row.entry.start_time)}〜${normalizeTimeLabel(row.entry.end_time)}`;
}

function formatShiftOptionLabel(item) {
  if (!item.is_work) return `${item.code}　${item.label}`;
  return `${item.code}　${formatShiftTimeRange(item, true)}`;
}

function formatShiftHint(item) {
  if (!item.is_work) return `${item.code}: ${item.label}`;
  return `勤務時間: ${formatShiftTimeRange(item, true)}`;
}

function formatShiftTimeRange(item, compactNextDay = false) {
  return `${normalizeTimeLabel(item.start_time, compactNextDay)}〜${normalizeTimeLabel(item.end_time, compactNextDay)}`;
}

function normalizeTimeLabel(time, compactNextDay = false) {
  const [hourRaw, minute = "00"] = String(time).split(":");
  const hour = Number(hourRaw);
  if (!Number.isFinite(hour)) return time;
  if (hour >= 24) return `${compactNextDay ? "翌" : "翌日"}${hour - 24}:${minute}`;
  return `${hour}:${minute}`;
}

function formatDateForUser(date) {
  if (!isISODate(date)) return date || "日付確認";
  const target = new Date(`${date}T00:00:00`);
  return `${target.getMonth() + 1}月${target.getDate()}日`;
}

function formatDateWithWeekday(date) {
  if (!isISODate(date)) return date || "日付確認";
  const target = new Date(`${date}T00:00:00`);
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
  return `${target.getMonth() + 1}月${target.getDate()}日(${weekdays[target.getDay()]})`;
}

function formatMonthDay(date) {
  return formatDateForUser(date);
}

function dateToISO(date) {
  return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
}

function isISODate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
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

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function cssEscape(value) {
  if (window.CSS?.escape) return window.CSS.escape(String(value));
  return String(value).replace(/["\\]/g, "\\$&");
}

window.shiftPhotoMvp = {
  loadFixturePhoto,
  kaicho: runChairmanCommand,
  getValidationSnapshot() {
    return {
      ocrStatus: state.ocrStatus,
      detectedEmployeeName: state.detectedEmployeeName,
      detectedPeriod: state.result?.period?.label ?? "",
      rowCount: state.rows.length,
      ok: Boolean(state.result?.ok),
      issues: state.result?.issues?.map((issue) => issue.text) ?? [],
      rawOcrText: state.rawOcrText,
      shiftText: els.shiftInput.value,
    };
  },
};

init();
