import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kadhiravan E.G // Cybersecurity Engineering Student" },
      { name: "description", content: "Field notes from a cybersecurity engineering student building secure software, SIEM pipelines and DevSecOps tooling. Manuscript №01." },
    ],
  }),
  component: Portfolio,
});

const disciplines = [
  { code: "BT", name: "Blue Team / SIEM", verbs: ["monitor", "detect", "respond"], blurb: "Hands-on SIEM stand-up with Wazuh — log ingestion, rule tuning and alert triage on a home lab." },
  { code: "SC", name: "Secure Coding", verbs: ["review", "harden", "validate"], blurb: "Writing Python, Java and Rust with threat models in mind — input validation, authn flaws, safe defaults." },
  { code: "DO", name: "DevSecOps", verbs: ["pipeline", "scan", "ship"], blurb: "Jenkins-driven CI/CD with security gates, container scanning and Prometheus + Grafana observability." },
  { code: "CT", name: "Containers", verbs: ["build", "isolate", "deploy"], blurb: "Dockerised FastAPI services, multi-stage builds and reproducible dev environments for safe execution." },
  { code: "VA", name: "Vulnerability Assessment", verbs: ["enumerate", "exploit", "report"], blurb: "TryHackMe and Hack The Box labs in penetration testing, network analysis and active threat mitigation." },
];

const dossier = [
  { y: "2018", t: "SSLC · Govt H.S.S Tiruppur", body: "Finished secondary school with 86%. First time taking a computer apart and putting it back together — mostly." },
  { y: "2022", t: "HSE · Sree Gurukulam, Erode", body: "Higher secondary in Maths & Computer Science with 92%. Wrote my first real programs and read about how operating systems actually work." },
  { y: "2024", t: "B.E. Cyber Security · Sri Shakthi", body: "Joined Sri Shakthi Institute of Engineering and Technology, Coimbatore. Currently holding a CGPA of 8.6 in the Cyber Security stream." },
  { y: "2025", t: "Intelligent Compiler · XarrowAI", body: "Working as a System UX Engineer on Errorfinder / Intelligent Compiler — a FastAPI + JS web compiler with auto error-fix, shipped via Docker." },
  { y: "2026", t: "Secure-OAuth Simulation", body: "Building an OAuth token-replay simulation in Python Flask to teach authentication weaknesses in a university login system." },
];

const channels = [
  { tag: "01", label: "Mail", value: "kadhiravanegk@gmail.com", href: "mailto:kadhiravanegk@gmail.com" },
  { tag: "02", label: "Voice", value: "+91 95976 45268", href: "tel:+919597645268" },
  { tag: "03", label: "GitHub", value: "@KADHIRAVANEG", href: "https://github.com/KADHIRAVANEG" },
  { tag: "04", label: "LinkedIn", value: "Kadhiravan E.G", href: "https://www.linkedin.com/in/kadhiravan-e-g-028818327" },
  { tag: "05", label: "Live Compiler", value: "intelligentcompiler.onrender.com", href: "https://intelligentcompiler.onrender.com/" },
  { tag: "06", label: "Errorfinder", value: "github.com/.../Errorfinder", href: "https://github.com/KADHIRAVANEG/Errorfinder" },
];

function Portfolio() {
  return (
    <main className="min-h-screen text-foreground">
      <TopBar />
      <Hero />
      <TickerStrip />
      <Manifesto />
      <Dossier />
      <Disciplines />
      <Flagship />
      <Achievements />
      <Channels />
      <Colophon />
    </main>
  );
}

