import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLanguage, siteUrl } from "../site-content";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "48h",
  title: "48h — Corporate Hackathons in Latvia",
  description: "24h and 48h corporate hackathons for real business challenges in Latvia.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  verification: { google: "GE4X-cduyrZArrU2Npi1tK_uXp_zUmymd3CHiUg9xLM" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "48h",
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  description: "24h and 48h corporate hackathons for real business challenges in Latvia.",
  founder: [
    { "@type": "Person", name: "Aleksejs Masaitis" },
    { "@type": "Person", name: "Ralfs Roga" },
  ],
  areaServed: { "@type": "Country", name: "Latvia" },
  knowsAbout: [
    "Corporate hackathons",
    "Innovation sprints",
    "Student innovation",
    "Business challenge solving",
  ],
};

export default async function RootLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return (
    <html lang={lang}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
