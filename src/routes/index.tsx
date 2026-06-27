import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

// ─── ✏️  Edit your info here ──────────────────────────────────────────────────
const profile = {
  name: "Joker53",
  fullName: "KADHIRAVANEG",
  roles: ["Full Stack Developer", "Cybersecurity Student", "Linux Enthusiast", "Open Source Contributor", "UI/UX Engineer"],
  bio: "B.E. Computer Science (Cybersecurity) student & System UX Engineer at XarrowAI Industries. I build fast, secure, and beautiful web experiences — obsessed with Linux, open source, and shipping things that matter.",
  avatarUrl: "https://avatars.githubusercontent.com/u/188657856",
  github: "https://github.com/KADHIRAVANEG",
  linkedin: "https://linkedin.com/in/yourprofile",
  email: "you@example.com",
  location: "Coimbatore, India 🇮🇳",
  company: "XarrowAI Industries",
  college: "Sri Shakthi Institute of Engineering and Technology",
  available: true,
  resumeUrl: "#",
};

const skills = [
  { category: "Frontend", icon: "⚛️", items: ["React 19", "TypeScript", "Tailwind CSS v4", "Vite 8", "shadcn/ui", "TanStack"], color: "#6366F1" },
  { category: "Backend", icon: "⚙️", items: ["Node.js", "Express", "REST APIs", "TanStack Start", "SSR"], color: "#8B5CF6" },
  { category: "Cybersecurity", icon: "🛡️", items: ["Network Security", "Penetration Testing", "CTF", "OSINT", "Linux Hardening"], color: "#EF4444" },
  { category: "Linux & DevOps", icon: "🐧", items: ["Arch Linux", "Hyprland", "KDE", "Docker", "GitHub Actions", "Vercel"], color: "#10B981" },
  { category: "Database", icon: "🗄️", items: ["PostgreSQL", "MongoDB", "Prisma", "Redis"], color: "#06B6D4" },
  { category: "Tools & Design", icon: "🛠️", items: ["Git", "Figma", "QML", "Shell Script", "VS Code", "Bun"], color: "#F59E0B" },
];

const projects = [
  {
    title: "Portfolio Template",
    description: "A modern, fully-typed developer portfolio built with React 19, TanStack Start, Tailwind CSS v4, and shadcn/ui. SSR-ready and deployable to Vercel in minutes.",
    tags: ["React 19", "TypeScript", "TanStack Start", "Tailwind v4", "Vercel"],
    github: "https://github.com/KADHIRAVANEG/portfolio-template",
    live: "https://portfolio-template-d4adpjk2l-kadhir.vercel.app/",
    featured: true,
    icon: "🌐",
  },
  {
    title: "SDDM Theme Collection",
    description: "A QML-based SDDM lockscreen theme collection for Linux desktops with a GitHub Pages showcase site. Clean, minimal, and easy to install.",
    tags: ["QML", "Linux", "Shell", "GitHub Pages", "SDDM"],
    github: "https://github.com/KADHIRAVANEG",
    live: "",
    featured: true,
    icon: "🖥️",
  },
  {
    title: "GRUB Themes",
    description: "A GRUB2 bootloader theme collection with an automated installer script. Open source, reviewed for quality and security.",
    tags: ["Shell Script", "GRUB2", "Linux", "Open Source"],
    github: "https://github.com/KADHIRAVANEG",
    live: "",
    featured: false,
    icon: "🔒",
  },
  {
    title: "XarrowAI System UX",
    description: "System UX engineering work at XarrowAI Industries — building seamless, accessible, and high-performance user experiences for AI-powered products.",
    tags: ["UX Engineering", "React", "AI", "TypeScript"],
    github: "",
    live: "",
    featured: false,
    icon: "🤖",
  },
];

