import type { Metadata } from "next";
import LandingPage from "../landing-page";

const title = "Corporate Hackathons in Latvia | 24h & 48h | 48h";
const description = "We organise 24h and 48h corporate hackathons in Latvia, where student teams turn real business challenges into concepts, prototypes and pitches.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en",
    languages: { en: "/en", lv: "/lv", "x-default": "/lv" },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: "/en",
    siteName: "48h",
    locale: "en_US",
    alternateLocale: ["lv_LV"],
    type: "website",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "48h corporate hackathons in Latvia" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function EnglishPage() {
  return <LandingPage language="en" />;
}
