import LogoMark from '@/assets/byte shape.png'

export default function About() {
  return (
    <div className="bg-black text-white">
      <section className="min-h-[87vh] w-full flex items-end justify-center pb-12">
        <p className="text-white text-[50vw] md:text-[27vw] font-semibold leading-none tracking-tight">ABOUT</p>
      </section>

      <section className="border-y border-white/25 w-full min-h-[4cm] flex items-center">
        <div className="w-full px-4 py-4 lg:px-10">
          <div className="flex h-full items-center justify-between border-x border-white/35 px-4 py-4 lg:px-10">
            <div>
              <div className="flex items-center gap-6 text-[0.65rem] uppercase tracking-[0.45em] text-white/70">
                <span>01</span>
                <span>Who we are</span>
              </div>
              <p className="mt-4 text-xl font-semibold uppercase leading-tight tracking-[0.04em] sm:text-2xl md:text-3xl">
                BYTE designs modern websites and impactful digital identities. We turn ideas into strategic solutions for your growth and online presence.
              </p>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}
