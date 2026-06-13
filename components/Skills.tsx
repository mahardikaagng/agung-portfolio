'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'

const skillGroups = [
  {
    title: 'Interface',
    skills: ['Design systems', 'Prototyping', 'Visual polish'],
  },
  {
    title: 'Front-end',
    skills: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Interaction',
    skills: ['Framer Motion', 'Micro-interactions', 'Responsive layouts'],
  },
]

export function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Core capabilities"> 
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.08 }}
            className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6 shadow-surface"
          >
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            <div className="mt-5 space-y-4">
              {group.skills.map((skill) => (
                <div key={skill} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm text-slate-200">{skill}</p>
                    <span className="text-xs uppercase tracking-[0.24em] text-brand-blue">Advanced</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-brand-blue to-brand-gold transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
