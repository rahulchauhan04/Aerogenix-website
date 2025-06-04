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
  FaCode,
  FaServer,
  FaEye,
} from 'react-icons/fa';
import Button from '../ui/Button';
import FloatingParticles from '../ui/FloatingParticles';
import GeometricPattern from '../ui/GeometricPattern';
import { floatingAnimation, pulseAnimation } from '../../utils/animations';
import logo from '../../assets/images/aerogenixImg.svg';

//logos
import studioLogo from '../../assets/images/ai.png';
import runtimeLogo from '../../assets/images/runtime_logo.svg';
import gptLogo from '../../assets/images/hexagon.png';
import controlCenterLogo from '../../assets/images/control_logo.svg';
import aeroInsightLogo from '../../assets/images/aeroInsightLogo.svg';
import aeroChaosLogo from '../../assets/images/aeroChaosLogo.png';
import aeroedgeLogo from '../../assets/images/aeroedge.jpg';
import illustration from '../../assets/illustration.png';

const HeroSection = () => {
  return (
    <section className="relative py-36 bg-gradient-to-br from-purple-50 via-violet-50 to-white overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 z-[1]">
        <FloatingParticles count={40} />
        <GeometricPattern />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-[2]">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left Content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <motion.p
                className="text-lg 2xl:text-xl text-blue-800 font-bold mb-6 tracking-wide uppercase before:content-[''] before:block before:w-24 lg:before:h-[3px] before:bg-indigo-800 before:mb-3"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                The Future of Enterprise Intelligence Starts Here
              </motion.p>

              <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                <motion.span
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  AeroGenix™
                </motion.span>
              </h1>

              <motion.div
                className="text-2xl md:text-4xl font-medium text-gray-600 mb-8 space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 0,
                  }}
                >
                  Design.
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 0.7,
                  }}
                >
                  Deploy.
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 1.4,
                  }}
                >
                  Evolve.
                </motion.div>
              </motion.div>

              <motion.p
                className="text-2xl text-blue-600 font-semibold mb-8"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                Your Foundation for Agentic AI.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-6 mb-8"
              >
                <Button
                  primary
                  className="text-xl px-10 py-5"
                  icon={<FaRocket />}
                >
                  Try AeroGenix Platform
                </Button>
                <Button className="text-xl px-10 py-5" icon={<FaPlay />}>
                  Book a Demo
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                <img
                  src={logo}
                  alt="AeroGenix Platform Demo"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-3xl pointer-events-none"></div>
              </div>

              {/* Floating UI Elements */}
              <motion.div
                className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50"
                animate={floatingAnimation}
              >
                <div className="flex items-center space-x-3">
                  <FaBrain className="text-blue-600 text-2xl" />
                  <div>
                    <p className="font-semibold text-gray-800">AI Agent</p>
                    <p className="text-sm text-green-600">● Active</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50"
                animate={{
                  ...floatingAnimation,
                  transition: { ...floatingAnimation.transition, delay: 1 },
                }}
              >
                <div className="flex items-center space-x-3">
                  <FaChartLine className="text-green-600 text-2xl" />
                  <div>
                    <p className="font-semibold text-gray-800">Performance</p>
                    <p className="text-sm text-blue-600">↗ 99.9% Uptime</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-16 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50"
                animate={{
                  ...floatingAnimation,
                  transition: { ...floatingAnimation.transition, delay: 0.5 },
                }}
              >
                <div className="flex items-center space-x-3">
                  <FaShieldAlt className="text-purple-600 text-2xl" />
                  <div>
                    <p className="font-semibold text-gray-800">Security</p>
                    <p className="text-sm text-purple-600">Enterprise Grade</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Description Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-7xl mx-auto mb-16"
        >
          <div className="bg-white/60 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-white/50">
            <p className="text-2xl italic  text-indigo-700 mb-6 leading-relaxed font-semibold">
              “AeroGenix is not just a platform. It's the enterprise operating
              system for intelligent agents — built to help your business
              automate, reason, adapt, and scale.”
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From copilots to edge agents, from resilience engines to maturity
              maps, AeroGenix powers the shift from traditional automation to
              autonomous, learning systems that align with your goals — and
              evolve with your enterprise.
            </p>
            <motion.div
              className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-6 text-center shadow-lg"
              animate={pulseAnimation}
            >
              <p className="text-xl font-semibold text-blue-700">
                AeroGenix Runtime + AeroGenix GPT = Your Enterprise Copilot.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Platform Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className=" mx-auto"
        >
          <div className="bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/50">
            <h3 className="text-4xl font-bold text-center mb-12 text-gray-800 bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent underline decoration-4">
              AeroGenix Platform Architecture
            </h3>

            {/* Platform Layer */}
            <div className="mb-20">
              <h4 className="text-xl 2xl:text-2xl font-semibold mb-8 text-center text-indigo-700">
                Platform Layer
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <motion.div
                  className="bg-gradient-to-br from-blue-100 via-white to-blue-200 p-8 rounded-3xl text-center shadow-xl border-2 border-blue-300 relative overflow-hidden"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  animate={floatingAnimation}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                  <img
                    src={studioLogo}
                    className="text-4xl text-blue-600 mx-auto mb-6 2xl:w-16 2xl:h-16 w-14 h-14"
                  />
                  <h5 className="font-bold text-blue-800 text-xl mb-3">
                    AeroGenix Studio
                  </h5>
                  <p className="text-sm lg:text-base text-blue-700 mb-4">
                    Design & Build
                  </p>
                  <div className="bg-white/50 rounded-xl p-3">
                    <p className="text-xs lg:text-sm text-blue-600">
                      Low-code interface for agent design
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-green-100 via-white  to-green-200 p-8 rounded-3xl text-center shadow-xl border-2 border-green-300 relative overflow-hidden"
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  animate={{
                    ...floatingAnimation,
                    transition: { ...floatingAnimation.transition, delay: 0.5 },
                  }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
                  <img
                    src={runtimeLogo}
                    className="text-4xl text-green-600 mx-auto mb-6 2xl:w-16 2xl:h-16 w-14 h-14"
                  />
                  <h5 className="font-bold text-green-800 text-xl mb-3">
                    AeroGenix Runtime
                  </h5>
                  <p className="lg:text-base text-sm text-green-700 mb-4">
                    Execute & Adapt
                  </p>
                  <div className="bg-white/50 rounded-xl p-3">
                    <p className="text-xs lg:text-sm text-green-600">
                      Real-time agent execution
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-purple-100 via-white to-purple-200 p-8 rounded-3xl text-center shadow-xl border-2 border-purple-300 relative overflow-hidden"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  animate={{
                    ...floatingAnimation,
                    transition: { ...floatingAnimation.transition, delay: 1 },
                  }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r via-white from-purple-400 to-purple-600"></div>
                  <img
                    src={gptLogo}
                    className="text-4xl text-purple-600 mx-auto mb-6 2xl:w-16 2xl:h-16 w-14 h-14"
                  />
                  <h5 className="font-bold text-purple-800 text-xl mb-3">
                    AeroGenix GPT
                  </h5>
                  <p className="lg:text-base text-sm text-purple-700 mb-4">
                    Reason & Understand
                  </p>
                  <div className="bg-white/50 rounded-xl p-3">
                    <p className="text-xs lg:text-sm text-purple-600">
                      Contextual AI reasoning
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-orange-100 to-orange-200 via-white p-8 rounded-3xl text-center shadow-xl border-2 border-orange-300 relative overflow-hidden"
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  animate={{
                    ...floatingAnimation,
                    transition: { ...floatingAnimation.transition, delay: 1.5 },
                  }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
                  <img
                    src={controlCenterLogo}
                    className="text-4xl text-orange-600 mx-auto mb-6 2xl:w-16 2xl:h-16 w-14 h-14"
                  />
                  <h5 className="font-bold text-orange-800 text-xl mb-3">
                    Control Center
                  </h5>
                  <p className="lg:ext-base text-sm text-orange-700 mb-4">
                    Manage & Govern
                  </p>
                  <div className="bg-white/50 rounded-xl p-3">
                    <p className="text-xs lg:text-sm text-orange-600">
                      Enterprise governance
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Data Flow Indicator */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full inline-flex items-center space-x-2 shadow-lg">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear',
                  }}
                >
                  <FaCogs className="text-xl" />
                </motion.div>
                <span className="font-semibold">Unified Data Flow</span>
              </div>
            </motion.div>

            {/* Application Layer */}
            <div className="mb-20">
              <h4 className="text-xl 2xl:text-2xl font-semibold mb-8 text-center text-indigo-700">
                Application Layer
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <motion.div
                  className="bg-gradient-to-br from-red-100 via-white to-red-200 p-8 rounded-3xl text-center shadow-xl border-2 border-red-300 relative overflow-hidden"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  animate={floatingAnimation}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-600"></div>
                  <img
                    src={aeroChaosLogo}
                    className="text-4xl text-red-600 mx-auto mb-6 2xl:w-16 2xl:h-16 w-14 h-14"
                  />
                  <h5 className="font-bold text-red-800 text-xl mb-3">
                    AeroChaos
                  </h5>
                  <p className="lg:text-base text-sm text-red-700 mb-4">
                    Resilience Testing
                  </p>
                  <div className="bg-white/50 rounded-xl p-3">
                    <p className="text-xs lg:text-sm text-red-600">
                      Chaos engineering agent
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-teal-100 via-white to-teal-200 p-8 rounded-3xl text-center shadow-xl border-2 border-teal-300 relative overflow-hidden"
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  animate={{
                    ...floatingAnimation,
                    transition: { ...floatingAnimation.transition, delay: 0.5 },
                  }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-teal-600"></div>
                  <img
                    src={aeroedgeLogo}
                    className="text-4xl text-teal-600 mx-auto mb-6 2xl:w-16 2xl:h-16 w-14 h-14"
                  />
                  <h5 className="font-bold text-teal-800 text-xl mb-3">
                    AeroEdge
                  </h5>
                  <p className="lg:text-base text-sm text-teal-700 mb-4">
                    Edge Intelligence
                  </p>
                  <div className="bg-white/50 rounded-xl p-3">
                    <p className="text-xs lg:text-sm lg:text-sm text-teal-600">
                      Edge deployment agent
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-yellow-100 via-white to-yellow-200 p-8 rounded-3xl text-center shadow-xl border-2 border-yellow-300 relative overflow-hidden"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  animate={{
                    ...floatingAnimation,
                    transition: { ...floatingAnimation.transition, delay: 1 },
                  }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                  <img
                    src={aeroInsightLogo}
                    className="text-4xl text-yellow-600 mx-auto mb-6 2xl:w-16 2xl:h-16 w-14 h-14"
                  />
                  <h5 className="font-bold text-yellow-800 text-xl mb-3">
                    AeroInsight
                  </h5>
                  <p className="lg:text-base text-sm text-yellow-700 mb-4">
                    Maturity Assessment
                  </p>
                  <div className="bg-white/50 rounded-xl p-3">
                    <p className="text-xs lg:text-sm lg:text-sm text-yellow-600">
                      AI readiness evaluation
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-gray-100 via-white to-gray-200 p-8 rounded-3xl text-center shadow-xl border-2 border-gray-300 relative overflow-hidden"
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  animate={{
                    ...floatingAnimation,
                    transition: { ...floatingAnimation.transition, delay: 1.5 },
                  }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-600"></div>
                  <FaCogs className="text-4xl text-gray-600 mx-auto mb-6 2xl:w-16 2xl:h-16 w-14 h-14" />
                  <h5 className="font-bold text-gray-800 text-xl mb-3">
                    Your Own Agents
                  </h5>
                  <p className="text-sm lg:text-base text-gray-700 mb-4">
                    Custom Solutions
                  </p>
                  <div className="bg-white/50 rounded-xl p-3">
                    <p className="text-xs lg:text-sm text-gray-600">
                      Build custom agents
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Architecture Demo Placeholder */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5 }}
            >
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border-2 border-blue-200">
                <h4 className="text-xl font-semibold mb-6 text-gray-800">
                  Interactive Architecture Demo
                </h4>
                <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
                  <img
                    src={illustration}
                    alt="AeroGenix Platform Architecture Demo"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                <p className="text-gray-600 mt-4 italic">
                  {/*  Replace with interactive demo showing data flow between components */}
                </p>
              </div>
            </motion.div>

            <motion.p
              className="text-center text-gray-800 mt-12 italic text-xl 2xl:text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4 }}
            >
              AeroGenix powers your entire intelligent agent lifecycle — from
              design to deployment, from reasoning to resilience.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
