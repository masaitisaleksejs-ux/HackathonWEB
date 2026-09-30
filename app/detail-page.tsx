import { bookingUrl, pageKeys, pagePath, pages, siteUrl, ui, type Language, type PageKey } from "./site-content";

export default function DetailPage({ language, pageKey }: { language: Language; pageKey: PageKey }) {
  const page = pages[language][pageKey];
  const t = ui[language];
  const url = `${siteUrl}${pagePath(language, pageKey)}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": pageKey === "about" ? "AboutPage" : "WebPage",
        "@id": `${url}#page`, url, name: page.title, description: page.description,
        inLanguage: language, about: { "@id": `${siteUrl}/#organization` },
      },
      ...(pageKey === "about" ? [] : [{
        "@type": "Service", "@id": `${url}#service`, name: page.label,
        description: page.description, url,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: { "@type": "Country", name: "Latvia" },
      }]),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "48h", item: `${siteUrl}/${language}` },
          { "@type": "ListItem", position: 2, name: page.label, item: url },
        ],
      },
    ],
  };

  return (
    <main lang={language} className={`detail-page detail-${pageKey}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <a className="skip-link" href="#content">{language === "lv" ? "Pāriet uz saturu" : "Skip to content"}</a>
      <header className="site-header">
        <a className="brand" href={`/${language}`} aria-label={t.home}>48<span>h</span></a>
        <nav aria-label={t.navigation}>
          <a href={pagePath(language, "corporate")}>{t.services}</a>
          <a href={pagePath(language, "sprint")}>24h</a>
          <a href={pagePath(language, "hackathon")}>48h</a>
          <a href={pagePath(language, "about")}>{pages[language].about.label}</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label={t.language}>
            {(["en", "lv"] as const).map((locale) => <a key={locale} href={pagePath(locale, pageKey)} lang={locale} hrefLang={locale} className={language === locale ? "active" : ""} aria-current={language === locale ? "page" : undefined}>{locale.toUpperCase()}</a>)}
          </div>
          <a className="button button-small" href={bookingUrl} target="_blank" rel="noreferrer">{t.book}</a>
        </div>
      </header>

      <section className="detail-hero section-shell" id="content">
        <div>
          <p className="breadcrumb"><a href={`/${language}`}>{t.home}</a><span aria-hidden="true"> / </span>{page.label}</p>
          <p className="eyebrow">48h / {page.label}</p>
          <h1>{page.heading}</h1>
          <p className="lead">{page.intro}</p>
          <a className="button" href={bookingUrl} target="_blank" rel="noreferrer">{t.book}</a>
        </div>
        <aside className="detail-mark" aria-label={t.proof}>
          <strong>{page.mark}</strong>
          <p>{pageKey === "about" ? t.proof : page.label}</p>
          <span>{pageKey === "about" ? "48h" : `50+ ${t.proof}`}</span>
        </aside>
      </section>

      <div className="detail-body section-shell">
        <aside className="detail-contents">
          <p className="eyebrow">{t.contents}</p>
          <ol>{page.sections.map((section, index) => <li key={section.title}><a href={`#section-${index + 1}`}>{section.title}</a></li>)}</ol>
        </aside>
        <div className="detail-sections">
          {page.sections.map((section, index) => (
            <section className="detail-section" id={`section-${index + 1}`} key={section.title}>
              <span className="detail-index">0{index + 1}</span>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
              {section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
            </section>
          ))}
          <section className="detail-questions">
            <h2>{t.questions}</h2>
            <div className="faq-list">{page.questions.map(([question, answer]) => <details key={question}><summary><span>{question}</span><i aria-hidden="true">+</i></summary><p>{answer}</p></details>)}</div>
          </section>
        </div>
      </div>

      <section className="detail-related section-shell">
        <p className="eyebrow">{t.related}</p>
        <div className="detail-links">{pageKeys.filter((key) => key !== pageKey).map((key) => <a key={key} href={pagePath(language, key)}><strong>{pages[language][key].label}</strong><span>{pages[language][key].description}</span></a>)}</div>
      </section>
      <section className="detail-cta">
        <div className="section-shell"><h2>{t.cta}</h2><p>{t.ctaText}</p><a className="button" href={bookingUrl} target="_blank" rel="noreferrer">{t.book}</a></div>
      </section>
      <footer className="site-footer">
        <a className="footer-brand" href={`/${language}`}>48<span>h</span></a>
        <p>{language === "lv" ? "Svaigi prāti. Īsti izaicinājumi. Taustāmi rezultāti." : "Fresh minds. Real challenges. Tangible results."}</p>
        <div className="footer-links"><a href={`/${language}`}>{t.home}</a><a href={pagePath(language, "about")}>{pages[language].about.label}</a></div>
      </footer>
    </main>
  );
}
