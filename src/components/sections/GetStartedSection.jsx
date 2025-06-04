"use client"
import React from "react"
import { motion } from "framer-motion"
import { FaPlay, FaCode, FaUsers, FaDesktop, FaHandshake, FaRocket, FaRobot } from "react-icons/fa"
import AnimatedSection from "../ui/AnimatedSection"
import Button from "../ui/Button"
import FloatingParticles from "../ui/FloatingParticles"
import { slideInLeft, slideInRight } from "../../utils/animations"

const GetStartedSection = () => {
  return (
    <section className="py-24 bg-blue-50 text-black relative overflow-hidden">
      <FloatingParticles count={35} />
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent underline">Get Started with AeroGenix</h2>
          <p className="text-2xl mb-6 font-semibold">Build Your First Agent. Or Build the Future with Us.</p>
          <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <p className="text-xl opacity-90 leading-relaxed">
              Whether you're ready to launch your first intelligent agent or looking to embed agentic AI across your
              enterprise — AeroGenix gives you the foundation and flexibility to scale with confidence.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-sky-50 via-blue-50 to-white backdrop-blur-sm p-10 rounded-3xl shadow-md border border-blue-300"
          >
            <h3 className="text-3xl font-bold mb-8 flex items-center text-blue-700">
              <FaDesktop className="mr-4" />
              Start Building with AeroGenix Foundation
            </h3>
            <p className="text-xl mb-6 opacity-80 text-gray-700">Leverage the full stack:</p>
            <div className="bg-white/20 rounded-2xl p-6 mb-8 shadow shadow-blue-300">
              <p className="text-2xl font-semibold mb-6 text-blue-600 ">
                Studio + Runtime + GPT + Control = Intelligent Agents, Built to Scale
              </p>
            </div>
            <div className="space-y-4 mb-8">
              <motion.div className="flex items-center text-lg" whileHover={{ x: 10 }}>
                <FaCode className="mr-4 text-blue-300 text-xl" />
                Design your first agent in Studio
              </motion.div>
              <motion.div className="flex items-center text-lg" whileHover={{ x: 10 }}>
                <FaCode className="mr-4 text-green-300 text-xl" />
                Run it with real-time intelligence via Runtime
              </motion.div>
              <motion.div className="flex items-center text-lg" whileHover={{ x: 10 }}>
                <FaCode className="mr-4 text-purple-300 text-xl" />
                Power it with private GPT reasoning
              </motion.div>
              <motion.div className="flex items-center text-lg" whileHover={{ x: 10 }}>
                <FaCode className="mr-4 text-orange-300 text-xl" />
                Manage it through enterprise-grade governance
              </motion.div>
            </div>
            <p className="text-xl opacity-90 font-medium">Every component is modular. Every outcome is measurable.</p>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-sky-50 via-blue-50 to-white backdrop-blur-sm p-10 rounded-3xl shadow-md border border-blue-300"
          >
            <h3 className="text-3xl font-bold mb-8 flex items-center text-blue-700">
              <FaHandshake className="mr-4" />
              Co-Create with Us
            </h3>
            <div className="space-y-6 mb-8">
              <p className="text-lg opacity-90">Have a specialized vertical?</p>
              <p className="text-lg opacity-90">
                Need support aligning agent capabilities with regulatory or mission-critical systems?
              </p>
              <p className="text-lg opacity-90">
                Work with the AeroAegis team to define, build, and launch agentic intelligence for your unique needs —
                from automotive to aerospace, finance to frontline care.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 shadow shadow-blue-300 text-blue-500">
              <p className="text-xl font-semibold mb-4 flex items-center gap-x-3"><FaRocket />We don't just deliver a platform.</p>
              <p className="text-xl font-semibold flex items-center gap-x-3"><FaRobot />We build agent-driven ecosystems, together.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default GetStartedSection
