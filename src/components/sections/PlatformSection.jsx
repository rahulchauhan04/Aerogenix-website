import React from "react"
import { FaCode, FaServer, FaBrain, FaEye, FaRocket, FaPlay } from "react-icons/fa"
import AnimatedSection from "../ui/AnimatedSection"
import PlatformCard from "../ui/PlatformCard"
import Button from "../ui/Button"
import FloatingParticles from "../ui/FloatingParticles"
import studioLogo from '../../assets/images/ai.png';
import runtimeLogo from '../../assets/images/runtime_logo.svg';
import gptLogo from '../../assets/images/hexagon.png';
import controlCenterLogo from '../../assets/images/control_logo.svg';

const PlatformSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <FloatingParticles count={25} />
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent underline">Build with the AeroGenix Platform</h2>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto mb-8">
            Everything You Need to Build, Deploy, and Scale Intelligent Agents
          </p>
          <div className="max-w-7xl mx-auto bg-white/60 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white/50">
            <p className="text-lg 2xl:text-xl text-gray-800 leading-relaxed mb-6">
              The AeroGenix Platform is your enterprise-grade foundation for designing, deploying, and managing
              intelligent agents — all within a single, unified system.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're building agents in-house or partnering with us to co-create for your industry, the platform
              gives you the power to go from concept to production with confidence.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <PlatformCard
            icon={studioLogo}
            title="AeroGenix Studio"
            description="Design intelligent agents using a low-code, drag-and-drop interface. Define logic, reasoning flows, and decision branches visually."
            features={[
              "Low-code, drag-and-drop interface",
              "Visual logic and reasoning flows",
              "Decision branch modeling",
              "Real-time preview and testing",
            ]}
            color="blue"
            delay={0}
          />
          <PlatformCard
            icon={runtimeLogo}
            title="AeroGenix Runtime"
            description="Power agent execution across cloud, edge, or on-prem environments. Enable agents to act autonomously and adapt in real time."
            features={[
              "Multi-environment deployment",
              "Autonomous agent execution",
              "Real-time adaptation",
              "Scalable infrastructure",
            ]}
            color="green"
            delay={0.1}
          />
          <PlatformCard
            icon={gptLogo}
            title="AeroGenix GPT"
            description="Fuel reasoning and understanding through contextual GenAI — supporting private models, RAG pipelines, and enterprise-grade governance."
            features={[
              "Contextual GenAI reasoning",
              "Private model support",
              "RAG pipeline integration",
              "Enterprise governance",
            ]}
            color="purple"
            delay={0.2}
          />
          <PlatformCard
            icon={controlCenterLogo}
            title="AeroGenix Control Center"
            description="Centrally manage agent deployments, enforce policies, and monitor performance across your entire ecosystem."
            features={[
              "Centralized agent management",
              "Policy enforcement",
              "Performance monitoring",
              "Ecosystem-wide visibility",
            ]}
            color="orange"
            delay={0.3}
          />
        </div>

        <AnimatedSection className="text-center">
          <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 shadow-xl border border-white/50 mb-12">
            <p className="text-2xl text-gray-800 leading-relaxed">
              From copilots to operational AI, AeroGenix brings intelligence to life — with every component working
              seamlessly together.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Button primary className="text-xl px-10 py-5" icon={<FaRocket />}>
              Try the AeroGenix Platform
            </Button>
            <Button className="text-xl px-10 py-5" icon={<FaPlay />}>
              Book a Demo
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default PlatformSection
