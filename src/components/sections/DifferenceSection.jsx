"use client";
import React, { useRef, useState, useEffect } from "react";
import { 
  FaBrain, 
  FaCogs, 
  FaShieldAlt, 
  FaChartLine, 
  FaRocket,
  FaPlay,
  FaArrowRight,
  FaStar,
  FaCheckCircle,
  FaCode,
  FaCloud,
  FaLightbulb,
  FaDatabase,
  FaNetworkWired,
  FaUserCog,
  FaChartBar
} from "react-icons/fa";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import proper logos
import studioLogo from '../../assets/images/ai.png';
import runtimeLogo from '../../assets/images/runtime_logo.svg';
import controlLogo from '../../assets/images/control_logo.svg';
import hexagonLogo from '../../assets/images/hexagon.png';

const storySteps = [
  {
    id: 1,
    number: "01",
    icon: <FaBrain className="text-5xl" />,
    title: "Built for Autonomy, Not Just Automation",
    subtitle: "Where traditional RPA ends and reactive automation plateaus — AeroGenix begins",
    description: "AeroGenix agents operate with awareness of your business context, goals, and constraints. They don't need a human-in-the-loop to take smart actions — unless you decide they should.",
    capabilities: [
      "Understand tasks through AeroGenix GPT",
      "Execute safely via AeroGenix Runtime", 
      "Govern securely through AeroGenix Control Center"
    ],
    insight: "You don't just configure workflows — you design cognitive behavior.",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    bgGradient: "from-indigo-50 to-purple-50",
    accentColor: "indigo",
    visualContent: {
      mainIcon: <FaBrain className="text-6xl" />,
      bgPattern: "cognitive-waves",
      color: "indigo"
    }
  },
  {
    id: 2,
    number: "02", 
    icon: <FaCogs className="text-5xl" />,
    title: "End-to-End Agent Lifecycle in One Platform",
    subtitle: "No need to glue together tools, prompt chains, and scripts",
    description: "AeroGenix brings everything under one unified foundation. Whether you're launching a single support agent or deploying hundreds across edge infrastructure — you're covered.",
    capabilities: [
      "AeroGenix Studio to design your agent",
      "AeroGenix Runtime to execute and adapt in real time",
      "AeroGenix GPT to power reasoning and natural language understanding", 
      "AeroGenix Control Center to manage, monitor, and govern your agent fleet"
    ],
    insight: "One platform, infinite possibilities.",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    bgGradient: "from-cyan-50 to-blue-50",
    accentColor: "cyan",
    visualContent: {
      mainIcon: <FaCogs className="text-6xl" />,
      bgPattern: "platform-grid",
      color: "cyan"
    }
  },
  {
    id: 3,
    number: "03",
    icon: <FaShieldAlt className="text-5xl" />,
    title: "Enterprise-Grade from Day One", 
    subtitle: "Built for real-world enterprise environments",
    description: "We don't give you a model and leave you with the complexity. We give you a platform that lets your intelligence operate with confidence.",
    capabilities: [
      "On-prem or edge deployments",
      "Fine-tuned models with explainability",
      "Policy enforcement, SLA tracking, and token governance",
      "Multi-agent orchestration and observability"
    ],
    insight: "Confidence, not complexity.",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    bgGradient: "from-emerald-50 to-teal-50", 
    accentColor: "emerald",
    visualContent: {
      mainIcon: <FaShieldAlt className="text-6xl" />,
      bgPattern: "security-mesh",
      color: "emerald"
    }
  },
  {
    id: 4,
    number: "04",
    icon: <FaChartLine className="text-5xl" />,
    title: "Outcomes, Not Experiments",
    subtitle: "Your teams want results — not just a sandbox",
    description: "AeroGenix is where enterprise AI becomes measurable, scalable, and strategic.",
    capabilities: [
      "Deploy intelligent copilots for operations, IT, or CX",
      "Automate edge decision-making with zero latency", 
      "Validate your infrastructure's fault resilience",
      "Assess your digital maturity and prioritize investments"
    ],
    insight: "Measurable, scalable, and strategic enterprise AI.",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    bgGradient: "from-violet-50 to-purple-50",
    accentColor: "violet",
    visualContent: {
      mainIcon: <FaChartLine className="text-6xl" />,
      bgPattern: "data-flow",
      color: "violet"
    }
  }
];

