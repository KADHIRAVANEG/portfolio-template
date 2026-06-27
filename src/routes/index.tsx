import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

// ─── ✏️  Edit your info here ──────────────────────────────────────────────────
const profile = {
  name: "Alex Rivera",
  roles: ["Full Stack Developer", "Open Source Contributor", "UI/UX Enthusiast", "Linux Power User"],
  bio: "I craft fast, accessible, and beautiful web experiences. Obsessed with developer tooling, clean architecture, and shipping things that matter.",
  avatarUrl: "https://avatars.githubusercontent.com/u/188657856",
  github: "https://github.com/KADHIRAVANEG",
  linkedin: "https://linkedin.com/in/yourprofile",
  email: "you@example.com",
  location: "Coimbatore, India",
  available: true,
};

const skills = [
  { category: "Frontend", icon: "⚛️", items: ["React 19", "TypeScript", "Tailwind CSS v4", "Vite 8"], color: "#6366F1" },
  { category: "Backend", icon: "⚙️", items: ["Node.js", "Express", "REST APIs", "TanStack Start"], color: "#8B5CF6" },
  { category: "Database", icon: "🗄️", items: ["PostgreSQL", "MongoDB", "Prisma", "Redis"], color: "#06B6D4" },
  { category: "DevOps", icon: "🚀", items: ["Docker", "GitHub Actions", "Vercel", "Linux"], color: "#10B981" },
  { category: "Tools", icon: "🛠️", items: ["Git", "VS Code", "Bun", "shadcn/ui"], color: "#F59E0B" },
  { category: "Design", icon: "🎨", items: ["Figma", "Framer Motion", "GSAP", "SVG"], color: "#EC4899" },
];

const projects = [
  {
    title: "Portfolio Template",
    description: "A modern, fully-typed developer portfolio built with React 19, TanStack Start, Tailwind CSS v4, and shadcn/ui. SSR-ready and deployable to Vercel in minutes.",
    tags: ["React 19", "TypeScript", "TanStack Start", "Tailwind v4"],
    github: "https://github.com/KADHIRAVANEG/portfolio-template",
    live: "https://portfolio-template-d4adpjk2l-kadhir.vercel.app/",
    featured: true,
  },
  {
    title: "SDDM Theme Collection",
    description: "A QML-based SDDM lockscreen theme collection for Linux desktops with a GitHub Pages showcase site.",
    tags: ["QML", "Linux", "Shell", "GitHub Pages"],
    github: "https://github.com/KADHIRAVANEG",
    live: "",
    featured: false,
  },
  {
    title: "GRUB Themes",
    description: "A GRUB2 bootloader theme collection with an automated installer script. Open source, reviewed for quality.",
    tags: ["Shell Script", "GRUB2", "Linux", "Open Source"],
    github: "https://github.com/KADHIRAVANEG",
    live: "",
    featured: false,
  },
];

const stats = [
  { label: "Projects Shipped", value: "12+" },
  { label: "GitHub Repos", value: "20+" },
  { label: "Technologies", value: "15+" },
  { label: "Coffee / day", value: "∞" },
];
// ─────────────────────────────────────────────────────────────────────────────

