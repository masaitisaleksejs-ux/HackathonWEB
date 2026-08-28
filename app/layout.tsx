import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hackathons-48h.aleksejsm.chatgpt.site"),
  title: "48h — Hackathons for Real Business Challenges",
  description: "24h and 48h hackathons where student teams turn real company challenges into fresh concepts, prototypes and pitches.",
  openGraph: {
    title: "48h — Hackathons for Real Business Challenges",
    description: "One challenge. Dozens of fresh ideas. 24 or 48 hours.",
    type: "website",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "48h — Hackathons for real business challenges" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "48h — Hackathons for Real Business Challenges",
    description: "One challenge. Dozens of fresh ideas. 24 or 48 hours.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
