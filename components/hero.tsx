"use client"

import { ArrowDown, Download, Database, BarChart, Cpu, Zap } from "lucide-react"

function DataIllustration() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute h-80 w-80 rounded-full border border-[#00E5FF]/10 animate-pulse" />
      <div className="absolute h-64 w-64 rounded-full border border-[#00E5FF]/20 animate-bounce" style={{ animationDuration: '3s' }} />
      
      <div className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full shadow-[0_0_30px_rgba(0,229,255,0.1)]" style={{ background: 'rgba(0, 229, 255, 0.05)' }}>
        <Database className="h-20 w-20 text-[#00E5FF]" strokeWidth={1.2} />
      </div>

      <div className="absolute -top-4 -right-4">
        <div className="bg-[#020617]/80 backdrop-blur-md border border-white/10 flex h-12 w-12 items-center justify-center rounded-xl">
          <BarChart className="h-6 w-6 text-[#00E5FF]" />
        </div>
      </div>
      <div className="absolute -bottom-4 -left-4">
        <div className="bg-[#020617]/80 backdrop-blur-md border border-white/10 flex h-12 w-12 items-center justify-center rounded-xl">
          <Cpu className="h-6 w-6 text-[#00E5FF]" />
        </div>
      </div>

      <div className="absolute h-96 w-96 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.12) 0%, transparent 70%)' }} />
    </div>
  )
}

export function Hero() {
  return (
    <section id="accueil" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 bg-[#020617]">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-20">
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00E5FF]/20 px-4 py-1.5 text-xs font-medium text-[#00E5FF]" style={{ background: 'rgba(0,229,255,0.05)' }}>
            <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
            Disponible Septembre 2026
          </div>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Rayane <span className="text-[#00E5FF]">Dziri</span>
          </h1>

          <p className="mb-2 text-lg font-medium text-[#00E5FF]/80 md:text-xl uppercase tracking-widest">
            Data Analyst & BI Developer
          </p>

          <p className="mb-8 max-w-lg text-base leading-relaxed text-slate-400 lg:max-w-md">
            Passionné par la transformation des données en leviers de décision stratégiques. Actuellement en alternance chez Exxelia.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl px-7 py-3 text-sm font-bold text-black transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,229,255,0.4)]"
              style={{ background: '#00E5FF' }}
            >
              Voir mes projets
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="/CVRDZIRIBI.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl border border-[#00E5FF]/30 px-7 py-3 text-sm font-semibold text-[#00E5FF] transition-all hover:bg-[#00E5FF]/5"
            >
              <Download className="h-4 w-4" />
              Télécharger CV
            </a>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <DataIllustration />
        </div>
      </div>
    </section>
  )
}