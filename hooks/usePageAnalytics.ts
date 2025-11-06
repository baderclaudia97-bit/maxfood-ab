"use client";

import { useEffect } from "react";
import { GoogleAnalytics } from "@/lib/analytics";

export function usePageAnalytics(pageName: string) {
  useEffect(() => {
    // Track page view
    GoogleAnalytics.pageView(window.location.pathname, pageName);

    // Track time on page
    const startTime = Date.now();

    const handleBeforeUnload = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      if (timeOnPage > 0) {
        GoogleAnalytics.trackTimeOnPage(pageName, timeOnPage);
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        if (timeOnPage > 0) {
          GoogleAnalytics.trackTimeOnPage(pageName, timeOnPage);
        }
      }
    };

    // Track scroll depth
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollPercentage = Math.round(
          ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
        );
        if (scrollPercentage > 25 && scrollPercentage % 25 === 0) {
          GoogleAnalytics.trackScrollDepth(scrollPercentage);
        }
      }, 250);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [pageName]);
}
