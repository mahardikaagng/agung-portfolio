'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'

const stats = [
  { label: 'Institutional Tenders', value: '6+', description: 'Successfully secured' },
  { label: 'B2B Orders Managed', value: '6,000+', description: 'End-to-end fulfillment' },
  { label: 'Team Size Directed', value: '120+', description: 'Flagship event staff' },
  { label: 'Event Budget Managed', value: '₹750M', description: 'IDR millions' },
  { label: 'Database Records', value: '1,483', description: '91% validity rate' },
  { label: 'GPA Achievement', value: '3.89/4', description: 'Udayana University' },
]

export function Achievements() {
  return (
    <Section id="achievements" title="Achievements" subtitle="Measurable Impact">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.08 }}
            className="rounded-[28px] border border-white/10 bg-slate-950/80 p-8 shadow-surface hover:border-brand-blue/20 transition"
          >
            <p className="text-4xl font-bold text-brand-gold">{stat.value}</p>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400 font-semibold">{stat.label}</p>
            <p className="mt-2 text-xs text-slate-500">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
