"use client";

import { useEffect, useState } from "react";

type Language = "en" | "lv";

const bookingUrl = "https://cal.com/aleksejs-masaitis";

const copy = {
  en: {
    nav: ["How it works", "Formats", "What you get", "About"],
    book: "Book a call",
    eyebrow: "Hackathons for real business challenges",
    hero: "One challenge. Dozens of fresh ideas. 24 or 48 hours.",
    intro: "We design and run high-energy hackathons where student teams turn your company’s real challenge into concepts, prototypes and pitches.",
    explore: "Explore the formats",
    proof: "50+ hackathons organised by our team",
    timer: "Time left to make it real",
    live: "Live sprint",
    formatsEyebrow: "Choose your pace",
    formatsTitle: "Same energy. Different depth.",
    formatsIntro: "Pick the format that matches the challenge. We shape the brief, the people and the entire experience around your outcome.",
    sprint: "24h Sprint",
    sprintText: "A concentrated day for rapid research, ideation and validated concepts.",
    sprintPoints: ["Fast alignment", "Fresh concepts", "Final pitch"],
    hackathon: "48h Hackathon",
    hackathonText: "A deeper build with mentoring, testing and prototype development.",
    hackathonPoints: ["Research & validation", "Prototype sprint", "Jury-ready pitch"],
    bestFor: "Best for",
    sprintBest: "Focused questions and early opportunities",
    hackathonBest: "Complex challenges that need something tangible",
    problemEyebrow: "Why a hackathon",
    problemTitle: "Your problem is already in the room. The answer isn’t.",
    problemIntro: "A good hackathon changes who gets to look at the problem, how quickly ideas are tested and how visible progress becomes.",
    reasons: [
      ["Fresh perspective", "Student teams question assumptions your internal team may no longer notice."],
      ["Built, not brainstormed", "Every team moves beyond ideas toward a concept, prototype or tested direction."],
      ["Talent in action", "Meet ambitious people while they work—not through another conventional interview."],
    ],
    processEyebrow: "The 48h method",
    processTitle: "From a messy challenge to a room full of momentum.",
    processIntro: "We take responsibility for the full journey, while your team stays close to the decisions that matter.",
    steps: [
      ["Frame the challenge", "We turn the business problem into a brief teams can understand, explore and solve."],
      ["Build the arena", "Participants, mentors, jury, programme, communications and experience—all coordinated."],
      ["Sprint and mentor", "Teams research, create and build while experts challenge their thinking at clear checkpoints."],
      ["Test and sharpen", "Ideas meet real feedback. Weak assumptions are removed before the final presentation."],
      ["Pitch and choose", "The jury compares tangible solutions and selects the direction worth taking forward."],
    ],
    includedEyebrow: "Full-service delivery",
    includedTitle: "Everything off your desk.",
    includedIntro: "One partner for the challenge, people, programme and pressure that make the format work.",
    included: ["Challenge design", "Participant recruitment", "Mentors and jury", "Programme and facilitation", "Team formation", "Venue experience", "Judging framework", "Awards and wrap-up"],
    objectsAlt: "Hackathon objects including a laptop, timer, badges, notes, markers, envelopes and trophy with hand-drawn people",
    outcomesEyebrow: "What comes out",
    outcomesTitle: "Not another workshop. Something you can use Monday.",
    outcomesIntro: "The final output depends on your challenge, but every format is designed to create clear evidence, choices and next steps.",
    outcomes: [
      ["Multiple directions", "Compare different answers to the same challenge instead of betting on the first idea."],
      ["Tangible concepts", "See prototypes, customer logic, experiments and structured recommendations."],
      ["Decision energy", "Bring stakeholders into one room and create the momentum to move forward."],
    ],
    aboutEyebrow: "Experience under pressure",
    aboutTitle: "Built by people who know the controlled chaos.",
    aboutText: "Our team has organised more than 50 hackathons. We know how to keep participants moving, mentors useful, companies involved and the final pitches worth watching.",
    aboutProof: "hackathons organised by our team",
    faqEyebrow: "Good questions",
    faqTitle: "Before we start the clock.",
    faqs: [
      ["Does the challenge need to be technical?", "No. Hackathons can explore product, service, customer experience, sustainability, process, communication or growth challenges."],
      ["Who participates?", "We build multidisciplinary student teams around the challenge and the skills it needs."],
      ["What does our company need to provide?", "A meaningful challenge, a small group of decision-makers and access to the context teams need. We organise the rest."],
      ["What is the difference between 24h and 48h?", "The 24h sprint prioritises speed and concepts. The 48h format gives teams more time for research, testing and prototypes."],
      ["What happens after the hackathon?", "We package the strongest outputs and next-step recommendations so your team can continue with the winning direction."],
    ],
    bookEyebrow: "Your challenge goes here",
    bookTitle: "Bring us the problem everyone keeps postponing.",
    bookText: "In one short call, we’ll understand the challenge, recommend 24h or 48h and outline what the experience could look like.",
    calendarNote: "Choose a time in Cal.com. Your confirmation will include a Google Meet link.",
    footerLine: "Fresh minds. Real challenges. Tangible results.",
  },
  lv: {
    nav: ["Kā tas notiek", "Formāti", "Ko jūs iegūstat", "Par mums"],
    book: "Pieteikt sarunu",
    eyebrow: "Hakatoni reāliem biznesa izaicinājumiem",
    hero: "Viens izaicinājums. Desmitiem jaunu ideju. 24 vai 48 stundās.",
    intro: "Mēs izstrādājam un vadām enerģiskus hakatonus, kuros studentu komandas pārvērš jūsu uzņēmuma īsto izaicinājumu konceptos, prototipos un pārliecinošās prezentācijās.",
    explore: "Apskatīt formātus",
    proof: "Mūsu komanda organizējusi 50+ hakatonus",
    timer: "Laiks, lai ideju padarītu īstu",
    live: "Aktīvs ideju sprints",
    formatsEyebrow: "Izvēlieties tempu",
    formatsTitle: "Tā pati enerģija. Atšķirīgs dziļums.",
    formatsIntro: "Izvēlieties izaicinājumam piemērotāko formātu. Mēs pielāgojam uzdevumu, dalībniekus un visu pieredzi jūsu vēlamajam rezultātam.",
    sprint: "24h sprints",
    sprintText: "Koncentrēta diena ātrai izpētei, ideju radīšanai un pārbaudītiem konceptiem.",
    sprintPoints: ["Ātra vienošanās", "Svaigi koncepti", "Noslēguma prezentācija"],
    hackathon: "48h hakatons",
    hackathonText: "Padziļināta izstrāde ar mentoriem, testēšanu un prototipu veidošanu.",
    hackathonPoints: ["Izpēte un validācija", "Prototipa sprints", "Prezentācija žūrijai"],
    bestFor: "Vispiemērotākais",
    sprintBest: "Konkrētiem jautājumiem un agrīnām iespējām",
    hackathonBest: "Sarežģītiem izaicinājumiem, kuriem vajag taustāmu rezultātu",
    problemEyebrow: "Kāpēc hakatons",
    problemTitle: "Problēma jau ir telpā. Atbilde vēl nav.",
    problemIntro: "Labs hakatons maina to, kas skatās uz problēmu, cik ātri idejas tiek pārbaudītas un cik redzams kļūst progress.",
    reasons: [
      ["Svaigs skatījums", "Studentu komandas apšauba pieņēmumus, kurus iekšējā komanda, iespējams, vairs nepamana."],
      ["Ne tikai idejas", "Katra komanda nonāk līdz konceptam, prototipam vai pārbaudītam risinājuma virzienam."],
      ["Talanti darbībā", "Iepazīstiet ambiciozus cilvēkus īstā darbā, nevis kārtējā standarta intervijā."],
    ],
    processEyebrow: "48h metode",
    processTitle: "No neskaidra izaicinājuma līdz telpai, kas pilna ar enerģiju.",
    processIntro: "Mēs uzņemamies atbildību par visu procesu, bet jūsu komanda paliek iesaistīta svarīgākajos lēmumos.",
    steps: [
      ["Definējam izaicinājumu", "Pārvēršam biznesa problēmu uzdevumā, ko komandas var saprast, izpētīt un risināt."],
      ["Izveidojam arēnu", "Dalībnieki, mentori, žūrija, programma, komunikācija un pieredze—viss tiek koordinēts."],
      ["Sprints un mentorings", "Komandas pēta, rada un būvē, kamēr eksperti pārbauda viņu domāšanu konkrētos kontrolpunktos."],
      ["Testējam un uzlabojam", "Idejas saņem īstu atgriezenisko saiti. Vājie pieņēmumi tiek atmesti pirms fināla."],
      ["Prezentējam un izvēlamies", "Žūrija salīdzina taustāmus risinājumus un izvēlas virzienu ar lielāko potenciālu."],
    ],
    includedEyebrow: "Pilna servisa organizēšana",
    includedTitle: "Viss no jūsu darba galda.",
    includedIntro: "Viens partneris izaicinājumam, cilvēkiem, programmai un spiedienam, kas formātam liek strādāt.",
    included: ["Izaicinājuma izstrāde", "Dalībnieku piesaiste", "Mentori un žūrija", "Programma un vadīšana", "Komandu veidošana", "Pasākuma vide", "Vērtēšanas sistēma", "Apbalvošana un noslēgums"],
    objectsAlt: "Hakatona priekšmeti—dators, taimeris, dalībnieku kartes, līmlapiņas, marķieri, aploksnes un trofeja ar zīmētiem cilvēkiem",
    outcomesEyebrow: "Ko jūs iegūstat",
    outcomesTitle: "Nevis vēl vienu darbnīcu. Kaut ko, ko izmantot pirmdien.",
    outcomesIntro: "Gala rezultāts ir atkarīgs no izaicinājuma, taču katrs formāts rada pierādījumus, izvēles un skaidrus nākamos soļus.",
    outcomes: [
      ["Vairāki virzieni", "Salīdziniet dažādas atbildes uz vienu izaicinājumu, nevis paļaujieties uz pirmo ideju."],
      ["Taustāmi koncepti", "Saņemiet prototipus, klientu loģiku, eksperimentus un strukturētus ieteikumus."],
      ["Enerģija lēmumam", "Apvienojiet svarīgos cilvēkus vienā telpā un radiet impulsu nākamajam solim."],
    ],
    aboutEyebrow: "Pieredze zem spiediena",
    aboutTitle: "Veido cilvēki, kuri pazīst kontrolēto haosu.",
    aboutText: "Mūsu komanda ir organizējusi vairāk nekā 50 hakatonus. Mēs zinām, kā noturēt dalībnieku tempu, mentorus padarīt vērtīgus, uzņēmumu iesaistīt un fināla prezentācijas—skatīšanās vērtas.",
    aboutProof: "mūsu komandas organizēti hakatoni",
    faqEyebrow: "Labi jautājumi",
    faqTitle: "Pirms ieslēdzam laiku.",
    faqs: [
      ["Vai izaicinājumam jābūt tehniskam?", "Nē. Hakatons var risināt produktu, pakalpojumu, klientu pieredzes, ilgtspējas, procesu, komunikācijas vai izaugsmes izaicinājumus."],
      ["Kas piedalās?", "Mēs veidojam daudznozaru studentu komandas atbilstoši izaicinājumam un tam nepieciešamajām prasmēm."],
      ["Kas jānodrošina mūsu uzņēmumam?", "Nozīmīgs izaicinājums, neliela lēmumu pieņēmēju grupa un komandām nepieciešamais konteksts. Pārējo organizējam mēs."],
      ["Ar ko atšķiras 24h un 48h?", "24h sprints prioritizē ātrumu un konceptus. 48h formāts dod vairāk laika izpētei, testēšanai un prototipiem."],
      ["Kas notiek pēc hakatona?", "Mēs apkopojam spēcīgākos rezultātus un nākamo soļu ieteikumus, lai jūsu komanda var turpināt ar uzvarējušo virzienu."],
    ],
    bookEyebrow: "Vieta jūsu izaicinājumam",
    bookTitle: "Atnesiet mums problēmu, kuru visi turpina atlikt.",
    bookText: "Vienā īsā sarunā sapratīsim izaicinājumu, ieteiksim 24h vai 48h formātu un ieskicēsim iespējamo pieredzi.",
    calendarNote: "Izvēlieties laiku Cal.com. Apstiprinājumā saņemsiet Google Meet saiti.",
    footerLine: "Svaigi prāti. Īsti izaicinājumi. Taustāmi rezultāti.",
  },
} as const;

