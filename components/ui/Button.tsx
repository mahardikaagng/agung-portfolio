'use client'

import { clsx } from 'clsx'
import { motion, type HTMLMotionProps } from 'framer-motion'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: 'solid' | 'ghost' | 'outline'
}

export function Button({ className, variant = 'solid', children, ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
        variant === 'solid' && 'bg-brand-gold text-slate-950 shadow-glow hover:brightness-110',
        variant === 'ghost' && 'border border-white/10 bg-white/5 text-white hover:bg-white/10',
        variant === 'outline' && 'border border-brand-gold/30 text-brand-gold hover:bg-brand-gold/10',
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}