const experience = [
  {
    role: "System UX Engineer",
    company: "XarrowAI Industries",
    period: "2024 – Present",
    description: "Building seamless, accessible, and high-performance user experiences for AI-powered products. Focused on system-level UX design and frontend engineering.",
    tags: ["React", "TypeScript", "UX Engineering", "AI"],
    icon: "💼",
  },
  {
    role: "B.E. Computer Science (Cybersecurity)",
    company: "Sri Shakthi Institute of Engineering and Technology",
    period: "2022 – 2026",
    description: "Studying computer science with a specialization in cybersecurity. Active in open source development, Linux customization, and web development projects.",
    tags: ["Cybersecurity", "Computer Science", "Open Source"],
    icon: "🎓",
  },
];

const stats = [
  { label: "GitHub Repos", value: "20+", icon: "📦" },
  { label: "Projects Shipped", value: "12+", icon: "🚀" },
  { label: "Technologies", value: "18+", icon: "⚡" },
  { label: "Open Source", value: "∞", icon: "💚" },
];

const certifications = [
  { name: "Cybersecurity Fundamentals", issuer: "CompTIA", year: "2024", icon: "🛡️" },
  { name: "Linux System Administration", issuer: "Linux Foundation", year: "2024", icon: "🐧" },
  { name: "React Developer", issuer: "Meta", year: "2023", icon: "⚛️" },
];
// ─────────────────────────────────────────────────────────────────────────────

function useTypewriter(words: string[], speed = 75, pause = 2000) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), speed);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIndex((w) => (w + 1) % words.length);
    }
    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return displayed;
}

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return scrolled;
}

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

const S = {
  bg: "#0A0F1E",
  bg2: "#0F1629",
  accent: "#6366F1",
  accent2: "#8B5CF6",
  cyan: "#06B6D4",
  green: "#10B981",
  red: "#EF4444",
  amber: "#F59E0B",
  text: "#F8FAFC",
  muted: "#94A3B8",
  border: "rgba(248,250,252,0.07)",
  borderHover: "rgba(99,102,241,0.35)",
};

