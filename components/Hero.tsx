'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950/80 via-slate-950 to-slate-900/90 px-6 py-16 shadow-surface backdrop-blur-xl md:px-10 lg:px-14 lg:py-24">
      <div className="absolute inset-0 bg-hero-glow opacity-70" aria-hidden="true" />
      <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-brand-gold/80">Crafted for recruiter-grade first impressions</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Agung is building a premium portfolio experience with refined motion, glassmorphism, and modern structure.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            A clean and extensible foundation for showcasing your story, skills, and projects in a luxurious dark interface.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-brand-gold px-7 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:brightness-110">
              Contact
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              View Projects
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-brand-gold/30 bg-transparent px-7 py-3 text-sm font-semibold text-brand-gold transition hover:bg-brand-gold/10"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative mx-auto h-[420px] max-w-[420px] overflow-hidden rounded-[36px] border border-white/10 bg-slate-950/90 p-6 shadow-surface"
        >
          <div className="absolute inset-x-0 top-0 h-28 rounded-b-[36px] bg-gradient-to-br from-brand-blue/20 via-transparent to-transparent blur-2xl" aria-hidden="true" />
          <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
            <div className="flex h-40 w-40 items-center justify-center rounded-full border border-brand-gold/20 bg-white/5 text-brand-gold shadow-[0_0_0_1px_rgba(212,175,55,0.15)]">
              <span className="text-sm uppercase tracking-[0.35em]">Photo</span>
            </div>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Signature style</p>
              <h2 className="text-2xl font-semibold text-white">Dark luxury brand system</h2>
              <p className="max-w-xs text-sm leading-6 text-slate-300">
                A composed layout ready for hero story, standout metrics, and premium recruiter communication.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
