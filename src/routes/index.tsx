import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

// ─── Edit your data here ─────────────────────────────────────────────────────
const profile = {
  name: "Your Name",
  role: "Full Stack Developer",
  bio: "I build clean, fast, and accessible web applications. Passionate about great developer experience and modern tooling.",
  avatar: "https://avatars.githubusercontent.com/u/0",
  github: "https://github.com/KADHIRAVANEG",
  linkedin: "https://linkedin.com",
  email: "you@example.com",
};

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Vite"] },
  { category: "Backend", items: ["Node.js", "Express", "REST APIs"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Bun"] },
];

const projects = [
  {
    title: "Portfolio Template",
    description: "A modern portfolio template built with React 19, TanStack Start, Tailwind CSS v4, and shadcn/ui.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/KADHIRAVANEG/portfolio-template",
    live: "",
  },
  {
    title: "Project Two",
    description: "Short description of what this project does and what technologies were used.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Three",
    description: "Short description of what this project does and what technologies were used.",
    tags: ["Node.js", "Express", "MongoDB"],
    github: "#",
    live: "#",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 space-y-24">

      {/* Hero / About */}
      <section id="about" className="flex flex-col-reverse gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-4 max-w-xl">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Hey, I'm</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{profile.name}</h1>
          <p className="text-xl text-muted-foreground">{profile.role}</p>
          <p className="text-base text-muted-foreground leading-relaxed">{profile.bio}</p>
          <div className="flex gap-3 pt-2">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
            >
              Contact Me
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
        <img
          src={profile.avatar}
          alt={profile.name}
          className="h-32 w-32 rounded-full border-4 border-border object-cover sm:h-40 sm:w-40"
        />
      </section>

      {/* Skills */}
      <section id="skills" className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category} className="rounded-lg border border-border p-5 space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-lg border border-border p-5 space-y-3 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold">{project.title}</h3>
              <p className="text-sm text-muted-foreground flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 pt-1 text-sm">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    GitHub →
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Live →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="space-y-4 rounded-lg border border-border p-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight">Get In Touch</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
        >
          Say Hello ✉️
        </a>
        <div className="flex justify-center gap-4 pt-2 text-sm">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
        </div>
      </section>

    </div>
  );
}
