import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone, Linkedin, Github, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sunny Tambi — Director of Engineering, AI & Agentic Solutions" },
      { name: "description", content: "20+ years building Agentic AI products, scaling startups, and leading high-performance engineering teams. Portfolio of Sunny Tambi, Director of Engineering based in Pune, India." },
      { property: "og:title", content: "Sunny Tambi — Director of Engineering" },
      { property: "og:description", content: "Technology leader in AI & Agentic Solutions. 20+ years helping organizations ship products and scale revenue up to $255M." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Portfolio,
});

const experiences = [
  {
    company: "Grazitti Interactive (SearchUnify)",
    role: "Director of Engineering",
    period: "Apr 2025 — Present",
    location: "Chandigarh, India",
    highlights: [
      "Steered concept-to-market for an Agentic AI Suite in 3 months — 5 AI Agents + an Agentic Platform with 20+ guardrails and 10+ governance parameters.",
      "Lifted RAG & Search relevancy from 53% → 87% via new embedding models, rephraser, rerankers, and self-learning.",
      "Designed an Engineering Maturity Model, improving engineering efficiency by ~27%.",
    ],
  },
  {
    company: "Syngenta Services",
    role: "Head of Engineering",
    period: "Jul 2023 — Mar 2025",
    location: "Pune, India",
    highlights: [
      "Elevated engineering maturity by ~50% across observability, planning, cycle time, security, performance and QA.",
      "Spearheaded SyngentaOne platform — improved internal SaaS and digital product development by 30%.",
      "Boosted retailer happiness by 58% (Sumridhi) and sales efficiency by 27% (Syngenta Connect).",
    ],
  },
  {
    company: "Rubix Data Sciences",
    role: "Director Engineering",
    period: "Jun 2021 — Jul 2023",
    location: "Pune, India",
    highlights: [
      "Took Rubix ARMS from ideation to ~500 customers in 2 years; launched Rubix B2B KYC as the second product.",
      "Upscaled annual revenue from ₹7cr → ₹20cr by expanding to US, UK, Singapore, Australia and pan-India.",
      "Today Rubix serves 600+ clients including major banks, credit insurers, fintechs and corporates.",
    ],
  },
  {
    company: "Talentica Software",
    role: "Sr. Development Manager — Offshore CTO",
    period: "Oct 2015 — Jun 2021",
    location: "Pune, India",
    highlights: [
      "Helped ~6 startups reach ~$40M combined valuation across fintech, healthcare, media, regtech and crypto.",
      "Architected product ecosystems and shipped MVPs in 3–5 months with Java, Node, React, Mongo, Elastic and Python.",
      "Won 'Process Innovation' and 'Best Team of the Year' awards (2019).",
    ],
  },
  {
    company: "Infosys EdgeVerve",
    role: "Member Product Architecture",
    period: "Mar 2013 — Sep 2015",
    location: "Pune, India",
    highlights: [
      "Improved customer business processes up to 37% through EdgeVerve AssistEdge.",
      "Awarded 'Star of the Year' (2015) for scaling AssistEdge from inception to a multi-million product.",
    ],
  },
  {
    company: "Ubisoft",
    role: "Sr. Web Programmer",
    period: "Apr 2012 — Jan 2013",
    location: "Pune, India",
    highlights: [
      "Grew player base ~10% via development on Settlers Online, a Massive-Multiplayer-Online (MMO) game.",
    ],
  },
  {
    company: "TCS",
    role: "Information Technology Analyst",
    period: "Sep 2005 — Apr 2012",
    location: "Pune, India",
    highlights: [
      "Championed rich-media marketing campaign applications for 12+ customers.",
      "Won 'Write White' white-paper contest (2007) and 'Star of the Quarter' (2010).",
    ],
  },
];

const skills = {
  Leadership: [
    "Concept-to-Market",
    "Cross-Functional Collaboration",
    "Innovation Management",
    "Technology Leadership",
    "Strategic Planning",
    "Performance Management",
    "Talent Acquisition",
    "Stakeholder Management",
    "Budget Management",
    "Risk Management",
  ],
  "AI & Engineering": [
    "Agentic Applications",
    "MCPs",
    "RAG & Search",
    "LLM Guardrails",
    "Java / Spring Boot",
    "Node.js",
    "Python",
    "React",
    "AWS / Azure / GCP",
    "SQL & NoSQL",
    "CI/CD & DevOps",
    "ISO 27001",
  ],
};

const metrics = [
  { value: "20+", label: "Years in tech leadership" },
  { value: "$255M", label: "Revenue uplift driven" },
  { value: "6+", label: "Startups scaled to MVP" },
  { value: "87%", label: "RAG relevancy achieved" },
];

