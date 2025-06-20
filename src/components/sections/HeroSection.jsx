"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaRocket, FaPlay, FaArrowRight, FaCheck, FaBrain, FaCogs } from "react-icons/fa"

// Particle/Pattern backgrounds (optional, keep or remove)
import FloatingParticles from "../ui/FloatingParticles"
import GeometricPattern from "../ui/GeometricPattern"

// Logos (replace with your actual imports)
import studioLogo from "../../assets/images/ai.png"
import runtimeLogo from "../../assets/images/runtime_logo.svg"
import gptLogo from "../../assets/images/hexagon.png"
import controlCenterLogo from "../../assets/images/control_logo.svg"
import aeroInsightLogo from "../../assets/images/aeroInsightLogo.svg"
import aeroChaosLogo from "../../assets/images/aeroChaosLogo.png"
import aeroedgeLogo from "../../assets/images/aeroedge.jpg"
import heroImage from '../../assets/images/herobg9.png'
 

const platformCards = [
  {
    name: "AeroGenix Studio",
    icon: studioLogo,
    color: "from-blue-500 to-blue-700",
    desc: "Low-code agent designer",
  },
  {
    name: "AeroGenix Runtime",
    icon: runtimeLogo,
    color: "from-emerald-500 to-emerald-700",
    desc: "Real-time agent execution",
  },
  {
    name: "AeroGenix GPT",
    icon: gptLogo,
    color: "from-purple-500 to-purple-700",
    desc: "Contextual AI reasoning",
  },
  {
    name: "AeroGenix Control Center",
    icon: controlCenterLogo,
    color: "from-orange-500 to-orange-700",
    desc: "Enterprise governance",
  },
]

const applicationCards = [
  {
    name: "AeroChaos",
    icon: aeroChaosLogo,
    color: "from-red-500 to-red-600",
    desc: "Chaos engineering agent",
  },
  {
    name: "AeroEdge",
    icon: aeroedgeLogo,
    color: "from-teal-500 to-teal-600",
    desc: "Edge deployment agent",
  },
  {
    name: "AeroInsight",
    icon: aeroInsightLogo,
    color: "from-amber-500 to-amber-600",
    desc: "AI maturity evaluation",
  },
  {
    name: "Your Own Agents",
    icon: FaCogs,
    color: "from-slate-500 to-slate-600",
    desc: "Build custom agents",
  },
]

const benefitTags = [
  "Enterprise Ready",
  "99.9% Uptime",
  "SOC 2 Compliant",
  "Deploy on Cloud, Edge, On-Prem",
  "Unified Data Flow",
]

