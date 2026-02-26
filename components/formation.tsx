"use client"

import { GraduationCap } from "lucide-react"

const formations = [
  {
    degree: "Master Big Data & IA",
    school: "IPSSI",
    period: "2024 - EN COURS",
    description: "Architecture Big Data, Machine Learning, Deep Learning, Business Intelligence.",
    current: true,
  },
  {
    degree: "Licence Informatique",
    school: "Université Gustave Eiffel - Institut Gaspard Monge",
    period: "2021 - 2024",
    description: "Bases de données, Algorithmique, Développement Web.",
    current: false,
  },
  {
    degree: "Baccalauréat Scientifique",
    school: "Lycée Sportif National",
    period: "2018 - 2019",
    description: "",
    current: false,
  },
]

export function Formation() {
  return (
    <section id="formation" className="relative py-28 px-6">
      <div
        className="absolute top-0 right-0 h-96 w-96 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Formation
          </span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
            Parcours académique
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {formations.map((f) => (
            <div
              key={f.degree}
              className="glass rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
            >
              <div
                className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.15)' }}
              >
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>

              <h3 className="mb-1 text-base font-bold text-foreground">{f.degree}</h3>
              <p className="mb-1 text-sm font-medium text-primary">{f.school}</p>
              <p className="mb-4 text-xs text-muted-foreground">{f.period}</p>

              {f.description && (
                <p className="mb-4 text-sm text-muted-foreground">{f.description}</p>
              )}

              {f.current && (
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-primary" style={{ background: 'rgba(0,229,255,0.06)', border: '1px solid rgba(0,229,255,0.15)' }}>
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  En cours
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}