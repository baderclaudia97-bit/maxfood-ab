// Google Analytics 4 Configuration and Events

interface GAEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export class GoogleAnalytics {
  static eventTracker(event: GAEvent) {
    if (typeof window === "undefined") return;

    // Google Analytics event tracking
    if (typeof gtag !== "undefined") {
      gtag("event", event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }
  }

  // Track page views
  static pageView(page_path: string, page_title: string) {
    if (typeof gtag !== "undefined") {
      gtag("config", process.env.NEXT_PUBLIC_GA_ID || "", {
        page_path,
        page_title,
      });
    }
  }

  // Track form submissions
  static trackFormSubmission(formName: string, success: boolean) {
    this.eventTracker({
      action: success ? "form_submission_success" : "form_submission_error",
      category: "engagement",
      label: formName,
      value: success ? 1 : 0,
    });
  }

  // Track product views
  static trackProductView(productId: string, productName: string, price: number) {
    this.eventTracker({
      action: "view_item",
      category: "ecommerce",
      label: productName,
      value: price,
    });
  }

  // Track outbound links
  static trackOutboundLink(url: string, label: string) {
    this.eventTracker({
      action: "click",
      category: "outbound",
      label: label || url,
    });
  }

  // Track language change
  static trackLanguageChange(language: string) {
    this.eventTracker({
      action: "language_changed",
      category: "user_interaction",
      label: language,
    });
  }

  // Track contact form submission
  static trackContactSubmission() {
    this.eventTracker({
      action: "contact_form_submission",
      category: "conversion",
      label: "contact_page",
      value: 1,
    });
  }

  // Track product filter
  static trackProductFilter(filterType: string, filterValue: string) {
    this.eventTracker({
      action: "filter_applied",
      category: "product_interaction",
      label: `${filterType}: ${filterValue}`,
    });
  }

  // Track scroll depth
  static trackScrollDepth(depth: number) {
    this.eventTracker({
      action: "scroll",
      category: "engagement",
      label: `depth_${depth}%`,
      value: depth,
    });
  }

  // Track time on page
  static trackTimeOnPage(page: string, timeInSeconds: number) {
    this.eventTracker({
      action: "time_on_page",
      category: "engagement",
      label: page,
      value: timeInSeconds,
    });
  }

  // Track document download
  static trackDownload(fileName: string, fileType: string) {
    this.eventTracker({
      action: "file_download",
      category: "engagement",
      label: `${fileName}.${fileType}`,
    });
  }

  // Set user properties
  static setUserProperty(propertyName: string, propertyValue: string) {
    if (typeof gtag !== "undefined") {
      gtag("set", {
        [propertyName]: propertyValue,
      });
    }
  }

  // Track custom events
  static trackCustomEvent(eventName: string, eventData: Record<string, unknown>) {
    if (typeof gtag !== "undefined") {
      gtag("event", eventName, eventData);
    }
  }
}

// Global type augmentation
declare global {
  function gtag(...args: unknown[]): void;
}
