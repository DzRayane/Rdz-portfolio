"use client"

import { Brain, Database, BarChart3, Cloud, Code2, Bot } from "lucide-react"
import type { ReactNode } from "react"

interface SkillCardProps {
  icon: ReactNode
  title: string
  items: string[]
  delay: string
}

function SkillCard({ icon, title, items, delay }: SkillCardProps) {
  return (
    <div
      className={`glass rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] opacity-0 animate-fade-in-up ${delay}`}
    >
      <div
        className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl"
        style={{ background: 'rgba(0,229,255,0.08)' }}
      >
        {icon}
      </div>
      <h3 className="mb-4 text-lg font-bold text-foreground">{title}</h3>
      <ul className="flex flex-col gap-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

const skills = [
  {
    category: "Data Engineering & ETL",
    icon: <Database className="text-cyan-400" />,
    items: ["Talend & Airflow", "Architecture BigQuery", "Pipelines SQL & ETL", "Python / PySpark distribué", "Docker & Cloud Storage"]
  },
  {
    category: "BI & Data Visualization",
    icon: <BarChart3 className="text-cyan-400" />,
    items: ["Looker (LookML)", "Power BI (DAX)", "Looker Studio", "Dashboards Stratégiques"]
  },
  {
    category: "IA & Machine Learning",
    icon: <Cpu className="text-cyan-400" />,
    items: ["Maintenance Prédictive", "Forecasting (Ventes)", "Python (Scikit-learn)", "CNN & Deep Learning", "LLM & Chatbots Pro"]
  }
]

export function Skills() {
  return (
    <section id="competences" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Expertise
          </span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
            {"Compétences techniques"}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            {"Maîtrise du cycle complet de la donnée : de l'architecture ETL à l'aide à la décision par l'IA."}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}