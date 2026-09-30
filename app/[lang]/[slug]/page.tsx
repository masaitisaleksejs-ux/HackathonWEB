import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage from "../../detail-page";
import { findPage, isLanguage, pageKeys, pagePath, pages } from "../../site-content";

type Props = { params: Promise<{ lang: string; slug: string }> };

async function getPage(params: Props["params"]) {
  const { lang, slug } = await params;
  if (!isLanguage(lang)) notFound();
  const key = findPage(lang, slug);
  if (!key) notFound();
  return { language: lang, key, page: pages[lang][key] };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { language, key, page } = await getPage(params);
  const path = pagePath(language, key);
  return {
    title: page.title, description: page.description,
    alternates: {
      canonical: path,
      languages: { en: pagePath("en", key), lv: pagePath("lv", key), "x-default": pagePath("lv", key) },
    },
    robots: { index: true, follow: true },
    openGraph: { title: page.title, description: page.description, url: path, siteName: "48h", type: "website", locale: language === "lv" ? "lv_LV" : "en_US", alternateLocale: [language === "lv" ? "en_US" : "lv_LV"] },
    twitter: { card: "summary", title: page.title, description: page.description },
  };
}

export function generateStaticParams() {
  return (["en", "lv"] as const).flatMap((lang) => pageKeys.map((key) => ({ lang, slug: pages[lang][key].slug })));
}

export default async function ServicePage({ params }: Props) {
  const { language, key } = await getPage(params);
  return <DetailPage language={language} pageKey={key} />;
}
