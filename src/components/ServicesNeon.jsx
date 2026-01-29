import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const serviceRows = [
  { id: 'website-creation', title: 'Website Creation', description: 'Immersive, conversion-ready platforms tailored to your product and audience.' },
  { id: 'branding-design', title: 'Branding & Design', description: 'Visual identities, design systems, and launch assets that scale everywhere.' },
  { id: 'digital-print', title: 'Digital Design & Printing', description: 'Consistent campaign kits across screens, print, merch, and large formats.' },
  { id: 'social-media', title: 'Social Media Management', description: 'Narratives, assets, and reporting that keep every channel on-brand.' },
  { id: 'video-content', title: 'Video & Content Creation', description: 'Storyboards, shoots, and agile editing engineered for every platform.' },
  { id: 'website-management', title: 'Website Management', description: 'Iterative UX, content ops, and monitoring to keep every launch sharp.' },
]

export function ServicesNeon() {
  return (
    <section id="services" className="relative min-h-screen bg-black text-white py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="mb-24 text-center" initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="mb-6 text-6xl font-black tracking-tight text-[#ff1a1a] sm:text-8xl" style={{ textShadow: '0 0 30px rgba(255,26,26,0.7), 0 0 60px rgba(255,26,26,0.4)' }}>
            OUR SERVICES
          </p>
          <motion.p className="mb-4 text-2xl font-bold text-white/90" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
            What we do best
          </motion.p>
          <motion.div className="mx-auto h-1 w-32 bg-gradient-to-r from-red-600 via-red-500 to-transparent" initial={{ width: 0 }} whileInView={{ width: 128 }} transition={{ duration: 0.8, delay: 0.4 }} />
        </motion.div>

        <div className="mx-auto max-w-4xl divide-y divide-white/10 border-y border-white/10">
          {serviceRows.map((service, index) => (
            <motion.div key={service.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.05 }} viewport={{ once: false, margin: '-120px' }}>
              <Link to={{ pathname: '/services', search: `?service=${service.id}` }} className="group flex flex-col gap-4 py-7 sm:flex-row sm:items-center">
                <div className="flex-1">
                  <p className="text-3xl font-semibold uppercase tracking-[0.12em] text-white transition-colors group-hover:text-[#ff1a1a] sm:text-4xl">{service.title}</p>
                  <p className="mt-2 text-sm text-white/70 sm:text-base">{service.description}</p>
                </div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition group-hover:border-[#ff1a1a] group-hover:text-[#ff1a1a]">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
