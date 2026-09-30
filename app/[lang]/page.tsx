import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EnglishHome, { metadata as englishMetadata } from "../english-home";
import LatvianHome, { metadata as latvianMetadata } from "../latvian-home";
import { isLanguage } from "../site-content";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return lang === "lv" ? latvianMetadata : englishMetadata;
}

export function generateStaticParams() {
  return [{ lang: "lv" }, { lang: "en" }];
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return lang === "lv" ? <LatvianHome /> : <EnglishHome />;
}
