'use client'

import { motion } from 'framer-motion'

interface SectionProps {
  id: string
  title: string
  subtitle?: string
  children: React.ReactNode
}

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="section-panel rounded-[32px] border border-white/10 p-6 md:p-10">
      <div className="mb-8 space-y-3">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{subtitle ?? 'Section'}</p>
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  )
}
