import type { Metadata } from "next";
import LandingPage from "../landing-page";

const title = "Hakatonu organizēšana uzņēmumiem Latvijā | 48h";
const description = "Organizējam 24h un 48h hakatonus uzņēmumiem Latvijā. Studentu komandas pārvērš reālus biznesa izaicinājumus konceptos, prototipos un risinājumos.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/lv",
    languages: { en: "/en", lv: "/lv", "x-default": "/lv" },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: "/lv",
    siteName: "48h",
    locale: "lv_LV",
    alternateLocale: ["en_US"],
    type: "website",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "48h hakatoni uzņēmumiem Latvijā" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function LatvianPage() {
  return <LandingPage language="lv" />;
}
