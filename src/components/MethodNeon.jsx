import { motion } from "framer-motion";
import { Lightbulb, Clipboard, Wrench, Hammer, Truck, ArrowRight } from "lucide-react";

export function MethodNeon() {
  const steps = [
    { 
      number: "01", 
      label: "Research", 
      icon: Lightbulb, 
      x: 80, 
      y: 200,
      description: "In-depth analysis and discovery"
    },
    { 
      number: "02", 
      label: "Strategy", 
      icon: Clipboard, 
      x: 280, 
      y: 150,
      description: "Planning and roadmap"
    },
    { 
      number: "03", 
      label: "Design", 
      icon: Wrench, 
      x: 500, 
      y: 250,
      description: "Creative & UX design"
    },
    { 
      number: "04", 
      label: "Development", 
      icon: Hammer, 
      x: 720, 
      y: 180,
      description: "Build & implementation"
    },
    { 
      number: "05", 
      label: "Delivery", 
      icon: Truck, 
      x: 920, 
      y: 220,
      description: "Launch & optimization"
    },
  ];

  // Create curved paths between steps
  const createPath = (x1, y1, x2, y2) => {
    const midX = (x1 + x2) / 2;
    const midY = Math.min(y1, y2) - 100;
    return `M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`;
  };

  const paths = [
    createPath(steps[0].x, steps[0].y, steps[1].x, steps[1].y),
    createPath(steps[1].x, steps[1].y, steps[2].x, steps[2].y),
    createPath(steps[2].x, steps[2].y, steps[3].x, steps[3].y),
    createPath(steps[3].x, steps[3].y, steps[4].x, steps[4].y),
  ];

  return (
    <section id="method" className="relative min-h-screen bg-black text-white overflow-hidden py-32">
      {/* Premium animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-red-500/5 via-red-500/0 to-transparent rounded-full blur-3xl"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-red-600/3 via-red-600/0 to-transparent rounded-full blur-3xl"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <div className="flex items-end gap-6 mb-8">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-[#ff1a1a]" style={{textShadow: '0 0 28px rgba(255,26,26,0.6), 0 0 60px rgba(255,26,26,0.35)'}}>
              BYTE<br/>METHOD
            </h2>
            <motion.div
              className="h-px bg-gradient-to-r from-red-500 to-transparent flex-1 mb-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            />
          </div>
          <p className="text-lg text-gray-400 max-w-2xl font-light tracking-wide">
            Our systematic approach to digital transformation, from concept to launch
          </p>
        </motion.div>

        {/* Interactive Map Container */}
        <motion.div
          className="relative rounded-3xl border border-red-500/30 bg-gradient-to-b from-red-500/5 via-black to-black p-12 mb-16 overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          {/* Grid background with animation */}
          <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
            <svg width="100%" height="100%" className="w-full h-full">
              <defs>
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#ff1a1a" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Top gradient line */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: false }}
          />

          {/* SVG Map */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1000 450"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Path gradient */}
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,26,26,0)" />
                <stop offset="10%" stopColor="#ff1a1a" />
                <stop offset="90%" stopColor="#ff1a1a" />
                <stop offset="100%" stopColor="rgba(255,26,26,0)" />
              </linearGradient>

              {/* Glow filter */}
              <filter id="redGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Shadow filter */}
              <filter id="shadow">
                <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.3" />
              </filter>
            </defs>

            {/* Animated paths with glow */}
            {paths.map((path, idx) => (
              <g key={`path-group-${idx}`}>
                {/* Background glow path */}
                <motion.path
                  d={path}
                  fill="none"
                  stroke="#ff1a1a"
                  strokeWidth="4"
                  opacity="0.1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 1, 0] }}
                  transition={{
                    duration: 2,
                    delay: idx * 0.25,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />
                
                {/* Main path */}
                <motion.path
                  d={path}
                  fill="none"
                  stroke="url(#pathGradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  filter="url(#redGlow)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 1, 0] }}
                  transition={{
                    duration: 2,
                    delay: idx * 0.25,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />
              </g>
            ))}

            {/* Step nodes */}
            {steps.map((step, idx) => (
              <g key={`step-${idx}`} className="group">
                {/* Outer pulsing circle */}
                <circle
                  cx={step.x}
                  cy={step.y}
                  r="45"
                  fill="none"
                  stroke="rgba(255,26,26,0.3)"
                  strokeWidth="1"
                />

                {/* Static outer circle */}
                <circle
                  cx={step.x}
                  cy={step.y}
                  r="40"
                  fill="none"
                  stroke="#ff1a1a"
                  strokeWidth="2"
                  filter="url(#redGlow)"
                />

                {/* Inner circle background */}
                <circle
                  cx={step.x}
                  cy={step.y}
                  r="32"
                  fill="#0a0a0a"
                  stroke="#ff1a1a"
                  strokeWidth="2"
                />

                {/* Step number */}
                <text
                  x={step.x}
                  y={step.y - 8}
                  textAnchor="middle"
                  className="font-bold text-sm"
                  fontSize="20"
                  fill="#ff1a1a"
                >
                  {step.number}
                </text>

                {/* Label below */}
                <text
                  x={step.x}
                  y={step.y + 65}
                  textAnchor="middle"
                  className="font-semibold"
                  fontSize="15"
                  fill="white"
                  fontWeight="600"
                >
                  {step.label}
                </text>

                {/* Description below label */}
                <text
                  x={step.x}
                  y={step.y + 82}
                  textAnchor="middle"
                  className="font-light"
                  fontSize="12"
                  fill="#888"
                >
                  {step.description}
                </text>
              </g>
            ))}
          </svg>

          {/* Content space */}
          <div className="relative z-10 h-96" />
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="flex justify-end mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <motion.button
            className="group relative px-10 py-4 font-bold text-white border-2 border-red-500 rounded-xl overflow-hidden transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,26,26,0.6)" }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/5 group-hover:from-red-600/40 group-hover:to-red-500/20 transition-all duration-300" />
            
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10"
              animate={{
                x: ["−100%", "100%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />

            {/* Content */}
            <span className="relative flex items-center gap-3">
              Explore Our Full Method
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
