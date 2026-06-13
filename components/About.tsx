import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'

export function About() {
  return (
    <Section id="about" title="About" subtitle="Designer | Builder | Storyteller">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-6 rounded-[28px] bg-white/5 p-8 shadow-surface"
        >
          <p className="text-lg leading-8 text-slate-300">
            This portfolio foundation is designed for clarity, craftsmanship, and easy extension. It showcases structure for biography, education, and certifications without filler content.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Biography</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                The narrative section is reserved for a concise summary of career direction, values, and the unique perspective brought to product and design work.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Approach</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Built with modular components and motion that supports premium storytelling, while keeping accessibility and performance at the center.
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
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Structured for academic highlights, certifications, and professional development programs without committing to content yet.
            </p>
          </div>
          <div className="rounded-[28px] border border-brand-blue/20 bg-slate-950/90 p-6">
            <h3 className="text-xl font-semibold text-white">Certifications</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Placeholder blocks for certifications, awards, and professional affiliations that will be filled in the next phase.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
