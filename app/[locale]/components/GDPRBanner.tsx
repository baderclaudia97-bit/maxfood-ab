"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

type ConsentMode = "all" | "analytics" | "none";

export default function GDPRBanner() {
  const t = useTranslations();
  const [isVisible, setIsVisible] = useState(false);
  const [consent, setConsent] = useState<ConsentMode | null>(null);

  useEffect(() => {
    // Check if consent was already given
    const savedConsent = localStorage.getItem("gdpr-consent");
    if (savedConsent) {
      setConsent(savedConsent as ConsentMode);
      loadGoogleAnalytics(savedConsent as ConsentMode);
    } else {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (mode: ConsentMode) => {
    setConsent(mode);
    localStorage.setItem("gdpr-consent", mode);
    setIsVisible(false);
    loadGoogleAnalytics(mode);
  };

  const loadGoogleAnalytics = (mode: ConsentMode) => {
    if (mode === "none") return;

    // Google Analytics script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      (window.dataLayer as unknown[]).push(arguments);
    }
    gtag("js", new Date());

    // Consent mode setup
    const consentConfig = {
      analytics_storage: mode === "all" ? "granted" : "denied",
      ad_storage: mode === "all" ? "granted" : "denied",
    };

    gtag("consent", "default", consentConfig);
    gtag("config", process.env.NEXT_PUBLIC_GA_ID || "");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-800 p-4 md:p-6 shadow-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex items-center justify-between gap-6">
          {/* Message */}
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-white font-semibold mb-2">
              🍪 {t("gdpr.title")}
            </h3>
            <p className="text-gray-400 text-sm">
              {t("gdpr.description")}
              {" "}
              <a
                href="/privacy"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                {t("gdpr.privacy_link")}
              </a>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-3">
            <button
              onClick={() => handleConsent("none")}
              className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition text-sm font-medium"
            >
              {t("gdpr.reject_all")}
            </button>
            <button
              onClick={() => handleConsent("analytics")}
              className="px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition text-sm font-medium"
            >
              {t("gdpr.accept_analytics")}
            </button>
            <button
              onClick={() => handleConsent("all")}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm font-medium whitespace-nowrap"
            >
              {t("gdpr.accept_all")}
            </button>
          </div>
        </div>

        {/* Preferences Link */}
        <div className="mt-4 md:mt-0 md:absolute md:bottom-4 md:right-4">
          <button className="text-xs text-gray-500 hover:text-gray-400 underline">
            {t("gdpr.manage_preferences")}
          </button>
        </div>
      </div>
    </div>
  );
}
