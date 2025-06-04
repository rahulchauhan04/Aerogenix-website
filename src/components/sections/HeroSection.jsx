'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaRocket,
  FaPlay,
  FaBrain,
  FaChartLine,
  FaShieldAlt,
  FaCogs,
  FaArrowRight,
  FaCheck,
} from 'react-icons/fa';
import FloatingParticles from '../ui/FloatingParticles';
import GeometricPattern from '../ui/GeometricPattern';
import { floatingAnimation } from '../../utils/animations';

import studioLogo from '../../assets/images/ai.png';
import runtimeLogo from '../../assets/images/runtime_logo.svg';
import gptLogo from '../../assets/images/hexagon.png';
import controlCenterLogo from '../../assets/images/control_logo.svg';
import aeroInsightLogo from '../../assets/images/aeroInsightLogo.svg';
import aeroChaosLogo from '../../assets/images/aeroChaosLogo.png';
import aeroedgeLogo from '../../assets/images/aeroedge.jpg';
import illustration from '../../assets/illustration.png';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const platformComponents = [
    {
      name: 'AeroGenix Studio',
      description: 'Design & Build',
      detail: 'Low-code interface for agent design',
      icon: studioLogo,
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      name: 'AeroGenix Runtime',
      description: 'Execute & Adapt',
      detail: 'Real-time agent execution',
      icon: runtimeLogo,
      gradient: 'from-emerald-500 to-emerald-600',
    },
    {
      name: 'AeroGenix GPT',
      description: 'Reason & Understand',
      detail: 'Contextual AI reasoning',
      icon: gptLogo,
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      name: 'Control Center',
      description: 'Manage & Govern',
      detail: 'Enterprise governance',
      icon: controlCenterLogo,
      gradient: 'from-orange-500 to-orange-600',
    },
  ];

  const applicationComponents = [
    {
      name: 'AeroChaos',
      description: 'Resilience Testing',
      detail: 'Chaos engineering agent',
      icon: aeroChaosLogo,
      gradient: 'from-red-500 to-red-600',
    },
    {
      name: 'AeroEdge',
      description: 'Edge Intelligence',
      detail: 'Edge deployment agent',
      icon: aeroedgeLogo,
      gradient: 'from-teal-500 to-teal-600',
    },
    {
      name: 'AeroInsight',
      description: 'Maturity Assessment',
      detail: 'AI readiness evaluation',
      icon: aeroInsightLogo,
      gradient: 'from-amber-500 to-amber-600',
    },
    {
      name: 'Custom Agents',
      description: 'Your Solutions',
      detail: 'Build custom agents',
      icon: FaCogs,
      gradient: 'from-slate-500 to-slate-600',
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <FloatingParticles count={30} />
        <GeometricPattern />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="pt-20 pb-16 lg:pt-32 lg:pb-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div className="text-left space-y-8" variants={itemVariants}>
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
                The Future of Enterprise Intelligence
              </motion.div>

              <div className="space-y-4">
                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                  variants={itemVariants}
                >
                  <motion.span
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    style={{ backgroundSize: '200% 200%' }}
                  >
                    AeroGenix™
                  </motion.span>
                </motion.h1>

                <motion.div
                  className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700 space-y-1"
                  variants={itemVariants}
                >
                  <motion.div
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  >
                    Design.
                  </motion.div>
                  <motion.div
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                  >
                    Deploy.
                  </motion.div>
                  <motion.div
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
                  >
                    Evolve.
                  </motion.div>
                </motion.div>
              </div>

              <motion.p className="text-lg sm:text-xl text-blue-600 font-medium" variants={itemVariants}>
                Your Foundation for Agentic AI
              </motion.p>

              <motion.p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl" variants={itemVariants}>
                AeroGenix is not just a platform. It’s the enterprise operating system for intelligent agents — built to help your business automate, reason, adapt, and scale. From copilots to edge agents, from resilience engines to maturity maps, AeroGenix powers the shift from traditional automation to autonomous, learning systems that align with your goals — and evolve with your enterprise. AeroGenix Runtime + AeroGenix GPT = Your Enterprise Copilot.
              </motion.p>

              <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
                <motion.button
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaRocket className="mr-2 text-sm group-hover:animate-bounce" />
                  Try AeroGenix Platform
                  <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-700 font-semibold rounded-lg border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPlay className="mr-2 text-sm" />
                  Book a Demo
                </motion.button>
              </motion.div>

              <motion.div className="flex items-center space-x-6 text-sm text-slate-500" variants={itemVariants}>
                <div className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  Enterprise Ready
                </div>
                <div className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  99.9% Uptime
                </div>
                <div className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  SOC 2 Compliant
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="relative" variants={itemVariants}>
              <div className="relative w-full h-[600px] perspective-1000">
                <motion.div
                  className="relative w-full h-full bg-gradient-to-br from-white/90 via-blue-50/80 to-purple-50/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/30 overflow-hidden"
                  initial={{ rotateY: -15, rotateX: 5 }}
                  animate={{
                    rotateY: [-15, -10, -15],
                    rotateX: [5, 0, 5],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        className="w-3 h-3 bg-green-400 rounded-full"
                        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-sm font-semibold text-slate-700">AeroGenix Platform • Live</span>
                    </div>
                    <div className="text-xs text-slate-500 font-mono">v2.4.1</div>
                  </div>

                  <div className="relative mb-8">
                    <motion.div
                      className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
                      animate={{
                        boxShadow: [
                          '0 0 0 0 rgba(59, 130, 246, 0.4)',
                          '0 0 0 20px rgba(59, 130, 246, 0)',
                          '0 0 0 0 rgba(59, 130, 246, 0)',
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <FaBrain className="text-white text-2xl" />
                    </motion.div>
                    <div className="text-center mt-3">
                      <p className="text-sm font-semibold text-slate-800">AeroGenix Core</p>
                      <p className="text-xs text-slate-500">Neural Hub</p>
                    </div>
                  </div>

                  {platformComponents.slice(0, 4).map((component, index) => {
                    const positions = [
                      { top: '15%', left: '5%', delay: 0 },
                      { top: '15%', right: '5%', delay: 0.5 },
                      { bottom: '25%', left: '5%', delay: 1 },
                      { bottom: '25%', right: '5%', delay: 1.5 },
                    ];
                    const pos = positions[index];

                    return (
                      <motion.div
                        key={component.name}
                        className="absolute w-20 h-20 bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                        style={pos}
                        initial={{ opacity: 0, scale: 0, rotateY: -180 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          rotateY: 0,
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          delay: pos.delay,
                          y: { duration: 3, repeat: Infinity, delay: pos.delay * 2 },
                        }}
                        whileHover={{ scale: 1.1, z: 20 }}
                      >
                        <div className={`w-8 h-8 bg-gradient-to-r ${component.gradient} rounded-lg flex items-center justify-center mb-2 mx-auto`}>
                          {typeof component.icon === 'string' ? (
                            <img src={component.icon} alt={component.name} className="w-4 h-4" />
                          ) : (
                            <component.icon className="text-white text-sm" />
                          )}
                        </div>
                        <p className="text-xs font-medium text-center text-slate-700 leading-tight">
                          {component.name.split(' ')[1]}
                        </p>
                      </motion.div>
                    );
                  })}

                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                    {[0, 1, 2, 3].map(index => {
                      const paths = [
                        'M 60 120 Q 200 80 300 120',
                        'M 340 120 Q 240 80 200 120',
                        'M 60 400 Q 200 360 300 300',
                        'M 340 400 Q 240 360 200 300',
                      ];

                      return (
                        <motion.path
                          key={index}
                          d={paths[index]}
                          stroke="url(#connectionGradient)"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: [0, 1, 0], opacity: [0, 0.6, 0] }}
                          transition={{ duration: 4, delay: index * 0.5, repeat: Infinity, repeatDelay: 2 }}
                        />
                      );
                    })}
                    <defs>
                      <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                        <stop offset="50%" stopColor="#8B5CF6" stopOpacity="1" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <motion.div className="text-lg font-bold text-blue-600" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                            99.9%
                          </motion.div>
                          <div className="text-xs text-slate-500">Uptime</div>
                        </div>
                        <div>
                          <motion.div className="text-lg font-bold text-green-600" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}>
                            <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                              2.4s
                            </motion.span>
                          </motion.div>
                          <div className="text-xs text-slate-500">Response</div>
                        </div>
                        <div>
                          <motion.div className="text-lg font-bold text-purple-600" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}>
                            <motion.span animate={{ rotate: [0, 180, 360], color: ['#8B5CF6', '#3B82F6', '#8B5CF6'] }} transition={{ duration: 3, repeat: Infinity }}>
                              47
                            </motion.span>
                          </motion.div>
                          <div className="text-xs text-slate-500">Active Agents</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
                      style={{ top: `${20 + Math.random() * 60}%`, left: `${10 + Math.random() * 80}%` }}
                      animate={{ scale: [0, 1, 0], opacity: [0, 0.8, 0] }}
                      transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, repeatDelay: 2 }}
                    />
                  ))}

                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />
                </motion.div>

                <motion.div
                  className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                  transition={{ rotate: { duration: 20, repeat: Infinity, ease: 'linear' }, scale: { duration: 3, repeat: Infinity } }}
                >
                  <FaCogs className="text-white text-lg" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-white/50"
                  animate={{ y: [0, -15, 0], rotate: [0, 2, 0, -2, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <div className="flex items-center space-x-2">
                    <motion.div className="w-3 h-3 bg-green-400 rounded-full" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
                    <div>
                      <p className="text-xs font-semibold text-slate-800">System Status</p>
                      <p className="text-xs text-green-600">All Systems Operational</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="py-16 lg:py-24" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <div className="text-center mb-16">
            <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Platform Architecture</span>
            </motion.h2>
            <motion.p className="text-lg text-slate-600 max-w-3xl mx-auto" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              A comprehensive ecosystem designed to power your entire intelligent agent lifecycle
            </motion.p>
          </div>

          <div className="mb-16">
            <motion.h3 className="text-xl sm:text-2xl font-semibold text-center mb-8 text-slate-700" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              Platform Layer
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {platformComponents.map((component, index) => (
                <motion.div
                  key={component.name}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${component.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {typeof component.icon === 'string' ? (
                      <img src={component.icon} alt={component.name} className="w-6 h-6" />
                    ) : (
                      <component.icon className="text-white text-xl" />
                    )}
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">{component.name}</h4>
                  <p className="text-sm text-slate-600 mb-2">{component.description}</p>
                  <p className="text-xs text-slate-500">{component.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div className="text-center mb-16" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
                <FaCogs className="mr-3" />
              </motion.div>
              <span className="font-medium">Unified Data Flow</span>
            </div>
          </motion.div>

          <div className="mb-16">
            <motion.h3 className="text-xl sm:text-2xl font-semibold text-center mb-8 text-slate-700" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              Application Layer
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {applicationComponents.map((component, index) => (
                <motion.div
                  key={component.name}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${component.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {typeof component.icon === 'string' ? (
                      <img src={component.icon} alt={component.name} className="w-6 h-6" />
                    ) : (
                      <component.icon className="text-white text-xl" />
                    )}
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">{component.name}</h4>
                  <p className="text-sm text-slate-600 mb-2">{component.description}</p>
                  <p className="text-xs text-slate-500">{component.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <div className="text-center mb-8">
              <h4 className="text-2xl font-semibold text-slate-800 mb-4">See AeroGenix in Action</h4>
              <p className="text-slate-600">Experience the power of our integrated platform architecture</p>
            </div>
            <div className="bg-white/80 rounded-xl p-6 shadow-lg">
              <img src={illustration} alt="AeroGenix Platform Demo" className="w-full h-auto rounded-lg" />
            </div>
          </motion.div>

          <motion.div className="text-center mt-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <p className="text-lg text-slate-600 mb-6 italic">
              "AeroGenix powers your entire intelligent agent lifecycle — from design to deployment, from reasoning to resilience."
            </p>
            <motion.button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Get Started Today
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
