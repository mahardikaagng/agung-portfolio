import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'

export function About() {
  return (
    <Section id="about" title="About" subtitle="Professional Profile">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-6 rounded-[28px] bg-white/5 p-8 shadow-surface"
        >
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Professional Summary</h3>
            <p className="text-base leading-8 text-slate-300">
              BNSP Certified Digital Marketing Professional with demonstrated expertise in bridging data-driven strategic planning with high-stakes operational execution. Proven track record in Business Development, successfully securing 6+ institutional tenders and managing the end-to-end fulfillment of 6,000+ B2B orders. Spearheaded large-scale Project Management by directing a 120+ member team for flagship events with a IDR 750 million budget, while overseeing critical supply chain flows and government relations. Expert in transforming complex organizational data into actionable insights and leveraging technical industry insights to drive measurable growth.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Location</p>
              <p className="mt-3 text-sm leading-7 text-slate-200 font-medium">
                Denpasar, Bali, Indonesia
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-blue">GPA</p>
              <p className="mt-3 text-sm leading-7 text-slate-200 font-medium">
                3.89 / 4.00
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="space-y-6 rounded-[28px] bg-slate-950/80 p-8 shadow-surface"
        >
          <div className="rounded-[28px] border border-brand-gold/20 bg-slate-950/90 p-6">
            <h3 className="text-xl font-semibold text-white">Education</h3>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-400">Udayana University</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Bachelor of Management, Digital Marketing specialization
            </p>
            <p className="mt-2 text-xs text-brand-gold font-medium">2022 - 2026 (Expected)</p>
          </div>
          <div className="rounded-[28px] border border-brand-gold/20 bg-slate-950/90 p-6">
            <h3 className="text-xl font-semibold text-white">Certification</h3>
            <p className="mt-3 text-sm text-slate-300">
              BNSP Certified Digital Marketing Professional
            </p>
            <p className="mt-2 text-xs text-brand-blue font-medium">2026</p>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

