"use client"

import { Briefcase, Calendar, MapPin } from "lucide-react"

interface TimelineItemProps {
  title: string
  company: string
  location: string
  period: string
  items: string[]
  current?: boolean
}

function TimelineItem({ title, company, location, period, items, current }: TimelineItemProps) {
  return (
    <div className="group relative flex gap-6 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="relative flex flex-col items-center">
        <div
          className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-xl ${
            current ? "neon-glow-strong" : ""
          }`}
          style={{ background: current ? 'rgba(0,229,255,0.15)' : 'rgba(0,229,255,0.06)', border: `1px solid ${current ? 'rgba(0,229,255,0.4)' : 'rgba(0,229,255,0.1)'}` }}
        >
          <Briefcase className={`h-4 w-4 ${current ? "text-primary" : "text-primary/50"}`} />
        </div>
        <div
          className="w-px flex-1 group-last:hidden"
          style={{ background: 'linear-gradient(to bottom, rgba(0,229,255,0.2), transparent)' }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 pb-2">
        <div className="glass rounded-2xl p-6 transition-all duration-300 hover:scale-[1.01]">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-base font-bold text-foreground">{title}</h3>
              <span className="text-sm font-medium text-primary">{company}</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {location}
              </span>
            </div>
          </div>
          <ul className="flex flex-col gap-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/50" />
                {item}
              </li>
            ))}
          </ul>
          {current && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-primary" style={{ background: 'rgba(0,229,255,0.06)', border: '1px solid rgba(0,229,255,0.15)' }}>
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              En poste (Alternance)
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const experiences: TimelineItemProps[] = [
  {
    title: "Développeur BI & IA (Alternance)",
    company: "Exxelia",
    location: "Paris, France",
    period: "Sept. 2024 - En cours",
    current: true,
    items: [
      "Architecture et automatisation de flux ETL via Talend et Airflow vers Google BigQuery, réduisant les temps de traitement de 40% [cite: 10, 12]",
      "Conception de +20 dashboards stratégiques sur Looker (LookML) pour le pilotage industriel (-30% de temps de reporting manuel) [cite: 13]",
      "Intégration d'un assistant virtuel interne (LLM) pour centraliser l'accès aux documents techniques pour 150 collaborateurs [cite: 14]",
      "Mise en production d'algorithmes de Machine Learning pour la maintenance prédictive, réduisant les arrêts machines de 15% [cite: 15]",
    ],
  },
  {
    title: "Data Scientist (Stage)",
    company: "Saidal",
    location: "Alger",
    period: "2023 - 2024",
    items: [
      "Développement d'un modèle de forecasting pour la prédiction des ventes pharmaceutiques (+12% de précision) [cite: 16, 18]",
      "Nettoyage, analyse exploratoire (EDA) et benchmarking de performances sur des datasets massifs avec Python [cite: 19]",
    ],
  },
  {
    title: "Data Analyst (Stage)",
    company: "Data Digital One",
    location: "Alger",
    period: "2022 - 2023",
    items: [
      "Développement d'une structure de reporting automatisée avec Power BI (Power Query & DAX) [cite: 20, 23]",
      "Recueil des besoins métiers et conception de tableaux de bord pour le suivi quotidien des KPIs [cite: 21, 23]",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div
        className="absolute bottom-0 left-0 h-96 w-96 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Parcours
          </span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
            {"Expériences professionnelles"}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            {"Expertise en BI, architecture de données et Intelligence Artificielle appliquée à l'industrie."}
          </p>
        </div>

        <div>
          {experiences.map((exp) => (
            <TimelineItem key={exp.company} {...exp} />
          ))}
        </div>
      </div>
    </section>
  )
}