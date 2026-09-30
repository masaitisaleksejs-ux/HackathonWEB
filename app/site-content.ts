export type Language = "en" | "lv";
export type PageKey = "corporate" | "sprint" | "hackathon" | "about";

export const siteUrl = "https://48h.lv";
export const bookingUrl = "https://cal.com/aleksejs-masaitis";
export const pageKeys: PageKey[] = ["corporate", "sprint", "hackathon", "about"];

export function isLanguage(value: string): value is Language {
  return value === "en" || value === "lv";
}

type Section = { title: string; text: string; points?: string[] };
export type DetailContent = {
  slug: string;
  title: string;
  description: string;
  label: string;
  heading: string;
  intro: string;
  mark: string;
  sections: Section[];
  questions: [string, string][];
};

export const pages: Record<Language, Record<PageKey, DetailContent>> = {
  en: {
    corporate: {
      slug: "corporate-hackathons",
      title: "Hackathon Organisation for Companies in Latvia | 48h",
      description: "Full-service corporate hackathon organisation in Latvia: challenge design, student teams, mentors, programme and final pitches. Choose 24h or 48h.",
      label: "Hackathon organisation",
      heading: "Your company’s challenge. A room full of fresh thinking.",
      intro: "48h organises corporate hackathons in Latvia. We bring multidisciplinary student teams, mentors and your company together to explore one real business challenge. You get several concepts or prototypes to compare, with clear recommendations for what to test next.",
      mark: "24 / 48",
      sections: [
        { title: "Start with a problem worth solving", text: "A useful brief explains who has the problem, why it matters and what a better outcome would look like. It gives teams room to explore several answers. In our first call, we help you narrow a broad ambition into a challenge that fits the available time.", points: ["Products and services: explore a new offer or improve an existing experience.", "Customer journeys: investigate friction in onboarding, access or communication.", "Operations and sustainability: question a process and develop alternative approaches."] },
        { title: "One partner for the whole event", text: "We coordinate the challenge brief, participant recruitment, team formation, mentors, jury, programme, facilitation, event environment and wrap-up. Your company stays involved where its knowledge matters: the challenge introduction, mentoring checkpoints and judging.", points: ["Before: agree the brief, format, participant skills and judging criteria.", "During: guide research, ideation, testing and final presentations.", "After: organise the strongest outputs and next-step recommendations."] },
        { title: "Choose the depth of the sprint", text: "The 24h Sprint suits a focused question where you want early concepts quickly. The 48h Hackathon leaves more time for research, feedback and prototyping. We recommend the format around the challenge rather than asking teams to fit an unsuitable task into a fixed schedule." },
        { title: "What to prepare for the first call", text: "Bring the business problem, the people it affects and the decision you want the hackathon to support. A preferred date, approximate participant scale and budget range help us shape a practical proposal. A fully written challenge brief is not required.", points: ["Identify a company contact who can answer teams’ questions.", "Decide what context or data participants can use.", "Discuss confidentiality, output ownership and any technical requirements before recruitment."] },
      ],
      questions: [
        ["How much does a corporate hackathon cost?", "We quote each event around its scope. Duration, participant numbers, venue, catering, mentor support, technical requirements and the prize pool all affect the budget. Book a call so we can define what is included and provide a proposal."],
        ["Does a hackathon deliver a finished product?", "The expected output is a concept, prototype or tested direction. A production-ready product usually needs further development. We agree the expected level of detail and evaluation criteria before the event."],
        ["Who takes part?", "We recruit multidisciplinary student teams around the skills the challenge needs. Your company contributes context and feedback; mentors help teams improve their approach."],
      ],
    },
    sprint: {
      slug: "24h-sprint",
      title: "24h Innovation Sprint for Companies in Latvia | 48h",
      description: "A 24-hour innovation sprint for a focused business challenge. Student teams research, develop concepts and present fresh solutions, organised by 48h.",
      label: "24h Sprint",
      heading: "One focused question. 24 hours to find new directions.",
      intro: "The 24h Sprint is a concentrated innovation format for companies that want fresh concepts and a clearer next step. Student teams explore your challenge, develop different approaches and present them to a jury. 48h organises the people, programme and checkpoints.",
      mark: "24h",
      sections: [
        { title: "When 24 hours is the right fit", text: "Choose a sprint when the problem is focused and teams can access enough context to make progress quickly. It is useful for exploring an early opportunity or comparing approaches before you commit to a larger project.", points: ["Explore improvements to one part of a customer journey.", "Develop concepts for a new service or communication approach.", "Find alternative ways to address a clearly defined process problem."] },
        { title: "An example sprint journey", text: "The exact programme follows your challenge and participants. A typical sequence starts with the brief and company questions, moves into rapid research and ideation, then gives teams a feedback checkpoint before the final pitch.", points: ["Understand: agree the user, problem and constraints.", "Explore: research the context and develop several ideas.", "Sharpen: get mentor feedback and test key assumptions where possible.", "Present: explain the concept, evidence and proposed next step."] },
        { title: "What your company receives", text: "The sprint prioritises clear concepts, the reasoning behind them and recommendations for further testing. Teams may show sketches, customer journeys, simple demonstrations or experiments where these help explain a solution. Deliverables are agreed in the brief, so the jury compares work against the same criteria." },
        { title: "Make fast progress possible", text: "A company representative should be available for the introduction and key questions. Existing research, process examples and clear constraints help participants spend their time on solutions. We coordinate recruitment, team formation, mentors, facilitation, judging and the wrap-up.", points: ["Keep the brief specific enough to explore within a day.", "Give teams accessible context before they begin.", "Choose how you will assess relevance, feasibility and originality."] },
      ],
      questions: [
        ["Is 24h enough to build a prototype?", "A simple prototype or sketch may be possible, depending on the challenge and team skills. The format’s main goal is useful concepts and evidence for the next decision. Choose 48h when deeper prototyping is central to the brief."],
        ["How do we choose between 24h and 48h?", "Choose 24h for a focused question and early concepts. Choose 48h when teams need more time for research, feedback, testing and a tangible prototype. We will discuss the tradeoff in the first call."],
        ["Can the sprint address a nontechnical challenge?", "Yes. A challenge can concern services, communication, customer experience, operations or sustainability. We shape the participant skills and expected outputs around the problem."],
      ],
    },
    hackathon: {
      slug: "48h-hackathon",
      title: "48h Corporate Hackathon and Prototyping in Latvia | 48h",
      description: "A 48-hour corporate hackathon with student teams, mentors, research, testing and prototypes. Full event organisation for real business challenges in Latvia.",
      label: "48h Hackathon",
      heading: "Give fresh ideas time to become something tangible.",
      intro: "The 48h Hackathon gives student teams more room to understand a business challenge, build a prototype and improve it through feedback. Your company supplies the real context. 48h shapes the brief and runs the event from recruitment to final pitches.",
      mark: "48h",
      sections: [
        { title: "Choose 48h for a deeper build", text: "This format fits challenges where an idea needs a demonstration, more research or several rounds of feedback. Teams can show how a proposed product, service or process could work and explain the assumptions that still need testing.", points: ["Explore a product or service concept through a prototype.", "Investigate a more complex customer or operational problem.", "Compare multiple approaches with company and mentor feedback."] },
        { title: "An example two-day programme", text: "We tailor the sequence to your challenge. The first part focuses on understanding the problem, research, ideas and an initial build. The second part gives teams time to test, respond to mentor feedback and prepare a clear demonstration for the jury.", points: ["Challenge reveal: company context, questions and judging criteria.", "Research and build: teamwork with structured mentor checkpoints.", "Test and refine: feedback on the idea and its key assumptions.", "Final pitch: demonstrate the prototype and explain a practical next step."] },
        { title: "Prototypes that support a decision", text: "Depending on the brief, a prototype might be an interactive mock-up, a service journey, a simple software demonstration or a model of a proposed process. It should make the idea easier to assess. The final presentation also explains the intended users, supporting evidence and what would need to happen next." },
        { title: "Your role and our role", text: "Your team helps participants understand the challenge and gives feedback at agreed points. We coordinate participant recruitment, mentors, jury, facilitation, programme, event environment and wrap-up. Before the event, we agree access to data, technical constraints, confidentiality and expectations for the outputs.", points: ["Assign a company contact for questions and checkpoints.", "Choose judging criteria tied to your business objective.", "Plan who will review the strongest ideas after the event."] },
      ],
      questions: [
        ["Will the winning prototype be ready to launch?", "Usually it will be a concept or early prototype. Launching may require further validation, design and development. We agree the expected output in advance and capture next-step recommendations in the wrap-up."],
        ["Does every participant need to be a developer?", "No. Research, business, design, communication and technical skills can all matter. We build multidisciplinary student teams around what your challenge requires."],
        ["What affects the event budget?", "Duration, participant scale, venue, catering, mentor support, technical needs and the prize pool affect the scope. We discuss these before preparing a proposal."],
      ],
    },
    about: {
      slug: "about",
      title: "About 48h | Hackathon Organisers in Latvia",
      description: "Meet 48h cofounders Aleksejs Masaitis and Ralfs Roga. Our team has organised 50+ hackathons and brings student teams together around real company challenges.",
      label: "About 48h",
      heading: "People who know how to turn pressure into progress.",
      intro: "48h is a Latvia-focused hackathon organisation business founded by Aleksejs Masaitis and Ralfs Roga. We connect companies with multidisciplinary student teams to explore real business challenges in a 24h Sprint or 48h Hackathon.",
      mark: "50+",
      sections: [
        { title: "The people behind 48h", text: "Aleksejs Masaitis and Ralfs Roga are the cofounders of 48h. Our work brings together the company’s challenge, the right participant skills and a programme that helps teams keep moving. You can book an introductory call with Aleksejs to discuss an event." },
        { title: "Experience carried into a new brand", text: "Our team has organised more than 50 hackathons. That is the team’s combined organising experience, including work before the 48h brand. It informs how we frame challenges, support participants, coordinate mentors and make final pitches useful to the company." },
        { title: "One real challenge at the centre", text: "We start with a problem your company wants to explore. Teams need a clear brief, access to context and feedback from people who understand the business. Our aim is to create several useful directions, tangible concepts or prototypes, and a practical next step.", points: ["Fresh perspectives from multidisciplinary student teams.", "Structured mentoring and visible progress during the event.", "Judging criteria agreed with the company before the sprint."] },
        { title: "Full organisation, with your company involved", text: "48h coordinates challenge design, participant recruitment, team formation, mentors and jury, the programme, facilitation and wrap-up. Your team contributes business knowledge and participates in the decisions that matter. We choose the format and event scope with you during planning." },
      ],
      questions: [
        ["Where does 48h work?", "Our offer focuses on corporate hackathons in Latvia. Discuss your preferred location and event needs in the introductory call so we can plan the scope together."],
        ["How do we begin?", "Book a call with Aleksejs Masaitis through the calendar. Bring a brief description of the challenge, your preferred timing and what you hope to learn from the event."],
      ],
    },
  },
  lv: {
    corporate: {
      slug: "hakatonu-organizesana",
      title: "Pilna servisa hakatonu organizēšana uzņēmumiem | 48h",
      description: "Pilna servisa hakatonu organizēšana Latvijā: izaicinājuma izstrāde, studentu komandas, mentori, programma un fināla prezentācijas. 24h un 48h formāti.",
      label: "Hakatonu organizēšana",
      heading: "Jūsu uzņēmuma izaicinājums. Telpa pilna ar svaigu skatījumu.",
      intro: "48h organizē hakatonus uzņēmumiem Latvijā. Apvienojam daudznozaru studentu komandas, mentorus un jūsu uzņēmumu, lai izpētītu vienu reālu biznesa izaicinājumu. Rezultātā varat salīdzināt vairākus konceptus vai prototipus un izvēlēties, ko pārbaudīt tālāk.",
      mark: "24 / 48",
      sections: [
        { title: "Sākam ar problēmu, kuru ir vērts risināt", text: "Labs uzdevums paskaidro, kam ir šī problēma, kāpēc tā ir svarīga un kāds būtu vēlamais uzlabojums. Tas atstāj komandām iespēju meklēt dažādas atbildes. Pirmajā sarunā palīdzam plašu ieceri pārvērst konkrētā izaicinājumā, kas atbilst pieejamajam laikam.", points: ["Produkti un pakalpojumi: izpētīt jaunu piedāvājumu vai uzlabot esošu pieredzi.", "Klientu pieredze: atrast šķēršļus pakalpojuma uzsākšanā, pieejamībā vai komunikācijā.", "Procesi un ilgtspēja: izvērtēt esošo pieeju un izstrādāt alternatīvas."] },
        { title: "Viens partneris visam pasākumam", text: "Koordinējam izaicinājuma aprakstu, dalībnieku piesaisti, komandu veidošanu, mentorus, žūriju, programmu, vadīšanu, pasākuma vidi un noslēgumu. Jūsu uzņēmums iesaistās tur, kur tā zināšanas ir visvērtīgākās: uzdevuma ievadā, mentoringa kontrolpunktos un vērtēšanā.", points: ["Pirms pasākuma: vienojamies par uzdevumu, formātu, dalībnieku prasmēm un vērtēšanas kritērijiem.", "Pasākumā: vadām izpēti, ideju radīšanu, testēšanu un fināla prezentācijas.", "Pēc pasākuma: apkopojam spēcīgākos rezultātus un nākamo soļu ieteikumus."] },
        { title: "Izvēlamies izaicinājumam atbilstošu dziļumu", text: "24h sprints ir piemērots konkrētam jautājumam un ātrai sākotnējo konceptu izstrādei. 48h hakatons dod vairāk laika izpētei, atgriezeniskajai saitei un prototipiem. Formātu iesakām atbilstoši uzdevumam, lai dalībniekiem būtu reāla iespēja sasniegt vēlamo rezultātu." },
        { title: "Ko sagatavot pirmajai sarunai", text: "Pastāstiet par biznesa problēmu, cilvēkiem, kurus tā skar, un lēmumu, kuru hakatons palīdzētu pieņemt. Vēlamais datums, aptuvenais dalībnieku skaits un budžeta diapazons palīdzēs izveidot praktisku piedāvājumu. Gatavs uzdevuma apraksts nav nepieciešams.", points: ["Izvēlieties uzņēmuma pārstāvi, kurš var atbildēt uz komandu jautājumiem.", "Pārdomājiet, kādu informāciju vai datus drīkst izmantot dalībnieki.", "Pirms dalībnieku piesaistes pārrunājam konfidencialitāti, rezultātu īpašumtiesības un tehniskās prasības."] },
      ],
      questions: [
        ["Cik maksā hakatona organizēšana?", "Katram pasākumam sagatavojam piedāvājumu atbilstoši apjomam. Budžetu ietekmē ilgums, dalībnieku skaits, telpas, ēdināšana, mentoru iesaiste, tehniskās prasības un balvu fonds. Sarunā precizējam, kas ir iekļauts, un sagatavojam piedāvājumu."],
        ["Vai rezultāts ir gatavs produkts?", "Paredzētais rezultāts ir koncepts, prototips vai pārbaudīts risinājuma virziens. Gatavam produktam parasti nepieciešama turpmāka izstrāde. Pirms pasākuma vienojamies par sagaidāmo detalizācijas līmeni un vērtēšanas kritērijiem."],
        ["Kas piedalās hakatonā?", "Piesaistām daudznozaru studentu komandas atbilstoši izaicinājumam nepieciešamajām prasmēm. Uzņēmums sniedz kontekstu un atgriezenisko saiti, savukārt mentori palīdz uzlabot risinājumu pieeju."],
      ],
    },
    sprint: {
      slug: "24h-sprints",
      title: "24h inovāciju sprints uzņēmumiem Latvijā | 48h",
      description: "24 stundu inovāciju sprints konkrētam biznesa izaicinājumam. Studentu komandas pēta, izstrādā konceptus un prezentē risinājumus. Organizē 48h.",
      label: "24h sprints",
      heading: "Viens konkrēts jautājums. 24 stundas jauniem virzieniem.",
      intro: "24h sprints ir koncentrēts inovāciju formāts uzņēmumiem, kuri vēlas svaigus konceptus un skaidrāku nākamo soli. Studentu komandas izpēta jūsu izaicinājumu, attīsta dažādas pieejas un prezentē tās žūrijai. 48h organizē dalībniekus, programmu un kontrolpunktus.",
      mark: "24h",
      sections: [
        { title: "Kad izvēlēties 24 stundu sprintu", text: "Sprints ir piemērots konkrētai problēmai, kuras izpētei komandas var ātri saņemt nepieciešamo informāciju. Tas palīdz izvērtēt agrīnu iespēju vai salīdzināt risinājumu pieejas, pirms sākat lielāku projektu.", points: ["Izpētīt uzlabojumus vienā klientu pieredzes posmā.", "Izstrādāt jauna pakalpojuma vai komunikācijas pieejas konceptus.", "Atrast alternatīvas skaidri definētai procesu problēmai."] },
        { title: "Sprinta norises piemērs", text: "Precīzu programmu pielāgojam izaicinājumam un dalībniekiem. Parasti sākam ar uzdevuma ievadu un jautājumiem uzņēmumam, turpinām ar ātru izpēti un idejām, bet pirms fināla prezentācijas komandas saņem atgriezenisko saiti.", points: ["Saprast: precizēt lietotāju, problēmu un ierobežojumus.", "Izpētīt: iepazīt kontekstu un izstrādāt vairākas idejas.", "Uzlabot: saņemt mentoru ieteikumus un, kur iespējams, pārbaudīt būtiskos pieņēmumus.", "Prezentēt: paskaidrot konceptu, pierādījumus un nākamo soli."] },
        { title: "Ko saņem jūsu uzņēmums", text: "Sprinta prioritāte ir skaidri koncepti, to pamatojums un ieteikumi turpmākai pārbaudei. Komandas var izmantot skices, klientu ceļus, vienkāršas demonstrācijas vai eksperimentus, ja tie palīdz izskaidrot risinājumu. Par rezultātiem vienojamies uzdevumā, lai žūrija darbus salīdzinātu pēc vienādiem kritērijiem." },
        { title: "Kas palīdz sasniegt rezultātu ātri", text: "Uzņēmuma pārstāvim jābūt pieejamam ievadam un svarīgākajiem jautājumiem. Esošie pētījumi, procesu piemēri un skaidri ierobežojumi palīdz dalībniekiem koncentrēties uz risinājumiem. Mēs koordinējam dalībnieku piesaisti, komandas, mentorus, vadīšanu, vērtēšanu un noslēgumu.", points: ["Definējiet uzdevumu, kuru iespējams izpētīt vienā dienā.", "Nodrošiniet komandām saprotamu sākotnējo informāciju.", "Izvēlieties, kā vērtēsiet atbilstību, īstenojamību un oriģinalitāti."] },
      ],
      questions: [
        ["Vai 24 stundās var izveidot prototipu?", "Vienkāršs prototips vai skice var būt iespējama atkarībā no uzdevuma un komandas prasmēm. Galvenais mērķis ir noderīgi koncepti un pamatojums nākamajam lēmumam. Izvēlieties 48h, ja uzdevuma centrā ir padziļināta prototipēšana."],
        ["Kā izvēlēties starp 24h un 48h?", "24h izvēlieties konkrētam jautājumam un sākotnējiem konceptiem. 48h ir piemērotāks, ja nepieciešams vairāk laika izpētei, atgriezeniskajai saitei, testēšanai un prototipam. Atšķirības pārrunājam pirmajā sarunā."],
        ["Vai sprints der netehniskam izaicinājumam?", "Jā. Uzdevums var būt saistīts ar pakalpojumiem, komunikāciju, klientu pieredzi, procesiem vai ilgtspēju. Dalībnieku prasmes un sagaidāmos rezultātus pielāgojam problēmai."],
      ],
    },
    hackathon: {
      slug: "48h-hakatons",
      title: "48h hakatons un prototipēšana uzņēmumiem Latvijā | 48h",
      description: "48 stundu hakatons ar studentu komandām, mentoriem, izpēti, testēšanu un prototipiem. Pilna pasākuma organizēšana biznesa izaicinājumiem Latvijā.",
      label: "48h hakatons",
      heading: "Dodiet svaigām idejām laiku kļūt taustāmām.",
      intro: "48h hakatons dod studentu komandām vairāk laika izprast biznesa izaicinājumu, izveidot prototipu un uzlabot to ar atgriezenisko saiti. Jūsu uzņēmums sniedz reālo kontekstu. 48h izstrādā uzdevumu un organizē pasākumu no dalībnieku piesaistes līdz fināla prezentācijām.",
      mark: "48h",
      sections: [
        { title: "Izvēlieties 48h padziļinātai izstrādei", text: "Šis formāts ir piemērots izaicinājumiem, kuros idejai nepieciešama demonstrācija, papildu izpēte vai vairākas atgriezeniskās saites kārtas. Komandas parāda, kā varētu darboties produkts, pakalpojums vai process, un paskaidro, kuri pieņēmumi vēl jāpārbauda.", points: ["Izpētīt produkta vai pakalpojuma konceptu ar prototipu.", "Iedziļināties sarežģītākā klientu vai procesu problēmā.", "Salīdzināt vairākas pieejas ar uzņēmuma un mentoru atgriezenisko saiti."] },
        { title: "Divu dienu programmas piemērs", text: "Norisi pielāgojam jūsu izaicinājumam. Pirmajā daļā komandas izprot problēmu, pēta, rada idejas un sāk izstrādi. Otrā daļa dod laiku testēšanai, mentoru ieteikumu ieviešanai un skaidrai demonstrācijai žūrijai.", points: ["Izaicinājuma atklāšana: uzņēmuma konteksts, jautājumi un vērtēšanas kritēriji.", "Izpēte un izstrāde: komandu darbs ar strukturētiem mentoringa kontrolpunktiem.", "Testēšana un uzlabošana: atgriezeniskā saite par ideju un tās pieņēmumiem.", "Fināla prezentācija: prototipa demonstrācija un praktisks nākamais solis."] },
        { title: "Prototips, kas palīdz pieņemt lēmumu", text: "Atkarībā no uzdevuma prototips var būt interaktīvs makets, pakalpojuma ceļš, vienkārša programmatūras demonstrācija vai piedāvāta procesa modelis. Tam jāpalīdz novērtēt ideju. Fināla prezentācija izskaidro arī paredzētos lietotājus, pamatojumu un nākamos darbus." },
        { title: "Jūsu un mūsu loma", text: "Jūsu komanda palīdz izprast izaicinājumu un sniedz atgriezenisko saiti norunātos brīžos. Mēs koordinējam dalībnieku piesaisti, mentorus, žūriju, vadīšanu, programmu, pasākuma vidi un noslēgumu. Pirms pasākuma vienojamies par datiem, tehniskajiem ierobežojumiem, konfidencialitāti un sagaidāmajiem rezultātiem.", points: ["Izvēlieties uzņēmuma kontaktpersonu jautājumiem un kontrolpunktiem.", "Sasaistiet vērtēšanas kritērijus ar biznesa mērķi.", "Ieplānojiet, kurš pēc pasākuma izvērtēs spēcīgākās idejas."] },
      ],
      questions: [
        ["Vai uzvarējušo prototipu var uzreiz ieviest?", "Parasti tas ir koncepts vai agrīns prototips. Ieviešanai var būt nepieciešama papildu pārbaude, dizains un izstrāde. Par sagaidāmo rezultātu vienojamies iepriekš, bet noslēgumā apkopojam nākamo soļu ieteikumus."],
        ["Vai visiem dalībniekiem jābūt programmētājiem?", "Nē. Svarīgas var būt izpētes, biznesa, dizaina, komunikācijas un tehniskās prasmes. Veidojam daudznozaru studentu komandas atbilstoši izaicinājumam."],
        ["Kas ietekmē pasākuma budžetu?", "Apjomu ietekmē ilgums, dalībnieku skaits, telpas, ēdināšana, mentoru iesaiste, tehniskās vajadzības un balvu fonds. Šos jautājumus pārrunājam pirms piedāvājuma sagatavošanas."],
      ],
    },
    about: {
      slug: "par-mums",
      title: "Par 48h | Hakatonu organizētāji Latvijā",
      description: "Iepazīstiet 48h līdzdibinātājus Alekseju Masaiti un Ralfu Rogu. Mūsu komanda organizējusi vairāk nekā 50 hakatonus reāliem uzņēmumu izaicinājumiem.",
      label: "Par 48h",
      heading: "Cilvēki, kuri zina, kā pārvērst spiedienu progresā.",
      intro: "48h ir uz Latviju orientēts hakatonu organizēšanas uzņēmums, kura līdzdibinātāji ir Aleksejs Masaitis un Ralfs Roga. Savienojam uzņēmumus ar daudznozaru studentu komandām, lai izpētītu reālus biznesa izaicinājumus 24h sprintā vai 48h hakatonā.",
      mark: "50+",
      sections: [
        { title: "Cilvēki aiz 48h", text: "Aleksejs Masaitis un Ralfs Roga ir 48h līdzdibinātāji. Mūsu darbs apvieno uzņēmuma izaicinājumu, atbilstošas dalībnieku prasmes un programmu, kas palīdz komandām virzīties uz priekšu. Lai pārrunātu pasākumu, varat pieteikt iepazīšanās sarunu ar Alekseju." },
        { title: "Pieredze, kas turpinās jaunā zīmolā", text: "Mūsu komanda ir organizējusi vairāk nekā 50 hakatonus. Tā ir komandas kopējā organizēšanas pieredze, tostarp darbs pirms 48h zīmola. Šī pieredze palīdz formulēt izaicinājumus, atbalstīt dalībniekus, koordinēt mentorus un veidot uzņēmumam noderīgas fināla prezentācijas." },
        { title: "Centrā ir viens reāls izaicinājums", text: "Sākam ar problēmu, kuru jūsu uzņēmums vēlas izpētīt. Komandām nepieciešams skaidrs uzdevums, pieejams konteksts un atgriezeniskā saite no cilvēkiem, kuri pārzina biznesu. Mērķis ir vairāki noderīgi virzieni, taustāmi koncepti vai prototipi un praktisks nākamais solis.", points: ["Svaigs skatījums no daudznozaru studentu komandām.", "Strukturēts mentorings un redzams progress pasākuma laikā.", "Ar uzņēmumu saskaņoti vērtēšanas kritēriji pirms sprinta."] },
        { title: "Pilna organizēšana ar uzņēmuma iesaisti", text: "48h koordinē izaicinājuma izstrādi, dalībnieku piesaisti, komandas, mentorus un žūriju, programmu, vadīšanu un noslēgumu. Jūsu komanda sniedz biznesa zināšanas un piedalās svarīgākajos lēmumos. Formātu un pasākuma apjomu izvēlamies kopā plānošanas laikā." },
      ],
      questions: [
        ["Kur strādā 48h?", "Mūsu piedāvājums koncentrējas uz hakatoniem uzņēmumiem Latvijā. Pirmajā sarunā pārrunājam vēlamo vietu un pasākuma vajadzības, lai kopā ieplānotu apjomu."],
        ["Kā sākt sadarbību?", "Kalendārā piesakiet sarunu ar Alekseju Masaiti. Sagatavojiet īsu izaicinājuma aprakstu, vēlamo laiku un to, ko cerat noskaidrot pasākumā."],
      ],
    },
  },
};

export function pagePath(language: Language, key: PageKey) {
  return `/${language}/${pages[language][key].slug}`;
}

export function findPage(language: Language, slug: string) {
  return pageKeys.find((key) => pages[language][key].slug === slug);
}

export const ui = {
  en: { home: "Home", services: "Services", book: "Book a call", questions: "Before you book", related: "Explore 48h", cta: "Let’s shape your challenge.", ctaText: "Tell us what your company wants to explore. We’ll discuss the format, people and event scope in an introductory call.", proof: "hackathons organised by our team", contents: "On this page", navigation: "Primary navigation", language: "Language selector" },
  lv: { home: "Sākums", services: "Pakalpojumi", book: "Pieteikt sarunu", questions: "Pirms piesakāt sarunu", related: "Iepazīstiet 48h", cta: "Definēsim jūsu izaicinājumu.", ctaText: "Pastāstiet, ko jūsu uzņēmums vēlas izpētīt. Iepazīšanās sarunā pārrunāsim formātu, dalībniekus un pasākuma apjomu.", proof: "mūsu komandas organizēti hakatoni", contents: "Šajā lapā", navigation: "Galvenā navigācija", language: "Valodas izvēle" },
} as const;