function useTypewriter(words: string[], speed = 80, pause = 1800) {
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
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((w) => (w + 1) % words.length);
    }

    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return displayed;
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 2rem",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(10, 15, 30, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(99, 102, 241, 0.15)" : "none",
      }}
    >
      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#F8FAFC", letterSpacing: "-0.02em" }}>
        <span style={{ color: "#6366F1" }}>&lt;</span>dev<span style={{ color: "#6366F1" }}>/&gt;</span>
      </span>
      <div style={{ display: "flex", gap: "2rem" }}>
        {["about", "skills", "projects", "contact"].map((s) => (
          <a
            key={s}
            href={`#${s}`}
            style={{ color: "#94A3B8", textDecoration: "none", fontSize: "0.875rem", fontWeight: 500, transition: "color 0.2s", fontFamily: "'Inter', sans-serif", textTransform: "capitalize" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F8FAFC")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
          >
            {s}
          </a>
        ))}
        <a
          href={`mailto:${profile.email}`}
          style={{ background: "#6366F1", color: "#fff", padding: "0.4rem 1rem", borderRadius: "6px", textDecoration: "none", fontSize: "0.875rem", fontWeight: 600, fontFamily: "'Inter', sans-serif", transition: "background 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#4F46E5")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#6366F1")}
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  const role = useTypewriter(profile.roles);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "6rem 2rem 4rem",
      }}
    >
      {/* Gradient orbs */}
      <div style={{ position: "absolute", top: "15%", left: "10%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "5%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "800px", height: "800px", borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Grid pattern */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)", backgroundSize: "50px 50px", pointerEvents: "none" }} />

      <div style={{ maxWidth: "900px", width: "100%", position: "relative", zIndex: 1 }}>
        {/* Status badge */}
        {profile.available && (
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: "100px", padding: "0.35rem 1rem", marginBottom: "2rem" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10B981", display: "inline-block", boxShadow: "0 0 8px #10B981", animation: "pulse 2s infinite" }} />
            <span style={{ color: "#10B981", fontSize: "0.8rem", fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>Available for work</span>
          </div>
        )}

        <div style={{ display: "flex", gap: "3rem", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: "300px" }}>
            <p style={{ color: "#6366F1", fontSize: "1rem", fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif", marginBottom: "0.75rem", letterSpacing: "0.05em" }}>
              👋 Hey there, I'm
            </p>
            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "1rem" }}>
              {profile.name}
            </h1>

            {/* Typewriter */}
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", color: "#94A3B8", marginBottom: "1.5rem", minHeight: "2em", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ color: "#6366F1" }}>$</span>
              <span style={{ color: "#F8FAFC", fontWeight: 600 }}>{role}</span>
              <span style={{ color: "#6366F1", animation: "blink 1s step-end infinite" }}>_</span>
            </div>

            <p style={{ color: "#94A3B8", fontSize: "1.05rem", lineHeight: 1.7, fontFamily: "'Inter', sans-serif", marginBottom: "2rem", maxWidth: "520px" }}>
              {profile.bio}
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href={`mailto:${profile.email}`}
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#6366F1", color: "#fff", padding: "0.75rem 1.5rem", borderRadius: "8px", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem", fontFamily: "'Inter', sans-serif", transition: "all 0.2s", boxShadow: "0 0 20px rgba(99,102,241,0.3)" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#4F46E5"; e.currentTarget.style.boxShadow = "0 0 30px rgba(99,102,241,0.5)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#6366F1"; e.currentTarget.style.boxShadow = "0 0 20px rgba(99,102,241,0.3)"; }}
              >
                Get In Touch ✉️
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "transparent", color: "#F8FAFC", padding: "0.75rem 1.5rem", borderRadius: "8px", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem", fontFamily: "'Inter', sans-serif", border: "1px solid rgba(248,250,252,0.15)", transition: "all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#6366F1"; e.currentTarget.style.color = "#6366F1"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(248,250,252,0.15)"; e.currentTarget.style.color = "#F8FAFC"; }}
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div style={{ position: "relative", flexShrink: 0 }}>
            <div style={{ position: "absolute", inset: "-4px", borderRadius: "50%", background: "linear-gradient(135deg, #6366F1, #8B5CF6, #06B6D4)", zIndex: 0 }} />
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              style={{ width: "180px", height: "180px", borderRadius: "50%", objectFit: "cover", position: "relative", zIndex: 1, border: "4px solid #0A0F1E" }}
            />
            <div style={{ position: "absolute", bottom: "8px", right: "8px", background: "#0A0F1E", border: "2px solid #6366F1", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", zIndex: 2 }}>
              💻
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginTop: "4rem", borderTop: "1px solid rgba(99,102,241,0.15)", paddingTop: "3rem" }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "2rem", fontWeight: 800, color: "#6366F1", lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: "#94A3B8", fontSize: "0.8rem", fontFamily: "'Inter', sans-serif", marginTop: "0.25rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" style={{ padding: "6rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
      <div style={{ marginBottom: "3rem" }}>
        <p style={{ color: "#6366F1", fontSize: "0.85rem", fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>What I work with</p>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "#F8FAFC", letterSpacing: "-0.02em" }}>Skills & Technologies</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1rem" }}>
        {skills.map((group) => (
          <SkillCard key={group.category} group={group} />
        ))}
      </div>
    </section>
  );
}

function SkillCard({ group }: { group: typeof skills[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(99,102,241,0.06)" : "rgba(248,250,252,0.03)",
        border: `1px solid ${hovered ? group.color + "40" : "rgba(248,250,252,0.07)"}`,
        borderRadius: "12px",
        padding: "1.5rem",
        transition: "all 0.25s ease",
        cursor: "default",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
        <span style={{ fontSize: "1.4rem" }}>{group.icon}</span>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#F8FAFC", fontSize: "1rem" }}>{group.category}</h3>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {group.items.map((item) => (
          <span
            key={item}
            style={{ background: `${group.color}18`, color: group.color, border: `1px solid ${group.color}30`, borderRadius: "6px", padding: "0.25rem 0.65rem", fontSize: "0.78rem", fontWeight: 600, fontFamily: "'Inter', sans-serif" }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" style={{ padding: "6rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
      <div style={{ marginBottom: "3rem" }}>
        <p style={{ color: "#6366F1", fontSize: "0.85rem", fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>What I've built</p>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "#F8FAFC", letterSpacing: "-0.02em" }}>Featured Projects</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(99,102,241,0.06)" : "rgba(248,250,252,0.03)",
        border: `1px solid ${hovered ? "rgba(99,102,241,0.4)" : "rgba(248,250,252,0.07)"}`,
        borderRadius: "14px",
        padding: "2rem",
        transition: "all 0.25s ease",
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: "1.5rem",
        alignItems: "start",
        transform: hovered ? "translateY(-2px)" : "none",
        boxShadow: hovered ? "0 8px 30px rgba(99,102,241,0.12)" : "none",
      }}
    >
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#F8FAFC", fontSize: "1.15rem" }}>{project.title}</h3>
          {project.featured && (
            <span style={{ background: "rgba(99,102,241,0.15)", color: "#6366F1", border: "1px solid rgba(99,102,241,0.3)", borderRadius: "100px", padding: "0.15rem 0.65rem", fontSize: "0.72rem", fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
              FEATURED
            </span>
          )}
        </div>
        <p style={{ color: "#94A3B8", fontSize: "0.92rem", lineHeight: 1.65, fontFamily: "'Inter', sans-serif", marginBottom: "1.25rem" }}>{project.description}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{ background: "rgba(248,250,252,0.05)", color: "#94A3B8", border: "1px solid rgba(248,250,252,0.08)", borderRadius: "6px", padding: "0.2rem 0.6rem", fontSize: "0.75rem", fontFamily: "'Inter', sans-serif" }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", flexShrink: 0 }}>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            style={{ color: "#94A3B8", textDecoration: "none", fontSize: "0.85rem", fontFamily: "'Inter', sans-serif", display: "flex", alignItems: "center", gap: "0.35rem", transition: "color 0.2s", whiteSpace: "nowrap" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F8FAFC")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
          >
            GitHub ↗
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            style={{ color: "#6366F1", textDecoration: "none", fontSize: "0.85rem", fontFamily: "'Inter', sans-serif", display: "flex", alignItems: "center", gap: "0.35rem", transition: "color 0.2s", whiteSpace: "nowrap" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#818CF8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6366F1")}
          >
            Live Demo ↗
          </a>
        )}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ padding: "6rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
      <div
        style={{
          background: "linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.08) 50%, rgba(6,182,212,0.06) 100%)",
          border: "1px solid rgba(99,102,241,0.2)",
          borderRadius: "20px",
          padding: "4rem 3rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: "-50px", right: "-50px", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
        <p style={{ color: "#6366F1", fontSize: "0.85rem", fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Let's work together</p>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#F8FAFC", letterSpacing: "-0.02em", marginBottom: "1rem" }}>Got a project in mind?</h2>
        <p style={{ color: "#94A3B8", fontSize: "1.05rem", lineHeight: 1.7, fontFamily: "'Inter', sans-serif", marginBottom: "2.5rem", maxWidth: "480px", margin: "0 auto 2.5rem" }}>
          I'm currently open to new opportunities. Whether it's a freelance project, full-time role, or just a chat — my inbox is always open.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href={`mailto:${profile.email}`}
            style={{ background: "#6366F1", color: "#fff", padding: "0.85rem 2rem", borderRadius: "8px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "'Space Grotesk', sans-serif", transition: "all 0.2s", boxShadow: "0 0 24px rgba(99,102,241,0.35)" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#4F46E5"; e.currentTarget.style.boxShadow = "0 0 36px rgba(99,102,241,0.5)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#6366F1"; e.currentTarget.style.boxShadow = "0 0 24px rgba(99,102,241,0.35)"; }}
          >
            Send a Message ✉️
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "transparent", color: "#F8FAFC", padding: "0.85rem 2rem", borderRadius: "8px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "'Space Grotesk', sans-serif", border: "1px solid rgba(248,250,252,0.15)", transition: "all 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#6366F1"; e.currentTarget.style.color = "#6366F1"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(248,250,252,0.15)"; e.currentTarget.style.color = "#F8FAFC"; }}
          >
            View GitHub
          </a>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "2.5rem" }}>
          {[
            { label: "LinkedIn", href: profile.linkedin },
            { label: "GitHub", href: profile.github },
            { label: "Email", href: `mailto:${profile.email}` },
          ].map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              style={{ color: "#94A3B8", textDecoration: "none", fontSize: "0.9rem", fontFamily: "'Inter', sans-serif", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#6366F1")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
            >
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
    <footer style={{ borderTop: "1px solid rgba(248,250,252,0.06)", padding: "2rem", textAlign: "center" }}>
      <p style={{ color: "#475569", fontSize: "0.85rem", fontFamily: "'Inter', sans-serif" }}>
        Built with{" "}
        <span style={{ color: "#6366F1" }}>React 19 + TanStack Start + Tailwind CSS v4</span>
        {" "}· Use this template for your own portfolio ·{" "}
        <a href="https://github.com/KADHIRAVANEG/portfolio-template" style={{ color: "#6366F1", textDecoration: "none" }}>GitHub ↗</a>
      </p>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>
      <div style={{ background: "#0A0F1E", minHeight: "100vh", color: "#F8FAFC" }}>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
