'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import { Achievements } from '@/components/Achievements'
import { Skills } from '@/components/Skills'
import { Contact } from '@/components/Contact'
import { Navbar } from '@/components/Navbar'
import { ScrollProgress } from '@/components/ScrollProgress'

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 flex min-h-screen flex-col gap-24 px-6 pb-20 pt-28 md:px-12 lg:px-16 lg:gap-32">
        <AnimatePresence mode="wait">
          <motion.div
            key="page"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-24 md:space-y-32"
          >
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Achievements />
            <Skills />
            <Contact />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollProgress />
    </div>
  )
}
