import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { sendContactEmail } from '@/lib/utils'
import ShowcaseImg from '@/assets/showcases.png'
import EcommerceImg from '@/assets/e-commerce.png'
import OperationsImg from '@/assets/operationnel.png'
import BookingImg from '@/assets/booking.png'
import MobileImg from '@/assets/mobil.png'
import HostingImg from '@/assets/image.png'
import VisualIdentityImg from '@/assets/visualIdenditiy.png'
import PrintDesignImg from '@/assets/PrintDesing.png'
import DigitalDesignImg from '@/assets/digitalDesing.png'
import SocialStrategyImg from '@/assets/stratigy.png'
import SocialContentImg from '@/assets/content.png'
import SocialPlanningImg from '@/assets/planing.png'
import SocialCommunityNewImg from '@/assets/ccommuntiy.png'

const serviceOptions = [
  { id: 'website-creation', label: 'Website Creation' },
  { id: 'branding-design', label: 'Branding & Design' },
  { id: 'digital-print', label: 'Digital Design & Printing' },
  { id: 'social-media', label: 'Social Media Management' },
  { id: 'video-content', label: 'Video & Content Creation' },
  { id: 'website-management', label: 'Website Management' },
]

const serviceDetails = {
  'website-creation': {
    title: 'Website Creation',
    description:
      'We craft immersive, high-performance websites tailored to the way your audience actually navigates. Every layout, animation, and interaction is prototyped, tested, and tuned to move visitors from curiosity to commitment.',
    bullets: [
      {
        title: 'Strategy first',
        body: 'UX mapping, content hierarchy, and conversion pathways defined before any pixels move.',
      },
      {
        title: 'Premium art direction',
        body: 'Bespoke visuals, micro-interactions, and typography that reinforce your brand voice.',
      },
      {
        title: 'Technical excellence',
        body: 'Responsive builds, blazing load times, headless/modern stacks, and full SEO readiness.',
      },
      {
        title: 'Launch support',
        body: 'QA, analytics configuration, and scalable CMS workflows your team can actually use.',
      },
    ],
    categories: [
      {
        name: 'Showcase Sites',
        description:
          'Give your brand, team, and offer a cinematic stage built to earn trust and trigger qualified inquiries.',
        image: ShowcaseImg,
      },
      {
        name: 'E-commerce',
        description:
          'Conversion-first storefronts with smart merchandising, inventory workflows, and a lightning-fast, secure checkout.',
        image: EcommerceImg,
      },
      {
        name: 'Operational Platforms',
        description:
          'Custom portals and dashboards that centralize your data, internal workflows, and customer touchpoints.',
        image: OperationsImg,
      },
      {
        name: 'Booking Experiences',
        description:
          'Frictionless scheduling flows (calendar, payment, reminders) tailored to hospitality, healthcare, and education.',
        image: BookingImg,
      },
      {
        name: 'Mobile Applications',
        description:
          'Native or hybrid iOS/Android apps synced with your web ecosystem to extend services everywhere.',
        image: MobileImg,
      },
      {
        name: 'Hosting & Managed Ops',
        description:
          'Secure infrastructure, 24/7 monitoring, and continuous updates that keep every launch fast and reliable.',
        image: null,
      },
    ],
  },
  'branding-design': {
    title: 'Branding & Design',
    description:
      'We build brand systems that feel unmistakably yours—from logotype and typography to 3D textures, motion, and launch assets. Every deliverable is rooted in strategy, crafted to scale across campaigns, and art-directed so it looks premium on every screen.',
    bullets: [
      {
        title: 'Visual strategy',
        body: 'Mood boards, positioning statements, and messaging pillars that align your brand voice before we draw the first line.',
      },
      {
        title: 'Design systems',
        body: 'Logos, iconography, typography stacks, and UI kits documented in crystal-clear guidelines for your teams and partners.',
      },
      {
        title: 'Launch assets',
        body: 'Campaign-ready graphics, motion snippets, and templates so your new identity ships consistently across every channel.',
      },
    ],
    categories: [
      {
        name: 'Visual Identity & Branding',
        description:
          'Logos, color systems, and typography combinations that mirror your values and scale across print, product, and digital.',
        image: VisualIdentityImg,
      },
      {
        name: 'Print & Editorial Systems',
        description:
          'Brand books, packaging, stationery, and long-form layouts crafted to keep every touchpoint coherent and premium.',
        image: PrintDesignImg,
      },
      {
        name: 'Digital Brand Assets',
        description:
          'Social kits, ad creatives, newsletter layouts, and motion snippets that captivate audiences across every digital surface.',
        image: DigitalDesignImg,
      },
    ],
  },
  'digital-print': {
    title: 'Digital Design & Printing',
    description:
      'We bridge on-screen energy with tactile storytelling. From responsive digital canvases to premium print runs, every asset is color-managed, production-ready, and perfectly aligned with your brand system.',
    bullets: [
      {
        title: 'Integrated art direction',
        body: 'Unified creative direction across digital, print, and out-of-home formats so every campaign feels cohesive.',
      },
      {
        title: 'Production-ready files',
        body: 'Color profiles, bleed, dielines, and press checks handled in-house to eliminate last-minute surprises.',
      },
      {
        title: 'Agile refresh cycles',
        body: 'Template libraries and modular layouts that let your team localize or iterate without breaking consistency.',
      },
    ],
    categories: [
      {
        name: 'Digital Campaign Kits',
        description:
          'Responsive social assets, email layouts, and paid-media variations optimized for every placement and screen size.',
        image: DigitalDesignImg,
      },
      {
        name: 'Print & Editorial',
        description:
          'Lookbooks, brochures, packaging, and stationery systems crafted with premium materials and finish recommendations.',
        image: PrintDesignImg,
      },
      {
        name: 'Large-Format & Merch',
        description:
          'Booth graphics, outdoor visuals, and merchandise artwork engineered for impact at any scale.',
        image: VisualIdentityImg,
      },
    ],
  },
  'social-media': {
    title: 'Social Media Management',
    description:
      'We operate your social channels like a newsroom and a creative studio combined—planning narratives, producing native-first assets, and optimizing every post so your community stays engaged and growing.',
    bullets: [
      {
        title: 'Editorial strategy',
        body: 'Audience research, voice guidelines, and content pillars translated into agile monthly and weekly roadmaps.',
      },
      {
        title: 'Content production',
        body: 'Short-form video, motion graphics, carousels, and stories tailored to each platform’s best practices.',
      },
      {
        title: 'Community & reporting',
        body: 'Always-on moderation, inbox management, and reporting dashboards that surface KPIs and next actions.',
      },
    ],
    categories: [
      {
        name: 'Strategy',
        description:
          'Brand analysis, audience profiling, platform selection (Instagram, TikTok, LinkedIn, etc.) and tone of voice definition so every post has a purpose.',
        image: SocialStrategyImg,
      },
      {
        name: 'Content Creation',
        description:
          'Posts, stories, carousels, reels, shorts, captions, hashtags—everything crafted to look and feel like your brand, everywhere.',
        image: SocialContentImg,
      },
      {
        name: 'Planning & Publication',
        description:
          'Editorial calendars, optimal frequencies, perfect posting times, and automation so your presence stays consistent.',
        image: SocialPlanningImg,
      },
      {
        name: 'Community Management',
        description:
          'Comment replies, DMs, interactions, and moderation loops run in real-time so the brand remains warm and human.',
        image: SocialCommunityNewImg,
      },
    ],
  },
  'video-content': {
    title: 'Video & Content Creation',
    description:
      'We combine cinematic direction with agile post-production to deliver scroll-stopping assets for launches, socials, and campaigns. Every piece is storyboarded, shot, and edited to fit the exact channel requirements.',
    bullets: [
      {
        title: 'Narrative-first production',
        body: 'Concepts, scripts, and shot lists aligned with campaign goals before we roll cameras or open After Effects.',
      },
      {
        title: 'Full-service studio',
        body: 'On-set direction, lighting, motion graphics, and sound design handled in-house for tighter turnarounds.',
      },
      {
        title: 'Platform-ready exports',
        body: 'Cutdowns, aspect ratios, and caption files delivered per network so assets are ready to publish instantly.',
      },
    ],
    categories: [
      {
        name: 'Campaign Films',
        description:
          'Hero videos, explainers, and launch edits crafted with modular storytelling for repurposing across paid and owned channels.',
        image: null,
      },
      {
        name: 'Social & Vertical',
        description:
          'Short-form reels, stories, and UGC-style clips optimized frame-by-frame for retention and conversions.',
        image: null,
      },
      {
        name: 'Content Systems',
        description:
          'Template-driven motion packages and lower thirds that keep recurring series consistent without stifling creativity.',
        image: null,
      },
    ],
  },
  'website-management': {
    title: 'Website Management',
    description:
      'We stay on top of your site after launch—shipping updates, monitoring performance, and iterating UX so every visit feels fast, secure, and on-brand.',
    bullets: [
      {
        title: 'Data-backed improvements',
        body: 'Analytics reviews, heatmaps, and CRO experiments that turn insight into measurable gains.',
      },
      {
        title: 'Content & feature updates',
        body: 'New pages, seasonal campaigns, and integration tweaks handled without derailing your internal team.',
      },
      {
        title: 'Reliability & security',
        body: 'Uptime monitoring, backups, and dependency updates so your stack stays hardened and compliant.',
      },
    ],
    categories: [
      {
        name: 'Growth Sprints',
        description:
          'Monthly or quarterly optimization cycles focused on speed, SEO, and conversion wins.',
        image: null,
      },
      {
        name: 'Content Operations',
        description:
          'Editorial support, localization, and multimedia publishing workflows managed inside your CMS.',
        image: null,
      },
      {
        name: 'Technical Care',
        description:
          'Infrastructure patches, dependency upgrades, and incident response runbooks ready when you need them.',
        image: null,
      },
    ],
  },
}

