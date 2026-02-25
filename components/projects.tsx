"use client"

import { TrendingUp, Bot, Database, BarChart, ArrowUpRight, Cpu, Scan, Map, Mail, Linkedin, Phone, Github } from "lucide-react"
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
    <div className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-7 transition-all duration-500 hover:scale-[1.02] border border-white/10 shadow-[0_0_15px_rgba(0,229,255,0.05)] ${featured ? "md:col-span-2 border-[#00E5FF]/30" : ""}`}>
      <div className="mb-5 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00E5FF]/10 text-[#00E5FF]">
            {icon}
          </div>
          <div>
            <h3 className="text-base font-bold text-white">{title}</h3>
            <span className="text-xs text-[#00E5FF]/70 uppercase tracking-wider">{company}</span>
          </div>
        </div>
        <ArrowUpRight className="h-5 w-5 text-slate-500 opacity-0 transition-all group-hover:opacity-100 group-hover:text-[#00E5FF]" />
      </div>

      <ul className="mb-5 flex flex-col gap-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-slate-400">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#00E5FF]/50" />
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-md px-2.5 py-1 text-xs font-medium text-[#00E5FF]/80 bg-[#00E5FF]/5 border border-[#00E5FF]/10">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

const projectsList: ProjectCardProps[] = [
  {
    icon: <Database className="h-5 w-5" />,
    title: "Architecture ETL & Big Data",
    company: "Exxelia",
    tags: ["Talend", "Airflow", "BigQuery", "Python/PySpark", "Docker"],
    items: [
      "Automatisation de flux complexes vers Google BigQuery",
      "Pipelines ETL Python/PySpark distribués pour gros volumes",
      "Conteneurisation des services via Docker",
    ],
    featured: true,
  },
  {
    icon: <Cpu className="h-5 w-5" />,
    title: "Deep Learning",
    company: "Quobli",
    tags: ["CNN", "SVM", "Computer Vision"],
    items: [
      "Classification d’images pour le calcul quantique",
      "Comparaison CNN vs SVM sur les performances",
    ],
    featured: false,
  },
  {
    icon: <Scan className="h-5 w-5" />,
    title: "OCR avancé",
    company: "Wapply",
    tags: ["Tesseract", "EasyOCR", "Pipeline"],
    items: [
      "Benchmark de solutions OCR open source et commerciales",
      "Pipeline OCR personnalisé pour l’extraction de texte",
    ],
    featured: false,
  },
  {
    icon: <Map className="h-5 w-5" />,
    title: "Analyse territoriale",
    company: "Open Data",
    tags: ["Scraping", "Python", "Data Viz"],
    items: [
      "Collecte automatisée de données publiques via web scraping",
      "Visualisations interactives de tendances socio-économiques",
    ],
    featured: false,
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Forecasting des Ventes",
    company: "Saidal",
    tags: ["Python", "ML", "Forecasting"],
    items: [
      "Prédiction des ventes pharmaceutiques via ML",
      "Amélioration de la précision de 12%",
    ],
    featured: false,
  },
]

export function Projects() {
  return (
    <section id="projets" className="relative py-28 px-6 bg-[#020617]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[#00E5FF]">Expertise</span>
          <h2 className="text-3xl font-bold text-white md:text-4xl">{"Réalisations & cas d'usage"}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsList.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* SECTION CONTACT FINALE */}
        <div className="mt-24 border-t border-white/5 pt-16 text-center">
          <div className="mb-12 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-[#00E5FF] border border-[#00E5FF]/20 bg-[#00E5FF]/5">
            <span className="h-2 w-2 rounded-full bg-[#00E5FF] animate-pulse" />
            Disponible Septembre 2026
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a href="mailto:dzirirayane03@gmail.com" className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#00E5FF] text-black font-bold hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all">
              <Mail size={18} /> Email
            </a>
            <a href="https://www.linkedin.com/in/rayane-dziri-675293210/" target="_blank" className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[#00E5FF]/20 text-[#00E5FF] hover:bg-[#00E5FF]/5 transition-all">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="https://github.com/DzRayane" target="_blank" className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[#00E5FF]/20 text-[#00E5FF] hover:bg-[#00E5FF]/5 transition-all">
              <Github size={18} /> GitHub
            </a>
          </div>
          
          <div className="text-slate-400 space-y-2 text-sm">
            <p className="flex items-center justify-center gap-2"><Mail size={14} className="text-[#00E5FF]" /> dzirirayane03@gmail.com</p>
            <p className="flex items-center justify-center gap-2"><Phone size={14} className="text-[#00E5FF]" /> +33 7 60 17 56 89</p>
          </div>
        </div>
      </div>
    </section>
  )
}