"use client";
import React, { useState, useRef } from "react"
import { FaRocket, FaPlay, FaArrowRight, FaCheckCircle, FaStar } from "react-icons/fa"
import { motion } from "framer-motion"
import Button from "../ui/Button"
import studioLogo from '../../assets/images/ai.png';
import runtimeLogo from '../../assets/images/runtime_logo.svg';
import gptLogo from '../../assets/images/hexagon.png';
import controlCenterLogo from '../../assets/images/control_logo.svg';

const platformComponents = [
  {
    id: 1,
    name: "AeroGenix Studio",
    icon: studioLogo,
    tagline: "Design & Visualize",
    description: "Design intelligent agents using a low-code, drag-and-drop interface. Define logic, reasoning flows, and decision branches visually.",
    features: [
      "Low-code, drag-n-drop interface",
      "Visual logic and reasoning flows", 
      "Decision branch modeling",
      "Real-time preview and testing"
    ],
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
    accentColor: "blue"
  },
  {
    id: 2,
    name: "AeroGenix Runtime",
    icon: runtimeLogo,
    tagline: "Execute & Scale",
    description: "Power agent execution across cloud, edge, or on-prem environments. Enable agents to act autonomously and adapt in real time.",
    features: [
      "Multi-environment deployment",
      "Autonomous agent execution",
      "Real-time adaptation", 
      "Scalable infrastructure"
    ],
    gradient: "from-emerald-500 to-emerald-600",
    bgGradient: "from-emerald-50 to-emerald-100",
    accentColor: "emerald"
  },
  {
    id: 3,
    name: "AeroGenix GPT",
    icon: gptLogo,
    tagline: "Reason & Understand",
    description: "Fuel reasoning and understanding through contextual GenAI — supporting private models, RAG pipelines, and enterprise-grade governance.",
    features: [
      "Contextual GenAI reasoning",
      "Private model support",
      "RAG pipeline integration",
      "Enterprise governance"
    ],
    gradient: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-50 to-purple-100",
    accentColor: "purple"
  },
  {
    id: 4,
    name: "AeroGenix Control Center",
    icon: controlCenterLogo,
    tagline: "Monitor & Govern",
    description: "Centrally manage agent deployments, enforce policies, and monitor performance across your entire ecosystem.",
    features: [
      "Centralized agent management",
      "Policy enforcement",
      "Performance monitoring",
      "Ecosystem-wide visibility"
    ],
    gradient: "from-orange-500 to-orange-600",
    bgGradient: "from-orange-50 to-orange-100",
    accentColor: "orange"
  }
];

const PlatformSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-16 overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-32 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [180, 0, 180],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header Section - Optimized Sizing */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 py-2 mb-6 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-gray-700">
              Complete Platform Suite
            </span>
          </motion.div>

          {/* Main Title - Reduced from 9xl to 4xl/5xl */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Build with the{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              AeroGenix Platform
            </span>
          </motion.h1>

          {/* Subtitle - Reduced from 5xl to 2xl */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Everything You Need to Build, Deploy, and Scale{" "}
            <span className="text-gray-900 font-bold">Intelligent Agents</span>
          </motion.p>

          {/* Description Card - Smaller padding and text */}
          <motion.div
            className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl border border-white/50 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ y: -4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30" />
            
            <div className="relative z-10">
              <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-4 font-medium">
                The AeroGenix Platform is your{" "}
                <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">
                  enterprise-grade foundation
                </span>{" "}
                for designing, deploying, and managing intelligent agents — all within a single, unified system.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Whether you're building agents in-house or partnering with us to co-create for your industry, the platform gives you the power to go from{" "}
                <span className="font-bold text-gray-900">concept to production with confidence</span>.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Platform Components Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              The AeroGenix Platform includes:
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Four powerful components working seamlessly together
            </p>
          </motion.div>

          {/* Grid Layout - Completely New Unique Hover Effects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformComponents.map((component, index) => (
              <motion.div
                key={component.id}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Crystalline Formation Background */}
                <motion.div
                  className="absolute inset-0 pointer-events-none z-0"
                  animate={{
                    background: hoveredCard === index 
                      ? `conic-gradient(from 0deg at 50% 50%, ${
                          component.accentColor === 'blue' ? 'rgba(59, 130, 246, 0.05)' :
                          component.accentColor === 'emerald' ? 'rgba(16, 185, 129, 0.05)' :
                          component.accentColor === 'purple' ? 'rgba(139, 92, 246, 0.05)' :
                          'rgba(249, 115, 22, 0.05)'
                        } 0deg, transparent 60deg, ${
                          component.accentColor === 'blue' ? 'rgba(59, 130, 246, 0.08)' :
                          component.accentColor === 'emerald' ? 'rgba(16, 185, 129, 0.08)' :
                          component.accentColor === 'purple' ? 'rgba(139, 92, 246, 0.08)' :
                          'rgba(249, 115, 22, 0.08)'
                        } 120deg, transparent 180deg, ${
                          component.accentColor === 'blue' ? 'rgba(59, 130, 246, 0.05)' :
                          component.accentColor === 'emerald' ? 'rgba(16, 185, 129, 0.05)' :
                          component.accentColor === 'purple' ? 'rgba(139, 92, 246, 0.05)' :
                          'rgba(249, 115, 22, 0.05)'
                        } 240deg, transparent 300deg, ${
                          component.accentColor === 'blue' ? 'rgba(59, 130, 246, 0.08)' :
                          component.accentColor === 'emerald' ? 'rgba(16, 185, 129, 0.08)' :
                          component.accentColor === 'purple' ? 'rgba(139, 92, 246, 0.08)' :
                          'rgba(249, 115, 22, 0.08)'
                        } 360deg)`
                      : 'transparent',
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />

                {/* Main Card with Quantum Field Distortion */}
                <motion.div
                  className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg h-full cursor-pointer"
                  animate={{
                    borderRadius: hoveredCard === index ? "20px" : "16px",
                    filter: hoveredCard === index 
                      ? `blur(0px) brightness(1.02) contrast(1.05) saturate(1.1)`
                      : `blur(0px) brightness(1) contrast(1) saturate(1)`,
                  }}
                  whileHover={{
                    y: -12,
                    boxShadow: "0 25px 60px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.1)",
                    scale: 1.02,
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20,
                    filter: { duration: 0.4 },
                  }}
                >
                  {/* Neural Network Connection Lines */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-px h-8 ${
                          component.accentColor === 'blue' ? 'bg-blue-300' :
                          component.accentColor === 'emerald' ? 'bg-emerald-300' :
                          component.accentColor === 'purple' ? 'bg-purple-300' :
                          'bg-orange-300'
                        }`}
                        style={{
                          left: `${15 + (i % 4) * 25}%`,
                          top: `${10 + Math.floor(i / 4) * 40}%`,
                          transformOrigin: 'center bottom',
                        }}
                        animate={{
                          scaleY: hoveredCard === index ? [0, 1, 0.7, 1, 0] : 0,
                          opacity: hoveredCard === index ? [0, 0.6, 0.3, 0.8, 0] : 0,
                          rotate: hoveredCard === index ? [0, 15, -10, 5, 0] : 0,
                        }}
                        transition={{
                          duration: 1.8 + i * 0.2,
                          repeat: hoveredCard === index ? Infinity : 0,
                          ease: "easeInOut",
                          delay: i * 0.15,
                        }}
                      />
                    ))}
                  </div>

                  {/* Geometric Pattern Overlay */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: hoveredCard === index 
                        ? `repeating-linear-gradient(45deg, transparent, transparent 10px, ${
                            component.accentColor === 'blue' ? 'rgba(59, 130, 246, 0.02)' :
                            component.accentColor === 'emerald' ? 'rgba(16, 185, 129, 0.02)' :
                            component.accentColor === 'purple' ? 'rgba(139, 92, 246, 0.02)' :
                            'rgba(249, 115, 22, 0.02)'
                          } 10px, ${
                            component.accentColor === 'blue' ? 'rgba(59, 130, 246, 0.02)' :
                            component.accentColor === 'emerald' ? 'rgba(16, 185, 129, 0.02)' :
                            component.accentColor === 'purple' ? 'rgba(139, 92, 246, 0.02)' :
                            'rgba(249, 115, 22, 0.02)'
                          } 20px, transparent 20px)`
                        : 'transparent',
                    }}
                    animate={{
                      opacity: hoveredCard === index ? [0, 1, 0.5, 1] : 0,
                      backgroundPosition: hoveredCard === index ? ['0px 0px', '20px 20px', '0px 0px'] : '0px 0px',
                    }}
                    transition={{
                      opacity: { duration: 0.5 },
                      backgroundPosition: { 
                        duration: 4, 
                        repeat: hoveredCard === index ? Infinity : 0,
                        ease: "linear" 
                      }
                    }}
                  />

                  {/* Header Section with Depth Layers */}
                  <div className="relative p-6 pb-4 z-20">
                    <motion.div
                      className="relative"
                      animate={{
                        transform: hoveredCard === index ? 'translateZ(10px)' : 'translateZ(0px)',
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Icon with Quantum Field Effect */}
                      <motion.div
                        className="relative w-12 h-12 rounded-xl bg-gray-50 p-2 shadow-sm mb-4 flex items-center justify-center overflow-hidden"
                        animate={{
                          y: hoveredCard === index ? -6 : 0,
                          scale: hoveredCard === index ? 1.1 : 1,
                          boxShadow: hoveredCard === index 
                            ? `0 12px 30px ${
                                component.accentColor === 'blue' ? 'rgba(59, 130, 246, 0.25)' :
                                component.accentColor === 'emerald' ? 'rgba(16, 185, 129, 0.25)' :
                                component.accentColor === 'purple' ? 'rgba(139, 92, 246, 0.25)' :
                                'rgba(249, 115, 22, 0.25)'
                              }`
                            : '0 4px 15px rgba(0,0,0,0.1)',
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        {/* Quantum Field Rings */}
                        {Array.from({ length: 3 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className={`absolute inset-0 rounded-xl border ${
                              component.accentColor === 'blue' ? 'border-blue-300' :
                              component.accentColor === 'emerald' ? 'border-emerald-300' :
                              component.accentColor === 'purple' ? 'border-purple-300' :
                              'border-orange-300'
                            }`}
                            animate={{
                              scale: hoveredCard === index ? [1, 1.4 + i * 0.2, 1] : 1,
                              opacity: hoveredCard === index ? [0, 0.4 - i * 0.1, 0] : 0,
                            }}
                            transition={{
                              duration: 2 + i * 0.3,
                              repeat: hoveredCard === index ? Infinity : 0,
                              ease: "easeOut",
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                        
                        <motion.img 
                          src={component.icon} 
                          alt={component.name}
                          className="w-full h-full object-contain relative z-10"
                          animate={{
                            filter: hoveredCard === index 
                              ? 'brightness(1.1) saturate(1.2) drop-shadow(0 0 8px rgba(59, 130, 246, 0.2))' 
                              : 'brightness(1) saturate(1)',
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                      
                      {/* Title with Morphing Text Effect */}
                      <motion.div className="mb-4">
                        <motion.h3 
                          className="text-lg font-bold text-gray-900 mb-1 leading-tight"
                          animate={{
                            color: hoveredCard === index 
                              ? component.accentColor === 'blue' ? '#1d4ed8' :
                                component.accentColor === 'emerald' ? '#047857' :
                                component.accentColor === 'purple' ? '#7c3aed' :
                                '#ea580c'
                              : '#111827',
                            textShadow: hoveredCard === index 
                              ? `0 0 20px ${
                                  component.accentColor === 'blue' ? 'rgba(29, 78, 216, 0.3)' :
                                  component.accentColor === 'emerald' ? 'rgba(4, 120, 87, 0.3)' :
                                  component.accentColor === 'purple' ? 'rgba(124, 58, 237, 0.3)' :
                                  'rgba(234, 88, 12, 0.3)'
                                }`
                              : '0 0 0px transparent',
                          }}
                          transition={{ duration: 0.4 }}
                        >
                          {component.name}
                        </motion.h3>
                        <motion.p 
                          className={`text-xs font-semibold bg-gradient-to-r ${component.gradient} bg-clip-text text-transparent uppercase tracking-wider`}
                          animate={{
                            letterSpacing: hoveredCard === index ? "0.15em" : "0.1em",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {component.tagline}
                        </motion.p>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Content Section with Depth */}
                  <div className="px-6 pb-6 relative z-20">
                    <motion.div
                      animate={{
                        transform: hoveredCard === index ? 'translateZ(5px)' : 'translateZ(0px)',
                      }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      {/* Description with Flowing Text Effect */}
                      <motion.p 
                        className="text-gray-600 leading-relaxed mb-4 text-sm"
                        animate={{
                          color: hoveredCard === index ? '#374151' : '#6b7280',
                        }}
                      >
                        {component.description}
                      </motion.p>

                      {/* Features with Crystalline Growth Animation */}
                      <div className="space-y-2">
                        <motion.h4 
                          className="text-xs font-semibold text-gray-800 uppercase tracking-wider mb-3"
                          animate={{
                            letterSpacing: hoveredCard === index ? "0.2em" : "0.1em",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          Key Features
                        </motion.h4>
                        {component.features.map((feature, idx) => (
                          <motion.div
                            key={feature}
                            className="flex items-start gap-2 group/feature"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <motion.div 
                              className={`w-4 h-4 rounded-full bg-gradient-to-r ${component.gradient} flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5 relative overflow-hidden`}
                              animate={{
                                boxShadow: hoveredCard === index 
                                  ? `0 0 15px ${
                                      component.accentColor === 'blue' ? 'rgba(59, 130, 246, 0.4)' :
                                      component.accentColor === 'emerald' ? 'rgba(16, 185, 129, 0.4)' :
                                      component.accentColor === 'purple' ? 'rgba(139, 92, 246, 0.4)' :
                                      'rgba(249, 115, 22, 0.4)'
                                    }`
                                  : '0 2px 4px rgba(0,0,0,0.1)',
                              }}
                              transition={{
                                duration: 0.8,
                                delay: idx * 0.1,
                              }}
                            >
                              {/* Crystalline Growth Effect */}
                              <motion.div
                                className="absolute inset-0 rounded-full"
                                style={{
                                  background: `conic-gradient(from 0deg, ${
                                    component.accentColor === 'blue' ? '#3b82f6' :
                                    component.accentColor === 'emerald' ? '#10b981' :
                                    component.accentColor === 'purple' ? '#8b5cf6' :
                                    '#f97316'
                                  }, transparent, ${
                                    component.accentColor === 'blue' ? '#3b82f6' :
                                    component.accentColor === 'emerald' ? '#10b981' :
                                    component.accentColor === 'purple' ? '#8b5cf6' :
                                    '#f97316'
                                  })`,
                                }}
                                animate={{
                                  opacity: hoveredCard === index ? [0, 0.3, 0] : 0,
                                  scale: hoveredCard === index ? [0.8, 1.2, 0.8] : 0.8,
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: hoveredCard === index ? Infinity : 0,
                                  delay: idx * 0.2,
                                }}
                              />
                              <FaCheckCircle className="text-white text-xs relative z-10" />
                            </motion.div>
                            <motion.span 
                              className="text-xs text-gray-700 group-hover/feature:text-gray-900 transition-colors font-medium leading-relaxed"
                              animate={{
                                transform: hoveredCard === index ? 'translateX(2px)' : 'translateX(0px)',
                              }}
                              transition={{ 
                                duration: 0.6,
                                delay: idx * 0.05,
                              }}
                            >
                              {feature}
                            </motion.span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA Button with Quantum Tunnel Effect */}
                      <motion.div
                        className="mt-6 pt-4 border-t border-gray-100"
                        animate={{
                          borderColor: hoveredCard === index 
                            ? component.accentColor === 'blue' ? '#dbeafe' :
                              component.accentColor === 'emerald' ? '#d1fae5' :
                              component.accentColor === 'purple' ? '#e9d5ff' :
                              '#fed7aa'
                            : '#f3f4f6',
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.button
                          className={`relative w-full py-2.5 px-4 rounded-lg font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden ${
                            component.accentColor === 'blue' ? 'bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-800' :
                            component.accentColor === 'emerald' ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 hover:text-emerald-800' :
                            component.accentColor === 'purple' ? 'bg-purple-50 hover:bg-purple-100 text-purple-700 hover:text-purple-800' :
                            'bg-orange-50 hover:bg-orange-100 text-orange-700 hover:text-orange-800'
                          }`}
                          animate={{
                            scale: hoveredCard === index ? 1.03 : 1,
                          }}
                          transition={{ duration: 0.3 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          {/* Quantum Tunnel Background */}
                          <motion.div
                            className={`absolute inset-0 ${
                              component.accentColor === 'blue' ? 'bg-blue-200' :
                              component.accentColor === 'emerald' ? 'bg-emerald-200' :
                              component.accentColor === 'purple' ? 'bg-purple-200' :
                              'bg-orange-200'
                            }`}
                            animate={{
                              clipPath: hoveredCard === index 
                                ? [
                                    'circle(0% at 50% 50%)',
                                    'circle(30% at 50% 50%)',
                                    'circle(100% at 50% 50%)',
                                  ]
                                : 'circle(0% at 50% 50%)',
                            }}
                            transition={{
                              duration: 0.6,
                              ease: "easeOut"
                            }}
                          />
                          
                          <span className="relative z-10">Learn More</span>
                          <motion.div
                            className="relative z-10"
                            animate={{
                              x: hoveredCard === index ? [0, 3, 0] : 0,
                            }}
                            transition={{
                              duration: 1.2,
                              repeat: hoveredCard === index ? Infinity : 0,
                              ease: "easeInOut"
                            }}
                          >
                            <FaArrowRight className="text-xs" />
                          </motion.div>
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Quantum Field Border Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background: hoveredCard === index 
                        ? `linear-gradient(90deg, ${
                            component.accentColor === 'blue' ? '#3b82f6' :
                            component.accentColor === 'emerald' ? '#10b981' :
                            component.accentColor === 'purple' ? '#8b5cf6' :
                            '#f97316'
                          } 0%, transparent 50%, ${
                            component.accentColor === 'blue' ? '#3b82f6' :
                            component.accentColor === 'emerald' ? '#10b981' :
                            component.accentColor === 'purple' ? '#8b5cf6' :
                            '#f97316'
                          } 100%)`
                        : 'transparent',
                      padding: '1px',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'exclude',
                      maskComposite: 'exclude',
                    }}
                    animate={{
                      opacity: hoveredCard === index ? [0, 0.8, 0.4, 0.8] : 0,
                      background: hoveredCard === index 
                        ? [
                            `linear-gradient(90deg, ${component.accentColor === 'blue' ? '#3b82f6' : component.accentColor === 'emerald' ? '#10b981' : component.accentColor === 'purple' ? '#8b5cf6' : '#f97316'} 0%, transparent 50%, ${component.accentColor === 'blue' ? '#3b82f6' : component.accentColor === 'emerald' ? '#10b981' : component.accentColor === 'purple' ? '#8b5cf6' : '#f97316'} 100%)`,
                            `linear-gradient(180deg, ${component.accentColor === 'blue' ? '#3b82f6' : component.accentColor === 'emerald' ? '#10b981' : component.accentColor === 'purple' ? '#8b5cf6' : '#f97316'} 0%, transparent 50%, ${component.accentColor === 'blue' ? '#3b82f6' : component.accentColor === 'emerald' ? '#10b981' : component.accentColor === 'purple' ? '#8b5cf6' : '#f97316'} 100%)`,
                            `linear-gradient(270deg, ${component.accentColor === 'blue' ? '#3b82f6' : component.accentColor === 'emerald' ? '#10b981' : component.accentColor === 'purple' ? '#8b5cf6' : '#f97316'} 0%, transparent 50%, ${component.accentColor === 'blue' ? '#3b82f6' : component.accentColor === 'emerald' ? '#10b981' : component.accentColor === 'purple' ? '#8b5cf6' : '#f97316'} 100%)`,
                            `linear-gradient(0deg, ${component.accentColor === 'blue' ? '#3b82f6' : component.accentColor === 'emerald' ? '#10b981' : component.accentColor === 'purple' ? '#8b5cf6' : '#f97316'} 0%, transparent 50%, ${component.accentColor === 'blue' ? '#3b82f6' : component.accentColor === 'emerald' ? '#10b981' : component.accentColor === 'purple' ? '#8b5cf6' : '#f97316'} 100%)`,
                          ]
                        : 'transparent',
                    }}
                    transition={{
                      opacity: { duration: 0.4 },
                      background: { 
                        duration: 2, 
                        repeat: hoveredCard === index ? Infinity : 0,
                        ease: "linear" 
                      }
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PlatformSection
