'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'

const timeline = [
  {
    title: 'Vice Chairman - DPM FEB UNUD',
    period: 'Feb 2025 - Feb 2026',
    company: 'Udayana University',
    detail: 'Developed centralized database tracking 1,483 student records with 91% validity. Executed centralized supervision of all student activities ensuring 100% regulatory compliance. Facilitated inter-faculty networking and led SDM Talent Scouting initiatives.',
  },
  {
    title: 'Strategic Operations Intern',
    period: 'Jun - Dec 2024',
    company: 'Bali Organik Subak',
    detail: 'Managed supply chain flow from QC of agricultural products to large-scale B2B distribution. Implemented Precision Agriculture techniques and sustainable plantation management. Managed on-site deployment of 50 IoT Sensor Tree units ensuring technical compliance.',
  },
  {
    title: 'Chairman - DIES BKFEB 57',
    period: 'Feb - Aug 2024',
    company: 'Udayana University',
    detail: 'Directed 120+ staff for 3-day flagship event with 2,000+ attendees. Managed IDR 750M production budget including vendor negotiations and artist bookings. Secured 50%+ budget through corporate sponsorships and managed strategic liaisons with government officials.',
  },
  {
    title: 'Freelance Business Development',
    period: 'Sept 2023 - Feb 2025',
    company: 'PT Angga Cahya (Dewata Group)',
    detail: 'Secured 6+ institutional tenders through strategic proposal development and negotiation. Managed end-to-end fulfillment of 6,000+ B2B orders. Implemented pricing model increasing revenue by 5% per order through cost-value analysis.',
  },
]

export function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="Professional Journey">
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
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-brand-blue mt-1">{item.company}</p>
              </div>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300 whitespace-nowrap">{item.period}</span>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300">{item.detail}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
