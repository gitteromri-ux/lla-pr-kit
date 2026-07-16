// All 22 ready-to-paste articles from the eTeacher / LLA PR campaign deck.
// Each: chapter, id, kicker, targets, headline, subhead, body, ceoQuote, julieQuote (optional), note (optional)
const CHAPTERS = [
  {n:"Chapter 1 of 4", title:"eTeacher Launches Longevity Life Academy", msg:"A leading global EdTech group brings live, science-backed longevity education to American homes.", color:"h1c"},
  {n:"Chapter 2 of 4", title:"Julie Joins eTeacher's Longevity Life Academy", msg:"The single mom who out-aged the billionaires now teaches live for eTeacher.", color:"h2c"},
  {n:"Chapter 3 of 4", title:"The Longevity Hub App (Roadmap)", msg:"eTeacher's longevity practice, in your pocket — a planned AI tutor and daily rituals.", color:"h3c"},
  {n:"Chapter 4 of 4", title:"Six New Longevity Courses (Roadmap)", msg:"eTeacher is building a full longevity college — not a single course.", color:"h4c"},
  {n:"Chapter 5", title:"The Longevity Reset: Consistency Over Cost", msg:"You don't need $2 million a year to live longer — you need a live teacher, a small class, and habits that stick.", color:"h1c"}
];

