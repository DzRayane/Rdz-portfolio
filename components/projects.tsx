"use client"

import { Scan, Map, Eye } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const projects: { title: string; company: string; description: string; tags: string[]; icon: LucideIcon }[] = [
  {
    title: "Deep Learning",
    company: "Quobli",
    description: "Classification d'images pour le calcul quantique et comparaison CNN vs SVM.",
    tags: ["CNN", "SVM", "Computer Vision"],
    icon: Eye,
  },
  {
    title: "OCR avancé",
    company: "Wapply",
    description: "Benchmark de solutions OCR et pipeline personnalisé pour l'extraction de texte.",
    tags: ["Tesseract", "EasyOCR", "Pipeline"],
    icon: Scan,
  },
  {
    title: "Analyse territoriale",
    company: "Open Data",
    description: "Collecte automatisées de données publiques et visualisations interactives.",
    tags: ["Scraping", "Python", "Data Viz"],
    icon: Map,
  }
]

export function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 bg-[#020617]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[#00E5FF]">Expertise</span>
          <h2 className="text-3xl font-bold text-white md:text-4xl">{"Réalisations & cas d'usage"}</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <div key={index} className="group relative rounded-2xl border border-white/5 bg-[#0F1629] p-8 transition-all hover:border-[#00E5FF]/30">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00E5FF]/10">
                  <Icon className="h-6 w-6 text-[#00E5FF]" />
                </div>
                <h3 className="mb-1 text-xl font-bold text-white">{project.title}</h3>
                <p className="mb-4 text-sm font-medium text-[#00E5FF]">{project.company}</p>
                <p className="mb-6 text-sm leading-relaxed text-slate-400">{project.description}</p>
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