function useCountdown() {
  const [seconds, setSeconds] = useState(47 * 3600 + 59 * 60 + 48);
  useEffect(() => {
    const timer = window.setInterval(() => setSeconds((current) => current > 0 ? current - 1 : 48 * 3600), 1000);
    return () => window.clearInterval(timer);
  }, []);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return [hours, minutes, secs].map((part) => String(part).padStart(2, "0"));
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = copy[language];
  const countdown = useCountdown();

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="48h home">48<span>h</span></a>
        <nav aria-label="Primary navigation">
          <a href="#formats">{t.nav[1]}</a>
          <a href="#process">{t.nav[0]}</a>
          <a href="#outcomes">{t.nav[2]}</a>
          <a href="#about">{t.nav[3]}</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label="Language selector">
            <button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
            <button className={language === "lv" ? "active" : ""} onClick={() => setLanguage("lv")} aria-pressed={language === "lv"}>LV</button>
          </div>
          <a className="button button-small" href={bookingUrl} target="_blank" rel="noreferrer">{t.book} <span aria-hidden="true">↗</span></a>
        </div>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="pulse-dot" />{t.eyebrow}</p>
          <h1>{t.hero}</h1>
          <p className="lead">{t.intro}</p>
          <div className="hero-actions">
            <a className="button" href={bookingUrl} target="_blank" rel="noreferrer">{t.book} <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#formats">{t.explore} <span aria-hidden="true">↓</span></a>
          </div>
          <div className="proof-chip"><strong>50+</strong><span>{language === "en" ? "hackathons organised by our team" : "mūsu komandas organizēti hakatoni"}</span></div>
        </div>

        <div className="hero-stage" aria-label="48 hour hackathon countdown">
          <img className="hero-art" src="/48h-hero.webp" alt={t.objectsAlt} />
          <div className="timer-card timer-overlay">
            <div className="timer-topline"><span><i />{t.live}</span><span>48h / 01</span></div>
            <div className="timer" aria-hidden="true">
              {countdown.map((part, index) => <div className="timer-unit" key={index}><strong>{part}</strong>{index < 2 && <b>:</b>}</div>)}
            </div>
            <p>{t.timer}</p>
          </div>
          <div className="floating-note note-one">REAL CHALLENGE</div>
          <div className="floating-note note-two">TEAM 04</div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true"><div><span>CHALLENGE</span><b>✦</b><span>TEAMS</span><b>✦</b><span>MENTORS</span><b>✦</b><span>PROTOTYPE</span><b>✦</b><span>PITCH</span><b>✦</b><span>CHALLENGE</span><b>✦</b></div></div>

      <section className="formats section-shell" id="formats">
        <div className="section-heading"><div><p className="eyebrow">02 / {t.formatsEyebrow}</p><h2>{t.formatsTitle}</h2></div><p>{t.formatsIntro}</p></div>
        <div className="format-grid">
          <article className="format-card sprint-card">
            <div className="format-number">24<span>h</span></div>
            <div className="format-content"><div className="format-label"><i /> RAPID FORMAT</div><h3>{t.sprint}</h3><p>{t.sprintText}</p><ul>{t.sprintPoints.map((point) => <li key={point}>{point}</li>)}</ul><div className="best-for"><span>{t.bestFor}</span><strong>{t.sprintBest}</strong></div></div>
          </article>
          <article className="format-card hackathon-card">
            <div className="format-number">48<span>h</span></div>
            <div className="format-content"><div className="format-label"><i /> FULL FORMAT</div><h3>{t.hackathon}</h3><p>{t.hackathonText}</p><ul>{t.hackathonPoints.map((point) => <li key={point}>{point}</li>)}</ul><div className="best-for"><span>{t.bestFor}</span><strong>{t.hackathonBest}</strong></div></div>
          </article>
        </div>
      </section>

      <section className="problem-section">
        <div className="section-shell">
          <div className="section-heading problem-heading">
            <div><p className="eyebrow">03 / {t.problemEyebrow}</p><h2>{t.problemTitle}</h2></div>
            <p>{t.problemIntro}</p>
          </div>
          <div className="reason-grid">
            {t.reasons.map(([title, text], index) => (
              <article className={`reason-card reason-${index + 1}`} key={title}>
                <span>0{index + 1}</span><h3>{title}</h3><p>{text}</p>
                <div className="reason-doodle" aria-hidden="true">{index === 0 ? "↗ ↗" : index === 1 ? "□ → ■" : "● + ●"}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process section-shell" id="process">
        <div className="process-intro">
          <p className="eyebrow">04 / {t.processEyebrow}</p>
          <h2>{t.processTitle}</h2>
          <p>{t.processIntro}</p>
        </div>
        <div className="process-list">
          {t.steps.map(([title, text], index) => (
            <article className="process-step" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="included-section" id="outcomes">
        <div className="section-shell included-layout">
          <div className="object-board">
            <img src="/48h-objects.webp" alt={t.objectsAlt} loading="lazy" />
            <div className="object-label label-orange">IDEA / 07</div>
            <div className="object-label label-yellow">READY TO PITCH</div>
          </div>
          <div className="included-copy">
            <p className="eyebrow">05 / {t.includedEyebrow}</p>
            <h2>{t.includedTitle}</h2>
            <p>{t.includedIntro}</p>
            <div className="included-list">
              {t.included.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="outcomes section-shell">
        <div className="section-heading">
          <div><p className="eyebrow">06 / {t.outcomesEyebrow}</p><h2>{t.outcomesTitle}</h2></div>
          <p>{t.outcomesIntro}</p>
        </div>
        <div className="outcome-grid">
          {t.outcomes.map(([title, text], index) => (
            <article className="outcome-card" key={title}>
              <span>{index === 0 ? "↗↗↗" : index === 1 ? "◆" : "⚡"}</span>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-shell about-layout">
          <div className="about-copy">
            <p className="eyebrow">07 / {t.aboutEyebrow}</p>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutText}</p>
          </div>
          <div className="big-proof">
            <span>50+</span>
            <strong>{t.aboutProof}</strong>
            <div className="proof-orbit" aria-hidden="true"><i /><i /><i /></div>
          </div>
        </div>
      </section>

      <section className="faq section-shell">
        <div className="faq-heading">
          <p className="eyebrow">08 / {t.faqEyebrow}</p>
          <h2>{t.faqTitle}</h2>
        </div>
        <div className="faq-list">
          {t.faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary><span>{question}</span><i>+</i></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="book-section" id="book">
        <div className="book-noise" />
        <div className="section-shell book-layout">
          <div>
            <p className="eyebrow">09 / {t.bookEyebrow}</p>
            <h2>{t.bookTitle}</h2>
          </div>
          <div className="book-copy">
            <p>{t.bookText}</p>
            <a className="button booking-link" href={bookingUrl} target="_blank" rel="noreferrer">{t.book} <span aria-hidden="true">↗</span></a>
            <small>{t.calendarNote}</small>
          </div>
        </div>
        <div className="book-sticker" aria-hidden="true">48:00:00</div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">48<span>h</span></div>
        <p>{t.footerLine}</p>
        <div className="footer-links"><a href="#formats">24h</a><a href="#formats">48h</a><a href="#top">↑ TOP</a></div>
      </footer>
    </main>
  );
}
