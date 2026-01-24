import { useEffect, useState } from 'react'
import HeroStill from '@/assets/nous.png'

const serviceHighlights = [
  'Website Creation',
  'Branding & Design',
  'Social Media Management',
  'Video & Content Creation',
  'Website Management',
]

export default function About() {
  const [heroPinned, setHeroPinned] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHeroPinned(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const targets = document.querySelectorAll('[data-animate="about"]')
    if (!targets.length) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about-animate-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
    )

    targets.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-black text-white">
      <section className={`about-hero-stage min-h-[87vh] w-full flex items-end justify-center pb-12`}>
        <p
          className={`about-hero-text text-white text-[50vw] md:text-[27vw] font-semibold leading-none tracking-tight ${heroPinned ? 'about-hero-text--pinned' : ''}`}
        >
          ABOUT
        </p>
      </section>

      <section className="border-t border-white/25 w-full min-h-[4cm] flex items-center">
        <div className="w-full px-4 py-4 lg:px-10">
          <div
            className={`about-band-intro flex h-full items-center justify-between border-x border-white/35 px-4 py-4 lg:px-10 ${heroPinned ? 'about-band-intro--active' : ''}`}
          >
            <div>
              <div className="flex items-center gap-6 text-[0.65rem] uppercase tracking-[0.45em] text-white/70">
                <span>01</span>
                <span>Who we are</span>
              </div>
              <p
                className={`about-band-copy mt-4 text-xl font-semibold uppercase leading-tight tracking-[0.04em] sm:text-2xl md:text-3xl ${heroPinned ? 'about-band-copy--visible' : ''}`}
              >
                BYTE designs modern websites and impactful digital identities. We turn ideas into strategic solutions for your growth and online presence.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section >
        <div className="mx-auto max-w-6xl px-4 py-12 lg:max-w-7xl lg:px-0 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-4">
              <div
                data-animate="about"
                className="about-animate about-photo-frame relative h-full min-h-[10cm] bg-black"
              >
                <img
                  src={HeroStill}
                  alt="Byte team on set"
                  className="relative z-10 h-full w-full object-cover"
                />
              </div>
            </div>

            <div
              data-animate="about"
              className="about-animate about-story-block flex min-h-[3cm] flex-col items-end justify-start gap-6 px-6 py-6 text-right text-sm uppercase tracking-[0.08em] text-white/80 sm:text-base"
            >
              <p className="mx-auto w-full max-w-xl leading-relaxed">
                Founded by two partners sharing the same passion and complementary skills,
                <span className="font-semibold text-white"> we design and develop a wide range of digital solutions for various platforms, formats, and audiences</span>, approaching every project with care and dedication.
              </p>
              <p className="mx-auto w-full max-w-xl leading-relaxed">
                We create and deliver
                <span className="font-semibold text-white"> original digital experiences—from websites and brand identities to strategic solutions</span>, while also offering
                <span className="font-semibold text-white"> digital services for local and global brands and agencies.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="px-4 pb-4 lg:px-12">
          <div className="h-px w-full bg-white/25" aria-hidden="true" />
        </div>
      </section>

      <section className="border-b border-white/25 px-4 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-white/20 pb-12">
            <div data-animate="about" className="about-animate space-y-6 text-left">
              <div className="flex gap-6 font-mono text-[0.65rem] uppercase tracking-[0.45em] text-white/70">
                <span>02</span>
                <span>What we do</span>
              </div>
              <h2 className="mt-4 text-xl font-semibold uppercase leading-tight tracking-[0.04em] sm:text-2xl md:text-3xl">
                We use creativity, strategy, and technology to design and develop powerful digital experiences for forward-thinking brands.
              </h2>
            </div>
          </div>

          <div className="mt-6 divide-y divide-white/15">
            {serviceHighlights.map((service, index) => (
              <div
                key={service}
                className="group relative flex flex-col gap-6 py-6 transition-colors md:flex-row md:items-center"
              >
                <div className="flex flex-1 items-center justify-between pr-6">
                  <span className="text-3xl font-semibold uppercase tracking-[0.08em] sm:text-5xl md:text-6xl">
                    {service}
                  </span>
                </div>
                <span className="text-xs uppercase tracking-[0.4em] text-white/60">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
