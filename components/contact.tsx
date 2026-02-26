"use client"

import { Mail, Phone, Linkedin, Github, ArrowUpRight } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(0,229,255,0.03) 0%, transparent 50%)' }}
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
          Contact
        </span>
        <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
          {"Travaillons ensemble"}
        </h2>
        <p className="mx-auto mb-10 max-w-md text-muted-foreground">
          {"Disponible pour un CDI en Data Analyst / BI Developer. N'hésitez pas à me contacter pour discuter de vos projets."}
        </p>

        <div className="mb-10 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-primary neon-glow" style={{ background: 'rgba(0,229,255,0.06)', border: '1px solid rgba(0,229,255,0.2)' }}>
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Disponible pour CDI Septembre 2026
        </div>

        {/* Email + Phone */}
        <div className="mb-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="mailto:dzirirayane03@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm text-muted-foreground transition-all hover:text-primary"
            style={{ background: 'rgba(0,229,255,0.04)', border: '1px solid rgba(0,229,255,0.1)' }}
          >
            <Mail className="h-4 w-4 text-primary shrink-0" />
            dzirirayane03@gmail.com
          </a>
          <div
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm text-muted-foreground"
            style={{ background: 'rgba(0,229,255,0.04)', border: '1px solid rgba(0,229,255,0.1)' }}
          >
            <Phone className="h-4 w-4 text-primary shrink-0" />
            +33 07 60 17 56 89
          </div>
        </div>

        {/* LinkedIn + GitHub buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://www.linkedin.com/in/rayane-dziri-675293210/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-xl border border-primary/20 px-7 py-3.5 text-sm font-semibold text-primary transition-all hover:border-primary/40 hover:scale-105"
            style={{ background: 'rgba(0,229,255,0.03)' }}
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="https://github.com/DzRayane"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-xl border border-primary/20 px-7 py-3.5 text-sm font-semibold text-primary transition-all hover:border-primary/40 hover:scale-105"
            style={{ background: 'rgba(0,229,255,0.03)' }}
          >
            <Github className="h-4 w-4" />
            GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}