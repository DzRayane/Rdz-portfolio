"use client"

import { Mail, Linkedin, Github, ArrowUpRight, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6 bg-[#020617]">
      {/* Background glow */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(0,229,255,0.03) 0%, transparent 50%)' }}
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[#00E5FF]">
          Contact
        </span>
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl text-balance">
          {"Travaillons ensemble"}
        </h2>
        <p className="mx-auto mb-10 max-w-md text-slate-400">
          {"Disponible pour un CDI en Data / BI dès Septembre 2026. N'hésitez pas à me contacter pour discuter de vos projets."}
        </p>

        {/* Badge Disponibilité */}
        <div className="mb-12 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-[#00E5FF]" 
             style={{ background: 'rgba(0,229,255,0.06)', border: '1px solid rgba(0,229,255,0.2)' }}>
          <span className="h-2 w-2 rounded-full bg-[#00E5FF] animate-pulse" />
          Disponible Septembre 2026
        </div>

        {/* Grille de boutons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center mb-10">
          {/* Email Button */}
          <a
            href="mailto:dzirirayane03@gmail.com"
            className="group inline-flex items-center gap-3 rounded-xl px-7 py-3.5 text-sm font-bold text-black transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,229,255,0.4)]"
            style={{ background: '#00E5FF' }}
          >
            <Mail className="h-4 w-4" />
            Email
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/rayane-dziri-675293210/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-xl border border-[#00E5FF]/20 px-7 py-3.5 text-sm font-semibold text-[#00E5FF] transition-all hover:border-[#00E5FF]/40 hover:scale-105"
            style={{ background: 'rgba(0,229,255,0.03)' }}
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* GitHub Button */}
          <a
            href="https://github.com/DzRayane"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-xl border border-[#00E5FF]/20 px-7 py-3.5 text-sm font-semibold text-[#00E5FF] transition-all hover:border-[#00E5FF]/40 hover:scale-105"
            style={{ background: 'rgba(0,229,255,0.03)' }}
          >
            <Github className="h-4 w-4" />
            GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Informations Directes (Email et Téléphone) */}
        <div className="flex flex-col gap-2 text-sm text-slate-400">
          <p className="flex items-center justify-center gap-2 hover:text-[#00E5FF] transition-colors">
            <Mail className="h-4 w-4 text-[#00E5FF]" />
            dzirirayane03@gmail.com
          </p>
          <p className="flex items-center justify-center gap-2 hover:text-[#00E5FF] transition-colors">
            <Phone className="h-4 w-4 text-[#00E5FF]" />
            +33 7 60 17 56 89
          </p>
        </div>
      </div>
    </section>
  )
}