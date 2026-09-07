import type { MetadataRoute } from "next";

const siteUrl = "https://48h.lv";

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
  ];
}
