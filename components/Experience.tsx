'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'

const timeline = [
  {
    title: 'Senior product experience',
    period: 'Current',
    detail: 'A modern timeline layout that adapts to desktop and mobile while preserving readability and motion rhythm.',
  },
  {
    title: 'Design system architecture',
    period: '2025',
    detail: 'Ready for structured team updates, component design, and polished handoff workflows.',
  },
  {
    title: 'Interactive portfolio foundation',
    period: '2024',
    detail: 'Core structure built for premium presentation, accessible navigation, and polished visual hierarchy.',
  },
]

export function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="Timeline & Roles">
      <div className="space-y-6">
        {timeline.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: index * 0.1 }}
            className="group rounded-[28px] border border-white/10 bg-slate-950/80 p-6 shadow-surface transition hover:-translate-y-1 hover:border-brand-blue/30"
          >
            <div className="flex items-center justify-between gap-4 text-sm text-slate-400">
              <span className="font-semibold text-white">{item.title}</span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">{item.period}</span>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300">{item.detail}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
