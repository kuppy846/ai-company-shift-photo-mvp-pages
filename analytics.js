(() => {
  const MEASUREMENT_ID = "G-38GXW5N9YE";
  const ALLOWED_EVENTS = new Set([
    "shift_app_open",
    "shift_calculation_complete",
    "shift_calendar_download",
  ]);
  const params = new URLSearchParams(window.location.search);
  const isExcludedView = ["dev", "kaicho", "chairman"].some((key) => params.has(key));
  const isPublishedApp = window.location.hostname === "kuppy846.github.io";
  const isConfigured = /^G-[A-Z0-9]+$/i.test(MEASUREMENT_ID);

  window.shiftAnalytics = {
    track() {},
  };

  if (!isPublishedApp || isExcludedView || !isConfigured) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(MEASUREMENT_ID)}`;
  document.head.appendChild(script);

  window.shiftAnalytics.track = (eventName) => {
    if (!ALLOWED_EVENTS.has(eventName)) return;
    window.gtag("event", eventName, {
      send_to: MEASUREMENT_ID,
      transport_type: "beacon",
    });
  };

  window.shiftAnalytics.track("shift_app_open");
})();
