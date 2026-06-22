'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, ExternalLink } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950/80 via-slate-950 to-slate-900/90 px-6 py-16 shadow-surface backdrop-blur-xl sm:px-8 md:px-10 md:py-20 lg:px-14 lg:py-28">
      <div className="absolute inset-0 bg-hero-glow opacity-60" aria-hidden="true" />
      <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8 md:space-y-10"
        >
          <div className="space-y-4 md:space-y-5">
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-brand-gold/80">Digital Marketing Professional</p>
            <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-white">
              Anak Agung Gede Mahardika Juliananda
            </h1>
            <p className="max-w-2xl text-lg sm:text-xl font-medium text-brand-blue">
              Business Development | Digital Marketing | Strategic Operations
            </p>
          </div>

          <p className="max-w-2xl text-sm sm:text-base md:text-lg leading-7 md:leading-8 text-slate-300">
            BNSP Certified Digital Marketing Professional with proven expertise in bridging data-driven strategic planning with high-stakes operational execution. Track record includes securing 6+ institutional tenders, managing 6,000+ B2B orders, and directing 120+ member teams on flagship events.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-brand-gold px-6 sm:px-7 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:brightness-110 duration-300">
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 sm:px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-white/20 duration-300">
              View Projects
            </a>
            <a
              href="https://linktr.ee/AgungMahardika"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-brand-gold/30 bg-transparent px-6 sm:px-7 py-3 text-sm font-semibold text-brand-gold transition hover:bg-brand-gold/10 hover:border-brand-gold/50 duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-3 pt-4">
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
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.95, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto"
        >
          <div className="absolute -inset-2 bg-gradient-to-br from-brand-blue/40 via-brand-gold/20 to-brand-blue/30 rounded-full blur-3xl opacity-60" aria-hidden="true" />
          <div className="relative h-[520px] w-[380px] mx-auto overflow-hidden rounded-full border border-white/20 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/5 via-transparent to-brand-gold/5 z-10 pointer-events-none" aria-hidden="true" />
            <div className="relative w-full h-full">
              <Image
                src="/profile.png"
                alt="Anak Agung Gede Mahardika Juliananda"
                fill
                className="object-cover object-center"
                priority
                quality={95}
                style={{
                  filter: 'brightness(1.08) contrast(1.05) saturate(0.9)',
                  maskImage: 'radial-gradient(circle at center, black 0%, black 85%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(circle at center, black 0%, black 85%, transparent 100%)',
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent z-10 pointer-events-none" aria-hidden="true" />
            <div className="absolute inset-0 ring-1 ring-white/10 rounded-full" aria-hidden="true" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
