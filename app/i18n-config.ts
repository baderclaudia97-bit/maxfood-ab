export type Locale = "es" | "sv" | "en" | "fr" | "de" | "ar" | "zh" | "ja";

export const locales: Locale[] = [
  "es",
  "sv",
  "en",
  "fr",
  "de",
  "ar",
  "zh",
  "ja",
];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  es: "Español",
  sv: "Svenska",
  en: "English",
  fr: "Français",
  de: "Deutsch",
  ar: "العربية",
  zh: "中文",
  ja: "日本語",
};

export const localeFlags: Record<Locale, string> = {
  es: "🇪🇸",
  sv: "🇸🇪",
  en: "🇬🇧",
  fr: "🇫🇷",
  de: "🇩🇪",
  ar: "🇸🇦",
  zh: "🇨🇳",
  ja: "🇯🇵",
};

// Text direction for RTL languages
export const isRTL = (locale: Locale): boolean => locale === "ar";

// Currency by locale
export const localeCurrency: Record<Locale, string> = {
  es: "EUR",
  sv: "SEK",
  en: "GBP",
  fr: "EUR",
  de: "EUR",
  ar: "SAR",
  zh: "CNY",
  ja: "JPY",
};

// Date format by locale
export const dateFormatByLocale: Record<Locale, string> = {
  es: "dd/MM/yyyy",
  sv: "yyyy-MM-dd",
  en: "MM/dd/yyyy",
  fr: "dd/MM/yyyy",
  de: "dd.MM.yyyy",
  ar: "yyyy-MM-dd",
  zh: "yyyy-MM-dd",
  ja: "yyyy年MM月dd日",
};
