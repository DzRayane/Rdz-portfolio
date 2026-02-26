"use client"

import { Database, BarChart2, TrendingUp, Bot, Cpu } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const projects: {
  title: string
  company: string
  description: string[]
  tags: string[]
  icon: LucideIcon
  featured?: boolean
}[] = [
  {
    title: "Architecture ETL & Big Data",
    company: "Exxelia",
    description: [
      "Automatisation de flux complexes vers Google BigQuery",
      "Réduction des temps de traitement de données de 40%",
      "Architecture robuste pour le pilotage industriel",
    ],
    tags: ["Talend", "Airflow", "BigQuery", "SQL"],
    icon: Database,
    featured: true,
  },
  {
    title: "BI & Dashboards Stratégiques",
    company: "Exxelia",
    description: [
      "Conception de +20 dashboards sur Looker (LookML)",
      "Réduction du temps de reporting manuel de 30%",
      "Reporting automatisé pour le suivi des KPIs",
    ],
    tags: ["Looker", "LookML", "Power BI", "DAX"],
    icon: BarChart2,
    featured: true,
  },
  {
    title: "Forecasting des Ventes",
    company: "Saidal",
    description: [
      "Prédiction des ventes pharmaceutiques via ML",
      "Amélioration de la précision de 12%",
      "Analyse exploratoire sur datasets massifs",
    ],
    tags: ["Python", "Machine Learning", "Forecasting"],
    icon: TrendingUp,
  },
  {
    title: "Assistant Virtuel LLM",
    company: "Exxelia",
    description: [
      "Intégration d'un chatbot basé sur un LLM",
      "Centralisation des documents pour 150 collaborateurs",
    ],
    tags: ["LLM", "NLP", "Python", "IA Gen"],
    icon: Bot,
  },
  {
    title: "Maintenance Prédictive",
    company: "Exxelia",
    description: [
      "Anticipation des pannes via algorithmes de ML",
      "Réduction de 15% des arrêts machines",
    ],
    tags: ["Scikit-learn", "ML", "Maintenance"],
    icon: Cpu,
  },
]

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="relative py-28 px-6 bg-[#020617]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[#00E5FF]">
            Projets
          </span>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            {"Réalisations & cas d'usage"}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-400">
            Expertise en ingénierie de données, BI et Intelligence Artificielle appliquée.
          </p>
        </div>

        {/* Featured: 2 cols */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-6">
          {featured.map((project) => {
            const Icon = project.icon
            return (
              <div
                key={project.title}
                className="group relative rounded-2xl border border-[#00E5FF]/20 bg-[#0F1629] p-8 transition-all hover:border-[#00E5FF]/40"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00E5FF]/10">
                    <Icon className="h-5 w-5 text-[#00E5FF]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <p className="text-sm font-medium text-[#00E5FF]">{project.company}</p>
                  </div>
                </div>
                <ul className="mb-5 flex flex-col gap-2">
                  {project.description.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#00E5FF]/60" />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-lg bg-white/5 px-3 py-1 text-[10px] font-medium text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Rest: 3 cols */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {rest.map((project) => {
            const Icon = project.icon
            return (
              <div
                key={project.title}
                className="group relative rounded-2xl border border-white/5 bg-[#0F1629] p-8 transition-all hover:border-[#00E5FF]/30"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00E5FF]/10">
                    <Icon className="h-5 w-5 text-[#00E5FF]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{project.title}</h3>
                    <p className="text-sm font-medium text-[#00E5FF]">{project.company}</p>
                  </div>
                </div>
                <ul className="mb-5 flex flex-col gap-2">
                  {project.description.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#00E5FF]/60" />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-lg bg-white/5 px-3 py-1 text-[10px] font-medium text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}