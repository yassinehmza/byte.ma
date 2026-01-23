import { useState, useEffect } from 'react'
import { Link, Routes, Route, useLocation } from 'react-router-dom'
import LogoMark from '@/assets/byte shape.png'
import Home from '@/pages/Home'
import About from '@/pages/About'

const navLinks = [
  { label: 'Home', type: 'route', to: '/' },
  { label: 'About', type: 'route', to: '/about' },
  { label: 'Method', type: 'hash', hash: '#method' },
  { label: 'Services', type: 'hash', hash: '#services' },
  { label: 'Why Byte', type: 'hash', hash: '#why-byte' },
    
  { label: 'Contact', type: 'hash', hash: '#contact' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  const isActive = (item) => {
    if (item.type === 'route') {
      return item.to === '/' ? location.pathname === '/' : location.pathname === item.to
    }
    return location.pathname === '/' && location.hash === item.hash
  }

  const resolveLinkTarget = (item) => (item.type === 'hash' ? { pathname: '/', hash: item.hash } : item.to)

  const desktopLinkClasses = (item) =>
    `text-sm font-medium transition-colors duration-200 ${isActive(item) ? 'text-white' : 'text-white/75 hover:text-white'}`

  const mobileLinkClasses = (item) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive(item) ? 'text-white bg-white/5' : 'text-white/75 hover:text-white hover:bg-white/5'}`

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
              <Link key={item.label} to={resolveLinkTarget(item)} className={desktopLinkClasses(item)}>
                {item.label}
              </Link>
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
                <Link key={item.label} to={resolveLinkTarget(item)} className={mobileLinkClasses(item)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}