function TopBar() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => setTime(new Date().toUTCString().slice(17, 25));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3 font-mono text-[11px] uppercase tracking-widest">
        <div className="flex items-center gap-4">
          <span className="hazard-card flex h-6 items-center px-2 font-bold">FILE №01</span>
          <span className="hidden md:inline">Subject: Kadhiravan E.G</span>
        </div>
        <nav className="hidden gap-6 md:flex">
          <a href="#manifesto" className="hover:underline underline-offset-4 decoration-2">Manifesto</a>
          <a href="#dossier" className="hover:underline underline-offset-4 decoration-2">Dossier</a>
          <a href="#disciplines" className="hover:underline underline-offset-4 decoration-2">Disciplines</a>
          <a href="#flagship" className="hover:underline underline-offset-4 decoration-2">Flagship</a>
          <a href="#channels" className="hover:underline underline-offset-4 decoration-2">Channels</a>
        </nav>
        <span className="font-bold">{time} UTC</span>
      </div>
      <div className="hazard-tape h-2" />
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink">
      <div className="mx-auto grid max-w-[1400px] gap-0 px-6 py-10 md:grid-cols-12 md:py-16">
        <div className="md:col-span-3 md:border-r-2 md:border-ink md:pr-6">
          <div className="space-y-4 font-mono text-[11px] uppercase tracking-widest">
            <div>
              <div className="text-muted-foreground">Folio</div>
              <div className="font-bold">№ 0001 / 2026</div>
            </div>
            <div>
              <div className="text-muted-foreground">Issued</div>
              <div className="font-bold">Coimbatore · TN</div>
            </div>
            <div>
              <div className="text-muted-foreground">Status</div>
              <div className="font-bold">B.E. Cyber Security · Y2</div>
            </div>
            <div className="hazard-card mt-6 inline-block px-2 py-1 font-bold">CGPA 8.6</div>
          </div>
        </div>

        <div className="mt-8 md:col-span-7 md:mt-0 md:px-6">
          <div className="mb-4 flex items-baseline gap-4 font-mono text-xs uppercase tracking-widest">
            <span className="hazard-card px-2 py-0.5 font-bold">CLASSIFIED FIELD JOURNAL</span>
            <span className="hidden md:inline">— Vol. I —</span>
          </div>
          <h1 className="font-display text-[clamp(4rem,15vw,12rem)]">
            KADHIRA<span className="italic" style={{ fontFamily: "var(--font-serif)", fontWeight: 900 }}>v</span>AN
          </h1>
          <h1 className="-mt-2 flex items-end gap-4 font-display text-[clamp(4rem,15vw,12rem)]">
            <span>E.G</span>
            <span className="hazard-card translate-y-[-1.2em] px-3 py-1 font-mono text-xs uppercase tracking-widest">
              alias: joker53
            </span>
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-xl leading-snug md:text-2xl">
            Cybersecurity engineering student building <span className="bg-ink px-1 text-paper">secure, efficient software</span> —
            from Wazuh SIEM pipelines to Dockerised compilers and
            OAuth attack simulations.
          </p>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            This site is a manuscript, not a brochure. Read it slowly.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#dossier" className="ink-card inline-flex items-center gap-3 px-5 py-3 font-mono text-xs uppercase tracking-widest font-bold">
              Read the dossier <span className="animate-nudge">→</span>
            </a>
            <a href="#channels" className="paper-card inline-flex items-center gap-3 px-5 py-3 font-mono text-xs uppercase tracking-widest font-bold">
              Open a channel
            </a>
          </div>
        </div>

        <div className="mt-8 md:col-span-2 md:mt-0 md:border-l-2 md:border-ink md:pl-6">
          <div className="rotate-3 border-2 border-blood p-3 text-center font-mono text-[11px] uppercase tracking-widest text-blood">
            <div className="font-display text-2xl tracking-tight">DO NOT</div>
            <div className="font-display text-2xl tracking-tight">DUPLICATE</div>
            <div className="mt-2 text-[9px] opacity-80">SIGNED · K.E.G ✶ 2026</div>
          </div>
          <div className="mt-6 font-mono text-[10px] uppercase leading-relaxed tracking-widest text-muted-foreground">
            <div>* This document is</div>
            <div>self-issued and</div>
            <div>uncertified by any</div>
            <div>authority other than</div>
            <div>the subject himself.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TickerStrip() {
  const items = [
    "FIELD JOURNAL", "CYBER SECURITY · B.E", "SECURE CODING",
    "WAZUH · SIEM", "DEVSECOPS ✶", "DOCKER · CI/CD",
    "PYTHON · JAVA · RUST", "OAUTH SIMULATION",
  ];
  return (
    <div className="border-b-2 border-ink bg-ink py-4 text-paper">
      <div className="flex animate-marquee-x whitespace-nowrap">
        {[...items, ...items, ...items].map((s, i) => (
          <span key={i} className="mx-8 font-display text-2xl tracking-tight md:text-3xl">
            {s} <span className="text-hazard">✶</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Chapter({ n, label, title, kicker }: { n: string; label: string; title: string; kicker?: string }) {
  return (
    <div className="mb-12 border-b-2 border-ink pb-6">
      <div className="grid items-end gap-6 md:grid-cols-12">
        <div className="md:col-span-2">
          <div className="hazard-card inline-block px-2 py-1 font-mono text-[10px] uppercase tracking-widest font-bold">
            CH · {n}
          </div>
          <div className="mt-3 font-display text-8xl leading-none">{n}</div>
        </div>
        <div className="md:col-span-7">
          <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">— {label}</div>
          <h2 className="mt-1 font-display text-5xl md:text-7xl">{title}</h2>
        </div>
        {kicker && (
          <div className="md:col-span-3 md:text-right">
            <p className="font-serif italic text-lg leading-snug">{kicker}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function Manifesto() {
  return (
    <section id="manifesto" className="border-b-2 border-ink">
      <div className="mx-auto max-w-[1400px] px-6 py-20">
        <Chapter n="I" label="Manifesto" title="Field notes, not a résumé." kicker="“Secure code is just code that survived the second reading.”" />
        <div className="grid gap-10 md:grid-cols-12">
          <article className="md:col-span-7 md:border-r-2 md:border-ink md:pr-10">
            <p className="font-serif text-2xl leading-snug">
              <span className="float-left mr-3 mt-1 font-display text-7xl leading-[0.8]">I</span>
              am a Cybersecurity Engineering undergraduate at Sri Shakthi
              Institute of Engineering and Technology in Coimbatore, where
              I am learning — in equal parts — to write software and to
              question every assumption behind it.
            </p>
            <p className="mt-6 leading-relaxed">
              My practice splits into three modes. <em className="font-serif">Building</em>:
              Python and FastAPI services, JavaScript frontends, Dockerised
              dev environments and CI/CD pipelines with Jenkins. <em className="font-serif">Defending</em>:
              standing up Wazuh as a SIEM, wiring Prometheus and Grafana
              for visibility, reviewing code for the obvious and the
              not-so-obvious flaws. <em className="font-serif">Sparring</em>: TryHackMe rooms,
              Hack The Box labs and Microsoft Learn modules on cloud security.
            </p>
            <p className="mt-6 leading-relaxed">
              Below is a chronological dossier, the disciplines I am
              actively training in, and the flagship project I keep
              returning to — the Intelligent Compiler. If any of it is
              useful to you, the channels at the end of this manuscript
              are open.
            </p>
          </article>

          <aside className="md:col-span-5">
            <div className="paper-card p-6">
              <div className="border-b-2 border-ink pb-2 font-mono text-[11px] uppercase tracking-widest">
                Standing Figures
              </div>
              <dl className="mt-4 divide-y-2 divide-ink">
                {[
                  ["Programme", "B.E. Cyber Security"],
                  ["Current CGPA", "8.6"],
                  ["HSE · Maths/CS", "92%"],
                  ["SSLC", "86%"],
                  ["Active projects", "02"],
                  ["Certificates", "DevSecOps · Cisco"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4 py-3">
                    <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{k}</dt>
                    <dd className="font-display text-2xl md:text-3xl text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="hazard-card mt-4 flex items-center gap-3 p-4 font-mono text-[11px] uppercase tracking-widest font-bold">
              <span className="h-2 w-2 animate-blink bg-ink" />
              Currently: building the OAuth replay simulation
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Dossier() {
  return (
    <section id="dossier" className="border-b-2 border-ink bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 py-20">
        <Chapter n="II" label="Dossier" title="A timeline, on the record." kicker="From a school in Tiruppur to a cyber-security lab in Coimbatore." />
        <ol className="space-y-0">
          {dossier.map((d, i) => (
            <li key={d.y} className="grid items-start gap-6 border-t-2 border-ink py-8 md:grid-cols-12">
              <div className="md:col-span-2">
                <div className="font-display text-6xl md:text-7xl">{d.y}</div>
              </div>
              <div className="md:col-span-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                ENTRY · 0{i + 1}
              </div>
              <div className="md:col-span-6">
                <h3 className="font-display text-3xl md:text-4xl">{d.t}</h3>
                <p className="mt-3 max-w-xl font-serif text-lg leading-snug">{d.body}</p>
              </div>
              <div className="md:col-span-3 md:text-right">
                <div className="inline-block border-2 border-ink px-3 py-1 font-mono text-[10px] uppercase tracking-widest">
                  Filed · {d.y}
                </div>
              </div>
            </li>
          ))}
          <li className="border-y-2 border-ink py-6 hazard-tape" />
        </ol>
      </div>
    </section>
  );
}

function Disciplines() {
  return (
    <section id="disciplines" className="border-b-2 border-ink">
      <div className="mx-auto max-w-[1400px] px-6 py-20">
        <Chapter n="III" label="Disciplines" title="What I'm training on." kicker="Cards from a working deck — drawn often, kept sharp." />
        <div className="grid grid-cols-1 gap-0 border-2 border-ink md:grid-cols-2 lg:grid-cols-3">
          {disciplines.map((d, i) => (
            <article
              key={d.code}
              className={`group relative flex flex-col gap-4 border-ink p-6 transition-colors hover:bg-hazard ${
                i !== 0 ? "border-t-2 md:border-t-0 md:border-l-2" : ""
              } ${i >= 2 ? "lg:border-t-2 lg:border-l-2" : ""}`}
            >
              <header className="flex items-center justify-between">
                <span className="font-display text-5xl leading-none">{d.code}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  0{i + 1} / 0{disciplines.length}
                </span>
              </header>
              <h3 className="font-display text-2xl">{d.name}</h3>
              <p className="font-serif text-base leading-snug">{d.blurb}</p>
              <ul className="mt-auto flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-widest">
                {d.verbs.map((v) => (
                  <li key={v} className="border-2 border-ink px-2 py-1 font-bold">/ {v}</li>
                ))}
              </ul>
            </article>
          ))}
          <article className="halftone flex flex-col justify-end gap-2 border-t-2 border-l-0 border-ink p-6 md:border-l-2 lg:border-t-2">
            <span className="font-display text-5xl leading-none">+∞</span>
            <h3 className="font-display text-2xl">Always learning</h3>
            <p className="font-serif text-sm">Python · Java · Bash · Rust · JavaScript · HTML · CSS · Docker · Jenkins · Linux · Git · Grafana · Prometheus · Wazuh.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Flagship() {
  return (
    <section id="flagship" className="border-b-2 border-ink bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="mb-12 border-b-2 border-paper pb-6">
          <div className="grid items-end gap-6 md:grid-cols-12">
            <div className="md:col-span-2">
              <div className="inline-block border-2 border-hazard px-2 py-1 font-mono text-[10px] uppercase tracking-widest font-bold text-hazard">
                CH · IV
              </div>
              <div className="mt-3 font-display text-8xl leading-none text-hazard">IV</div>
            </div>
            <div className="md:col-span-7">
              <div className="font-mono text-[11px] uppercase tracking-widest text-paper/60">— Flagship Specimen</div>
              <h2 className="mt-1 font-display text-5xl md:text-7xl">The Intelligent Compiler.</h2>
            </div>
            <div className="md:col-span-3 md:text-right">
              <p className="font-serif italic text-lg leading-snug">A compiler that doesn't just run your code — it explains why it broke, and fixes it.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-serif text-2xl leading-snug">
              Built during my time as a System UX Engineer at XarrowAI
              Industries — a web compiler that catches errors as they
              happen and auto-fixes the simple ones, so the working flow
              of a program stays readable end-to-end.
            </p>
            <p className="mt-6 leading-relaxed text-paper/80">
              The backend runs on Python FastAPI, the frontend is hand-rolled
              JavaScript, and the whole thing ships as a Docker container
              for one-command deployment. It is the small project I keep
              returning to and hardening — exactly the place where
              development, security and operations meet.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://github.com/KADHIRAVANEG/Errorfinder" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-3 bg-hazard px-5 py-3 font-mono text-xs uppercase tracking-widest font-bold text-ink">
                Source on GitHub <span className="animate-nudge">→</span>
              </a>
              <a href="https://intelligentcompiler.onrender.com/" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-3 border-2 border-paper px-5 py-3 font-mono text-xs uppercase tracking-widest font-bold text-paper hover:bg-paper hover:text-ink">
                Live demonstration
              </a>
            </div>
          </div>

          <aside className="md:col-span-5">
            <div className="border-2 border-paper p-6">
              <div className="border-b-2 border-paper pb-2 font-mono text-[11px] uppercase tracking-widest text-paper/60">
                Specimen Report
              </div>
              <dl className="mt-4 divide-y-2 divide-paper/30">
                {[
                  ["Role", "System UX Engineer"],
                  ["Org", "XarrowAI Industries"],
                  ["Stack", "FastAPI · JS · Docker"],
                  ["Deploy", "Live on Render"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4 py-3">
                    <dt className="font-mono text-xs uppercase tracking-widest text-paper/60">{k}</dt>
                    <dd className="font-display text-xl md:text-2xl text-hazard text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-6 border-2 border-paper p-6">
              <div className="border-b-2 border-paper pb-2 font-mono text-[11px] uppercase tracking-widest text-paper/60">
                Companion Specimen
              </div>
              <h3 className="mt-3 font-display text-2xl">Secure-OAuth Simulation</h3>
              <p className="mt-2 font-serif text-base text-paper/80">
                A Python Flask university-login simulation that
                demonstrates OAuth token-replay vulnerabilities — a
                hands-on tool for identifying and addressing critical
                OAuth security risks.
              </p>
              <a href="https://github.com/KADHIRAVANEG" target="_blank" rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest font-bold text-hazard">
                → GitHub
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  const items = [
    {
      n: "01",
      title: "Ultimate DevSecOps Bootcamp",
      issuer: "Udemy",
      body: "A deep dive into where Development, Security and Operations meet — modern, secure software-delivery pipelines.",
      href: "https://lnkd.in/eVYpJc2B",
    },
    {
      n: "02",
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      body: "Cyber threats, online safety, and how cybersecurity shapes the digital world we use every day.",
      href: "#",
    },
    {
      n: "03",
      title: "Self-directed labs",
      issuer: "TryHackMe · Hack The Box · Microsoft Learn",
      body: "Penetration testing, network vulnerability analysis, active threat mitigation and cloud security modules.",
      href: "https://tryhackme.com/",
    },
  ];
  return (
    <section className="border-b-2 border-ink bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 border-b-2 border-ink pb-6">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">— Appendix A</div>
            <h2 className="mt-1 font-display text-5xl md:text-6xl">Stamps & Certifications.</h2>
          </div>
          <p className="max-w-md font-serif italic text-lg">
            Earned through coursework, bootcamps and a lot of late-night terminal time.
          </p>
        </div>
        <div className="grid gap-0 border-2 border-ink md:grid-cols-3">
          {items.map((it, i) => (
            <a
              key={it.n}
              href={it.href}
              target={it.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className={`group flex flex-col gap-3 bg-paper p-6 transition-colors hover:bg-hazard ${
                i !== 0 ? "border-t-2 md:border-t-0 md:border-l-2 border-ink" : ""
              }`}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-5xl">{it.n}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">CERT</span>
              </div>
              <h3 className="font-display text-2xl">{it.title}</h3>
              <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{it.issuer}</div>
              <p className="font-serif text-base leading-snug">{it.body}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Channels() {
  return (
    <section id="channels" className="border-b-2 border-ink">
      <div className="mx-auto max-w-[1400px] px-6 py-20">
        <Chapter n="V" label="Channels" title="If you've read this far, talk." kicker="Pick the one that suits the message. Mail is always read." />
        <div className="grid gap-0 border-2 border-ink md:grid-cols-2 lg:grid-cols-3">
          {channels.map((c, i) => (
            <a
              key={c.tag}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className={`group flex items-center justify-between gap-4 border-ink bg-paper p-6 transition-colors hover:bg-hazard ${
                i !== 0 ? "border-t-2 md:[&:nth-child(odd)]:border-t-2 lg:border-t-0" : ""
              } ${i % 2 !== 0 ? "md:border-l-2" : ""} ${i >= 3 ? "lg:border-t-2" : ""} ${i % 3 !== 0 ? "lg:border-l-2" : "lg:border-l-0"}`}
            >
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">№ {c.tag}</div>
                <div className="mt-2 font-display text-3xl">{c.label}</div>
                <div className="mt-1 font-serif text-base break-all">{c.value}</div>
              </div>
              <span className="font-display text-4xl transition-transform group-hover:translate-x-1">→</span>
            </a>
          ))}
        </div>

        <div className="mt-10 grid gap-6 border-2 border-ink p-6 md:grid-cols-[1fr_auto] md:p-8">
          <div>
            <h3 className="font-display text-3xl md:text-4xl">Open to internships & collaborations.</h3>
            <p className="mt-2 max-w-xl font-serif text-lg">
              Cybersecurity, secure-coding reviews, DevSecOps tooling,
              SIEM lab work — if it overlaps with the dossier above, I'd
              like to hear about it.
            </p>
          </div>
          <div className="hazard-card self-center p-4 text-center font-mono text-[10px] uppercase tracking-widest font-bold">
            <div>BASED IN</div>
            <div className="mt-1 font-display text-2xl">CBE · TN</div>
            <div className="mt-1 opacity-70">remote-friendly</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Colophon() {
  return (
    <footer className="bg-paper">
      <div className="hazard-tape h-2" />
      <div className="mx-auto grid max-w-[1400px] gap-6 px-6 py-10 md:grid-cols-3">
        <div>
          <div className="font-display text-4xl">COLOPHON.</div>
          <p className="mt-3 max-w-xs font-serif text-base">
            Set in Anton and Fraunces. Typeset in a paper-coloured browser.
            Printed nowhere. Maintained, reluctantly, by hand.
          </p>
        </div>
        <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <div>Manuscript · Vol. I</div>
          <div>Edition · 2026</div>
          <div>Subject · K.E.G</div>
          <div>Status · Living document</div>
        </div>
        <div className="md:text-right">
          <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">© {new Date().getFullYear()} Kadhiravan E.G</div>
          <div className="mt-1 font-serif italic">Built with intent, not templates.</div>
        </div>
      </div>
    </footer>
  );
}
