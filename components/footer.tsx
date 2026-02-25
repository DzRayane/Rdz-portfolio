export function Footer() {
  return (
    <footer className="border-t border-border/50 py-8 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          {"© 2026 Rayane DZIRI. Tous droits réservés."}
        </p>
        <p className="text-xs text-muted-foreground">
          {"Conçu avec "}
          <span className="text-primary">Next.js</span>
          {" & "}
          <span className="text-primary">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  )
}