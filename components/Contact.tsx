'use client'

import { Mail, MapPin, Smartphone } from 'lucide-react'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'

export function Contact() {
  return (
    <Section id="contact" title="Contact" subtitle="Let's start a conversation">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="rounded-[32px] border border-brand-gold/15 bg-slate-950/85 p-8 shadow-surface"
        >
          <h3 className="text-2xl font-semibold text-white">Ready to connect?</h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
            Use this premium CTA section to invite recruiters, hiring teams, and collaborators to reach out for the next opportunity.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { icon: Mail, label: 'Email', value: 'hello@example.com' },
              { icon: Smartphone, label: 'Phone', value: '+62 812 3456 7890' },
              { icon: MapPin, label: 'Location', value: 'Jakarta, Indonesia' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-4">
                <item.icon className="mt-1 h-5 w-5 text-brand-blue" />
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">{item.label}</p>
                  <p className="mt-1 text-sm text-slate-200">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
          className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-surface backdrop-blur-xl"
        >
          <h3 className="text-xl font-semibold text-white">Reserve space for a client-friendly form</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            This area is intentionally set up for a contact form or direct message CTA in the next phase.
          </p>
          <div className="mt-8 space-y-4 rounded-[28px] border border-white/10 bg-slate-950/80 p-6">
            <p className="text-sm text-slate-300">Fast response ready. Replace this card with a contact form when content is available.</p>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
