"use client"
import React from "react"
import { FaBrain, FaCogs, FaShieldAlt, FaChartLine } from "react-icons/fa"
import AnimatedSection from "../ui/AnimatedSection"
import FeatureCard from "../ui/FeatureCard"
import GeometricPattern from "../ui/GeometricPattern"
import { staggerContainer } from "../../utils/animations"
import { motion } from "framer-motion"

const DifferenceSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
      <GeometricPattern />
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-700 via-purple-500 to-blue-800 bg-clip-text text-transparent">What Makes AeroGenix Different</h2>
          <p className="text-2xl text-blue-700 mb-6 font-semibold">
            Why Enterprises Are Moving to Agentic AI — with AeroGenix
          </p>
          <div className="max-w-5xl mx-auto bg-white/60 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white/50">
            <p className="text-xl text-gray-800 leading-relaxed">
              AeroGenix was built for a new era of enterprise intelligence. Where traditional RPA ends and reactive
              automation plateaus — AeroGenix begins. We empower you to create agents that don't just follow
              instructions — they think, act, and adapt in real time.
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          <FeatureCard
            icon={<FaBrain />}
            title="Built for Autonomy, Not Just Automation"
            description="AeroGenix agents operate with awareness of your business context, goals, and constraints. They don't need a human-in-the-loop to take smart actions — unless you decide they should. Understand tasks through AeroGenix GPT, execute safely via AeroGenix Runtime, and govern securely through AeroGenix Control Center. You don't just configure workflows — you design cognitive behavior."
            delay={0}
            gradient="from-blue-50 via-purple-50 to-white"
          />
          <FeatureCard
            icon={<FaCogs />}
            title="End-to-End Agent Lifecycle in One Platform"
            description="No need to glue together tools, prompt chains, and scripts. AeroGenix brings everything under one unified foundation: AeroGenix Studio to design your agent, AeroGenix Runtime to execute and adapt in real time, AeroGenix GPT to power reasoning and natural language understanding, AeroGenix Control Center to manage, monitor, and govern your agent fleet. Whether you're launching a single support agent or deploying hundreds across edge infrastructure — you're covered."
            delay={0.1}
            gradient="from-green-50 via-blue-50 to-white"
          />
          <FeatureCard
            icon={<FaShieldAlt />}
            title="Enterprise-Grade from Day One"
            description="AeroGenix was built for real-world enterprise environments: On-prem or edge deployments, fine-tuned models with explainability, policy enforcement, SLA tracking, and token governance, multi-agent orchestration and observability. We don't give you a model and leave you with the complexity. We give you a platform that lets your intelligence operate with confidence."
            delay={0.2}
            gradient="from-orange-50 via-red-50 to-white"
          />
          <FeatureCard
            icon={<FaChartLine />}
            title="Outcomes, Not Experiments"
            description="Your teams want results — not just a sandbox. With AeroGenix, you can: Deploy intelligent copilots for operations, IT, or CX, automate edge decision-making with zero latency, validate your infrastructure's fault resilience, assess your digital maturity and prioritize investments. AeroGenix is where enterprise AI becomes measurable, scalable, and strategic."
            delay={0.3}
            gradient="from-indigo-50 via-pink-50 to-white"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default DifferenceSection
