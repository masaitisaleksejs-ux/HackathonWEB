import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hackathons-48h.aleksejsm.chatgpt.site"),
  applicationName: "48h",
  title: "48h — Corporate Hackathons in Latvia",
  description: "24h and 48h corporate hackathons for real business challenges in Latvia.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "48h",
  url: "https://hackathons-48h.aleksejsm.chatgpt.site",
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
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
