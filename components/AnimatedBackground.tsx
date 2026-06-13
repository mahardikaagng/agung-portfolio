'use client'

import { motion } from 'framer-motion'

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ x: [0, -120, 0], y: [0, 20, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-0 top-24 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 140, 0], y: [0, -20, 0], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-0 top-40 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl"
      />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />
    </div>
  )
}
