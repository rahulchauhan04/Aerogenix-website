"use client"
import React, { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { 
  FaPlay, 
  FaCode, 
  FaDesktop, 
  FaHandshake, 
  FaRocket, 
  FaBrain,
  FaCogs,
  FaShieldAlt,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaUsers,
  FaComments,
  FaLightbulb,
  FaPlus,
  FaEquals,
  FaChevronDown,
  FaBuilding,
  FaGlobe,
  FaCrown,
  FaBook,
  FaCalendar,
  FaChartLine
} from "react-icons/fa"
import studioLogo from '../../assets/images/ai.png';
import runtimeLogo from '../../assets/images/runtime_logo.svg';
import gptLogo from '../../assets/images/hexagon.png';
import controlCenterLogo from '../../assets/images/control_logo.svg';

const GetStartedSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const [hoveredCTA, setHoveredCTA] = useState(null);
  const [hoveredComponent, setHoveredComponent] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const progressPercentage = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Platform components with exact PRD content
  const platformComponents = [
    { 
      name: "Studio", 
      icon: studioLogo, 
      color: "from-blue-500 to-blue-600", 
      description: "Design your first agent in Studio",
      bgColor: "from-blue-50 to-blue-100"
    },
    { 
      name: "Runtime", 
      icon: runtimeLogo, 
      color: "from-emerald-500 to-emerald-600", 
      description: "Run it with real-time intelligence via Runtime",
      bgColor: "from-emerald-50 to-emerald-100"
    },
    { 
      name: "GPT", 
      icon: gptLogo, 
      color: "from-purple-500 to-purple-600", 
      description: "Power it with private GPT reasoning",
      bgColor: "from-purple-50 to-purple-100"
    },
    { 
      name: "Control", 
      icon: controlCenterLogo, 
      color: "from-orange-500 to-orange-600", 
      description: "Manage it through enterprise-grade governance",
      bgColor: "from-orange-50 to-orange-100"
    }
  ];

  // Exact PRD CTA buttons content
  const ctaButtons = [
    {
      title: "Book a Demo",
      subtitle: "Let's explore your use case, architecture, and outcomes.",
      icon: FaCalendar,
      gradient: "from-blue-500 to-purple-600",
      hoverColor: "hover:from-blue-600 hover:to-purple-700"
    },
    {
      title: "Start Designing",
      subtitle: "Launch AeroGenix Platform Begin creating your first agent today.",
      description: "Begin creating your first agent today.",
      icon: FaRocket,
      gradient: "from-emerald-500 to-cyan-600",
      hoverColor: "hover:from-emerald-600 hover:to-cyan-700"
    },
    {
      title: "Talk to Sales",
      subtitle: "Co-create an agent application or deployment model that fits your business.",
      icon: FaUsers,
      gradient: "from-indigo-500 to-purple-600",
      hoverColor: "hover:from-indigo-600 hover:to-purple-700"
    }
  ];

  // Co-Create features with exact PRD content
  const coCreateFeatures = [
    "Enterprise-grade model customization for private data environments",
    "Agent application development for specialized verticals", 
    "Hybrid cloud and on-premise deployment models",
    "Integration with existing technology stacks and workflow systems"
  ];  return (
    <section ref={containerRef} className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [-50, 50, -50],
            y: [-30, 30, -30]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-32 w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [180, 0, 180],
            x: [30, -30, 30],
            y: [40, -40, 40]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Hero Section - "Start Building with AeroGenix Foundation" */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-full px-8 py-4 mb-8 shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <FaRocket className="text-blue-500" />
            </motion.div>
            <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get Started with AeroGenix
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Start Building with{" "}
            <motion.span
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              style={{
                backgroundSize: '200%'
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              AeroGenix Foundation
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Leverage the full stack: Studio + Runtime + GPT + Control = Intelligent Agents, Built to Scale
          </motion.p>
        </motion.div>        {/* Platform Components Section - Single Row Layout */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Platform Components + Result in Single Row */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Platform Components */}
            {platformComponents.map((component, index) => (
              <motion.div
                key={component.name}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredComponent(index)}
                onMouseLeave={() => setHoveredComponent(null)}
              >
                <motion.div
                  className="bg-white rounded-2xl p-5 border border-gray-200 shadow-lg text-center relative overflow-hidden h-full"
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Subtle Background Glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30 rounded-2xl opacity-0"
                    animate={{ opacity: hoveredComponent === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Logo Container - Clean Design */}
                  <motion.div
                    className="relative z-10 w-12 h-12 mx-auto mb-3 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={component.icon} 
                      alt={`AeroGenix ${component.name}`}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                  
                  {/* Component Name - Compact */}
                  <h3 className="relative z-10 text-base font-bold text-gray-900 mb-2 leading-tight">
                    AeroGenix {component.name}
                  </h3>
                  
                  {/* Description - Shorter */}
                  <p className="relative z-10 text-xs text-gray-600 leading-relaxed mb-3">
                    {component.description.split('.')[0]}.
                  </p>

                  {/* Hover Indicator */}
                  <motion.div
                    className="relative z-10 w-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto opacity-0"
                    animate={{ 
                      opacity: hoveredComponent === index ? 1 : 0,
                      scaleX: hoveredComponent === index ? 1 : 0.5
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Floating Particles on Hover */}
                  {hoveredComponent === index && (
                    <div className="absolute inset-0 pointer-events-none">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            y: [0, -15, 0],
                            opacity: [0, 1, 0],
                            scale: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}

            {/* Result Card - Same Height as Platform Components */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              onMouseEnter={() => setHoveredComponent(4)}
              onMouseLeave={() => setHoveredComponent(null)}
            >
              <motion.div
                className="bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl p-5 text-white text-center shadow-lg relative overflow-hidden h-full flex flex-col justify-center"
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(16, 185, 129, 0.3)"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Brain Icon - Compact */}
                <motion.div
                  className="relative z-10 mb-3"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 3, -3, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity
                  }}
                >
                  <FaBrain className="text-3xl mx-auto" />
                </motion.div>
                
                {/* Title - Compact */}
                <h3 className="relative z-10 text-base font-bold mb-1 leading-tight">
                  Intelligent Agents
                </h3>
                <p className="relative z-10 text-xs opacity-90 font-semibold">
                  Built to Scale
                </p>

                {/* Success Particles */}
                {hoveredComponent === 4 && (
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/80 rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.3, 1, 0.3],
                          scale: [0.5, 1.2, 0.5]
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Pulsing Ring Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-white/30"
                  animate={{
                    scale: hoveredComponent === 4 ? [1, 1.05, 1] : 1,
                    opacity: hoveredComponent === 4 ? [0.3, 0.6, 0.3] : 0.3,
                  }}
                  transition={{
                    duration: 2,
                    repeat: hoveredComponent === 4 ? Infinity : 0,
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Flow Indicator - Shows the equation flow */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* <div className="flex items-center justify-center gap-4 text-gray-400">
              <motion.div
                className="flex items-center gap-2"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <div className="w-8 h-px bg-gradient-to-r from-blue-400 to-emerald-400" />
                <FaPlus className="text-lg" />
                <div className="w-8 h-px bg-gradient-to-r from-emerald-400 to-purple-400" />
                <FaPlus className="text-lg" />
                <div className="w-8 h-px bg-gradient-to-r from-purple-400 to-orange-400" />
                <FaPlus className="text-lg" />
                <div className="w-8 h-px bg-gradient-to-r from-orange-400 to-emerald-400" />
                <FaEquals className="text-lg text-emerald-500" />
                <div className="w-8 h-px bg-gradient-to-r from-emerald-400 to-blue-400" />
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
              </motion.div>
            </div> */}
            <p className="text-sm text-gray-500 mt-3 font-medium">
              Four powerful components working together to create intelligent agents
            </p>
          </motion.div>

          {/* Enhanced Modular Insight */}
          <motion.div
            className="text-center bg-gradient-to-r from-blue-50 via-purple-50 to-emerald-50 rounded-3xl p-8 border border-blue-200 max-w-3xl mx-auto relative overflow-hidden mt-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ y: -4 }}
          >
            {/* Background Animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              style={{
                backgroundSize: '200%'
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            
            <motion.p 
              className="relative z-10 text-xl md:text-2xl font-bold text-gray-800"
              whileHover={{ scale: 1.02 }}
            >
              Every component is{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                modular
              </span>
              . Every outcome is{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                measurable
              </span>
              .
            </motion.p>

            {/* Decorative Elements */}
            <div className="relative z-10 flex justify-center gap-4 mt-6">
              {[FaCogs, FaChartLine, FaCheckCircle].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, -8, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  <Icon className="text-gray-600 text-sm" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Co-Create Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/60 relative overflow-hidden">
            {/* Background Gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-emerald-500/5"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />

            <div className="relative z-10">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="inline-flex items-center gap-3 mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-lg"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <FaHandshake className="text-2xl" />
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                    Co-Create with Us
                  </h2>
                </motion.div>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Specialized Verticals & Mission-Critical Systems
                  </h3>
                  <div className="space-y-4">
                    {coCreateFeatures.map((feature, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        whileHover={{ x: 10 }}
                      >
                        <FaCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                        <p className="text-gray-700 font-medium">
                          {feature}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <motion.div
                    className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-200 relative overflow-hidden"
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    <FaBuilding className="relative z-10 text-6xl text-purple-600 mx-auto mb-4" />
                    <p className="relative z-10 text-xl font-bold text-gray-800">
                      Partner with experts to scale AI across your enterprise
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Ready to Begin Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/60 relative overflow-hidden">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Ready to{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Begin?
              </span>
            </motion.h3>

            <div className="grid md:grid-cols-3 gap-6">
              {ctaButtons.map((cta, index) => (
                <motion.div
                  key={cta.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  onMouseEnter={() => setHoveredCTA(index)}
                  onMouseLeave={() => setHoveredCTA(null)}
                >
                  <motion.button
                    className="w-full bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg text-left h-full relative overflow-hidden"
                    whileHover={{ 
                      y: -8,
                      scale: 1.02,
                      boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Gradient Overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${cta.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    
                    <motion.div
                      className={`relative z-10 w-12 h-12 rounded-xl bg-gradient-to-r ${cta.gradient} flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ rotate: 15, scale: 1.1 }}
                    >
                      <cta.icon className="text-white text-xl" />
                    </motion.div>
                    
                    <h4 className="relative z-10 text-xl font-bold text-gray-900 mb-2">
                      {cta.title}
                    </h4>
                    <p className="relative z-10 text-gray-600 mb-4 leading-relaxed">
                      {cta.subtitle}
                    </p>
                    
                    <motion.div 
                      className="relative z-10 flex items-center text-blue-600 font-semibold"
                      animate={{ x: hoveredCTA === index ? 10 : 0 }}
                    >
                      <span>Get Started</span>
                      <motion.div
                        animate={{ x: hoveredCTA === index ? 5 : 0 }}
                      >
                        <FaArrowRight className="ml-2" />
                      </motion.div>
                    </motion.div>
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Final Tagline */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 via-purple-50 to-emerald-50 rounded-3xl p-12 border border-white/50 shadow-2xl relative overflow-hidden"
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            
            <motion.p 
              className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-black text-gray-800 leading-relaxed"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              style={{
                background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #10b981)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              With AeroGenix, you don't just keep up with AI — You build the intelligence that leads.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default GetStartedSection
