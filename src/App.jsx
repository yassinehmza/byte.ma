import { useState, useRef, useEffect } from 'react'
import CyberMatrixHero from '@/components/ui/cyber-matrix-hero'
import LogoMark from '@/assets/byte shape.png'
import AboutBg from '@/assets/image.png'

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
  const aboutRef = useRef(null)
  const [aboutInView, setAboutInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setAboutInView(entry.isIntersecting),
      { root: null, threshold: 0.3 }
    )
    if (aboutRef.current) observer.observe(aboutRef.current)
    return () => observer.disconnect()
  }, [])

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
        <section id="home">
          <CyberMatrixHero />
        </section>

        <section
          id="about"
          ref={aboutRef}
          className={`relative overflow-hidden bg-black text-white ${aboutInView ? 'about-in-view' : ''}`}
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.86) 30%, rgba(0,0,0,0.95) 100%), url(${AboutBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_30%,rgba(255,0,0,0.28),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(255,0,0,0.2),transparent_30%)]" aria-hidden="true" />
          <div className="absolute inset-0 mix-blend-screen opacity-15 bg-[repeating-linear-gradient(90deg,rgba(255,0,0,0.3)_0,rgba(255,0,0,0.3)_1px,transparent_1px,transparent_14px)]" aria-hidden="true" />

          <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-28">
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-center">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.25em] text-white/70">About Us</p>
                <div className="leading-none text-[#ff1a1a] about-title" style={{ textShadow: '0 0 24px rgba(255,0,0,0.55), 0 0 54px rgba(255,0,0,0.35)' }}>
                  <div className="line text-[4.5rem] sm:text-[7rem] md:text-[10rem] font-extrabold">WHO</div>
                  <div className="line text-[4.5rem] sm:text-[7rem] md:text-[10rem] font-extrabold">WE</div>
                  <div className="line text-[4.5rem] sm:text-[7rem] md:text-[10rem] font-extrabold">ARE</div>
                </div>
              </div>

              <div className="relative md:pl-10">
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-500/40 to-transparent" aria-hidden="true" />
                <div className="space-y-4 text-white/80 text-base sm:text-lg leading-relaxed">
                  <p>
                    BYTE is a digital agency dedicated to transforming ideas into powerful digital experiences. We believe that every successful digital project starts from the smallest unit of information — the bit — and grows into something impactful, innovative, and meaningful.
                  </p>
                  <p>
                    We design and develop modern websites, create strong digital identities, and build strategic digital solutions that help businesses grow, stand out, and connect with their audience. Our approach is based on creativity, precision, and technology, ensuring professional results and long-lasting value.
                  </p>
                  <p>
                    At BYTE, we don’t just create digital products — we build digital presence, reliability, and opportunities.
                  </p>
                </div>
              </div>
            </div>
            <div className="about-overlay-scan" aria-hidden="true" />
          </div>
        </section>
      </main>
    </div>
  )
}
