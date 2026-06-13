'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'

const skillGroups = [
  {
    title: 'Digital Marketing',
    skills: ['Digital Strategy', 'Content Creation', 'SEO & Analytics', 'Meta Ads Manager', 'Google Analytics'],
  },
  {
    title: 'Business Development',
    skills: ['Strategic Negotiation', 'Tender Management', 'B2B Sales', 'Personal Selling', 'Client Relations'],
  },
  {
    title: 'Project Management',
    skills: ['Event Management', 'Budget Oversight', 'Team Leadership', 'Supply Chain', 'Data Management'],
  },
  {
    title: 'Technical Skills',
    skills: ['Microsoft Office Suite', 'Google Workspace', 'Canva', 'Adobe Photoshop', 'Data Analysis'],
  },
  {
    title: 'Leadership',
    skills: ['Team Direction', 'Strategic Planning', 'Stakeholder Management', 'Problem-Solving', 'Communication'],
  },
  {
    title: 'Languages',
    skills: ['Bahasa Indonesia', 'Bahasa Bali', 'English (TOEFL 570)', 'Professional Writing'],
  },
]

export function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Core Competencies"> 
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.08 }}
            className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6 shadow-surface hover:border-brand-blue/20 transition duration-300"
          >
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            <div className="mt-5 space-y-3">
              {group.skills.map((skill) => (
                <div key={skill} className="rounded-3xl border border-white/10 bg-white/5 p-3 hover:bg-white/10 transition duration-300">
                  <div className="flex items-center justify-between gap-4 min-w-0">
                    <p className="text-sm text-slate-200 truncate">{skill}</p>
                    <div className="w-12 h-1.5 rounded-full bg-gradient-to-r from-brand-blue/40 to-brand-gold/40 flex-shrink-0" />
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
