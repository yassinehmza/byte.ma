import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import CyberMatrixHero from '@/components/ui/cyber-matrix-hero'
import { MethodNeon } from '@/components/MethodNeon'
import { ServicesNeon } from '@/components/ServicesNeon'
import { ContactNeon } from '@/components/ContactNeon'
import AboutBg from '@/assets/image.png'

const philosophyItems = [
	{ title: 'Innovation First', description: 'We innovate before we execute. We constantly explore new technologies, trends and strategies to build smarter, faster and more powerful digital solutions.' },
	{ title: 'Client Focus', description: 'Your success is our priority. We listen, analyze and understand your business to deliver solutions that truly answer your needs.' },
	{ title: 'Quality Driven', description: 'Excellence is our standard. Every project is crafted with precision, performance and attention to detail — no compromises.' },
	{ title: 'Future Ready', description: 'Built for tomorrow. We design scalable, secure and future-proof digital experiences that grow with your business.' },
]

export default function Home() {
	const [selectedPhilosophy, setSelectedPhilosophy] = useState(null)
	const aboutRef = useRef(null)
	const [aboutInView, setAboutInView] = useState(false)
	const philosophyRef = useRef(null)
	const [philosophyInView, setPhilosophyInView] = useState(false)
	const location = useLocation()
	const initialHashRef = useRef(location.hash)

	useEffect(() => {
		if (!initialHashRef.current) {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
	}, [])

	useEffect(() => {
		if (!location.hash) return
		const section = document.querySelector(location.hash)
		if (section) {
			section.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	}, [location.hash])

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => setAboutInView(entry.isIntersecting),
			{ root: null, threshold: 0.3 }
		)
		if (aboutRef.current) observer.observe(aboutRef.current)
		return () => observer.disconnect()
	}, [])

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => setPhilosophyInView(entry.isIntersecting),
			{ root: null, threshold: 0.25 }
		)
		if (philosophyRef.current) observer.observe(philosophyRef.current)
		return () => observer.disconnect()
	}, [])

	return (
		<>
			<section id="home" className="relative">
				<CyberMatrixHero />
				<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-black/60 to-black" aria-hidden="true" />
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
				<div className="pointer-events-none absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-black via-black/80 to-transparent" aria-hidden="true" />
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
									At BYTE, we do not just create digital products — we build digital presence, reliability, and opportunities.
								</p>
							</div>
						</div>
					</div>
					<div className="about-overlay-scan" aria-hidden="true" />
				</div>
			</section>

			<section
				id="philosophy"
				ref={philosophyRef}
				className={`relative overflow-hidden bg-black text-white ${philosophyInView ? 'philosophy-in-view' : ''}`}
				style={{
					backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.88) 30%, rgba(0,0,0,0.96) 100%), url(${AboutBg})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center bottom',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_70%_50%,rgba(255,0,0,0.22),transparent_35%)]" aria-hidden="true" />
				<div className="absolute inset-0 mix-blend-screen opacity-10 bg-[repeating-linear-gradient(90deg,rgba(255,0,0,0.3)_0,rgba(255,0,0,0.3)_1px,transparent_1px,transparent_14px)]" aria-hidden="true" />

				<div className="philosophy-floater top-[10%] left-[15%]" style={{ animation: 'float1 18s ease-in-out infinite' }}>
					<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
						<circle cx="30" cy="30" r="28" stroke="#ff1a1a" strokeWidth="2" opacity="0.4" />
						<path d="M30 10 L50 30 L30 50 L10 30 Z" stroke="#ff1a1a" strokeWidth="1.5" fill="none" opacity="0.3" />
					</svg>
				</div>

				<div className="philosophy-floater top-[25%] left-[8%]" style={{ animation: 'float2 22s ease-in-out infinite 2s' }}>
					<svg width="50" height="50" viewBox="0 0 50 50" fill="none">
						<rect x="5" y="5" width="40" height="40" stroke="#ff1a1a" strokeWidth="2" opacity="0.35" transform="rotate(45 25 25)" />
						<circle cx="25" cy="25" r="8" fill="#ff1a1a" opacity="0.25" />
					</svg>
				</div>

				<div className="philosophy-floater top-[15%] right-[12%]" style={{ animation: 'float3 20s ease-in-out infinite 1s' }}>
					<svg width="70" height="70" viewBox="0 0 70 70" fill="none">
						<polygon points="35,5 65,25 50,60 20,60 5,25" stroke="#ff1a1a" strokeWidth="1.5" fill="none" opacity="0.3" />
					</svg>
				</div>

				<div className="philosophy-floater top-[55%] right-[20%]" style={{ animation: 'pulse 4s ease-in-out infinite' }}>
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
						<path d="M20 2 L38 20 L20 38 L2 20 Z" fill="#ff1a1a" opacity="0.2" />
						<circle cx="20" cy="20" r="6" fill="#ff1a1a" opacity="0.4" />
					</svg>
				</div>

				<div className="philosophy-floater top-[30%] right-[5%]" style={{ animation: 'float1 25s ease-in-out infinite 3s' }}>
					<div style={{ width: '45px', height: '45px', border: '2px solid #ff1a1a', borderRadius: '50%', opacity: 0.25, position: 'relative' }}>
						<div style={{ position: 'absolute', top: '50%', left: '50%', width: '15px', height: '15px', background: '#ff1a1a', borderRadius: '50%', transform: 'translate(-50%, -50%)', opacity: 0.4 }} />
					</div>
				</div>

				<div className="philosophy-floater top-[8%] left-[45%]" style={{ animation: 'float2 16s ease-in-out infinite 4s' }}>
					<svg width="55" height="55" viewBox="0 0 55 55" fill="none">
						<line x1="27.5" y1="5" x2="27.5" y2="50" stroke="#ff1a1a" strokeWidth="1.5" opacity="0.3" />
						<line x1="5" y1="27.5" x2="50" y2="27.5" stroke="#ff1a1a" strokeWidth="1.5" opacity="0.3" />
						<circle cx="27.5" cy="27.5" r="10" stroke="#ff1a1a" strokeWidth="2" fill="none" opacity="0.35" />
					</svg>
				</div>

				<div className="philosophy-floater top-[65%] left-[25%]" style={{ animation: 'float3 19s ease-in-out infinite 1.5s' }}>
					<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
						<path d="M24 4 L44 24 L24 44 L4 24 Z" stroke="#ff1a1a" strokeWidth="1.5" fill="none" opacity="0.3" />
						<path d="M24 12 L36 24 L24 36 L12 24 Z" stroke="#ff1a1a" strokeWidth="1" fill="#ff1a1a" opacity="0.15" />
					</svg>
				</div>

				<div className="philosophy-floater top-[40%] left-[35%]" style={{ animation: 'float1 21s ease-in-out infinite 5s' }}>
					<svg width="52" height="52" viewBox="0 0 52 52" fill="none">
						<circle cx="26" cy="26" r="20" stroke="#ff1a1a" strokeWidth="1.5" opacity="0.25" />
						<circle cx="26" cy="26" r="12" stroke="#ff1a1a" strokeWidth="1" opacity="0.35" />
						<circle cx="26" cy="26" r="4" fill="#ff1a1a" opacity="0.3" />
					</svg>
				</div>

				<div className="philosophy-floater top-[22%] left-[70%]" style={{ animation: 'float2 17s ease-in-out infinite 2.5s' }}>
					<svg width="42" height="42" viewBox="0 0 42 42" fill="none">
						<path d="M21 2 L39 21 L21 40 L3 21 Z" stroke="#ff1a1a" strokeWidth="1.5" fill="none" opacity="0.3" />
						<line x1="21" y1="8" x2="21" y2="34" stroke="#ff1a1a" strokeWidth="1" opacity="0.25" />
						<line x1="8" y1="21" x2="34" y2="21" stroke="#ff1a1a" strokeWidth="1" opacity="0.25" />
					</svg>
				</div>

				<div className="philosophy-floater top-[70%] right-[8%]" style={{ animation: 'pulse 5s ease-in-out infinite 1s' }}>
					<svg width="35" height="35" viewBox="0 0 35 35" fill="none">
						<rect x="2" y="2" width="31" height="31" stroke="#ff1a1a" strokeWidth="2" opacity="0.3" />
						<rect x="10" y="10" width="15" height="15" fill="#ff1a1a" opacity="0.2" />
					</svg>
				</div>

				<div className="philosophy-floater top-[50%] left-[60%]" style={{ animation: 'float3 23s ease-in-out infinite 3.5s' }}>
					<svg width="58" height="58" viewBox="0 0 58 58" fill="none">
						<polygon points="29,3 55,17 55,41 29,55 3,41 3,17" stroke="#ff1a1a" strokeWidth="1.5" fill="none" opacity="0.3" />
						<circle cx="29" cy="29" r="10" stroke="#ff1a1a" strokeWidth="1" opacity="0.25" />
					</svg>
				</div>

				<div className="philosophy-floater top-[35%] left-[12%]" style={{ animation: 'float1 20s ease-in-out infinite 4.5s' }}>
					<svg width="46" height="46" viewBox="0 0 46 46" fill="none">
						<circle cx="23" cy="23" r="18" stroke="#ff1a1a" strokeWidth="1.5" opacity="0.28" strokeDasharray="4 4" />
						<path d="M23 8 L38 23 L23 38 L8 23 Z" fill="#ff1a1a" opacity="0.18" />
					</svg>
				</div>

				<div className="philosophy-floater top-[5%] left-[55%]" style={{ animation: 'float2 24s ease-in-out infinite 6s' }}>
					<svg width="50" height="50" viewBox="0 0 50 50" fill="none">
						<path d="M25 5 L45 15 L45 35 L25 45 L5 35 L5 15 Z" stroke="#ff1a1a" strokeWidth="1.5" fill="none" opacity="0.3" />
						<circle cx="25" cy="25" r="7" fill="#ff1a1a" opacity="0.25" />
					</svg>
				</div>

				<div className="philosophy-floater top-[75%] right-[35%]" style={{ animation: 'pulse 6s ease-in-out infinite 2s' }}>
					<div style={{ width: '38px', height: '38px', border: '2px solid #ff1a1a', opacity: 0.3, position: 'relative', transform: 'rotate(45deg)' }}>
						<div style={{ position: 'absolute', top: '50%', left: '50%', width: '12px', height: '12px', background: '#ff1a1a', transform: 'translate(-50%, -50%)', opacity: 0.35 }} />
					</div>
				</div>

				<div className="philosophy-floater top-[38%] right-[28%]" style={{ animation: 'float3 18s ease-in-out infinite 2.8s' }}>
					<svg width="44" height="44" viewBox="0 0 44 44" fill="none">
						<circle cx="22" cy="22" r="16" stroke="#ff1a1a" strokeWidth="1.5" opacity="0.25" />
						<line x1="22" y1="6" x2="22" y2="38" stroke="#ff1a1a" strokeWidth="1" opacity="0.3" />
						<line x1="6" y1="22" x2="38" y2="22" stroke="#ff1a1a" strokeWidth="1" opacity="0.3" />
						<circle cx="22" cy="22" r="5" fill="#ff1a1a" opacity="0.3" />
					</svg>
				</div>

				<div className="relative max-w-6xl mx-auto px-6 py-8 md:py-12">
					<div className="grid md:grid-cols-[auto_1fr] gap-12 md:gap-20 items-start">
						<div className="flex items-center justify-center md:justify-start">
							<h2
								className="text-[#ff1a1a] text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] font-extrabold uppercase tracking-[0.15em] whitespace-nowrap philosophy-vertical-title"
								style={{
									writingMode: 'vertical-rl',
									textOrientation: 'mixed',
									textShadow: '0 0 28px rgba(255,26,26,0.6), 0 0 60px rgba(255,26,26,0.35)',
								}}
							>
								OUR PHILOSOPHY
							</h2>
						</div>

						<div className="space-y-6 mt-20 md:mt-24">
							{philosophyItems.map((item, idx) => (
								<div key={idx} className="space-y-4">
									<div
										className="philosophy-box relative border-2 border-[#ff1a1a]/60 bg-black/40 backdrop-blur-sm px-8 py-6 transition-all duration-300 cursor-pointer hover:border-[#ff1a1a] hover:bg-black/60 hover:shadow-[0_0_30px_rgba(255,26,26,0.3)]"
										style={{ animationDelay: `${idx * 120}ms` }}
										onClick={() => setSelectedPhilosophy(selectedPhilosophy === idx ? null : idx)}
									>
										<h3 className="text-xl sm:text-2xl font-bold text-white">{item.title}</h3>
									</div>

									{selectedPhilosophy === idx && (
										<div className="p-6 border border-[#ff1a1a]/40 bg-gradient-to-r from-black/50 to-black/30 backdrop-blur-xl rounded-sm shadow-[0_8px_32px_rgba(255,26,26,0.12)] animate-fadeInUp">
											<p className="text-white/90 text-base sm:text-lg leading-relaxed font-light tracking-wide">
												{item.description}
											</p>
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<MethodNeon />
			<ServicesNeon />
			<ContactNeon />

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
						onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
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
		</>
	)
}
