import { useState } from 'react'
import CyberMatrixHero from '@/components/ui/cyber-matrix-hero'
import LogoMark from '@/assets/byte shape.png'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Method', href: '#method' },
  { label: 'Services', href: '#services' },
  { label: 'Why Byte', href: '#why-byte' },
  { label: 'Contact', href: '#contact' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
        <nav className="w-full px-6 py-4 flex items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xl font-semibold tracking-tight">Byte</span>
            <img src={LogoMark} alt="Byte.ma logo" className="h-10 w-10 object-contain" />
          </div>

          <div className="ml-auto hidden md:flex flex-1 items-center justify-between max-w-3xl text-sm font-medium">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="ml-auto inline-flex h-11 w-11 flex-col items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 text-white transition-colors duration-200 hover:border-white/30 hover:bg-white/10 md:hidden"
          >
            <span className="sr-only">Open navigation</span>
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden px-6 pb-4 bg-black/90 border-b border-white/10 backdrop-blur-xl">
            <div className="flex flex-col gap-3 text-sm font-medium">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="pt-24">
        <CyberMatrixHero />
        <section className="h-screen flex items-center justify-center text-white text-4xl text-center p-8">
          <p>This section is a placeholder for the rest of your page content.</p>
        </section>
      </main>
    </div>
  )
}
