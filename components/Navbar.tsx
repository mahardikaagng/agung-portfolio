'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navigation = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      const currentSection = navigation
        .map((item) => ({
          id: item.href.replace('#', ''),
          top: document.querySelector(item.href)?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY,
        }))
        .filter((item) => item.top <= window.innerHeight / 3)
        .pop()

      if (currentSection) {
        setActiveLink(currentSection.id)
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="sticky top-0 z-30 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="space-y-1">
          <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Agung</p>
          <p className="text-xs uppercase tracking-[0.35em] text-brand-gold">Portfolio</p>
        </div>

        <nav className="hidden items-center gap-2 md:flex">
          {navigation.map((item) => {
            const isActive = activeLink === item.href.replace('#', '')
            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  isActive ? 'bg-brand-gold text-slate-950 shadow-glow' : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-brand-gold/30 bg-transparent px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold transition hover:bg-brand-gold/10 md:inline-flex"
          >
            Connect
          </a>
          <button
            type="button"
            aria-label="Toggle navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-white transition hover:border-brand-gold/30 hover:text-brand-gold md:hidden"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="border-t border-white/10 bg-slate-950/95 px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition hover:bg-brand-blue/10"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-3xl bg-brand-gold px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:brightness-110"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </motion.div>
      ) : null}
    </motion.header>
  )
}
