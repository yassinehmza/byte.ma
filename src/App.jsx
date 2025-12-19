import CyberMatrixHero from '@/components/ui/cyber-matrix-hero'
import LogoMark from '@/assets/byte shape.png'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center">
          <span className="text-xl font-semibold tracking-tight">Byte</span>
          <img src={LogoMark} alt="Byte.ma logo" className="h-10 w-10 object-contain" />
        </nav>
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
