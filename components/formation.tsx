"use client"

import { GraduationCap } from "lucide-react"

interface EducationItem {
  degree: string
  school: string
  period: string
  details?: string
  current?: boolean
}

const education: EducationItem[] = [
  {
    degree: "Master Big Data & IA",
    school: "IPSSI",
    period: "2024 - En cours",
    details: "Architecture Big Data, Machine Learning, Deep Learning, Business Intelligence.",
    current: true,
  },
  {
    degree: "Licence Informatique",
    school: "Université Gustave Eiffel - Institut Gaspard Monge",
    period: "2021 - 2024",
    details: "Bases de données, Algorithmique, Développement Web.",
  },
  {
    degree: "Baccalauréat Scientifique",
    school: "Lycée Sportif National",
    period: "2018 - 2019",
  },
]

export function Formation() {
  return (
    <section id="formation" className="relative py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Formation
          </span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
            Parcours académique
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="glass flex flex-col rounded-2xl p-7 transition-all duration-300 hover:scale-[1.02]"
            >
              <div
                className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: 'rgba(0,229,255,0.08)' }}
              >
                < GraduationCap className="h-5 w-5 text-primary" />
              </div>

              <h3 className="mb-2 text-sm font-bold leading-snug text-foreground">
                {edu.degree}
              </h3>
              <p className="mb-1 text-sm font-medium text-primary/80">{edu.school}</p>
              <p className="mb-3 text-[11px] text-muted-foreground uppercase tracking-tighter">{edu.period}</p>
              
              {edu.details && (
                <p className="text-xs text-muted-foreground/80 leading-relaxed mb-4">
                  {edu.details}
                </p>
              )}

              {edu.current && (
                <div className="mt-auto inline-flex items-center gap-2 rounded-full w-fit px-3 py-1 text-xs font-medium text-primary" style={{ background: 'rgba(0,229,255,0.06)', border: '1px solid rgba(0,229,255,0.15)' }}>
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