'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'

const projects = [
  { name: 'Portfolio framework', category: 'Web', description: 'Premium layout and architecture for future case studies.' },
  { name: 'Design system', category: 'Design', description: 'Reusable cards, section wrappers, and motion tokens for consistent branding.' },
  { name: 'Interaction study', category: 'Motion', description: 'Subtle hover and reveal animation that feels refined and intentional.' },
]

export function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Preview grid">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: index * 0.08 }}
            className="group overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/90 shadow-surface"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-gold/5 p-6">
              <div className="h-full rounded-[24px] border border-white/10 bg-slate-950/70 p-5">
                <div className="flex h-full flex-col justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{project.category}</p>
                    <h3 className="mt-4 text-xl font-semibold text-white">{project.name}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-300">{project.description}</p>
                </div>
              </div>
            </div>
            <div className="space-y-3 p-6">
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span className="rounded-full bg-white/5 px-3 py-1">Key focus</span>
                <span className="text-brand-gold">Ready</span>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 transition group-hover:bg-white/10">
                View details
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
