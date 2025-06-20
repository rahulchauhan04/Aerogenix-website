"use client";
import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion"
import { FaArrowRight, FaRocket, FaShieldAlt, FaChartLine, FaCode, FaPlay, FaEye, FaExpand } from "react-icons/fa"
import aeroInsightLogo from '../../assets/images/aeroInsightLogo.svg'
import aeroChaosLogo from '../../assets/images/aeroChaosLogo.png'
import aeroedgeLogo from '../../assets/images/aeroedge.jpg'

const agentApplications = [
  {
    id: 1,
    name: "AeroChaos™",
    tagline: "Resilience Engineering Agent",
    description: "Continuously test your application's fault tolerance. Simulate failures, measure blast radius, and validate SLA compliance — before going live.",
    useCase: "Chaos Engineering, Fault Injection, SLA Validation",
    deployIn: "Cloud or on-prem environments",
    ctaText: "Learn More",
    icon: aeroChaosLogo,
    gradient: "from-red-500 to-orange-500",
    bgGradient: "from-red-900/20 to-orange-900/20",
    accentColor: "red",
    neonColor: "#ff6b35",
    featured: true,
    stats: { accuracy: "99.9%", uptime: "24/7", tests: "10K+" }
  },
  {
    id: 2,
    name: "AeroEdge™",
    tagline: "Edge Intelligence Agent",
    description: "Deploy intelligence directly at the edge. Predict anomalies, take local action, and operate autonomously — even without internet connectivity.",
    useCase: "Predictive Maintenance, IoT Automation, Edge AI",
    deployIn: "Gateways, industrial PCs, embedded systems",
    ctaText: "Learn More",
    icon: aeroedgeLogo,
    gradient: "from-teal-500 to-cyan-500",
    bgGradient: "from-teal-900/20 to-cyan-900/20",
    accentColor: "teal",
    neonColor: "#00d9ff",
    featured: false,
    stats: { latency: "<1ms", devices: "1M+", efficiency: "85%" }
  },
  {
    id: 3,
    name: "AeroInsight™",
    tagline: "Digital & AI Maturity Assessment Engine",
    description: "Benchmark your organization's readiness for AI and automation. Identify gaps, define KPIs, and receive a roadmap aligned to your strategic goals.",
    useCase: "AI Transformation Planning, Executive Dashboards",
    deployIn: "Web, Intranet, or Platform Portal",
    ctaText: "Start Your Assessment",
    icon: aeroInsightLogo,
    gradient: "from-purple-500 to-indigo-500",
    bgGradient: "from-purple-900/20 to-indigo-900/20",
    accentColor: "purple",
    neonColor: "#8b5cf6",
    featured: false,
    stats: { insights: "500+", accuracy: "94%", time: "15min" }
  }
];

const AgentApplicationsSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  
  // Magnetic effect values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
        mouseX.set((x - rect.width / 2) / 20);
        mouseY.set((y - rect.height / 2) / 20);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);

  // Typewriter effect hook
  const useTypewriter = (text, speed = 50) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
      let index = 0;
      const timer = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          setIsComplete(true);
          clearInterval(timer);
        }
      }, speed);

      return () => clearInterval(timer);
    }, [text, speed]);

    return { displayedText, isComplete };
  };

  const { displayedText: mainTitle } = useTypewriter("Agent Applications Powered by AeroGenix", 30);
  const { displayedText: subtitle } = useTypewriter("Pre-Built Agents That Deliver Enterprise Value — From Day One", 25);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Liquid Background Animations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Morphing Blobs */}
        <motion.div
          className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
            borderRadius: ["50%", "30%", "60%", "40%", "50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-teal-400/20 to-cyan-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.4, 1.2],
            rotate: [360, 180, 0, 360],
            borderRadius: ["40%", "70%", "30%", "50%", "40%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/15 to-pink-600/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 0.8, 1],
            x: [-100, 100, -50, 0],
            y: [-50, 50, -100, 0],
            borderRadius: ["50%", "20%", "80%", "50%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Animated Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, #3b82f6 1px, transparent 1px),
              linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0 0', '60px 60px', '0 120px', '0 0'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating Particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header with Typewriter Effect */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Badge with Neon Effect */}
          <motion.div
            className="inline-flex items-center gap-3 bg-slate-800/80 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 mb-8"
            style={{
              boxShadow: isHovered ? '0 0 30px rgba(59, 130, 246, 0.4)' : '0 0 15px rgba(59, 130, 246, 0.2)'
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="w-3 h-3 bg-blue-500 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="text-sm font-semibold text-blue-300">
              Production-Ready Agent Applications
            </span>
          </motion.div>

          {/* Main Title with Typewriter */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            style={{
              background: 'linear-gradient(135deg, #60a5fa, #c084fc, #f472b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {mainTitle}
            <motion.span
              className="inline-block w-1 h-16 bg-blue-400 ml-2"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.h1>

          {/* Subtitle with Typewriter */}
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-medium mb-12 max-w-5xl mx-auto leading-relaxed"
          >
            {subtitle}
            <motion.span
              className="inline-block w-0.5 h-6 bg-gray-400 ml-1"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
            />
          </motion.p>

          {/* Description with Morphing Container */}
          <motion.div
            className="max-w-6xl mx-auto bg-slate-800/60 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 relative overflow-hidden"
            whileHover={{ 
              borderColor: 'rgba(59, 130, 246, 0.5)',
              boxShadow: '0 25px 50px rgba(59, 130, 246, 0.1)'
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10"
              animate={{
                background: [
                  'linear-gradient(0deg, rgba(59,130,246,0.1), rgba(168,85,247,0.1), rgba(6,182,212,0.1))',
                  'linear-gradient(120deg, rgba(168,85,247,0.1), rgba(6,182,212,0.1), rgba(59,130,246,0.1))',
                  'linear-gradient(240deg, rgba(6,182,212,0.1), rgba(59,130,246,0.1), rgba(168,85,247,0.1))',
                  'linear-gradient(360deg, rgba(59,130,246,0.1), rgba(168,85,247,0.1), rgba(6,182,212,0.1))',
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="relative z-10 text-center">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
                AeroGenix doesn't just help you build intelligent agents — it also offers{" "}
                <span className="font-bold text-blue-400 bg-blue-500/20 px-3 py-1 rounded-lg border border-blue-500/30">
                  domain-ready applications
                </span>{" "}
                designed to solve high-impact enterprise challenges.
              </p>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                These intelligent agents are built using the AeroGenix Platform and can be{" "}
                <span className="font-bold text-gray-200">deployed, customized, or extended</span> to fit your environment.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Section Intro */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Explore our growing library of production-ready agents:
          </h2>
        </motion.div>        {/* Morphing 3D Cards Grid */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Explore our growing library of{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                production-ready agents
              </span>
            </h2>
          </motion.div>

          {/* 3D Morphing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 perspective-1000">
            {agentApplications.map((agent, index) => (
              <motion.div
                key={agent.id}
                className="group relative h-full"
                initial={{ opacity: 0, rotateY: -90, z: -200 }}
                whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  className="relative bg-slate-800/90 backdrop-blur-xl rounded-3xl border border-slate-700/50 overflow-hidden h-full flex flex-col"
                  style={{
                    boxShadow: activeCard === index 
                      ? `0 25px 50px ${agent.neonColor}40, 0 0 0 1px ${agent.neonColor}30`
                      : '0 10px 30px rgba(0,0,0,0.5)'
                  }}
                  animate={{
                    rotateX: activeCard === index ? 5 : 0,
                    rotateY: activeCard === index ? 5 : 0,
                    scale: activeCard === index ? 1.05 : 1,
                    z: activeCard === index ? 50 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                  whileHover={{
                    rotateX: 5,
                    rotateY: 5,
                    scale: 1.05,
                    z: 50,
                  }}
                >
                  {/* Morphing Background */}
                  <motion.div
                    className={`absolute inset-0 opacity-20`}
                    style={{
                      background: `linear-gradient(135deg, ${agent.neonColor}20, transparent)`,
                    }}
                    animate={{
                      background: activeCard === index ? [
                        `linear-gradient(135deg, ${agent.neonColor}20, transparent)`,
                        `linear-gradient(225deg, ${agent.neonColor}30, ${agent.neonColor}10)`,
                        `linear-gradient(315deg, ${agent.neonColor}25, transparent)`,
                        `linear-gradient(45deg, ${agent.neonColor}20, transparent)`,
                      ] : `linear-gradient(135deg, ${agent.neonColor}20, transparent)`,
                    }}
                    transition={{ duration: 2, repeat: activeCard === index ? Infinity : 0 }}
                  />

                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: activeCard === index 
                        ? `linear-gradient(45deg, ${agent.neonColor}, transparent, ${agent.neonColor})`
                        : 'transparent',
                      padding: '2px',
                    }}
                    animate={{
                      background: activeCard === index ? [
                        `linear-gradient(0deg, ${agent.neonColor}, transparent, ${agent.neonColor})`,
                        `linear-gradient(90deg, ${agent.neonColor}, transparent, ${agent.neonColor})`,
                        `linear-gradient(180deg, ${agent.neonColor}, transparent, ${agent.neonColor})`,
                        `linear-gradient(270deg, ${agent.neonColor}, transparent, ${agent.neonColor})`,
                        `linear-gradient(360deg, ${agent.neonColor}, transparent, ${agent.neonColor})`,
                      ] : 'transparent',
                    }}
                    transition={{ duration: 3, repeat: activeCard === index ? Infinity : 0 }}
                  >
                    <div className="w-full h-full bg-slate-800/90 rounded-3xl" />
                  </motion.div>

                  <div className="relative z-10 p-8 flex flex-col h-full">
                    {/* Header with Floating Icon */}
                    <div className="flex items-start gap-6 mb-8">
                      <motion.div
                        className="relative"
                        animate={{
                          y: activeCard === index ? [-5, 5, -5] : 0,
                          rotate: activeCard === index ? [0, 5, -5, 0] : 0,
                        }}
                        transition={{
                          duration: 3,
                          repeat: activeCard === index ? Infinity : 0,
                          ease: "easeInOut"
                        }}
                      >
                        <motion.div
                          className="w-16 h-16 rounded-2xl p-3 shadow-2xl flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${agent.neonColor}, ${agent.neonColor}80)`,
                            boxShadow: activeCard === index 
                              ? `0 0 30px ${agent.neonColor}60, 0 0 60px ${agent.neonColor}30`
                              : `0 0 15px ${agent.neonColor}40`,
                          }}
                          whileHover={{ 
                            rotate: 15, 
                            scale: 1.1,
                            boxShadow: `0 0 40px ${agent.neonColor}80, 0 0 80px ${agent.neonColor}40`,
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {typeof agent.icon === 'string' ? (
                            <img 
                              src={agent.icon} 
                              alt={agent.name}
                              className="w-full h-full object-contain filter brightness-0 invert"
                            />
                          ) : (
                            agent.icon
                          )}
                        </motion.div>
                        
                        {/* Orbiting Particles */}
                        {activeCard === index && (
                          <>
                            {Array.from({ length: 3 }).map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-2 h-2 rounded-full"
                                style={{ backgroundColor: agent.neonColor }}
                                animate={{
                                  rotate: [0, 360],
                                  scale: [0.5, 1, 0.5],
                                }}
                                transition={{
                                  duration: 2 + i,
                                  repeat: Infinity,
                                  ease: "linear",
                                  delay: i * 0.3,
                                }}
                                style={{
                                  left: '50%',
                                  top: '50%',
                                  transformOrigin: `${20 + i * 5}px center`,
                                }}
                              />
                            ))}
                          </>
                        )}
                      </motion.div>
                      
                      <div className="flex-1">
                        <motion.h3 
                          className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight"
                          animate={{
                            color: activeCard === index ? agent.neonColor : '#ffffff',
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {agent.name}
                        </motion.h3>
                        <motion.p 
                          className="text-sm font-semibold"
                          style={{ color: agent.neonColor }}
                          animate={{
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: activeCard === index ? Infinity : 0,
                            ease: "easeInOut"
                          }}
                        >
                          {agent.tagline}
                        </motion.p>
                      </div>
                    </div>

                    {/* Description with Reveal Animation */}
                    <motion.p 
                      className="text-gray-300 text-lg leading-relaxed mb-8 flex-grow"
                      animate={{
                        color: activeCard === index ? '#e2e8f0' : '#cbd5e1',
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {agent.description}
                    </motion.p>

                    {/* Stats with Animated Counters */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {Object.entries(agent.stats).map(([key, value], i) => (
                        <motion.div
                          key={key}
                          className="text-center p-3 rounded-xl bg-slate-700/50 border border-slate-600/50"
                          style={{
                            borderColor: activeCard === index ? `${agent.neonColor}30` : 'rgba(71, 85, 105, 0.5)',
                            backgroundColor: activeCard === index ? `${agent.neonColor}10` : 'rgba(51, 65, 85, 0.5)',
                          }}
                          animate={{
                            scale: activeCard === index ? [1, 1.05, 1] : 1,
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: activeCard === index ? Infinity : 0,
                            delay: i * 0.2,
                          }}
                        >
                          <motion.div 
                            className="text-xl font-bold"
                            style={{ color: agent.neonColor }}
                            animate={{
                              textShadow: activeCard === index 
                                ? `0 0 10px ${agent.neonColor}60`
                                : 'none',
                            }}
                          >
                            {value}
                          </motion.div>
                          <div className="text-xs text-gray-400 capitalize">{key}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Use Case and Deploy Info */}
                    <div className="space-y-4 mb-8">
                      <motion.div 
                        className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-4 border border-slate-600/50"
                        style={{
                          borderColor: activeCard === index ? `${agent.neonColor}30` : 'rgba(71, 85, 105, 0.5)',
                          backgroundColor: activeCard === index ? `${agent.neonColor}10` : 'rgba(51, 65, 85, 0.5)',
                        }}
                      >
                        <p className="text-sm text-gray-300">
                          <span className="font-semibold text-white">Use Case:</span> {agent.useCase}
                        </p>
                      </motion.div>
                      <motion.div 
                        className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-4 border border-slate-600/50"
                        style={{
                          borderColor: activeCard === index ? `${agent.neonColor}30` : 'rgba(71, 85, 105, 0.5)',
                          backgroundColor: activeCard === index ? `${agent.neonColor}10` : 'rgba(51, 65, 85, 0.5)',
                        }}
                      >
                        <p className="text-sm text-gray-300">
                          <span className="font-semibold text-white">Deploy in:</span> {agent.deployIn}
                        </p>
                      </motion.div>
                    </div>

                    {/* CTA Button with Magnetic Effect */}
                    <motion.button
                      className="group/btn relative w-full font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${agent.neonColor}, ${agent.neonColor}80)`,
                        boxShadow: activeCard === index 
                          ? `0 0 30px ${agent.neonColor}50, 0 10px 20px rgba(0,0,0,0.3)`
                          : `0 0 15px ${agent.neonColor}30, 0 5px 15px rgba(0,0,0,0.2)`,
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: `0 0 40px ${agent.neonColor}70, 0 15px 30px rgba(0,0,0,0.4)`,
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Animated Background */}
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(45deg, transparent, ${agent.neonColor}40, transparent)`,
                        }}
                        animate={{
                          x: activeCard === index ? [-200, 200] : -200,
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: activeCard === index ? Infinity : 0,
                          ease: "linear"
                        }}
                      />
                      
                      <span className="relative z-10 text-white font-bold">
                        {agent.ctaText}
                      </span>
                      <motion.div
                        className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1"
                        animate={{
                          x: activeCard === index ? [0, 5, 0] : 0,
                        }}
                        transition={{
                          duration: 2,
                          repeat: activeCard === index ? Infinity : 0,
                        }}
                      >
                        <FaArrowRight className="text-white" />
                      </motion.div>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}          </div>
        </motion.div>

        {/* Get Started with AeroGenix Section */}
        <motion.div
          className="mt-32 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              Get Started with AeroGenix
            </motion.h2>
            <motion.p 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300 mb-8"
              animate={{
                color: ['#d1d5db', '#f3f4f6', '#d1d5db'],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Build Your First Agent. Or Build the Future with Us.
            </motion.p>
          </motion.div>

          {/* Main Content Card */}
          <motion.div
            className="max-w-6xl mx-auto bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-slate-700/50 relative overflow-hidden"
            whileHover={{ 
              borderColor: 'rgba(59, 130, 246, 0.6)',
              boxShadow: '0 25px 50px rgba(59, 130, 246, 0.2)'
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Background Gradient */}
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                background: 'linear-gradient(45deg, rgba(59,130,246,0.1), rgba(168,85,247,0.1), rgba(244,114,182,0.1))',
              }}
              animate={{
                background: [
                  'linear-gradient(45deg, rgba(59,130,246,0.1), rgba(168,85,247,0.1), rgba(244,114,182,0.1))',
                  'linear-gradient(135deg, rgba(168,85,247,0.1), rgba(244,114,182,0.1), rgba(59,130,246,0.1))',
                  'linear-gradient(225deg, rgba(244,114,182,0.1), rgba(59,130,246,0.1), rgba(168,85,247,0.1))',
                  'linear-gradient(315deg, rgba(59,130,246,0.1), rgba(168,85,247,0.1), rgba(244,114,182,0.1))',
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            {/* Floating Particles for this section */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={`get-started-particle-${i}`}
                className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  x: [-15, 15, -15],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.5, 1.2, 0.5],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
            
            <div className="relative z-10 text-center">
              {/* Main Description */}
              <motion.p 
                className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-12 max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Whether you're ready to launch your first intelligent agent or looking to embed agentic AI across your enterprise — AeroGenix gives you the{" "}
                <span className="font-bold text-blue-400 bg-blue-500/20 px-3 py-1 rounded-lg border border-blue-500/30">
                  foundation and flexibility
                </span>{" "}
                to scale with confidence.
              </motion.p>

              {/* Secondary Description */}
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed mb-16 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                You can start by designing, testing, or deploying agents using our core platform — or partner with our team to{" "}
                <span className="font-bold text-gray-200">co-create a solution tailored</span> to your industry, use case, or infrastructure.
              </motion.p>

              {/* Call-to-Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {/* Primary CTA */}
                <motion.button
                  className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-8 rounded-xl overflow-hidden transition-all duration-300 flex items-center gap-3 shadow-2xl"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative z-10 text-lg">Start Building with AeroGenix</span>
                  <motion.div
                    className="relative z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaArrowRight className="text-white" />
                  </motion.div>
                </motion.button>

                {/* Secondary CTA */}
                <motion.button
                  className="group relative bg-transparent border-2 border-gray-400 text-gray-300 font-bold py-4 px-8 rounded-xl overflow-hidden transition-all duration-300 flex items-center gap-3 hover:border-blue-400 hover:text-blue-400"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: 'rgba(59, 130, 246, 0.8)',
                    color: '#60a5fa'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 text-lg">Co-Create with Us</span>
                  <motion.div
                    className="relative z-10"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <FaRocket className="text-current" />
                  </motion.div>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AgentApplicationsSection