function Navbar() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["about", "skills", "experience", "projects", "contact"];

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "0 2rem", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "all 0.3s", background: scrolled ? "rgba(10,15,30,0.9)" : "transparent", backdropFilter: scrolled ? "blur(16px)" : "none", borderBottom: scrolled ? `1px solid ${S.border}` : "none" }}>
      <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "1.2rem", color: S.text, letterSpacing: "-0.02em" }}>
        <span style={{ color: S.accent }}>&lt;</span>Joker53<span style={{ color: S.accent }}>/&gt;</span>
      </span>
      <div style={{ display: "flex", gap: "1.75rem", alignItems: "center" }}>
        {links.map((s) => (
          <a key={s} href={`#${s}`} style={{ color: S.muted, textDecoration: "none", fontSize: "0.875rem", fontWeight: 500, transition: "color 0.2s", fontFamily: "'Inter',sans-serif", textTransform: "capitalize" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = S.text)}
            onMouseLeave={(e) => (e.currentTarget.style.color = S.muted)}>
            {s}
          </a>
        ))}
        <a href={`mailto:${profile.email}`} style={{ background: S.accent, color: "#fff", padding: "0.45rem 1.1rem", borderRadius: "8px", textDecoration: "none", fontSize: "0.875rem", fontWeight: 700, fontFamily: "'Inter',sans-serif", transition: "all 0.2s", boxShadow: `0 0 20px rgba(99,102,241,0.3)` }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#4F46E5"; e.currentTarget.style.boxShadow = "0 0 28px rgba(99,102,241,0.5)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = S.accent; e.currentTarget.style.boxShadow = "0 0 20px rgba(99,102,241,0.3)"; }}>
          Hire Me
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  const role = useTypewriter(profile.roles);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section ref={ref} id="about" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", padding: "6rem 2rem 4rem" }}>
      <div style={{ position: "absolute", top: "10%", left: "5%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "5%", right: "5%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "40%", right: "20%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(99,102,241,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.025) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

      <div style={{ maxWidth: "960px", width: "100%", position: "relative", zIndex: 1, opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s ease" }}>
        {profile.available && (
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.25)", borderRadius: "100px", padding: "0.4rem 1rem", marginBottom: "2rem" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: S.green, display: "inline-block", boxShadow: `0 0 8px ${S.green}`, animation: "pulse 2s infinite" }} />
            <span style={{ color: S.green, fontSize: "0.8rem", fontWeight: 600, fontFamily: "'Inter',sans-serif" }}>Open to opportunities · {profile.location}</span>
          </div>
        )}

        <div style={{ display: "flex", gap: "4rem", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: "280px" }}>
            <p style={{ color: S.accent, fontSize: "1rem", fontWeight: 600, fontFamily: "'Space Grotesk',sans-serif", marginBottom: "0.75rem", letterSpacing: "0.04em" }}>👋 Hey there, I'm</p>
            <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(2.8rem, 7vw, 5rem)", fontWeight: 800, color: S.text, lineHeight: 1.0, letterSpacing: "-0.04em", marginBottom: "0.5rem" }}>
              {profile.name}
            </h1>
            <p style={{ color: S.muted, fontSize: "0.9rem", fontFamily: "'Inter',sans-serif", marginBottom: "1.25rem" }}>{profile.company} · {profile.college}</p>

            <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(1rem, 2.5vw, 1.4rem)", color: S.muted, marginBottom: "1.5rem", minHeight: "2em", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ color: S.accent, fontWeight: 700 }}>~/</span>
              <span style={{ color: S.text, fontWeight: 600 }}>{role}</span>
              <span style={{ color: S.accent, animation: "blink 1s step-end infinite", fontWeight: 300 }}>▌</span>
            </div>

            <p style={{ color: S.muted, fontSize: "1rem", lineHeight: 1.75, fontFamily: "'Inter',sans-serif", marginBottom: "2rem", maxWidth: "540px" }}>{profile.bio}</p>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href={`mailto:${profile.email}`} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: S.accent, color: "#fff", padding: "0.8rem 1.6rem", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "0.95rem", fontFamily: "'Space Grotesk',sans-serif", transition: "all 0.2s", boxShadow: "0 0 24px rgba(99,102,241,0.35)" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#4F46E5"; e.currentTarget.style.boxShadow = "0 0 36px rgba(99,102,241,0.55)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = S.accent; e.currentTarget.style.boxShadow = "0 0 24px rgba(99,102,241,0.35)"; e.currentTarget.style.transform = "none"; }}>
                Get In Touch ✉️
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "transparent", color: S.text, padding: "0.8rem 1.6rem", borderRadius: "10px", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem", fontFamily: "'Space Grotesk',sans-serif", border: `1px solid rgba(248,250,252,0.12)`, transition: "all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = S.accent; e.currentTarget.style.color = S.accent; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(248,250,252,0.12)"; e.currentTarget.style.color = S.text; e.currentTarget.style.transform = "none"; }}>
                GitHub ↗
              </a>
              <a href={profile.resumeUrl} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "transparent", color: S.muted, padding: "0.8rem 1.6rem", borderRadius: "10px", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem", fontFamily: "'Space Grotesk',sans-serif", border: `1px solid rgba(248,250,252,0.08)`, transition: "all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = S.amber; e.currentTarget.style.color = S.amber; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(248,250,252,0.08)"; e.currentTarget.style.color = S.muted; }}>
                Resume ↓
              </a>
            </div>
          </div>

          <div style={{ position: "relative", flexShrink: 0 }}>
            <div style={{ position: "absolute", inset: "-5px", borderRadius: "50%", background: `linear-gradient(135deg, ${S.accent}, ${S.accent2}, ${S.cyan})`, zIndex: 0, animation: "spin 8s linear infinite" }} />
            <div style={{ position: "absolute", inset: "-2px", borderRadius: "50%", background: S.bg, zIndex: 0 }} />
            <img src={profile.avatarUrl} alt={profile.name} style={{ width: "200px", height: "200px", borderRadius: "50%", objectFit: "cover", position: "relative", zIndex: 1, border: `4px solid ${S.bg}` }} />
            <div style={{ position: "absolute", bottom: "10px", right: "10px", background: S.bg, border: `2px solid ${S.accent}`, borderRadius: "50%", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", zIndex: 2 }}>🛡️</div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.5rem", marginTop: "4rem", borderTop: `1px solid ${S.border}`, paddingTop: "3rem" }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: "center", padding: "1.25rem", background: "rgba(99,102,241,0.04)", border: `1px solid ${S.border}`, borderRadius: "12px" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>{s.icon}</div>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.8rem", fontWeight: 800, color: S.accent, lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: S.muted, fontSize: "0.78rem", fontFamily: "'Inter',sans-serif", marginTop: "0.35rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);
  return (
    <section ref={ref} id={id} style={{ padding: "6rem 2rem", maxWidth: "960px", margin: "0 auto", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s ease" }}>
      <div style={{ marginBottom: "3rem" }}>
        <p style={{ color: S.accent, fontSize: "0.8rem", fontWeight: 700, fontFamily: "'Space Grotesk',sans-serif", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{eyebrow}</p>
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: S.text, letterSpacing: "-0.025em" }}>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="What I work with" title="Skills & Technologies">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
        {skills.map((group) => <SkillCard key={group.category} group={group} />)}
      </div>
    </Section>
  );
}

function SkillCard({ group }: { group: typeof skills[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? `${group.color}08` : "rgba(248,250,252,0.02)", border: `1px solid ${hovered ? group.color + "35" : S.border}`, borderRadius: "14px", padding: "1.5rem", transition: "all 0.25s", cursor: "default", transform: hovered ? "translateY(-3px)" : "none", boxShadow: hovered ? `0 8px 30px ${group.color}15` : "none" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
        <span style={{ fontSize: "1.5rem" }}>{group.icon}</span>
        <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, color: S.text, fontSize: "1rem" }}>{group.category}</h3>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {group.items.map((item) => (
          <span key={item} style={{ background: `${group.color}15`, color: group.color, border: `1px solid ${group.color}28`, borderRadius: "6px", padding: "0.25rem 0.7rem", fontSize: "0.78rem", fontWeight: 600, fontFamily: "'Inter',sans-serif" }}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="My journey" title="Experience & Education">
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: "28px", top: "48px", bottom: "48px", width: "2px", background: `linear-gradient(to bottom, ${S.accent}, ${S.accent2}, transparent)` }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {experience.map((item, i) => <ExpCard key={i} item={item} index={i} />)}
        </div>
      </div>
    </Section>
  );
}

function ExpCard({ item, index }: { item: typeof experience[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
      <div style={{ width: "58px", height: "58px", borderRadius: "50%", background: hovered ? `rgba(99,102,241,0.2)` : "rgba(99,102,241,0.08)", border: `2px solid ${hovered ? S.accent : "rgba(99,102,241,0.25)"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", flexShrink: 0, transition: "all 0.25s", zIndex: 1 }}>
        {item.icon}
      </div>
      <div style={{ flex: 1, background: hovered ? "rgba(99,102,241,0.05)" : "rgba(248,250,252,0.02)", border: `1px solid ${hovered ? S.borderHover : S.border}`, borderRadius: "14px", padding: "1.75rem", transition: "all 0.25s", transform: hovered ? "translateX(4px)" : "none" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
          <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, color: S.text, fontSize: "1.05rem" }}>{item.role}</h3>
          <span style={{ background: "rgba(99,102,241,0.1)", color: S.accent, border: "1px solid rgba(99,102,241,0.2)", borderRadius: "100px", padding: "0.2rem 0.8rem", fontSize: "0.75rem", fontWeight: 600, fontFamily: "'Inter',sans-serif", whiteSpace: "nowrap" }}>{item.period}</span>
        </div>
        <p style={{ color: S.accent, fontSize: "0.88rem", fontWeight: 600, fontFamily: "'Inter',sans-serif", marginBottom: "0.75rem" }}>{item.company}</p>
        <p style={{ color: S.muted, fontSize: "0.9rem", lineHeight: 1.7, fontFamily: "'Inter',sans-serif", marginBottom: "1rem" }}>{item.description}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {item.tags.map((tag) => (
            <span key={tag} style={{ background: "rgba(248,250,252,0.04)", color: S.muted, border: `1px solid ${S.border}`, borderRadius: "6px", padding: "0.2rem 0.6rem", fontSize: "0.75rem", fontFamily: "'Inter',sans-serif" }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="What I've built" title="Featured Projects">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))", gap: "1.25rem" }}>
        {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
    </Section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? "rgba(99,102,241,0.06)" : "rgba(248,250,252,0.025)", border: `1px solid ${hovered ? S.borderHover : S.border}`, borderRadius: "16px", padding: "2rem", transition: "all 0.25s", display: "flex", flexDirection: "column", gap: "1rem", transform: hovered ? "translateY(-4px)" : "none", boxShadow: hovered ? "0 12px 40px rgba(99,102,241,0.12)" : "none" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span style={{ fontSize: "1.75rem" }}>{project.icon}</span>
          <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, color: S.text, fontSize: "1.1rem" }}>{project.title}</h3>
        </div>
        {project.featured && (
          <span style={{ background: "rgba(99,102,241,0.12)", color: S.accent, border: "1px solid rgba(99,102,241,0.25)", borderRadius: "100px", padding: "0.15rem 0.7rem", fontSize: "0.7rem", fontWeight: 700, fontFamily: "'Inter',sans-serif", whiteSpace: "nowrap" }}>FEATURED</span>
        )}
      </div>
      <p style={{ color: S.muted, fontSize: "0.9rem", lineHeight: 1.7, fontFamily: "'Inter',sans-serif", flex: 1 }}>{project.description}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {project.tags.map((tag) => (
          <span key={tag} style={{ background: "rgba(248,250,252,0.04)", color: S.muted, border: `1px solid ${S.border}`, borderRadius: "6px", padding: "0.2rem 0.6rem", fontSize: "0.75rem", fontFamily: "'Inter',sans-serif" }}>{tag}</span>
        ))}
      </div>
      <div style={{ display: "flex", gap: "1rem", paddingTop: "0.5rem", borderTop: `1px solid ${S.border}` }}>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: S.muted, textDecoration: "none", fontSize: "0.85rem", fontFamily: "'Inter',sans-serif", transition: "color 0.2s", fontWeight: 500 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = S.text)}
            onMouseLeave={(e) => (e.currentTarget.style.color = S.muted)}>
            GitHub ↗
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ color: S.accent, textDecoration: "none", fontSize: "0.85rem", fontFamily: "'Inter',sans-serif", transition: "color 0.2s", fontWeight: 600 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#818CF8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = S.accent)}>
            Live Demo ↗
          </a>
        )}
        {!project.github && !project.live && (
          <span style={{ color: "rgba(148,163,184,0.4)", fontSize: "0.82rem", fontFamily: "'Inter',sans-serif" }}>Private / In Progress</span>
        )}
      </div>
    </div>
  );
}

function Certifications() {
  return (
    <Section id="certs" eyebrow="Credentials" title="Certifications">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1rem" }}>
        {certifications.map((cert) => {
          const [hovered, setHovered] = useState(false);
          return (
            <div key={cert.name} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
              style={{ background: hovered ? "rgba(99,102,241,0.06)" : "rgba(248,250,252,0.025)", border: `1px solid ${hovered ? S.borderHover : S.border}`, borderRadius: "12px", padding: "1.5rem", transition: "all 0.25s", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <span style={{ fontSize: "2rem", flexShrink: 0 }}>{cert.icon}</span>
              <div>
                <h4 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, color: S.text, fontSize: "0.95rem", marginBottom: "0.25rem" }}>{cert.name}</h4>
                <p style={{ color: S.accent, fontSize: "0.82rem", fontFamily: "'Inter',sans-serif", fontWeight: 600 }}>{cert.issuer}</p>
                <p style={{ color: S.muted, fontSize: "0.78rem", fontFamily: "'Inter',sans-serif", marginTop: "0.15rem" }}>{cert.year}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);
  return (
    <section ref={ref} id="contact" style={{ padding: "4rem 2rem 8rem", maxWidth: "960px", margin: "0 auto", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s ease" }}>
      <div style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.07) 50%, rgba(6,182,212,0.05) 100%)", border: `1px solid rgba(99,102,241,0.2)`, borderRadius: "24px", padding: "5rem 3rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "250px", height: "250px", borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <p style={{ color: S.accent, fontSize: "0.85rem", fontWeight: 700, fontFamily: "'Space Grotesk',sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Let's work together</p>
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, color: S.text, letterSpacing: "-0.03em", marginBottom: "1.25rem" }}>Got a project in mind?</h2>
        <p style={{ color: S.muted, fontSize: "1.05rem", lineHeight: 1.75, fontFamily: "'Inter',sans-serif", maxWidth: "500px", margin: "0 auto 3rem" }}>
          I'm open to freelance projects, full-time roles, and open source collaborations. Whether it's a quick question or a big idea — let's talk.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          <a href={`mailto:${profile.email}`} style={{ background: S.accent, color: "#fff", padding: "1rem 2.25rem", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "'Space Grotesk',sans-serif", transition: "all 0.2s", boxShadow: "0 0 28px rgba(99,102,241,0.4)" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#4F46E5"; e.currentTarget.style.boxShadow = "0 0 40px rgba(99,102,241,0.6)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = S.accent; e.currentTarget.style.boxShadow = "0 0 28px rgba(99,102,241,0.4)"; e.currentTarget.style.transform = "none"; }}>
            Send a Message ✉️
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" style={{ background: "transparent", color: S.text, padding: "1rem 2.25rem", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "'Space Grotesk',sans-serif", border: `1px solid rgba(248,250,252,0.15)`, transition: "all 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = S.accent; e.currentTarget.style.color = S.accent; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(248,250,252,0.15)"; e.currentTarget.style.color = S.text; e.currentTarget.style.transform = "none"; }}>
            View GitHub ↗
          </a>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "2.5rem" }}>
          {[{ label: "GitHub", href: profile.github }, { label: "LinkedIn", href: profile.linkedin }, { label: "Email", href: `mailto:${profile.email}` }].map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={{ color: S.muted, textDecoration: "none", fontSize: "0.9rem", fontFamily: "'Inter',sans-serif", transition: "color 0.2s", fontWeight: 500 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = S.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = S.muted)}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${S.border}`, padding: "2rem", textAlign: "center" }}>
      <p style={{ color: "#374151", fontSize: "0.85rem", fontFamily: "'Inter',sans-serif" }}>
        Designed & built by{" "}
        <span style={{ color: S.accent, fontWeight: 600 }}>Joker53</span>
        {" "}· Built with{" "}
        <span style={{ color: "#818CF8" }}>React 19 + TanStack Start + Tailwind v4</span>
        {" "}·{" "}
        <a href="https://github.com/KADHIRAVANEG/portfolio-template" style={{ color: S.accent, textDecoration: "none", fontWeight: 600 }}>Use this template ↗</a>
      </p>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse { 0%,100%{opacity:1;box-shadow:0 0 8px #10B981} 50%{opacity:0.5;box-shadow:0 0 16px #10B981} }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0A0F1E; }
        ::-webkit-scrollbar-thumb { background: #6366F1; border-radius: 3px; }
      `}</style>
      <div style={{ background: S.bg, minHeight: "100vh", color: S.text }}>
        <Navbar />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
