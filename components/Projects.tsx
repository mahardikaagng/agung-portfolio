'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    name: 'Santai Seaplane',
    category: 'Business Development',
    description: 'Strategic business development initiative for seaplane operations. Involved market analysis, partnership negotiations, and operational planning for premium transportation services.',
    impact: 'Institutional tender secured',
  },
  {
    name: 'Tetuek',
    category: 'Marketing Planning',
    description: 'Comprehensive business and marketing plan development. Included market research, positioning strategy, customer acquisition planning, and brand development.',
    impact: 'Complete marketing roadmap',
  },
  {
    name: 'Slimlicious',
    category: 'Digital Marketing Analysis',
    description: 'In-depth digital marketing analysis and strategy optimization. Analyzed customer journey, conversion metrics, and multi-channel campaign performance.',
    impact: 'Data-driven insights',
  },
  {
    name: 'Moto Rent',
    category: 'Business Analysis',
    description: 'Comprehensive business and risk analysis for motorcycle rental operations. Covered market assessment, operational efficiency, and financial viability.',
    impact: 'Strategic recommendations',
  },
  {
    name: 'DIES BKFEB 57 Event',
    category: 'Large-Scale Project Management',
    description: '3-day flagship university event for 2,000+ attendees. Directed 120+ staff team, managed IDR 750 million budget, coordinated with government officials and artists.',
    impact: 'Successful execution',
  },
  {
    name: 'AI-Assisted Content Creation',
    category: 'Digital Marketing',
    description: 'Content digitalization and AI-assisted content production. Leveraged artificial intelligence for video production, content optimization, and distribution strategies.',
    impact: '100% AI-generated content',
  },
]

export function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Portfolio & Case Studies">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: index * 0.08 }}
            className="group overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/90 shadow-surface hover:border-brand-blue/20 transition"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-gold/5 p-6">
              <div className="h-full rounded-[24px] border border-white/10 bg-slate-950/70 p-5">
                <div className="flex h-full flex-col justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-brand-gold">{project.category}</p>
                    <h3 className="mt-4 text-xl font-semibold text-white">{project.name}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-300">{project.description}</p>
                </div>
              </div>
            </div>
            <div className="space-y-3 p-6">
              <div className="flex items-center justify-between text-sm">
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400">{project.impact}</span>
                <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-brand-gold transition" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
