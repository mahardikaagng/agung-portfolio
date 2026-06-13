'use client'

import { Mail, MapPin, Smartphone, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'

export function Contact() {
  return (
    <Section id="contact" title="Get in Touch" subtitle="Let's start a conversation">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="rounded-[32px] border border-brand-gold/15 bg-slate-950/85 p-8 shadow-surface"
        >
          <h3 className="text-2xl font-semibold text-white">Contact Information</h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
            Available for business inquiries, partnerships, and professional opportunities. Feel free to reach out through any of the channels below.
          </p>
          <div className="mt-8 space-y-4">
            <a
              href="mailto:gungdemahardika@gmail.com"
              className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10 hover:border-brand-gold/30"
            >
              <Mail className="mt-1 h-5 w-5 text-brand-gold flex-shrink-0" />
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500 font-medium">Email</p>
                <p className="mt-1 text-sm text-slate-200">gungdemahardika@gmail.com</p>
              </div>
            </a>
            <a
              href="tel:+62812468733356"
              className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10 hover:border-brand-gold/30"
            >
              <Smartphone className="mt-1 h-5 w-5 text-brand-blue flex-shrink-0" />
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500 font-medium">Phone</p>
                <p className="mt-1 text-sm text-slate-200">+62 812 468 733 356</p>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-4">
              <MapPin className="mt-1 h-5 w-5 text-brand-blue flex-shrink-0" />
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500 font-medium">Location</p>
                <p className="mt-1 text-sm text-slate-200">Denpasar, Bali, Indonesia</p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium mb-4">Connect</p>
            <div className="flex gap-3">
              <a
                href="https://github.com/mahardikaagng"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:text-brand-gold hover:border-brand-gold/30"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/anak-agung-gede-mahardika-juliananda-51a730248"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:text-brand-gold hover:border-brand-gold/30"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://linktr.ee/AgungMahardika"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:text-brand-gold hover:border-brand-gold/30"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
          className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-surface backdrop-blur-xl"
        >
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Access my professional profiles and resources directly.
          </p>
          <div className="mt-8 space-y-3">
            <a
              href="https://linktr.ee/AgungMahardika"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-[28px] border border-white/10 bg-slate-950/80 p-4 transition hover:bg-white/10 hover:border-brand-gold/30"
            >
              <span className="text-sm font-medium text-white">CV & Resources</span>
              <ExternalLink className="h-4 w-4 text-slate-400" />
            </a>
            <a
              href="https://github.com/mahardikaagng"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-[28px] border border-white/10 bg-slate-950/80 p-4 transition hover:bg-white/10 hover:border-brand-gold/30"
            >
              <span className="text-sm font-medium text-white">GitHub Profile</span>
              <ExternalLink className="h-4 w-4 text-slate-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/anak-agung-gede-mahardika-juliananda-51a730248"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-[28px] border border-white/10 bg-slate-950/80 p-4 transition hover:bg-white/10 hover:border-brand-gold/30"
            >
              <span className="text-sm font-medium text-white">LinkedIn Profile</span>
              <ExternalLink className="h-4 w-4 text-slate-400" />
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