export default function DifferenceSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const stepRefs = useRef([]);

  // Intersection Observer for step detection
  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(index);
          }
        },        { 
          threshold: 0.3,
          rootMargin: "-30% 0px -30% 0px"
        }
      );
      
      observer.observe(ref);
      return observer;
    });
    
    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);
  // Visual content for each step with sophisticated backgrounds and animations
  const getVisualContent = (stepIndex) => {
    const step = storySteps[stepIndex];
    
    // Step 1: Autonomy - Clean Professional AI Workflow
    if (stepIndex === 0) {
      return (
        <motion.div
          key="autonomy"
          className="w-full h-full relative overflow-hidden bg-gradient-to-br from-slate-50 to-white rounded-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/20" />
            
            {/* Minimal Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #3b82f6 1px, transparent 1px),
                  linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          {/* Main Content - Clean Layout */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center p-8">
            
            {/* Top Badge */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-sm font-medium text-blue-700">Cognitive Intelligence</span>
              </div>
            </motion.div>

            {/* Central Brain Visualization */}
            <motion.div 
              className="relative mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Main Brain Container */}
              <motion.div
                className="relative w-24 h-24 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-lg"
                animate={{
                  boxShadow: [
                    '0 10px 30px rgba(59, 130, 246, 0.1)',
                    '0 20px 40px rgba(59, 130, 246, 0.15)',
                    '0 10px 30px rgba(59, 130, 246, 0.1)',
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    color: ['#3b82f6', '#6366f1', '#3b82f6']
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <FaBrain className="text-3xl" />
                </motion.div>
              </motion.div>
              
              {/* Subtle Orbiting Elements */}
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-blue-400/60"
                  style={{
                    left: '50%',
                    top: '50%',
                    transformOrigin: `0 ${40 + i * 8}px`,
                  }}
                  animate={{
                    rotate: [0, 360],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </motion.div>

            {/* Process Flow - Clean Cards */}
            <motion.div 
              className="w-full max-w-md space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { label: 'Data Input', icon: FaDatabase, color: 'blue' },
                { label: 'AI Processing', icon: FaBrain, color: 'indigo' },
                { label: 'Smart Actions', icon: FaUserCog, color: 'green' }
              ].map((step, idx) => (
                <motion.div
                  key={step.label}
                  className="flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
                  animate={{
                    x: [0, 4, 0],
                    boxShadow: [
                      '0 4px 15px rgba(0, 0, 0, 0.05)',
                      '0 8px 25px rgba(0, 0, 0, 0.08)',
                      '0 4px 15px rgba(0, 0, 0, 0.05)',
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: idx * 0.5,
                  }}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    step.color === 'blue' ? 'bg-blue-50' :
                    step.color === 'indigo' ? 'bg-indigo-50' :
                    'bg-green-50'
                  }`}>
                    <step.icon className={`text-lg ${
                      step.color === 'blue' ? 'text-blue-600' :
                      step.color === 'indigo' ? 'text-indigo-600' :
                      'text-green-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 text-sm">{step.label}</div>
                  </div>
                  <motion.div
                    className="w-2 h-2 rounded-full bg-blue-500"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.3,
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Insight */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Built for Autonomy
              </h4>
              <p className="text-sm text-gray-600 max-w-xs">
                Design cognitive behavior, not just workflows
              </p>
            </motion.div>
          </div>
        </motion.div>
      );
    }

    // Step 2: Platform Integration - Clean Professional Layout
    if (stepIndex === 1) {
      return (
        <motion.div
          key="platform"
          className="w-full h-full relative overflow-hidden bg-gradient-to-br from-slate-50 to-white rounded-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Subtle Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/30 to-blue-50/20" />
            
            {/* Minimal Connection Lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-px h-32 bg-gradient-to-b from-transparent via-cyan-200 to-transparent opacity-30" />
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center p-8">
            
            {/* Top Badge */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-100 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                <span className="text-sm font-medium text-cyan-700">Unified Platform</span>
              </div>
            </motion.div>

            {/* Platform Stack */}
            <motion.div 
              className="w-full max-w-sm space-y-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {[
                { name: 'Studio', logo: studioLogo, color: 'blue' },
                { name: 'Runtime', logo: runtimeLogo, color: 'green' },
                { name: 'GPT', logo: hexagonLogo, color: 'purple' },
                { name: 'Control Center', logo: controlLogo, color: 'orange' }
              ].map((component, idx) => (
                <motion.div
                  key={component.name}
                  className="flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
                  animate={{
                    x: [0, 3, 0],
                    boxShadow: [
                      '0 4px 15px rgba(0, 0, 0, 0.05)',
                      '0 8px 25px rgba(0, 0, 0, 0.08)',
                      '0 4px 15px rgba(0, 0, 0, 0.05)',
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: idx * 0.3,
                  }}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center p-1 ${
                    component.color === 'blue' ? 'bg-blue-50' :
                    component.color === 'green' ? 'bg-green-50' :
                    component.color === 'purple' ? 'bg-purple-50' :
                    'bg-orange-50'
                  }`}>
                    <img 
                      src={component.logo} 
                      alt={component.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 text-sm">AeroGenix {component.name}</div>
                  </div>
                  <motion.div
                    className={`w-2 h-2 rounded-full ${
                      component.color === 'blue' ? 'bg-blue-500' :
                      component.color === 'green' ? 'bg-green-500' :
                      component.color === 'purple' ? 'bg-purple-500' :
                      'bg-orange-500'
                    }`}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.2,
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Central Integration Hub */}
            <motion.div 
              className="relative mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                className="w-16 h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-lg"
                animate={{
                  boxShadow: [
                    '0 10px 30px rgba(6, 182, 212, 0.1)',
                    '0 20px 40px rgba(6, 182, 212, 0.15)',
                    '0 10px 30px rgba(6, 182, 212, 0.1)',
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    color: ['#06b6d4', '#3b82f6', '#06b6d4']
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <FaCogs className="text-2xl" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Bottom Insight */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                End-to-End Platform
              </h4>
              <p className="text-sm text-gray-600 max-w-xs">
                One platform, infinite possibilities
              </p>
            </motion.div>
          </div>
        </motion.div>
      );
    }

    // Step 3: Enterprise Security - Clean Professional Layout
    if (stepIndex === 2) {
      return (
        <motion.div
          key="enterprise"
          className="w-full h-full relative overflow-hidden bg-gradient-to-br from-slate-50 to-white rounded-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Subtle Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-green-50/20" />
          </div>

          {/* Main Content */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center p-8">
            
            {/* Top Badge */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span className="text-sm font-medium text-emerald-700">Enterprise Security</span>
              </div>
            </motion.div>

            {/* Central Shield */}
            <motion.div 
              className="relative mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="w-24 h-24 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-lg"
                animate={{
                  boxShadow: [
                    '0 10px 30px rgba(16, 185, 129, 0.1)',
                    '0 20px 40px rgba(16, 185, 129, 0.15)',
                    '0 10px 30px rgba(16, 185, 129, 0.1)',
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    color: ['#10b981', '#059669', '#10b981']
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <FaShieldAlt className="text-3xl" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Security Features */}
            <motion.div 
              className="w-full max-w-md space-y-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { label: 'On-Premise Deployment', icon: FaCloud, color: 'emerald' },
                { label: 'Edge Intelligence', icon: FaNetworkWired, color: 'emerald' },
                { label: 'Policy Governance', icon: FaShieldAlt, color: 'emerald' },
                { label: 'SLA Monitoring', icon: FaChartBar, color: 'emerald' }
              ].map((feature, idx) => (
                <motion.div
                  key={feature.label}
                  className="flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
                  animate={{
                    x: [0, 3, 0],
                    boxShadow: [
                      '0 4px 15px rgba(0, 0, 0, 0.05)',
                      '0 8px 25px rgba(0, 0, 0, 0.08)',
                      '0 4px 15px rgba(0, 0, 0, 0.05)',
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: idx * 0.3,
                  }}
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <feature.icon className="text-lg text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 text-sm">{feature.label}</div>
                  </div>
                  <motion.div
                    className="w-2 h-2 rounded-full bg-emerald-500"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.2,
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Insight */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Enterprise-Grade Security
              </h4>
              <p className="text-sm text-gray-600 max-w-xs">
                Confidence, not complexity
              </p>
            </motion.div>
          </div>
        </motion.div>
      );
    }

    // Step 4: Strategic Outcomes - Clean Professional Layout
    if (stepIndex === 3) {
      return (
        <motion.div
          key="outcomes"
          className="w-full h-full relative overflow-hidden bg-gradient-to-br from-slate-50 to-white rounded-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Subtle Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-50/30 to-purple-50/20" />
          </div>

          {/* Main Content */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center p-8">
            
            {/* Top Badge */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-100 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-violet-500 rounded-full" />
                <span className="text-sm font-medium text-violet-700">Strategic Results</span>
              </div>
            </motion.div>

            {/* Central Analytics Icon */}
            <motion.div 
              className="relative mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="w-24 h-24 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-lg"
                animate={{
                  boxShadow: [
                    '0 10px 30px rgba(139, 92, 246, 0.1)',
                    '0 20px 40px rgba(139, 92, 246, 0.15)',
                    '0 10px 30px rgba(139, 92, 246, 0.1)',
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    color: ['#8b5cf6', '#7c3aed', '#8b5cf6']
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <FaChartLine className="text-3xl" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Metrics Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-3 w-full max-w-sm mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { label: 'ROI Increase', value: '250%', icon: FaChartLine, color: 'violet' },
                { label: 'Efficiency', value: '85%', icon: FaLightbulb, color: 'violet' },
                { label: 'Scale Factor', value: '10x', icon: FaRocket, color: 'violet' },
                { label: 'Uptime', value: '99.9%', icon: FaShieldAlt, color: 'violet' }
              ].map((metric, idx) => (
                <motion.div
                  key={metric.label}
                  className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-center"
                  animate={{
                    y: [0, -2, 0],
                    boxShadow: [
                      '0 4px 15px rgba(0, 0, 0, 0.05)',
                      '0 8px 25px rgba(0, 0, 0, 0.08)',
                      '0 4px 15px rgba(0, 0, 0, 0.05)',
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: idx * 0.2,
                  }}
                >
                  <div className="mb-2">
                    <metric.icon className="text-xl text-violet-600 mx-auto" />
                  </div>
                  <div className="text-lg font-bold text-violet-600 mb-1">{metric.value}</div>
                  <div className="text-xs font-medium text-gray-700">{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Insight */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Measurable Outcomes
              </h4>
              <p className="text-sm text-gray-600 max-w-xs">
                Strategic, scalable enterprise AI results
              </p>
            </motion.div>
          </div>
        </motion.div>
      );
    }

    // Fallback
    return null;
  };
  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30"
    >
      {/* Smooth Top Gradient Transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-20 pointer-events-none" />
      
      {/* Smooth Bottom Gradient Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none" />
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-32 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [180, 0, 180],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>      {/* Header Section */}
      <div className="relative z-10 text-center pt-20 pb-12 px-6">
        <motion.div
          className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-6 py-3 mb-8 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-gray-700">
            Why Enterprises Choose AeroGenix for Agentic AI
          </span>
        </motion.div>
        
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          What Makes{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            AeroGenix
          </span>{" "}
          Different
        </motion.h1>
        
        <motion.p
          className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          AeroGenix was built for a new era of enterprise intelligence.
          <br />
          <span className="font-semibold text-gray-800">
            Where traditional RPA ends and reactive automation plateaus — AeroGenix begins.
          </span>
        </motion.p>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Scrolling Steps */}
          <div className="lg:w-1/2 space-y-16 lg:space-y-32">
            {storySteps.map((step, index) => (
              <div
                key={step.id}
                ref={el => stepRefs.current[index] = el}
                className="min-h-[400px] lg:min-h-[600px] flex items-center py-8 lg:py-12"
              >
                <motion.div
                  className="w-full"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Clean Step Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                        <span className="text-sm font-bold text-gray-600">{step.number}</span>
                      </div>
                      <div className="h-px bg-gray-200 w-12"></div>
                    </div>
                  </div>

                  {/* Main Content Card */}
                  <motion.div
                    className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                    whileHover={{ y: -2 }}
                  >
                    {/* Icon and Title */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                        <div className="text-gray-700 text-xl">
                          {step.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm lg:text-base">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Capabilities List */}
                    <div className="space-y-3 mb-6">
                      {step.capabilities.map((capability, idx) => (
                        <motion.div
                          key={capability}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                          </div>
                          <span className="text-gray-700 text-sm lg:text-base leading-relaxed">
                            {capability}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Insight Quote */}
                    <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-blue-500">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FaStar className="text-yellow-600 text-xs" />
                        </div>
                        <p className="text-gray-800 font-medium text-sm lg:text-base italic">
                          {step.insight}
                        </p>
                      </div>
                    </div>

                    {/* Mobile Visual - Show on mobile only */}
                    <div className="lg:hidden mt-8">
                      <div className="bg-gray-50 rounded-xl p-6 min-h-[300px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                          {getVisualContent(index)}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Right Column - Sticky Visual (Desktop Only) */}
          <div className="hidden lg:block lg:w-1/2">
            <div className="lg:sticky lg:top-24 lg:h-screen flex items-center">
              <div className="w-full max-w-2xl mx-auto">
                <motion.div
                  className="relative min-h-[600px] flex items-center justify-center bg-white rounded-2xl shadow-sm border border-gray-100"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <AnimatePresence mode="wait">
                    {getVisualContent(activeStep)}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Spacing */}
      <div className="h-16" />

    </section>
  );
}