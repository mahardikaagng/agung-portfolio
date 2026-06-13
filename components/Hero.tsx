'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, ExternalLink } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950/80 via-slate-950 to-slate-900/90 px-6 py-16 shadow-surface backdrop-blur-xl md:px-10 lg:px-14 lg:py-24">
      <div className="absolute inset-0 bg-hero-glow opacity-70" aria-hidden="true" />
      <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-brand-gold/80">Digital Marketing Professional</p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Anak Agung Gede Mahardika Juliananda
            </h1>
            <p className="max-w-2xl text-xl font-medium text-brand-blue">
              Business Development | Digital Marketing | Strategic Operations
            </p>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            BNSP Certified Digital Marketing Professional with proven expertise in bridging data-driven strategic planning with high-stakes operational execution. Track record includes securing 6+ institutional tenders, managing 6,000+ B2B orders, and directing 120+ member teams on flagship events.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-brand-gold px-7 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:brightness-110">
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              View Projects
            </a>
            <a
              href="https://linktr.ee/AgungMahardika"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-brand-gold/30 bg-transparent px-7 py-3 text-sm font-semibold text-brand-gold transition hover:bg-brand-gold/10"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <a
              href="https://github.com/mahardikaagng"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:text-brand-gold hover:border-brand-gold/30"
              aria-label="GitHub"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/anak-agung-gede-mahardika-juliananda-51a730248"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:text-brand-gold hover:border-brand-gold/30"
              aria-label="LinkedIn"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative mx-auto h-[500px] max-w-[400px] overflow-hidden rounded-[36px] border border-white/10 shadow-surface"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/10 via-transparent to-brand-gold/10" aria-hidden="true" />
          <div className="relative w-full h-full">
            <Image
              src="/profile.jpg"
              alt="Anak Agung Gede Mahardika Juliananda"
              fill
              className="object-cover"
              priority
              style={{
                filter: 'hue-rotate(200deg) saturate(0.8)',
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  )
}
