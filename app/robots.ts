import type { MetadataRoute } from "next";

const siteUrl = "https://hackathons-48h.aleksejsm.chatgpt.site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
