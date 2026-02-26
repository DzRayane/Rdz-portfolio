import { Navbar } from "@/components/navbar"
import { Particles } from "@/components/particles"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Formation } from "@/components/formation"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <Particles />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Formation />
      <Contact />
      <Footer />
    </main>
  )
}
