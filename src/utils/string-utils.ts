import { DEFAULT_LOCALE, LOCALES } from "./constants";

export const getServerSideHostname = (url: string) => new URL(url).hostname;

export function getLocaleFromURL(url: string | undefined) {
  if (!url) return DEFAULT_LOCALE;

  const slugLocale = url.split("/")[3];
  const usingSlugLocale = LOCALES.includes(slugLocale || "");
  const topLevelDomainLocale = getServerSideHostname(url).split(".").pop();
  const usingTopLevelDomainLocale = LOCALES.includes(
    topLevelDomainLocale || ""
  );

  if (usingSlugLocale) return slugLocale!;
  if (usingTopLevelDomainLocale) return topLevelDomainLocale!;

  return DEFAULT_LOCALE;
}
