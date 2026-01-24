import { useEffect } from 'react'

export default function Services() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const topSection = document.getElementById('services-top')
    if (topSection) {
      topSection.scrollIntoView({ behavior: 'auto', block: 'start' })
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [])

  return (
    <div className="bg-black text-white">
      <section id="services-top" className="about-hero-stage services-hero-stage min-h-screen w-full flex items-end justify-center">
        <p className="about-hero-text services-hero-text text-white font-semibold leading-none tracking-tight">
          SERVICES
        </p>
      </section>
    </div>
  )
}
