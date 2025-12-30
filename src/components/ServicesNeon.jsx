import { motion } from "framer-motion";
import { Globe, Palette, Share2, Video, Settings, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function ServicesNeon() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: Globe,
      title: "Website Creation",
      description: "Modern, fast & powerful websites",
      features: ["Responsive Design", "SEO Optimized", "High Performance"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Palette,
      title: "Branding & Design",
      description: "Logo, identity & visuals",
      features: ["Brand Strategy", "Logo Design", "Visual Identity"],
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "We manage your social presence",
      features: ["Content Planning", "Community Management", "Analytics"],
      color: "from-orange-600 to-red-600"
    },
    {
      icon: Video,
      title: "Video & Content Creation",
      description: "Visual & written content",
      features: ["Cinematic Videos", "Copywriting", "Motion Graphics"],
      color: "from-green-600 to-teal-600"
    },
    {
      icon: Settings,
      title: "Website Management",
      description: "We maintain & optimize your site",
      features: ["24/7 Support", "Regular Updates", "Performance Monitoring"],
      color: "from-yellow-600 to-orange-600"
    },
  ];

  return (
    <section id="services" className="relative min-h-screen bg-black text-white overflow-hidden py-32">
      {/* Premium animated background with multiple layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orbiting circles background */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-red-500/5 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-red-500/10 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        />

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-b from-red-500/8 via-red-500/0 to-transparent rounded-full blur-3xl"
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-t from-red-600/6 via-red-600/0 to-transparent rounded-full blur-3xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 1,
          }}
        />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Grid lines background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 26, 26, 0.3) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 26, 26, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }} />

      {/* Neon lines decoration - using fixed viewBox for responsive paths */}
      <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 26, 26, 0.6))' }} preserveAspectRatio="none" viewBox="0 0 1200 800">
        {/* Top left corner line */}
        <motion.path
          d="M 0 350 L 130 350"
          stroke="#ff1a1a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: false }}
        />
        <motion.path
          d="M 130 350 L 130 300 L 430 300"
          stroke="#ff1a1a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
          viewport={{ once: false }}
        />

        {/* Top right corner line */}
        <motion.path
          d="M 1200 350 L 1070 350"
          stroke="#ff1a1a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: false }}
        />
        <motion.path
          d="M 1070 350 L 1070 300 L 770 300"
          stroke="#ff1a1a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
          viewport={{ once: false }}
        />

        {/* Bottom connections */}
        <motion.path
          d="M 0 400 L 620 400"
          stroke="#ff1a1a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.8, delay: 0.5, ease: "easeInOut" }}
          viewport={{ once: false }}
        />
        <motion.path
          d="M 1200 600 L 970 600"
          stroke="#ff1a1a"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.8, delay: 0.5, ease: "easeInOut" }}
          viewport={{ once: false }}
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section with premium styling */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <h2 
            className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-[#ff1a1a] leading-none" 
            style={{
              textShadow: '0 0 30px rgba(255,26,26,0.7), 0 0 60px rgba(255,26,26,0.4), 0 0 90px rgba(255,26,26,0.2)'
            }}
          >
            OUR SERVICES
          </h2>
          <motion.p 
            className="text-2xl md:text-3xl font-bold text-white/90 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            What We Do Best
          </motion.p>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-red-600 via-red-500 to-transparent mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                viewport={{ once: false, margin: "-50px" }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                {/* Glow effect on hover */}
                <motion.div 
                  className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-red-500 to-transparent rounded-2xl opacity-0 blur-xl group-hover:opacity-30 transition-all duration-500 -z-10"
                  animate={hoveredIndex === index ? { opacity: 0.3 } : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Main card */}
                <div className="relative h-full bg-gradient-to-br from-zinc-900/60 via-zinc-950/80 to-black/95 rounded-2xl p-8 border border-zinc-800/60 overflow-hidden backdrop-blur-xl group-hover:border-red-500/60 transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,26,26,0.25)]">
                  
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-red-500/0 to-transparent" />
                  </div>

                  {/* Corner decorations */}
                  <motion.div 
                    className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-red-500/40 rounded-tr-2xl"
                    animate={hoveredIndex === index ? { 
                      borderColor: 'rgba(255, 26, 26, 0.8)',
                      w: '24',
                      h: '24'
                    } : {}}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-red-500/40 rounded-bl-2xl"
                    animate={hoveredIndex === index ? { 
                      borderColor: 'rgba(255, 26, 26, 0.8)',
                      w: '24',
                      h: '24'
                    } : {}}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Icon container with advanced effects */}
                  <div className="relative mb-8">
                    <motion.div 
                      className="relative w-24 h-24 rounded-2xl flex items-center justify-center overflow-hidden"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Rotating border */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        style={{
                          background: `conic-gradient(from 0deg, rgba(255,26,26,0.6), rgba(255,26,26,0.2), transparent)`
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      />
                      
                      {/* Icon background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl" />
                      
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                      
                      {/* Icon */}
                      <Icon className="w-12 h-12 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative space-y-4">
                    <h3 className="text-2xl font-black text-white group-hover:text-red-100 transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    
                    {/* Animated underline */}
                    <motion.div 
                      className="h-1 bg-gradient-to-r from-red-500 via-red-400 to-transparent rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      animate={hoveredIndex === index ? { width: '100%' } : { width: '60%' }}
                      transition={{ duration: 0.4 }}
                    />
                    
                    <p className="text-white/70 text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300 font-medium">
                      {service.description}
                    </p>

                    {/* Features list - appears on hover */}
                    <motion.div
                      className="space-y-2 pt-4 border-t border-white/10"
                      initial={{ opacity: 0, height: 0 }}
                      animate={hoveredIndex === index ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.features.map((feature, fIdx) => (
                        <motion.div
                          key={fIdx}
                          className="flex items-center gap-2 text-white/80 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          animate={hoveredIndex === index ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: fIdx * 0.05 }}
                        >
                          <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.button
                      className="w-full mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold hover:from-red-500 hover:to-red-600 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                      initial={{ opacity: 0, y: 20 }}
                      animate={hoveredIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                    >
                      Learn More
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </motion.button>
                  </div>

                  {/* Animated scan line effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none rounded-2xl overflow-hidden"
                  >
                    <motion.div
                      className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={hoveredIndex === index ? { y: ['-100%', '100%'] } : {}}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