export default function HeroSection() {
  // For hover/focus effects on diagram cards (for a11y)
  const [hovered, setHovered] = useState(null)

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/50 overflow-hidden flex flex-col">
      {/* Background visuals */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* <FloatingParticles count={28} />
        <GeometricPattern /> */}
        <img src={heroImage} alt="Background" className="w-full h-full object-cover opacity-100" />
      </div>
      {/* === HERO CONTENT === */}
      <div className="relative z-10 container mx-auto px-6 pt-28 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* ====== LEFT COPY ====== */}
        <div className="space-y-7 max-w-2xl">
          <motion.div
            className="inline-flex items-center px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            The Future of Enterprise Intelligence Starts Here
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.7 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-900 bg-clip-text text-transparent">
              AeroGenix™
            </span>
            <div className="flex flex-wrap gap-x-2 mt-1">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Design.
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Deploy.
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Evolve.
              </span>
            </div>
            <span className="block text-slate-700 font-semibold mt-2">Your Foundation for Agentic AI.</span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg text-slate-700 font-semibold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.29, duration: 0.5 }}
          >
            AeroGenix is not just a platform. It’s the enterprise operating system for intelligent agents — built to
            help your business automate, reason, adapt, and scale.
          </motion.p>
          <motion.p
            className="text-base text-slate-600 max-w-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.5 }}
          >
            From copilots to edge agents, from resilience engines to maturity maps, AeroGenix powers the shift from
            traditional automation to autonomous, learning systems that align with your goals — and evolve with your
            enterprise.
            <br />
            <span className="text-blue-600 font-semibold block mt-1">
              AeroGenix powers your entire intelligent agent lifecycle — from design to deployment, from reasoning to
              resilience.
            </span>
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <button className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group text-base focus:outline-none focus:ring-2 focus:ring-blue-500">
              <FaRocket className="mr-2 text-sm group-hover:animate-bounce" />
              Try AeroGenix Platform
              <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-700 font-semibold rounded-lg border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-400">
              <FaPlay className="mr-2 text-sm" />
              Book a Demo &rarr; Build Your First Agent
            </button>
          </motion.div>
          {/* Benefit Tags */}
          <motion.div
            className="flex flex-wrap items-center gap-3 text-sm text-slate-500 mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {benefitTags.map((tag) => (
              <div
                key={tag}
                className="flex items-center bg-blue-50 rounded-full px-3 py-1 mr-2 mb-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <FaCheck className="text-green-500 mr-2" />
                {tag}
              </div>
            ))}
          </motion.div>
        </div>
        {/* ====== DYNAMIC ARCHITECTURE ANIMATION ====== */}
        <motion.div
          className="relative flex items-center justify-center h-[600px] min-w-[500px] w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.23, duration: 0.8 }}
        >
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" className="absolute inset-0">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3B82F6" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Platform Layer - Top */}
          <motion.div
            className="absolute top-8 left-1/2 -translate-x-1/2 z-20"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="flex items-center gap-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-blue-100">
              <div className="text-center">
                <div className="text-sm font-semibold text-blue-600 mb-2">Platform Layer</div>
                <div className="flex gap-3">                  {platformCards.map((card, i) => (
                    <motion.div
                      key={card.name}
                      className="relative w-16 h-16 bg-white/90 backdrop-blur-sm border-2 border-blue-200 rounded-xl flex items-center justify-center cursor-pointer group shadow-md hover:shadow-lg transition-all duration-300"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.7 + i * 0.1, duration: 0.6, type: "spring" }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      onHoverStart={() => setHovered(`platform${i}`)}
                      onHoverEnd={() => setHovered(null)}
                    >
                      <img src={card.icon || "/placeholder.svg"} alt={card.name} className="w-10 h-10 object-contain" />

                      {/* Tooltip */}
                      <AnimatePresence>
                        {hovered === `platform${i}` && (
                          <motion.div
                            className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-30"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                          >
                            <div className="font-semibold">{card.name}</div>
                            <div className="text-slate-300">{card.desc}</div>
                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Data particles emanating */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        animate={{
                          boxShadow: [
                            "0 0 0 0 rgba(59, 130, 246, 0.4)",
                            "0 0 0 10px rgba(59, 130, 246, 0)",
                            "0 0 0 0 rgba(59, 130, 246, 0)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.5 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Data Flow Particles - Platform to Copilot */}
          <motion.div className="absolute top-24 left-1/2 -translate-x-1/2 z-10">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`flow-down-${i}`}
                className="absolute w-2 h-2 bg-blue-400 rounded-full"
                style={{ left: `${-60 + i * 24}px` }}
                animate={{
                  y: [0, 180],
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>

          {/* Central Processing Hub - Enhanced */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
            style={{ width: 280, height: 280 }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {/* Outer Rotating Ring */}
            <motion.div
              className="absolute w-full h-full rounded-full border-4 border-gradient-to-r from-blue-400 to-purple-400 opacity-30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            {/* Middle Pulsing Ring */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border-2 border-blue-300"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />

            {/* Core Processing Unit */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 rounded-full flex flex-col items-center justify-center shadow-2xl overflow-hidden"
              animate={{
                boxShadow: [
                  "0 0 40px 8px rgba(59, 130, 246, 0.3)",
                  "0 0 60px 12px rgba(168, 85, 247, 0.4)",
                  "0 0 40px 8px rgba(59, 130, 246, 0.3)",
                ],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            >
              {/* Neural Network Background */}
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%">
                  {[...Array(8)].map((_, i) => (
                    <motion.circle
                      key={i}
                      cx={`${20 + (i % 3) * 30}%`}
                      cy={`${20 + Math.floor(i / 3) * 25}%`}
                      r="2"
                      fill="white"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                    />
                  ))}
                  {[...Array(12)].map((_, i) => (
                    <motion.line
                      key={`line-${i}`}
                      x1={`${20 + (i % 3) * 30}%`}
                      y1={`${20 + Math.floor(i / 3) * 25}%`}
                      x2={`${20 + ((i + 1) % 3) * 30}%`}
                      y2={`${20 + Math.floor((i + 1) / 3) * 25}%`}
                      stroke="white"
                      strokeWidth="1"
                      animate={{ opacity: [0.1, 0.5, 0.1] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: i * 0.1 }}
                    />
                  ))}
                </svg>
              </div>

              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <FaBrain className="text-white text-4xl mb-2" />
              </motion.div>
              <span className="text-white text-xl font-bold drop-shadow-lg">AeroGenix</span>
              <span className="text-blue-100 text-sm font-semibold">Engine</span>

              {/* Processing Indicator */}
              <motion.div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{ scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Orbiting Data Points */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`orbit-${i}`}
                className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                  transformOrigin: "0 0",
                }}
                animate={{
                  rotate: 360,
                  x: Math.cos((i * Math.PI) / 2) * 120,
                  y: Math.sin((i * Math.PI) / 2) * 120,
                }}
                transition={{
                  duration: 6 + i,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            ))}
          </motion.div>

          {/* Data Flow Particles - Copilot to Applications */}
          <motion.div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`flow-out-${i}`}
                className="absolute w-2 h-2 bg-purple-400 rounded-full"
                style={{ left: `${-80 + i * 20}px` }}
                animate={{
                  y: [0, 120],
                  x: [(i - 4) * 5, (i - 4) * 15],
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1, 1, 0.5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.div>

          {/* Application Layer - Bottom */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="flex items-center gap-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-purple-100">
              <div className="text-center">
                <div className="text-sm font-semibold text-purple-600 mb-2">Application Layer</div>
                <div className="flex gap-3">                  {applicationCards.map((card, i) => (
                    <motion.div
                      key={card.name}
                      className="relative w-16 h-16 bg-white/90 backdrop-blur-sm border-2 border-purple-200 rounded-xl flex items-center justify-center cursor-pointer group shadow-md hover:shadow-lg transition-all duration-300"
                      initial={{ scale: 0, rotate: 180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 1.4 + i * 0.1, duration: 0.6, type: "spring" }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      onHoverStart={() => setHovered(`app${i}`)}
                      onHoverEnd={() => setHovered(null)}
                    >
                      {typeof card.icon === "string" ? (
                        <img src={card.icon || "/placeholder.svg"} alt={card.name} className="w-10 h-10 object-contain" />
                      ) : (
                        <card.icon className="text-slate-600 text-2xl" />
                      )}

                      {/* Tooltip */}
                      <AnimatePresence>
                        {hovered === `app${i}` && (
                          <motion.div
                            className="absolute -top-16 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-30"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                          >
                            <div className="font-semibold">{card.name}</div>
                            <div className="text-slate-300">{card.desc}</div>
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Receiving data indicator */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full"
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 2 + i * 0.3 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Side Information Panels */}
          <motion.div
            className="absolute right-[72%] top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-blue-100 max-w-[200px]"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <div className="text-xs font-semibold text-blue-600 mb-2">Data Input</div>
            <div className="text-xs text-slate-600">
              • Enterprise Data <br />
              • User Interactions <br />
              • System Events <br />
              • External APIs
            </div>
          </motion.div>

          <motion.div
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-purple-100 max-w-[200px]"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <div className="text-xs font-semibold text-purple-600 mb-2">Intelligent Output</div>
            <div className="text-xs text-slate-600">
              • Automated Actions <br />
              • Insights & Analytics <br />
              • Recommendations <br />
              • System Optimization
            </div>
          </motion.div>

          {/* Performance Metrics */}
          {/* <motion.div
            className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-2 rounded-lg text-xs font-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <motion.div
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              ⚡ 99.9% Uptime
            </motion.div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  )
}
