import type { MetadataRoute } from "next";
import { pageKeys, pagePath, siteUrl } from "./site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    en: `${siteUrl}/en`,
    lv: `${siteUrl}/lv`,
    "x-default": `${siteUrl}/lv`,
  };

  return [
    {
      url: `${siteUrl}/lv`,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${siteUrl}/en`,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
    ...pageKeys.flatMap((key) => (["en", "lv"] as const).map((language) => ({
      url: `${siteUrl}${pagePath(language, key)}`,
      changeFrequency: "monthly" as const,
      priority: key === "about" ? 0.6 : 0.8,
      alternates: { languages: {
        en: `${siteUrl}${pagePath("en", key)}`,
        lv: `${siteUrl}${pagePath("lv", key)}`,
        "x-default": `${siteUrl}${pagePath("lv", key)}`,
      } },
    }))),
  ];
}
