'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'

const stats = [
  { label: 'Years of practice', value: '8+' },
  { label: 'Design systems', value: '4' },
  { label: 'Projects launched', value: '12' },
]

export function Achievements() {
  return (
    <Section id="achievements" title="Achievements" subtitle="Metrics & milestones">
      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.08 }}
            className="rounded-[28px] border border-white/10 bg-slate-950/80 p-8 text-center shadow-surface"
          >
            <p className="text-5xl font-semibold text-white">{stat.value}</p>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
