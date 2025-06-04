import React from "react"
import { FaShieldAlt, FaMicrochip, FaChartLine } from "react-icons/fa"
import AnimatedSection from "../ui/AnimatedSection"
import AgentCard from "../ui/AgentCard"
import GeometricPattern from "../ui/GeometricPattern"
import aeroInsightLogo from '../../assets/images/aeroInsightLogo.svg'
import aeroChaosLogo from '../../assets/images/aeroChaosLogo.png'
import aeroedgeLogo from '../../assets/images/aeroedge.jpg'

const AgentApplicationsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      <GeometricPattern />
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Agent Applications Powered by AeroGenix</h2>
          <p className="text-2xl text-gray-800 max-w-4xl mx-auto mb-8 font-medium">
            Pre-Built Agents That Deliver Enterprise Value — From Day One
          </p>
          <div className="max-w-5xl mx-auto bg-white/60 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white/50">
            <p className="text-lg text-gray-700 leading-relaxed">
              AeroGenix doesn't just help you build intelligent agents — it also offers domain-ready applications
              designed to solve high-impact enterprise challenges. These intelligent agents are built using the
              AeroGenix Platform and can be deployed, customized, or extended to fit your environment.
            </p>
          </div>
        </AnimatedSection>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Explore our growing library of production-ready agents:
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <AgentCard
            title="AeroChaos™"
            subtitle="Resilience Engineering Agent"
            description="Continuously test your application's fault tolerance. Simulate failures, measure blast radius, and validate SLA compliance — before going live."
            useCase="Chaos Engineering, Fault Injection, SLA Validation"
            deployIn="Cloud or on-prem environments"
            ctaText="Learn More"
            delay={0}
            icon={aeroChaosLogo}
            gradient="from-red-50 to-orange-50"
          />
          <AgentCard
            title="AeroEdge™"
            subtitle="Edge Intelligence Agent"
            description="Deploy intelligence directly at the edge. Predict anomalies, take local action, and operate autonomously — even without internet connectivity."
            useCase="Predictive Maintenance, IoT Automation, Edge AI"
            deployIn="Gateways, industrial PCs, embedded systems"
            ctaText="Learn More"
            delay={0.1}
            icon={aeroedgeLogo}
            gradient="from-teal-50 to-cyan-50"
          />
          <AgentCard
            title="AeroInsight™"
            subtitle="Digital & AI Maturity Assessment Engine"
            description="Benchmark your organization's readiness for AI and automation. Identify gaps, define KPIs, and receive a roadmap aligned to your strategic goals."
            useCase="AI Transformation Planning, Executive Dashboards"
            deployIn="Web, Intranet, or Platform Portal"
            ctaText="Start Your Assessment"
            delay={0.2}
            icon={aeroInsightLogo}
            gradient="from-indigo-50 to-purple-50"
          />
        </div>
      </div>
    </section>
  )
}

export default AgentApplicationsSection