const ARTICLES = [
  {
    chapter:0, id:"1.1", kicker:"Flagship national-wire announcement",
    targets:"PR Newswire (national wire) → Forbes / Bloomberg pickup",
    headline:"25-Year-Old Global Education Company eTeacher Group Enters the $8 Trillion Longevity Market With Longevity Life Academy",
    subhead:"eTeacher Group — 400,000+ courses delivered across nearly 200 countries — opens its fifth online school and makes science-backed longevity genuinely accessible: not through price alone, but through the teaching method it spent 25 years perfecting — bite-size daily learning, live expert instruction, a real cohort, and habits engineered to stick.",
    body:`FOR IMMEDIATE RELEASE — eTeacher Group, one of the world's longest-running online-education companies with 25 years of operating live cohorts at global scale, today announced its entry into the longevity market with Longevity Life Academy (LLA), its fifth proprietary online school. LLA is built on a simple conviction: the science of living longer is no longer the hard part — following through on it is. Its answer is a teaching method, refined over a quarter-century, that makes longevity science accessible to anyone willing to show up.

The move is a considered category bet, not an experiment. UBS projects the longevity market will reach roughly $8 trillion by 2030, up from $5.3 trillion in 2023, yet most offerings sit at two extremes: concierge clinics that cost a fortune, or unvetted social-media advice that no one sticks with. eTeacher enters the underserved middle from a position of strength — more than 10,000 learners a year, 400,000+ courses delivered across nearly 200 countries, and roughly 70% of its customers already in the United States.

LLA's flagship program, "The Longevity Blueprint," is a guided protocol built around each student's own biology, their own numbers, and the daily practice that turns the next decades into their strongest. It runs as an 18-week live course — 18 sessions across four phases, 50 minutes weekly, in cohorts of 8–15 — where leading experts teach in bite-size lessons, a community keeps students accountable, and each habit is engineered to become permanent. Every student receives an Abbott Lingo continuous glucose monitor, shipped to their US home before Lesson 5, so learning is grounded in their own body data rather than generic rules.

The course is taught by named instructors, including researcher Natalie Blackbourne and UC Santa Barbara senior lecturer Amy Jamieson, on the same purpose-built platform behind eTeacher's decades of accredited academic coursework — the engagement engine that has helped hundreds of thousands of learners actually finish what they start.

The Longevity Blueprint is enrolling now from $289 per month, and eTeacher says additional longevity courses and a companion practice app are on its roadmap for the year ahead.`,
    ceoQuote:`For twenty-five years we have taught one thing well: real people learn from real teachers, live, in a small group that carries them forward. The science of living longer is already here — what has been missing is a way for ordinary people to actually keep it. That is what we teach: small lessons, real habits, a community beside you. Longevity has been sold as a luxury. We are making it a discipline anyone can learn.`,
    note:"NET-NEW CEO statement — flagged for Harel's approval. Written fresh in his voice; deliberately does NOT reuse any of his published TheMarker lines."
  },
  {
    chapter:0, id:"1.2", kicker:"EdTech trade story — the live-learning method applied to longevity",
    targets:"EdSurge / EdTech Magazine / TechCrunch",
    headline:"The EdTech Company That Delivered 400,000+ Live Courses Is Taking On Wellness's Hardest Problem: Follow-Through",
    subhead:"With Longevity Life Academy, eTeacher Group applies the small-class, live-teaching method it refined over 25 years to the metric the wellness industry keeps failing — completion — backing every student with an instructor, a cohort, and their own biomarker data.",
    body:`FOR IMMEDIATE RELEASE — eTeacher Group built its 25-year reputation on a method, not a subject: leading experts teaching live in small classes, bite-size lessons delivered daily between sessions, and a cohort that keeps every learner engaged until the habit sticks. With Longevity Life Academy, the company is aiming that method at a subject where it matters more than almost anywhere else — living longer.

It is a pointed answer to the industry's real failure. Self-guided wellness content is everywhere, but completion is rare; eTeacher argues that longevity, like language, is a practice that collapses without engagement. Where most programs hand over a PDF and hope, LLA is engineered for follow-through: a weekly live "anchor" session with an expert, short daily practice designed to fit a real schedule, and a small community that makes showing up the default rather than the exception.

In Longevity Life Academy, that method becomes an 18-week live cohort of 8–15 students, 50 minutes weekly across four phases, with guided daily experiments tied to each student's own glucose, sleep, and movement data. An Abbott Lingo continuous glucose monitor ships to every US student before Lesson 5, turning abstract lessons into personal feedback loops the student can feel.

The academy runs on eTeacher's purpose-built engagement platform and small-cohort structure — the same infrastructure that has carried hundreds of thousands of learners through to completion — taught by named instructors such as nutrition coach Courtney Donofrio and behavioral specialist Jordan Lattimore.

eTeacher says an AI longevity tutor and a companion practice app are on the roadmap, extending the daily-engagement layer across its five schools.`,
    ceoQuote:`Information about living longer is everywhere and almost no one follows through. The hard part was never the science — it was staying with it. Everything we build is aimed at that one problem: a live teacher, a small class, a community around you, and a step small enough that you actually take it before the next session. That is how a habit becomes a life.`,
    note:"NET-NEW CEO statement — flagged for Harel's approval. Fresh in his voice; does NOT reuse the published 'gym for the brain' line."
  },
  {
    chapter:0, id:"1.3", kicker:"Business / market-entry — the gap between $2M clinics and free advice",
    targets:"Bloomberg / Business Insider / CNBC",
    headline:"eTeacher Group Bets 25 Years of Global Scale on the $8 Trillion Longevity Market's Missing Middle Class",
    subhead:"Between $2-million concierge clinics and free, unverified advice sits the mainstream longevity customer no one serves well. eTeacher's edge isn't a lower price — it's a proven teaching engine: bite-size live instruction, leading experts, community, and habit design that has carried 400,000+ learners to completion. Longevity Life Academy brings that engine to healthspan, from $289 a month.",
    body:`FOR IMMEDIATE RELEASE — eTeacher Group is entering one of consumer health's fastest-growing categories, launching Longevity Life Academy to serve a customer its CEO argues no one serves well: the mainstream household that wants rigorous, science-backed longevity guidance and will actually stay with it. The gap isn't only between $2-million clinics and free advice — it's between information and follow-through.

The opportunity is large and split. UBS values the longevity market at $5.3 trillion in 2023, rising toward $8 trillion by 2030, while the narrower healthspan-product market is estimated at $25 billion-plus today, growing toward roughly $63 billion by 2035, per Market Research Future. Yet rigor, engagement, and accessibility rarely coexist in one offering.

eTeacher's real advantage is one rivals would take years to build: a teaching method proven to make learning stick. Over 25 years it has delivered 400,000+ courses across nearly 200 countries using live experts in small cohorts, bite-size daily practice, and a community that drives completion — with roughly 70% of its customers already in the US and a proven billing and retention engine (payments partner Nuvei) behind it.

Its flagship Longevity Blueprint applies that method to healthspan: 18 live sessions, the engagement platform, leading instructors, and an Abbott Lingo continuous glucose monitor shipped to the student's US home, from $289 per month. Accessibility here means more than affordable — it means designed so an ordinary person can actually complete it and keep the results.

eTeacher plans to broaden the catalog with additional longevity courses over the coming year, deepening its position in the mainstream tier of the market.`,
    ceoQuote:`People assume the missing piece in longevity is money. It isn't — it is method. The market gives you a clinic you can't afford or a feed you can't trust, and neither teaches you how to actually change. We spent twenty-five years learning how to make people finish what they start. That is what we are bringing to healthy aging.`,
    note:"NET-NEW CEO statement — flagged for Harel's approval. Fresh in his voice; does NOT reuse the published 'Wiz of edtech' line."
  },
  {
    chapter:0, id:"1.4", kicker:"Health / longevity vertical — CGM in every hand, biomarker-driven",
    targets:"Longevity.Technology / Fierce Healthcare / MedCity News",
    headline:"Longevity Life Academy Builds Each Student's Protocol Around Their Own Biology — Continuous Glucose Monitor Included",
    subhead:"eTeacher's new school teaches science-backed longevity from the student's own numbers, not generic advice — a guided, six-pillar protocol built on their biology and delivered through the live, bite-size method that makes it stick.",
    body:`FOR IMMEDIATE RELEASE — Longevity Life Academy is built on a Medicine 3.0 premise: your protocol should come from your own biology, your own numbers, and a daily practice you can actually keep — not a generic checklist. To make that concrete, eTeacher Group ships an Abbott Lingo continuous glucose monitor, plus full Lingo app access, to every student — included with the course and arriving before the CGM module in Lesson 5.

But the device is only half the design. What sets LLA apart is how the science is taught: leading experts, live, in small cohorts, breaking each pillar into bite-size lessons a student practices between sessions until it becomes a habit. Where much longevity content hands over one-size-fits-all rules and hopes, LLA teaches across six pillars — Nutrition, Sleep, Exercise & Movement, Supplements & Wearables, Stress Management, and a personal Longevity Protocol — with students reading their own glucose, HRV, and sleep data as a live feedback loop, and a community keeping them engaged.

The 18-week structure moves through four phases, from Foundation to a written Blueprint tested against each student's body, in live cohorts of 8–15. Instruction comes from named practitioners including researcher Natalie Blackbourne and UC Santa Barbara senior lecturer and NASM-certified trainer Amy Jamieson.

The Lingo device is a 14-day, painless biosensor, available without a prescription and FSA/HSA-eligible; it is intended for adults 18+, is not for insulin users, and is not a diagnostic tool — grounding the curriculum in real data.

eTeacher says wearable integration will deepen as its longevity courses expand over the coming year, with advanced biomarker content on the roadmap.`,
    ceoQuote:`Generic advice tells everyone the same thing, and your body doesn't work that way. So we teach from your own data — a glucose monitor at your door, experts who explain what your biology is telling you, and small steps you take between classes until they stick. Science-backed longevity should not be a privilege. Taught the right way, it is something anyone can learn.`,
    note:"NET-NEW CEO statement — flagged for Harel's approval. Fresh in his voice; does NOT reuse the published 'cognitive atrophy' line."
  },
  {
    chapter:0, id:"1.5", kicker:"Company-milestone — the live-learning method reaches its fifth school",
    targets:"EdSurge / EdTech Magazine / Business Insider / TechCrunch",
    headline:"eTeacher Group Opens Its Fifth Online School, Betting a 25-Year Teaching Method Can Crack Longevity",
    subhead:"The company behind five global online schools brings its proven engine — leading experts, live small-group teaching, bite-size daily learning and community-driven habit change — to the world's fastest-growing wellness market.",
    body:`FOR IMMEDIATE RELEASE — eTeacher Group, a 25-year-old global education company, today opened Longevity Life Academy, its fifth online school, applying the teaching method it has spent a quarter-century refining to the science of healthy aging.

The move stakes a claim in a category UBS projects will reach $8 trillion by 2030. eTeacher already serves more than 10,000 learners a year across five schools — spanning languages, culture, and now healthspan — with roughly 70% of its customers in the United States.

eTeacher's differentiator is not the subject but the system behind it: leading experts teaching live in small groups of 8–15, bite-size lessons practiced daily between sessions, a community that sustains engagement, and habit design that turns knowledge into routine. It is the engine that has carried 400,000+ courses to completion across nearly 200 countries. In longevity, that method anchors an 18-week live program with an Abbott Lingo glucose monitor shipped to every US student, so each learner's protocol is built on their own biology.

For CEO Harel Tayeb, that engine — not scale alone — is the advantage few edtech firms can match: a proven way to make people actually finish, and keep, what they learn.

eTeacher says a companion practice app and additional longevity courses are on the roadmap for the coming year, deepening the school's engagement layer.`,
    ceoQuote:`We have spent twenty-five years learning how to make people finish what they start — real teachers, small groups, small steps, a community beside them. That is harder than any single subject, and it is exactly what longevity has been missing. What we care about is whether a person finishes the course healthier and more capable than they started. That is the school we set out to build.`,
    note:"Per CEO directive, this article was reframed from its original national-angle version to a neutral global-EdTech milestone and retargeted to global business/edtech outlets. CEO quote is NET-NEW — flagged for Harel's approval."
  },
  {
    chapter:0, id:"1.6", kicker:"Consumer / human — longevity for every household, accessibility",
    targets:"Well+Good / mindbodygreen / Today / People",
    headline:"Science-Backed Longevity, Made to Actually Stick: Inside Longevity Life Academy's Live 18-Week Course",
    subhead:"eTeacher's new school makes healthy aging accessible the way it taught 400,000+ people a language — leading experts, bite-size lessons, a small community that keeps you going, and habits engineered to last, with a glucose monitor included.",
    body:`FOR IMMEDIATE RELEASE — Longevity has a reputation for being expensive, intimidating, and impossible to stick with. Longevity Life Academy, the new fifth school from 25-year education company eTeacher Group, is built to be the opposite: a guided protocol built around your own biology and your own numbers, taught live in groups of 8–15 by experts who know your name, with a community that makes the habits last.

Accessibility here is about more than cost. As the longevity market races toward $8 trillion by 2030 (UBS), its highest-profile figures spend fortunes chasing extra years — yet most people who try to follow along quit within weeks. LLA's answer is method, not money: the same bite-size, live, community-driven approach that helped hundreds of thousands of eTeacher learners finish what they started, now aimed at healthy aging. Tuition starts from $289 per month.

Instead of memorizing facts about glucose or sleep, students watch those numbers move in their own bodies. Every US student receives an Abbott Lingo continuous glucose monitor before Lesson 5, then builds a personal protocol across nutrition, movement, sleep, stress, and supplements — one small habit at a time, a plan meant to be kept for the next decades, not for a 10-week challenge.

The format is eTeacher's proven engine, refined over decades of live teaching to 400,000+ learners across nearly 200 countries and now adapted for healthspan, taught by named instructors such as Courtney Donofrio and Jordan Lattimore, with a cohort that turns showing up into the norm.

A companion practice app is on eTeacher's roadmap, intended to bring the same daily, low-pressure guidance into students' pockets.`,
    ceoQuote:`A longer, stronger life should be within reach of ordinary people — and reach isn't only about price, it is about whether you can actually keep going. Our promise is simple: leading experts, a small class that knows you, one honest step each week, and a community that will not let you quit. That is how habits finally stick, and how ordinary people build extraordinary health.`,
    note:"NET-NEW CEO statement — flagged for Harel's approval. Fresh in his voice; does NOT reuse published lines."
  },
  // CHAPTER 2 — Julie
  {
    chapter:1, id:"2.1", kicker:"The signing announcement — Julie joins the faculty",
    targets:"PR Newswire → Fortune Well / Forbes",
    headline:"Julie Gibson Clark — Who Out-Aged Bryan Johnson at the Rejuvenation Olympics — Joins Longevity Life Academy as Founding Faculty",
    subhead:"The Phoenix single mom who held second place on the Rejuvenation Olympics for over a year — ahead of Bryan Johnson — joins Longevity Life Academy as founding faculty to teach its live masterclasses.",
    body:`PHOENIX — Longevity Life Academy has named Julie Gibson Clark to its founding faculty. She held the #2 spot on the Rejuvenation Olympics leaderboard for more than a year — ahead of the contest's own founder, Bryan Johnson.

Her results are the headline. Gibson Clark, 56, a corporate recruiter and former structural engineer, recorded a DunedinPACE score of 0.665 — meaning she ages roughly 65 days for every 100, about 34% slower than average — achieved on a routine costing around $100–150 a month, versus the roughly $2 million a year spent by the best-funded biohackers.

At LLA she will lead live masterclasses, teaching students the everyday habits behind her results — across nutrition, movement, sleep, and stress — alongside the school's core faculty.

Her signing is a proof point for the school's core thesis — that elite outcomes come from consistent, science-backed habits, not spending — and gives eTeacher a nationally recognizable, relatable face for a US audience where 70% of its customers already live.`,
    ceoQuote:`We measure ourselves by results, and Julie's results are impossible to argue with. She proved what we teach every day — that world-class health is built from consistent, learnable habits, not from a millionaire's budget. Having her teach it live is exactly the school we set out to build.`,
    julieQuote:`I'm going to introduce one new habit and practice it until it becomes as routine as brushing my teeth. Getting to do that live, with real people who want to change their lives, is a dream.`,
    note:"Julie: Sentence 1 is verbatim from Business Insider/Yahoo. Sentence 2 is the one voice-matched new line about teaching — flagged for approval. She teaches the live MASTERCLASSES, not the Blueprint course."
  },
  {
    chapter:1, id:"2.2", kicker:"David-vs-Goliath cost story — ~$100/mo vs $2M/yr",
    targets:"Business Insider / CNBC Make It",
    headline:"Longevity Life Academy Names Julie Gibson Clark Founding Faculty — She Out-Aged a $2M-a-Year Biohacker on $12 a Day",
    subhead:"Julie Gibson Clark's budget longevity results ranked her #2 in the world; now she teaches the method in Longevity Life Academy's live masterclasses.",
    body:`PHOENIX — Julie Gibson Clark became a global story for a simple reason: she achieved elite anti-aging results without an elite budget, ranking second worldwide on roughly $12 a day, while Bryan Johnson reportedly spends around $2 million a year.

The gap is the point. Her DunedinPACE score of 0.665 puts her among the slowest-aging people measured, yet her routine leans on inexpensive fundamentals: a pound of vegetables daily, 100–130g of protein, strength plus VO2-max and Zone 2 training, sauna and cold, 7–8 hours of sleep, and a roughly $79-a-month supplement stack.

Now that philosophy has an institution behind it. As founding faculty at Longevity Life Academy, Gibson Clark brings her low-cost, high-consistency method into live masterclasses, teaching students the fundamentals directly rather than leaving them to piece it together alone.

For eTeacher, whose model already democratizes education across nearly 200 countries, Gibson Clark is a natural fit: living evidence that healthspan can be a mainstream purchase rather than a luxury service.`,
    ceoQuote:`A twelve-dollar-a-day routine that outperforms a two-million-dollar one is the whole thesis of our school in a single fact. We don't sell shortcuts. We teach the fundamentals, in a room with a real instructor, until they become who you are.`,
    julieQuote:`You have to think, 'This is the rest of my life.' It's not about a 10-week program for a beach body. The budget was never the barrier — the missing piece was someone teaching you what actually works.`,
    note:"Julie: Sentences 1–2 are verbatim from Yahoo. Sentence 3 is the one voice-matched new line — flagged for approval."
  },
  {
    chapter:1, id:"2.3", kicker:"Single-mom human interest — \"My why is my son\"",
    targets:"Today / People / Yahoo Life",
    headline:"Single Mom Who Slowed Her Own Aging Joins Longevity Life Academy to Teach American Families",
    subhead:"Julie Gibson Clark's motivation was never a leaderboard — it was being there for her son. Now she's helping thousands find their own why.",
    body:`PHOENIX — Before she was a longevity figure ranked second in the world, Julie Gibson Clark was a single mom who simply wanted more healthy years with her son. That personal "why" became the foundation of a routine that placed her among the slowest-aging people ever measured.

The human story resonates because it inverts the usual longevity narrative. Where the field's headliners chase optimization for its own sake, Gibson Clark, 56, built her practice — a DunedinPACE of 0.665, roughly 34% slower aging — around a reason to be here, not a number to beat.

At Longevity Life Academy, that same philosophy anchors her live masterclasses: start with your why, then build one sustainable habit at a time until it sticks — teaching students the practices behind her own results.

It's a message that fits eTeacher's belief that learning holds when it's personal and meaningful — the same conviction behind 400,000+ courses delivered across nearly 200 countries.`,
    ceoQuote:`The best learning always starts with a personal reason, not a number on a chart. Julie begins with why someone wants more years — then teaches the how. That is precisely why she will reach people a leaderboard never could.`,
    julieQuote:`I want to be here for my son — when he gets married and has kids, I want to be able to help in any way I can, and I just want to have that energy forever. Helping other parents find that same why is the most meaningful work I've done.`,
    note:"Julie: Sentence 1 is verbatim from NOVOS. Sentence 2 is the one voice-matched new line — flagged for approval."
  },
  {
    chapter:1, id:"2.4", kicker:"Science / data story — DunedinPACE and what her protocol proves",
    targets:"Longevity.Technology / Well+Good / Women's Health",
    headline:"Longevity Life Academy Founding Faculty Member Julie Gibson Clark to Teach the Habits Behind Her 34%-Slower Aging",
    subhead:"Her biomarker data suggests she ages about 34% slower than average; in her Longevity Life Academy masterclasses she'll teach the strength, protein, and VO2-max fundamentals behind it.",
    body:`PHOENIX — The number that made Julie Gibson Clark famous is a DunedinPACE score of 0.665 — a measure of the pace of biological aging suggesting she ages roughly 65 days for every 100, or about 34% slower than average. She now brings the science behind that number to Longevity Life Academy as founding faculty.

It matters because it reframes the debate. Gibson Clark, 56, reached that result not through exotic interventions but through measurable, repeatable fundamentals: strength training, 100–130g of protein daily, VO2-max work via the Norwegian 4x4 protocol plus Zone 2, sauna and cold exposure, and 7–8 hours of sleep.

That evidence-based, data-driven approach maps directly onto LLA's method, which teaches students to read glucose, HRV, and sleep as a live feedback loop across the six pillars.

Her masterclass focus areas align with the Exercise & Movement, Nutrition, Sleep, and Stress Management pillars — alongside named instructors such as UC Santa Barbara senior lecturer and NASM-certified trainer Amy Jamieson — grounding the teaching in verifiable outcomes rather than trends.`,
    ceoQuote:"", // this article's highlighted quote is Julie's
    julieQuote:`I think the biggest bang for your buck right now is eating right, exercising and sleeping — that alone will optimize your cells. The data just confirms what the fundamentals were doing all along.`,
    note:"Highlighted quote here is Julie's. Sentence 1 is verbatim from The Sun. Sentence 2 is the one voice-matched new line — flagged for approval. (No separate CEO quote on this article.)"
  },
  {
    chapter:1, id:"2.5", kicker:"Accessible-longevity mission fit with LLA",
    targets:"Fast Company / TIME / The Atlantic (contributed)",
    headline:"eTeacher's Longevity Life Academy Recruits Julie Gibson Clark to Make Longevity Affordable for Mainstream Families",
    subhead:"An accessible-longevity advocate on $12 a day and a 25-year education company are betting healthspan can be democratized — in an $8 trillion market that mostly serves the wealthy.",
    body:`PHOENIX — The promise of longevity science risks becoming a privilege of the wealthy. The partnership between Julie Gibson Clark and eTeacher's Longevity Life Academy is a deliberate bet against that outcome — pairing a practitioner who ranked #2 in the world on about $12 a day with a platform that already teaches across nearly 200 countries.

The stakes are set by the market itself: UBS projects longevity will reach $8 trillion by 2030, yet its most visible offerings remain concierge clinics and $2-million-a-year regimens. Gibson Clark's story is the counterexample the category needs — elite results built from affordable fundamentals.

LLA operationalizes that counterexample. By adding a relatable, low-cost founding-faculty voice to a proven live-education model — small cohorts of 8–15, an included Abbott Lingo glucose monitor, and named instructors — it aims to make personalized longevity available to mainstream American families.

The thesis is simple and testable: if millions can learn a language online in small live classes, millions can learn to extend their healthspan the same way, taught by named instructors and grounded in their own data.`,
    ceoQuote:`We want to teach with meaning — content that reaches the human core of a person, not just their calendar. Julie gives that mission a face: real, humble, and living proof that a longer, healthier life is within reach for anyone willing to practice it.`,
    julieQuote:`It really comes down to sleep, food, movement and connection. I don't want to add one more thing to people's lives — I want to simplify, and make this reachable for the household that never thought longevity was for them.`,
    note:"Julie: Sentence 1 is verbatim from her 2026 YouTube interview. Sentence 2 is the one voice-matched new line — flagged for approval."
  },
  {
    chapter:1, id:"2.6", kicker:"Her curriculum contribution — what she'll teach",
    targets:"Well+Good / Women's Health / mindbodygreen",
    headline:"Julie Gibson Clark Joins Longevity Life Academy as Founding Faculty to Lead Its Live Masterclasses",
    subhead:"The recruiter who held the Rejuvenation Olympics #2 spot for over a year joins Longevity Life Academy as founding faculty, teaching live masterclasses on strength, protein, and sleep as the trainable foundations of a longer life.",
    body:`PHOENIX — Julie Gibson Clark has joined Longevity Life Academy as founding faculty. The practical question is what she'll teach — and the answer mirrors the routine that made her a global story: build one sustainable habit at a time until it becomes automatic.

Her masterclasses draw on LLA's six pillars. Gibson Clark's expertise — strength training, 100–130g of protein daily, VO2-max and Zone 2 conditioning, sauna and cold, and disciplined 7–8-hour sleep — spans the Exercise & Movement, Nutrition, Sleep, and Stress Management pillars.

In her live masterclasses she'll guide students through the same fundamentals she lives by, showing how everyday habits — not exotic interventions — produced her results.

She joins a named faculty that includes longevity researcher Natalie Blackbourne, integrative nutrition coach Courtney Donofrio, and behavioral specialist Jordan Lattimore, adding a practitioner's real-world track record to their academic credentials.

eTeacher says a continuation course, Longevity Blueprint 2, is on the roadmap, giving graduates a next step in the same live, cohort-based format.`,
    ceoQuote:"",
    julieQuote:`I'm going to introduce one new habit and practice it until it becomes as routine as brushing my teeth. In the classroom, I get to do that alongside students, week by week, instead of them going it alone.`,
    note:"Highlighted quote here is Julie's. Sentence 1 is verbatim from Business Insider/Yahoo. Sentence 2 is the one voice-matched new line — flagged for approval. (No separate CEO quote on this article.)"
  },
  {
    chapter:1, id:"2.7", kicker:"Broadcast segment pitch — Julie + CGM demo",
    targets:"Fox News Health / Good Morning America / network AM shows",
    headline:"Longevity Life Academy Founding Faculty Member Julie Gibson Clark Demonstrates Her $12-a-Day Longevity Routine Live",
    subhead:"A ready-made morning-show segment: a $12-a-day routine that beat a $2-million budget, a glucose-monitor demo, and daily rituals viewers can start today.",
    body:`PHOENIX — Julie Gibson Clark's story is tailor-made for broadcast: a 56-year-old Phoenix single mom and former structural engineer who ranked #2 on a global longevity leaderboard — ahead of Bryan Johnson — on roughly $100–150 a month, and who has now joined eTeacher's Longevity Life Academy as founding faculty, leading its live masterclasses.

The visual hook is built in. Gibson Clark can demonstrate the Abbott Lingo continuous glucose monitor — the same painless, 14-day biosensor shipped to every LLA student — showing on camera how a meal moves her blood sugar in real time, then contrasting longevity myth versus reality on cost.

The relatability is the draw for a general audience: her DunedinPACE score of 0.665 suggests roughly 34% slower aging, but her method is ordinary — a pound of vegetables a day, protein, strength work, sleep — rituals any viewer can start that morning.

eTeacher can offer both Gibson Clark and a company spokesperson for interviews, plus b-roll of a live class of 8–15 students, positioning LLA as the accessible, teach-don't-sell alternative in a market UBS values at $8 trillion by 2030.

Segment availability aligns with LLA's current enrollment window, with the glucose-monitor demo available in-studio or remote.`,
    ceoQuote:"",
    julieQuote:`It's not the years in your life, but the life in your years. Anyone watching can start today — that's exactly what I love about teaching this live.`,
    note:"Highlighted quote here is Julie's. Sentence 1 is verbatim from Fox News. Sentence 2 is the one voice-matched new line — flagged for approval. (No separate CEO quote on this article.)"
  },
  // CHAPTER 3 — Longevity Hub app (roadmap)
  {
    chapter:2, id:"3.1", kicker:"Product announcement — tailored practice, AI tutor, daily rituals, tracking",
    targets:"TechCrunch / The Verge / PR Newswire",
    headline:"eTeacher to Launch the Longevity Hub: A Planned AI Tutor and Daily-Ritual Engine for Healthspan",
    subhead:"The upcoming companion app will turn the 18-week Longevity Blueprint into simple, trackable daily rituals — guided by an AI longevity tutor built on eTeacher's \"gym for the brain\" model.",
    body:`FOR IMMEDIATE RELEASE — eTeacher Group today previewed the Longevity Hub, a companion app on its roadmap that will extend Longevity Life Academy beyond the weekly live class. The Hub is designed to deliver a personalized longevity practice as bite-size daily rituals, integrated tracking, and lifestyle guidance.

The app targets the field's real failure point. Longevity advice is everywhere, but daily follow-through is rare; eTeacher plans to attack that gap the same way it does in language learning — through short, engaging daily practice rather than more content to ignore.

At the Hub's center will be an AI longevity tutor — the same "gym for the brain" approach eTeacher pioneered across its five schools — intended to check in daily, adapt to each user's data, and keep them progressing between live sessions. The company plans for the Hub to connect with CGM, sleep, and wearable data so each user's biology becomes a personal feedback loop.

The Hub is being built to complement, not replace, the live 18-week Longevity Blueprint and its cohorts of 8–15, reinforcing eTeacher's live-expert-plus-AI model rather than substituting for the teacher.

eTeacher says the Longevity Hub is planned for release in the year ahead, with timing to follow the expansion of its live course catalog.`,
    ceoQuote:`A weekly class changes what you know. A daily habit changes who you are. The Hub we are building will live in that daily space — a few quiet minutes each morning that keep your protocol alive between classes. It is on our roadmap, and we will only ship it when it earns a place in someone's real routine.`,
    note:"NET-NEW CEO statement — flagged for Harel's approval. Fresh in his voice; does NOT reuse the published 'professor available 24/7' line. Framed as ROADMAP."
  },
  {
    chapter:2, id:"3.2", kicker:"Tech / AI-in-health angle — the persistence problem",
    targets:"Fast Company / Wired / mindbodygreen",
    headline:"eTeacher's Planned Longevity Hub App Will Use AI to Turn the Longevity Blueprint Into Daily Habits",
    subhead:"The upcoming Longevity Hub will break healthspan into daily micro-rituals — because the science only works if you actually stick with it.",
    body:`FOR IMMEDIATE RELEASE — The hardest part of longevity isn't knowing what to do — it's doing it every day. eTeacher Group's planned Longevity Hub app is being designed squarely around that persistence problem, converting the 18-week Longevity Blueprint into small, daily, trackable actions.

It is a bet grounded in the company's own data across five schools: eTeacher argues that engagement, not information, is the real bottleneck in adult learning, and that unlimited self-guided content is precisely what drives people to quit.

The proposed solution is an AI tutor built on eTeacher's micro-learning model — the "gym for the brain" — that will deliver relevant, personalized prompts, recognize streaks, and re-engage users who drift. The company plans for it to draw on each user's glucose, sleep, and movement data so the nudges reflect real biology, not generic reminders.

This AI layer is on eTeacher's roadmap rather than live today; the current program remains live-expert-led, with the Hub intended to strengthen daily adherence between weekly sessions.

eTeacher expects to roll out the Longevity Hub in the year ahead, alongside a broader expansion of its longevity curriculum.`,
    ceoQuote:`In adult learning, the enemy is not ignorance — it is the day you skip, and then the week. We are designing the Hub's AI to notice that moment and gently pull you back, using your own glucose and sleep data so the nudge means something. That is how we plan to make persistence stop being the hard part.`,
    note:"NET-NEW CEO statement — flagged for Harel's approval. Fresh in his voice; does NOT reuse the published 'gym for the brain' line as a quote. Framed as ROADMAP."
  },
  // CHAPTER 4 — six new courses (roadmap)
  {
    chapter:3, id:"4.1", kicker:"The expansion announcement — all six courses",
    targets:"PR Newswire → EdSurge / Longevity.Technology",
    headline:"eTeacher to Add Six New Longevity Courses Following Its Q2 Longevity Life Academy Debut",
    subhead:"The planned expansion turns a single flagship course into a full longevity curriculum — six new programs spanning metabolic health, movement, biomarkers, and brain training.",
    body:`FOR IMMEDIATE RELEASE — Building on the Q2 launch of its flagship 18-week course, The Longevity Blueprint, eTeacher Group today announced six new Longevity Life Academy courses planned to roll out over the coming year.

The expansion answers demand created by a market UBS projects will reach $8 trillion by 2030, and it reflects eTeacher's view that longevity is a lifelong practice rather than a single class. The six upcoming courses are: Emotional Resilience & Stress; Metabolic Mastery; Activities & Movement: Athlete-Level Performance; Longevity Blueprint 2, a continuation of the flagship; Biomarkers & Advanced Wearables; and Longevity Brain, which trains the brain like the body and adds social health and relationships.

Each new course is planned to keep the LLA format that defines the flagship: live, small-group sessions of 8–15, instructor-led across multiple phases, with personal-data integration and named expert faculty.

The lineup is designed to deepen, not dilute, the model — with the Biomarkers & Advanced Wearables course, in particular, extending the Abbott Lingo glucose-monitor foundation into a wider set of measurable inputs.

eTeacher says the six courses are on its roadmap for the year following the Q2 debut, with instructors and enrollment dates to be announced.`,
    ceoQuote:`One course can change a season. A school can change a life. We are not adding classes to a catalog — we are building a place a person can keep coming back to as their body and their goals change over the decades. Longevity is a lifelong practice, and it deserves a lifelong school.`,
    note:"NET-NEW CEO statement — flagged for Harel's approval. Fresh in his voice; does NOT reuse published lines. Framed as ROADMAP."
  },
  {
    chapter:3, id:"4.2", kicker:"Curriculum depth / \"learning journey\" — Longevity Brain feature",
    targets:"Well+Good / mindbodygreen / psychology-forward outlets",
    headline:"eTeacher Plans Six New Longevity Life Academy Courses in Brain Training, Metabolism, Movement and Biomarkers",
    subhead:"The upcoming curriculum treats memory, focus, emotional health, and relationships as trainable longevity levers — turning a single course into a multi-phase journey.",
    body:`FOR IMMEDIATE RELEASE — As eTeacher Group maps out its six planned Longevity Life Academy courses, one stands out as the most distinctly eTeacher: Longevity Brain, a program that will treat cognitive and social health as core longevity practices rather than afterthoughts.

The design reflects a broader idea about how longevity should be taught — as a sequenced journey, not a one-off. Students would begin with the flagship 18-week Longevity Blueprint, then progress through specialized courses like Metabolic Mastery, Athlete-Level Performance, and Biomarkers & Advanced Wearables, each in the same live, 8–15-student cohort format.

Longevity Brain is planned to cover memory, focus, emotional resilience, and the science of relationships and social connection — directly answering eTeacher's founding concern about keeping the adult mind engaged. Emotional Resilience & Stress and Longevity Blueprint 2 round out the mental-and-continuation track.

The through-line is the company's live-expert-plus-AI method, refined over 25 years and 400,000+ courses, now organized so a student can build a complete healthspan practice over time rather than in a single term.

eTeacher says the full learning journey is planned for the year following the Q2 launch, with course sequencing and faculty to be confirmed.`,
    ceoQuote:`We spend billions keeping the body young and almost nothing keeping the mind and our relationships strong. Longevity Brain will treat memory, focus, and human connection as things you can train — because a long life you can't fully feel or share is only half the goal.`,
    note:"NET-NEW CEO statement — flagged for Harel's approval. Fresh in his voice; does NOT reuse the published 'cognitive atrophy' line. Framed as ROADMAP."
  },
  // CHAPTER 5 — the reset (reactive, respectful Bryan Johnson peg)
  {
    chapter:4, id:"5.1", kicker:"Reactive news peg — the affordability contrast (respectful)",
    targets:"Business Insider / Fortune Well / CNBC Make It",
    headline:"Bryan Johnson Spends $2 Million a Year — Longevity Life Academy Teaches the Same Healthy-Aging Habits, Live, From $289 a Month",
    subhead:"As the world's most-watched biohacker faces an incurable diagnosis, eTeacher's Longevity Life Academy makes its case: healthspan is built through consistent, learnable habits — taught live — not through spending most people could never match.",
    body:`FOR IMMEDIATE RELEASE — This month, biohacker Bryan Johnson disclosed that he has been diagnosed with autoimmune gastritis, an incurable condition he says medicine can only manage. His candor deserves respect; illness spares no one. But it sharpens a question millions are now asking: if the most expensive longevity routine on earth can't guarantee an outcome, what should the rest of us actually do?

Longevity Life Academy, the fifth online school of 25-year education company eTeacher Group, was built for exactly that question. Its answer is not a bigger budget — it is a better teacher. The academy's 18-week live course turns healthy-aging science into one personalized protocol a student keeps for life, taught in small groups of 8–15 by named instructors and grounded in each student's own body data.

The contrast the company points to is not a person — it is a philosophy. Johnson reportedly spends roughly $2 million a year. Longevity Life Academy starts at $289 a month and ships every US student an Abbott Lingo continuous glucose monitor before Lesson 5, so the science is personal from the start.

eTeacher argues the evidence is already public. Julie Gibson Clark, a 56-year-old single mother from Phoenix, held the number-two spot in the Rejuvenation Olympics for more than a year — ahead of Johnson — on a routine costing roughly $12 a day. Consistency, taught well, beat spending.

Longevity Life Academy is enrolling now from $289 per month, with additional courses planned for the year ahead.`,
    ceoQuote:`We wish Bryan Johnson a full recovery, and we respect how openly he shares what he learns. But his news carries a lesson for everyone: a healthy life was never something you could buy in bulk. It is built one taught, repeated habit at a time — and that is something we can put within reach of an ordinary household.`,
    note:"NET-NEW CEO statement — flagged for Harel's approval. Leads with genuine respect/goodwill toward Johnson (no mockery), then pivots to LLA's affordability + consistency message. Verify comfort with naming him directly."
  },
  {
    chapter:4, id:"5.2", kicker:"Early detection / know-your-own-data (health-desk, respectful)",
    targets:"Fortune Well / Healthline / MedCity News",
    headline:"Bryan Johnson's Diagnosis Hid for Years — Longevity Life Academy Teaches Students to Read Their Own Biomarkers Early",
    subhead:"Bryan Johnson's autoimmune gastritis went undetected for years despite intensive monitoring. Longevity Life Academy is built on a simpler premise: teach ordinary people to read their own body data, consistently, before problems compound.",
    body:`FOR IMMEDIATE RELEASE — One detail in Bryan Johnson's recent disclosure resonated with clinicians: even with elite monitoring, his autoimmune gastritis stayed hidden for years, surfacing only after persistent low iron was finally investigated. If a condition can hide from the world's most-tracked body, the case for teaching everyone to read their own data grows stronger, not weaker.

That is the founding premise of Longevity Life Academy, the fifth online school of 25-year education company eTeacher Group. The academy does not promise to out-spend disease. It teaches students to understand their own biomarkers — glucose, sleep, movement, and the numbers on their own lab reports — so they become active participants in their health rather than passive patients.

Every US student receives an Abbott Lingo continuous glucose monitor before Lesson 5, and the 18-week live curriculum builds the habit of asking what one's own body is signaling. Instruction happens in small groups of 8–15, led by named faculty, so questions get real answers in real time.

The academy is careful about its lane: it is education, not diagnosis, and it encourages students to work with their physicians. Its contribution is literacy — the daily, teachable skill of noticing change early, which even the most expensive protocols can't outsource.

Longevity Life Academy is enrolling now from $289 per month.`,
    ceoQuote:`Bryan Johnson's experience is a reminder that no one is exempt, and that early awareness matters more than any single gadget. We don't teach people to fear their bodies. We teach them to read them — calmly, consistently, and early enough to act.`,
    note:"NET-NEW CEO statement — flagged for Harel's approval. Respectful framing; positions LLA as education/literacy, not diagnosis (important liability guardrail)."
  },
  {
    chapter:4, id:"5.3", kicker:"The Julie contrast — $12 a day vs $2M a year (proof, respectful)",
    targets:"People / Yahoo Life / Today",
    headline:"Her $12-a-Day Routine Ranked Ahead of Bryan Johnson — Longevity Life Academy Teaches the Habits Behind It",
    subhead:"Longevity Life Academy founding faculty member Julie Gibson Clark once ranked second in the Rejuvenation Olympics — ahead of Bryan Johnson — on a fraction of the budget. As Johnson faces a hard diagnosis, her story shows what consistency can do.",
    body:`FOR IMMEDIATE RELEASE — The longevity conversation is at an inflection point. Bryan Johnson, its most famous figure, recently shared that he has an incurable autoimmune condition — a sobering reminder that spending is not the same as certainty. Longevity Life Academy, eTeacher Group's fifth online school, offers a quieter counter-story that predates the news.

Julie Gibson Clark, a 56-year-old single mother and former structural engineer from Phoenix, held the number-two position in the Rejuvenation Olympics for more than a year — ranking ahead of Johnson — while spending roughly $12 a day. Her DunedinPACE score of 0.665 indicated a pace of aging roughly a third slower than expected. She did it with sleep, nutrition, movement, and stress habits, kept consistently.

That is precisely what Longevity Life Academy teaches, and why the company brought Julie on as founding faculty for its live masterclasses. The academy's 18-week course, taught in groups of 8–15 with an Abbott Lingo glucose monitor shipped to every US student, turns the fundamentals she lives by into a protocol any motivated adult can learn and keep.

The point is not to diminish anyone's journey — Johnson's data-sharing has advanced the whole field. It is to show that the levers that matter most are affordable and learnable, and that a good teacher may matter more than a big budget.

Longevity Life Academy is enrolling now from $289 per month.`,
    ceoQuote:`Julie proved something we build our whole school around: the fundamentals, done consistently, are extraordinarily powerful — and they don't require a fortune. That is not a knock on anyone spending more. It is an invitation to everyone who assumed this was out of reach.`,
    note:"NET-NEW CEO statement — flagged for Harel's approval. Julie's #2 ranking kept PAST-tense ('held'). Respectful toward Johnson."
  },
  {
    chapter:4, id:"5.4", kicker:"Longevity for everyone / accessibility (op-ed style, respectful)",
    targets:"Newsweek / USA Today opinion / Fast Company",
    headline:"You Don't Need Bryan Johnson's Budget to Live Longer — Longevity Life Academy Puts Science-Backed Healthy Aging Within Reach",
    subhead:"The biohacking headlines make longevity look like a billionaire's hobby. eTeacher's Longevity Life Academy exists to prove the opposite — that the science is teachable, and the habits are affordable.",
    body:`FOR IMMEDIATE RELEASE — Every few months, longevity returns to the headlines through a single extraordinary figure and an extraordinary budget. The latest news — Bryan Johnson's disclosure of an incurable autoimmune condition — is a human moment first, and we wish him well. It is also a chance to correct a widespread misconception: that living longer is a game only the wealthy can play.

Longevity Life Academy, the fifth online school of 25-year education company eTeacher Group, is built on the opposite conviction. The science of healthy aging — sleep, nutrition, movement, stress, and personal biomarkers — is not proprietary to the rich. What most people lack is not money; it is a teacher, a structure, and the support to stay consistent.

The academy's flagship 18-week course delivers all three: live sessions with named instructors, small cohorts of 8–15, and an Abbott Lingo continuous glucose monitor shipped to every US student before Lesson 5 — all starting at $289 a month. It is the same live-teaching method eTeacher has used to deliver 400,000+ courses across nearly 200 countries, now aimed at healthspan.

This is not about competing with anyone's regimen. It is about widening the door — taking the parts of longevity science that genuinely work for ordinary people and teaching them in a way that sticks.

Longevity Life Academy is enrolling now from $289 per month.`,
    ceoQuote:`A longer, stronger life should not depend on your bank balance. The billionaires can afford to experiment. Our job is to take what is proven, teach it live, and make it something a working family can actually follow.`,
    note:"NET-NEW CEO statement — flagged for Harel's approval. 'Billionaires can afford to experiment' is pointed but not disrespectful to Johnson personally — confirm tone comfort."
  },
  {
    chapter:4, id:"5.5", kicker:"Live teaching vs solo biohacking (method story, respectful)",
    targets:"EdSurge / Fast Company / Longevity.Technology",
    headline:"Where Bryan Johnson Experiments Alone, Longevity Life Academy Bets on Live Teachers — Because Habits Stick When Someone Teaches You",
    subhead:"The most famous longevity story is a solo experiment run at enormous cost. eTeacher's Longevity Life Academy is the opposite model: live teachers, small classes, and a structure built so ordinary people actually stay the course.",
    body:`FOR IMMEDIATE RELEASE — Bryan Johnson's Blueprint is the defining image of modern longevity: one person, a large team, and a vast budget, self-experimenting in public. His openness has taught the field a great deal, and his recent autoimmune-gastritis diagnosis is a reminder of how hard the work is even at that scale. But it raises a practical question for everyone else: what works when you don't have a lab and millions to spend?

eTeacher Group's answer, delivered through its fifth online school, Longevity Life Academy, is decades old and simple: people learn best from teachers, live, in small groups. Where solo biohacking asks individuals to self-direct, LLA provides a weekly live anchor session, an expert instructor, a cohort of 8–15 peers, and short daily practice — the structure that turns intentions into habits.

The academy applies the same method behind eTeacher's 400,000+ courses to healthspan. Each 18-week program pairs live instruction with personal data — an Abbott Lingo continuous glucose monitor ships to every US student before Lesson 5 — so lessons are grounded in the student's own body, guided by a real teacher rather than a lonely feed of tips.

The company's thesis is that persistence, not information, is the scarce resource in wellness — and that persistence is a social act. A teacher who knows your name and a small class that expects you back do what a dashboard alone cannot.

Longevity Life Academy is enrolling now from $289 per month.`,
    ceoQuote:`The hardest part of living longer isn't knowing what to do — it's doing it next week, and the week after. That is why we put a real teacher in the room. You can experiment alone, or you can be taught, supported, and expected back. We built our whole school on the second one.`,
    note:"NET-NEW CEO statement — flagged for Harel's approval. Contrasts LLA's live-teaching method with solo biohacking without disparaging Johnson personally."
  }
];

const SHARED = {
  category:"Health & Wellness  (priority: Health & Wellness → Education → Business)",
  image:"https://www.longevitylifeacademy.com/assets/hero-cgm.jpg",
  imageAlt:"Continuous glucose monitor beside a smartphone displaying personalized health data",
  contact:`Omri Gitter, Marketing, eTeacher Group
Email: omri.gitter@eteachergroup.com
Phone (media / reporters): +972 50 880 5368
General / US line: +1-888-230-5110
Website: https://www.longevitylifeacademy.com/`
};