export default function Services() {
  const [heroPinned, setHeroPinned] = useState(false)
  const [selectedService, setSelectedService] = useState(serviceOptions[0].id)
  const [serviceForm, setServiceForm] = useState({ name: '', email: '', summary: '' })
  const [serviceFormStatus, setServiceFormStatus] = useState({ submitting: false, success: false, error: '' })
  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => setHeroPinned(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const topSection = document.getElementById('services-top')
    if (topSection) {
      topSection.scrollIntoView({ behavior: 'auto', block: 'start' })
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [])

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const requestedService = params.get('service')
    if (requestedService && serviceOptions.some(option => option.id === requestedService)) {
      setSelectedService(requestedService)
    } else if (!requestedService) {
      setSelectedService(serviceOptions[0].id)
    }
  }, [location.search])

  const activeService = useMemo(() => serviceDetails[selectedService], [selectedService])

  const handleServiceFormChange = (event) => {
    const { name, value } = event.target
    setServiceForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceFormSubmit = async (event) => {
    event.preventDefault()
    setServiceFormStatus({ submitting: true, success: false, error: '' })

    const serviceLabel = serviceOptions.find((option) => option.id === selectedService)?.label ?? 'Service Inquiry'

    try {
      await sendContactEmail({
        name: serviceForm.name,
        email: serviceForm.email,
        subject: `Services Page — ${serviceLabel}`,
        message: serviceForm.summary || 'No additional project summary provided.',
        source: 'Services page form',
      })

      setServiceForm({ name: '', email: '', summary: '' })
      setServiceFormStatus({ submitting: false, success: true, error: '' })
    } catch (error) {
      setServiceFormStatus({
        submitting: false,
        success: false,
        error: error?.message || 'Unable to send your request right now. Please try again.',
      })
    }
  }

  return (
    <div className="bg-black text-white">
      <section id="services-top" className={`about-hero-stage min-h-[95vh] w-full flex items-end justify-center pb-12`}>
        <p
          className={`about-hero-text text-white text-[100vw] md:text-[19.6vw] font-semibold leading-none tracking-tight ${heroPinned ? 'about-hero-text--pinned' : ''}`}
        >
            SERVICES
        </p>
      </section>
      <section className="border-t border-white/20 bg-black py-14 px-4 sm:px-6 lg:px-16">
        <div className="mx-auto mb-10 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.45em] text-[#ff1a1a]">Explore services</p>
          <div className="mt-3 relative">
            <label className="sr-only" htmlFor="service-selector">Select service</label>
            <select
              id="service-selector"
              value={selectedService}
              onChange={(event) => setSelectedService(event.target.value)}
              className="w-full appearance-none rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-sm text-white focus:border-white/40 focus:outline-none"
            >
              {serviceOptions.map(option => (
                <option key={option.id} value={option.id} className="bg-black text-white">
                  {option.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/60">▾</span>
          </div>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
            <div className="services-narrative rounded-3xl bg-gradient-to-b from-white/4 via-black/40 to-transparent p-6 sm:p-8 lg:p-12">
              <div className="flex flex-col gap-5 border-b border-white/10 pb-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.5em] text-[#ff1a1a]/90">
                    Service {String(serviceOptions.findIndex(option => option.id === selectedService) + 1).padStart(2, '0')}
                  </p>
                  <p className="mt-3 text-4xl font-semibold uppercase tracking-[0.2em] text-white sm:text-5xl">
                    {serviceOptions.find((option) => option.id === selectedService)?.label}
                  </p>
                </div>
                <p className="services-para about-para text-base text-white/80 leading-relaxed sm:text-lg">
                  {activeService?.description ?? 'We are crafting the full breakdown for this service. Choose another option or reach out directly.'}
                </p>
              </div>

              <div className="services-detail-scroll mt-10 space-y-12">
                {activeService?.bullets ? (
                  activeService.bullets.map((point) => (
                    <div key={point.title} className="border-l-2 border-white/20 pl-5">
                      <p className="services-para about-para text-lg font-semibold text-white">
                        {point.title}
                      </p>
                      <p className="services-point mt-2 text-sm text-white/70 sm:text-base">{point.body}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-white/60">Select Website Creation to preview the detailed layout.</p>
                )}

                {activeService?.categories && (
                  <div className="mt-10 space-y-8">
                    <p className="text-xs uppercase tracking-[0.45em] text-[#ff1a1a]">What we build</p>
                    <div className="space-y-12">
                      {activeService.categories.map((category, index) => (
                        <div
                          key={category.name}
                          className={`flex flex-col gap-6 rounded-3xl bg-black/30 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${
                            category.image ? 'lg:flex-row lg:items-center lg:gap-12' : 'text-center'
                          } ${category.image && index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                          <div className={`${category.image ? 'flex-1 text-center lg:text-left space-y-3' : 'space-y-3 mx-auto max-w-3xl'}`}>
                            <p className="text-2xl font-semibold uppercase tracking-[0.2em] text-white">
                              {category.name}
                            </p>
                            <p className="services-point text-sm text-white/70 sm:text-base">
                              {category.description}
                            </p>
                          </div>
                          {category.image && (
                            <div className="flex-1">
                              <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/40">
                                <img src={category.image} alt={category.name} className="h-full w-full object-cover" />
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>

            <div className="rounded-3xl bg-black/65 p-6 sm:p-8 shadow-2xl shadow-red-500/10 backdrop-blur-lg md:sticky md:top-28 self-start">
              <div className="mb-8 space-y-2">
                <p className="text-xs uppercase tracking-[0.45em] text-[#ff1a1a]">Contact</p>
                <h2 className="text-2xl font-semibold leading-tight">Tell us about your project</h2>
                <p className="text-sm text-white/70">Share a few details and choose the service you need. We reply in under 24h.</p>
              </div>
              <form className="space-y-4" onSubmit={handleServiceFormSubmit}>
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-white/60">Full name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    value={serviceForm.name}
                    onChange={handleServiceFormChange}
                    required
                    className="mt-2 w-full rounded-lg bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-white/60">Email</label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    name="email"
                    value={serviceForm.email}
                    onChange={handleServiceFormChange}
                    required
                    className="mt-2 w-full rounded-lg bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-white/60">Subject</label>
                  <select
                    className="mt-2 w-full rounded-lg bg-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                    value={selectedService}
                    onChange={(event) => setSelectedService(event.target.value)}
                  >
                    {serviceOptions.map((option) => (
                      <option key={option.id} value={option.id} className="bg-black text-white">
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-white/60">Project summary</label>
                  <textarea
                    rows={4}
                    placeholder="Share goals, timeline, or links"
                    name="summary"
                    value={serviceForm.summary}
                    onChange={handleServiceFormChange}
                    className="mt-2 w-full rounded-lg bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={serviceFormStatus.submitting}
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-red-600/80 to-red-500/70 px-4 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white transition hover:shadow-[0_0_26px_rgba(255,26,26,0.45)]"
                >
                  {serviceFormStatus.submitting ? 'SENDING...' : 'SEND REQUEST'}
                </button>

                {serviceFormStatus.success && (
                  <p className="text-center text-xs uppercase tracking-[0.3em] text-green-400">Message sent. We'll reply within 24h.</p>
                )}
                {serviceFormStatus.error && (
                  <p className="text-center text-xs uppercase tracking-[0.3em] text-red-400">{serviceFormStatus.error}</p>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

      <section className="border-t border-white/25 px-4 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          

          <div className="about-marquee-wrapper" aria-hidden="true">
            <div className="about-marquee-track">
              {[...Array(2)].map((_, outerIndex) => (
                <div key={outerIndex} className="about-marquee-group">
                  <p className="about-marquee-text">BYTE AGENCY</p>
                  <p className="about-marquee-text about-marquee-alt">BYTE AGENCY</p>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="about-section-indicator"
            aria-label="Back to top"
            onClick={() => document.getElementById('services-top')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="about-section-track">
              <span className="about-section-runner" />
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="about-section-icon"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 6-6m0 0 6 6m-6-6v12a6 6 0 0 1-12 0v-3" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  )
}
