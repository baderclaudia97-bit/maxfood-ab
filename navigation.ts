import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "sv", "en", "fr", "de", "ar", "zh", "ja"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
