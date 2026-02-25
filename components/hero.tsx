"use client"

import { ArrowDown, Download, Database, BarChart, Cpu, Zap } from "lucide-react"

function DataIllustration() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer glow rings */}
      <div className="absolute h-80 w-80 rounded-full border border-primary/10 animate-pulse-glow" />
      <div className="absolute h-64 w-64 rounded-full border border-primary/20 animate-float" />
      <div className="absolute h-48 w-48 rounded-full border border-primary/10 animate-float-delayed" />

      {/* Central data icon */}
      <div className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full neon-glow-strong" style={{ background: 'rgba(0, 229, 255, 0.05)' }}>
        <Database className="h-20 w-20 text-primary animate-pulse-glow" strokeWidth={1.2} />
      </div>

      {/* Floating orbiting icons */}
      <div className="absolute -top-4 -right-4 animate-float">
        <div className="glass flex h-12 w-12 items-center justify-center rounded-xl">
          <BarChart className="h-6 w-6 text-primary" />
        </div>
      </div>
      <div className="absolute -bottom-4 -left-4 animate-float-delayed">
        <div className="glass flex h-12 w-12 items-center justify-center rounded-xl">
          <Cpu className="h-6 w-6 text-primary" />
        </div>
      </div>
      <div className="absolute top-8 -left-8 animate-float">
        <div className="glass flex h-10 w-10 items-center justify-center rounded-lg">
          <Zap className="h-5 w-5 text-primary" />
        </div>
      </div>

      {/* Ambient background glow */}
      <div
        className="absolute h-96 w-96 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.12) 0%, transparent 70%)' }}
      />
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Background gradient spots */}
      <div
        className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(0,136,204,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-20">
        {/* Left: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-1.5 text-xs font-medium text-primary" style={{ background: 'rgba(0,229,255,0.05)' }}>
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Disponible pour CDI Septembre 2026
          </div>

          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Rayane{" "}
            <span className="text-primary neon-text">Dziri</span>
          </h1>

          <p className="mb-2 text-lg font-medium text-primary/80 md:text-xl uppercase tracking-widest">
            Data Analyst & BI Developer
          </p>

          <p className="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground lg:max-w-md">
            {"Passionné par la transformation des données en leviers de décision stratégiques. Actuellement en alternance chez Exxelia."} 
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl px-7 py-3 text-sm font-semibold text-primary-foreground transition-all neon-glow-strong hover:scale-105"
              style={{ background: '#00E5FF' }}
            >
              Voir mes projets
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="/CVRDZIRIBI.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl border border-primary/30 px-7 py-3 text-sm font-semibold text-primary transition-all hover:border-primary/60 hover:neon-glow"
              style={{ background: 'rgba(0,229,255,0.03)' }}
            >
              <Download className="h-4 w-4" />
              Télécharger CV
            </a>
          </div>
        </div>

        {/* Right: Data Illustration */}
        <div className="flex flex-1 items-center justify-center">
          <DataIllustration />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground">Scroll</span>
        <div className="h-8 w-5 rounded-full border border-primary/30 flex items-start justify-center pt-1.5">
          <div className="h-2 w-1 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  )
}