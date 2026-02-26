"use client"

import { Brain, Cpu, Network, Zap } from "lucide-react"

function AIBrainIllustration() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer glow rings */}
      <div className="absolute h-80 w-80 rounded-full border border-primary/10 animate-pulse-glow" />
      <div className="absolute h-64 w-64 rounded-full border border-primary/20 animate-float" />
      <div className="absolute h-48 w-48 rounded-full border border-primary/10 animate-float-delayed" />

      {/* Central brain icon */}
      <div className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full neon-glow-strong" style={{ background: 'rgba(0, 229, 255, 0.05)' }}>
        <Brain className="h-20 w-20 text-primary animate-pulse-glow" strokeWidth={1.2} />
      </div>

      {/* Floating orbiting icons */}
      <div className="absolute -top-4 -right-4 animate-float">
        <div className="glass flex h-12 w-12 items-center justify-center rounded-xl">
          <Cpu className="h-6 w-6 text-primary" />
        </div>
      </div>
      <div className="absolute -bottom-4 -left-4 animate-float-delayed">
        <div className="glass flex h-12 w-12 items-center justify-center rounded-xl">
          <Network className="h-6 w-6 text-primary" />
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

const formations = [
  {
    degree: "Master 2 - Data Science & IA",
    school: "EFREI Paris",
    period: "2023 - 2026",
    description: "Spécialisation en Machine Learning, Deep Learning et Business Intelligence.",
  },
  {
    degree: "Bachelor - Informatique",
    school: "EFREI Paris",
    period: "2020 - 2023",
    description: "Fondamentaux en développement logiciel, algorithmique et bases de données.",
  },
]

export function Formation() {
  return (
    <section id="formation" className="relative py-28 px-6">
      <div
        className="absolute top-0 right-0 h-96 w-96 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Formation
          </span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
            Parcours académique
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            {"Une formation d'excellence orientée data, IA et systèmes d'information."}
          </p>
        </div>

        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start">
          {/* Left: Illustration */}
          <div className="flex flex-1 items-center justify-center">
            <AIBrainIllustration />
          </div>

          {/* Right: Formation cards */}
          <div className="flex flex-1 flex-col gap-6">
            {formations.map((f) => (
              <div key={f.degree} className="glass rounded-2xl p-6 transition-all duration-300 hover:scale-[1.01]">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-base font-bold text-foreground">{f.degree}</h3>
                  <span className="text-xs text-muted-foreground">{f.period}</span>
                </div>
                <p className="mb-2 text-sm font-medium text-primary">{f.school}</p>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}