import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import stylesUrl from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "My Portfolio" },
      { name: "description", content: "Personal developer portfolio" },
    ],
    links: [{ rel: "stylesheet", href: stylesUrl }],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
            <span className="text-lg font-bold tracking-tight">Portfolio</span>
            <nav className="flex gap-6 text-sm font-medium">
              <a href="#about" className="text-muted-foreground transition-colors hover:text-foreground">About</a>
              <a href="#skills" className="text-muted-foreground transition-colors hover:text-foreground">Skills</a>
              <a href="#projects" className="text-muted-foreground transition-colors hover:text-foreground">Projects</a>
              <a href="#contact" className="text-muted-foreground transition-colors hover:text-foreground">Contact</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-border mt-20 py-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Portfolio. Built with React + TanStack Start.</p>
        </footer>
        <Scripts />
      </body>
    </html>
  );
}
