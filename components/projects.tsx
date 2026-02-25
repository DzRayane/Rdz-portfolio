"use client"

import { TrendingUp, Bot, Eye, Database, BarChart, ArrowUpRight } from "lucide-react"
import type { ReactNode } from "react"

interface ProjectCardProps {
  icon: ReactNode
  title: string
  company: string
  tags: string[]
  items: string[]
  featured?: boolean
}

function ProjectCard({ icon, title, company, tags, items, featured }: ProjectCardProps) {
  return (
    <div
      className={`group glass rounded-2xl p-7 transition-all duration-500 hover:scale-[1.02] ${
        featured ? "md:col-span-2 lg:col-span-2 gradient-border" : ""
      }`}
    >
      <div className="mb-5 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-xl"
            style={{ background: 'rgba(0,229,255,0.08)' }}
          >
            {icon}
          </div>
          <div>
            <h3 className="text-base font-bold text-foreground">{title}</h3>
            <span className="text-xs text-primary/70">{company}</span>
          </div>
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-primary" />
      </div>

      <ul className="mb-5 flex flex-col gap-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/50" />
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md px-2.5 py-1 text-xs font-medium text-primary/80"
            style={{ background: 'rgba(0,229,255,0.06)', border: '1px solid rgba(0,229,255,0.1)' }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

const projects: ProjectCardProps[] = [
  {
    icon: <Database className="h-5 w-5 text-primary" />,
    title: "Architecture ETL & Big Data",
    company: "Exxelia",
    tags: ["Talend", "Airflow", "BigQuery", "SQL"],
    items: [
      "Automatisation de flux complexes vers Google BigQuery ",
      "Réduction des temps de traitement de données de 40% ",
      "Architecture robuste pour le pilotage industriel [cite: 13]",
    ],
    featured: true,
  },
  {
    icon: <BarChart className="h-5 w-5 text-primary" />,
    title: "BI & Dashboards Stratégiques",
    company: "Exxelia",
    tags: ["Looker", "LookML", "Power BI", "DAX"],
    items: [
      "Conception de +20 dashboards sur Looker (LookML) [cite: 13]",
      "Réduction du temps de reporting manuel de 30% [cite: 13]",
      "Reporting automatisé pour le suivi des KPIs [cite: 23]",
    ],
    featured: false,
  },
  {
    icon: <TrendingUp className="h-5 w-5 text-primary" />,
    title: "Forecasting des Ventes",
    company: "Saidal",
    tags: ["Python", "Machine Learning", "Forecasting"],
    items: [
      "Prédiction des ventes pharmaceutiques via ML [cite: 18]",
      "Amélioration de la précision de 12% [cite: 18]",
      "Analyse exploratoire sur datasets massifs [cite: 19]",
    ],
    featured: false,
  },
  {
    icon: <Bot className="h-5 w-5 text-primary" />,
    title: "Assistant Virtuel LLM",
    company: "Exxelia",
    tags: ["LLM", "NLP", "Python", "IA Gen"],
    items: [
      "Intégration d'un chatbot basé sur un LLM ",
      "Centralisation des documents pour 150 collaborateurs ",
    ],
    featured: false,
  },
  {
    icon: <Eye className="h-5 w-5 text-primary" />,
    title: "Maintenance Prédictive",
    company: "Exxelia",
    tags: ["Scikit-learn", "ML", "Maintenance"],
    items: [
      "Anticipation des pannes via algorithmes de ML ",
      "Réduction de 15% des arrêts machines ",
    ],
    featured: false,
  },
]

export function Projects() {
  return (
    <section id="projets" className="relative py-28 px-6">
      <div
        className="absolute top-0 right-0 h-96 w-96 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Projets
          </span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
            {"Réalisations & cas d'usage"}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            {"Expertise en ingénierie de données, BI et Intelligence Artificielle appliquée."}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}