function Portfolio() {
  return (
    <div className="grain relative min-h-screen overflow-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-50 mx-auto flex max-w-6xl items-center justify-between px-6 py-6 backdrop-blur-md">
        <a href="#top" className="font-display text-xl tracking-tight">
          Sunny <span className="text-gold">Tambi</span>
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
          <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <a
          href="mailto:sunnytambi@gmail.com"
          className="hidden items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-2 text-sm backdrop-blur transition-colors hover:border-gold hover:text-gold md:inline-flex"
        >
          Get in touch <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </header>

      {/* HERO */}
      <section id="top" className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-28">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold"></span>
          </span>
          Available for board advisory & fractional CTO engagements
        </div>

        <h1 className="font-display text-5xl leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]">
          Building <em className="gold-gradient italic">Agentic AI</em> products
          <br />
          and the teams behind them.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          I'm Sunny — a technology leader with 20+ years shipping products from concept to market.
          I've helped 6 startups and an enterprise upscale revenue up to <span className="text-foreground">$255M</span>,
          and most recently took an Agentic AI Suite from idea to launch in three months.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            style={{ boxShadow: "var(--shadow-gold)" }}
          >
            See my work <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/sunnytambi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm transition-colors hover:border-gold hover:text-gold"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>

        {/* Metrics */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="bg-card/60 p-6 backdrop-blur">
              <div className="font-display text-4xl text-gold md:text-5xl">{m.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <SectionLabel num="01" label="About" />
        <div className="mt-10 grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <h2 className="font-display text-3xl leading-tight md:text-5xl">
              A hands-on senior leader who never lost touch with the code.
            </h2>
            <p className="mt-6 text-muted-foreground md:text-lg">
              I specialize in building Agentic product lifecycles — from architecture and guardrails
              to the cross-functional teams that ship them. My work spans fintech, agritech, healthcare,
              regtech and enterprise SaaS, across India, the US, UK, Singapore and Australia.
            </p>
            <p className="mt-4 text-muted-foreground md:text-lg">
              I believe great engineering organizations are built the same way as great products:
              with conviction, observability, and a relentless focus on the people using them.
            </p>
          </div>
          <aside className="md:col-span-2">
            <figure className="rounded-2xl border border-border bg-card/60 p-8 backdrop-blur" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <Sparkles className="h-5 w-5 text-gold" />
              <blockquote className="mt-4 font-display text-xl italic leading-snug text-foreground md:text-2xl">
                "Sunny was the most hands-on Senior Leader I have come across. Leaders over time lose
                touch with their programming roots. Not Sunny."
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">
                — Dr. Vishnu Ramchandran<br />
                <span className="text-foreground/80">Co-founder & CTO, Rubix Data Sciences</span>
              </figcaption>
            </figure>
          </aside>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <SectionLabel num="02" label="Experience" />
        <h2 className="mt-6 font-display text-4xl md:text-6xl">Selected work.</h2>

        <ol className="mt-16 space-y-px overflow-hidden rounded-2xl border border-border bg-border">
          {experiences.map((exp) => (
            <li key={exp.company} className="group bg-card/60 p-8 backdrop-blur transition-colors hover:bg-card md:p-10">
              <div className="grid gap-6 md:grid-cols-12">
                <div className="md:col-span-4">
                  <div className="font-mono text-xs uppercase tracking-wider text-gold">{exp.period}</div>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl">{exp.company}</h3>
                  <div className="mt-1 text-sm text-muted-foreground">{exp.role}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{exp.location}</div>
                </div>
                <ul className="space-y-3 md:col-span-8">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground md:text-[0.975rem]">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gold" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <SectionLabel num="03" label="Skills & Expertise" />
        <h2 className="mt-6 font-display text-4xl md:text-6xl">What I bring to the table.</h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="rounded-2xl border border-border bg-card/60 p-8 backdrop-blur">
              <h3 className="font-display text-2xl text-gold">{group}</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="rounded-full border border-border bg-background/50 px-3 py-1.5 text-sm text-foreground/90">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <InfoCard title="Education" body={<>B.Tech, Electronics & Communication Engineering<br /><span className="text-muted-foreground">Malaviya National Institute of Technology, Jaipur · 2001–2005</span></>} />
          <InfoCard title="Continuous Learning" body={<>Neuroleadership · Crucial Conversations · Franklin Covey · The Lean Startup</>} />
          <InfoCard title="Recognition" body={<>Star of the Year (Infosys) · Process Innovation (Talentica) · Star of the Quarter (TCS)</>} />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div
          className="overflow-hidden rounded-3xl border border-border bg-card/60 p-10 backdrop-blur md:p-16"
          style={{ boxShadow: "var(--shadow-elegant)", background: "var(--gradient-hero), var(--card)" }}
        >
          <SectionLabel num="04" label="Contact" />
          <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            Have a product to ship or a team to scale? <em className="gold-gradient italic">Let's talk.</em>
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <ContactRow icon={<Mail className="h-5 w-5" />} label="Email" value="sunnytambi@gmail.com" href="mailto:sunnytambi@gmail.com" />
            <ContactRow icon={<Phone className="h-5 w-5" />} label="Phone" value="+91 86059 41979" href="tel:+918605941979" />
            <ContactRow icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" value="linkedin.com/in/sunnytambi" href="https://www.linkedin.com/in/sunnytambi" />
            <ContactRow icon={<MapPin className="h-5 w-5" />} label="Location" value="Pune, India" />
          </div>
        </div>
      </section>

      <footer className="relative z-10 mx-auto max-w-6xl px-6 py-10">
        <div className="hairline mb-8" />
        <div className="flex flex-col items-start justify-between gap-4 text-sm text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Sunny Tambi. Crafted with care.</div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/sunnytambi" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/sunnytambi" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs text-gold">{num}</span>
      <span className="h-px flex-1 max-w-[60px] bg-border" />
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
    </div>
  );
}

function InfoCard({ title, body }: { title: string; body: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
      <div className="font-mono text-xs uppercase tracking-wider text-gold">{title}</div>
      <div className="mt-3 text-sm leading-relaxed text-foreground/90">{body}</div>
    </div>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-center justify-between rounded-xl border border-border bg-background/40 p-5 transition-colors hover:border-gold">
      <div className="flex items-center gap-4">
        <div className="text-gold">{icon}</div>
        <div>
          <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
          <div className="mt-0.5 text-foreground">{value}</div>
        </div>
      </div>
      {href && <ArrowUpRight className="h-4 w-4 text-muted-foreground" />}
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{inner}</a> : inner;
}
