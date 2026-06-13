export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70 px-6 py-8 text-sm text-slate-400 backdrop-blur-xl sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Agung. Built with a premium portfolio foundation.</p>
        <p className="text-slate-500">Designed for recruiters, ready for expansion.</p>
      </div>
    </footer>
  )
}
