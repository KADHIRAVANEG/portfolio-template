# 🗂️ Portfolio Template

A modern, fully-typed portfolio template built with **React 19**, **TanStack Start**, **Tailwind CSS v4**, and **shadcn/ui** — ready to customize and deploy.

For Reference visit the web [Live](https://portfolio-template-kadhir.vercel.app/)

---

## ✨ Features

- ⚡ **Vite 8** — lightning-fast dev server and builds
- 🧭 **TanStack Router** — file-based, type-safe routing
- 🌐 **TanStack Start** — SSR support out of the box
- 🎨 **Tailwind CSS v4** — utility-first styling
- 🧩 **shadcn/ui** — accessible, customizable UI components
- 📦 **TanStack Query** — async state and data fetching
- 🦺 **TypeScript** — end-to-end type safety
- 🐇 **Bun** — fast package manager and runtime
- 🧹 **ESLint + Prettier** — consistent code style

---

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh) `>= 1.0`
- Node.js `>= 20` (optional, if not using Bun for runtime)

### Installation

```bash
# Clone the repository
git clone https://github.com/KADHIRAVANEG/portfolio-template.git
cd portfolio-template

# Install dependencies
bun install
```

### Development

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Production build
bun run build

# Preview production build locally
bun run preview
```

---

## 📁 Project Structure

```
portfolio-template/
├── src/
│   ├── routes/
│   │   ├── __root.tsx        # Root layout (navbar, footer)
│   │   └── index.tsx         # Home page
│   ├── components/
│   │   └── ui/               # shadcn/ui components
│   ├── styles/
│   │   └── app.css           # Global styles + Tailwind directives
│   ├── client.tsx            # Client entry point
│   └── server.tsx            # Server entry point (SSR)
├── public/                   # Static assets (favicon, images)
├── components.json           # shadcn/ui config
├── vite.config.ts            # Vite + TanStack Start config
├── tsconfig.json             # TypeScript config
├── .prettierrc               # Prettier config
├── eslint.config.js          # ESLint config
└── package.json
```

---

## 🎨 Customization

### Update Your Info

Edit the content in `src/routes/index.tsx` to add your name, bio, skills, and projects.

### Add a New Section

Create a new component in `src/components/` and import it into your page.

### Add a New Page/Route

Create a new file under `src/routes/` — TanStack Router will automatically pick it up. For example:

```
src/routes/projects.tsx  →  /projects
src/routes/contact.tsx   →  /contact
```

### Add shadcn/ui Components

```bash
bunx shadcn@latest add button
bunx shadcn@latest add card
```

---

## 🧹 Code Quality

```bash
# Lint
bun run lint

# Format
bun run format
```

---

## 🛠️ Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| TanStack Router | ^1.168 | File-based routing |
| TanStack Start | ^1.167 | SSR framework |
| TanStack Query | ^5.83 | Data fetching |
| Vite | ^8 | Build tool |
| Tailwind CSS | ^4 | Styling |
| shadcn/ui | latest | UI components |
| TypeScript | ^5.8 | Type safety |
| Bun | latest | Package manager |

---

## 📦 Deployment

This template supports SSR via TanStack Start. You can deploy to:

- **Vercel** — add a `vercel.json` if needed
- **Netlify** — works with SSR adapter
- **Cloudflare Pages** — use the Nitro Cloudflare preset
- **Node.js server** — `bun run build && bun run preview`

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feat/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source. Add a `LICENSE` file (e.g. MIT) to make it official.

---

## 👤 Author

**KADHIRAVANEG**
- GitHub: [@KADHIRAVANEG](https://github.com/KADHIRAVANEG)
