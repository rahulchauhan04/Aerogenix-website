"use client"
import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa"
import logo from '../../assets/images/ai.png'
import herobg9 from '../../assets/images/herobg9.png'

const Footer = () => {
  const footerStyle = {
    backgroundImage: `url(${herobg9})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    minHeight: '400px' // Reduced from 600px
  };

  const footerLinks = {
    platform: [
      { name: "AeroGenix Studio", href: "/platform/studio" },
      { name: "AeroGenix Runtime", href: "/platform/runtime" },
      { name: "AeroGenix Control Center", href: "/platform/control-center" },
      { name: "AeroGenix GPT", href: "/platform/gpt" }
    ],
    agents: [
      { name: "AeroChaos™", href: "/agents/aerochaos" },
      { name: "AeroEdge™", href: "/agents/aeroedge" },
      { name: "AeroInsight™", href: "/agents/aeroinsight" }
    ],
    resources: [
      { name: "Documentation", href: "/docs" },
      { name: "API Reference", href: "/docs/api" },
      { name: "Use Cases", href: "/use-cases" },
      { name: "Whitepapers", href: "/resources/whitepapers" }
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Pricing", href: "/pricing" },
      { name: "Blog", href: "/resources/blog" }
    ]
  };

  return (
    <footer className="relative text-white overflow-hidden" style={footerStyle}>
      {/* Lighter gradient overlay for better background visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/40 via-slate-900/50 to-slate-900/60"></div>
      
      {/* Reduced particles for cleaner look */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Brand Section - Reduced space */}
          <div className="lg:col-span-4">
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo and Brand */}
              <div className="flex items-center mb-4">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-xl p-2 shadow-lg">
                    <img 
                      src={logo} 
                      alt="AeroGenix AI Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>                <div className="ml-3">
                  <h2 className="logo-text-footer text-2xl font-bold leading-tight">
                    AeroGenix AI
                  </h2>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-sm">
                Empowering enterprises with intelligent agentic AI solutions. 
                Build, deploy, and scale autonomous agents that transform your business operations.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <motion.div 
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  <FaEnvelope className="mr-3 text-blue-400 text-sm" />
                  <span className="text-sm">contact@aerogenix.ai</span>
                </motion.div>
                <motion.div 
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  <FaPhone className="mr-3 text-blue-400 text-sm" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </motion.div>
                <motion.div 
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  <FaMapMarkerAlt className="mr-3 text-blue-400 text-sm" />
                  <span className="text-sm">San Francisco, CA</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Links Sections - Better alignment */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Platform Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-bold text-white mb-4 relative">
                Platform
                <div className="absolute bottom-0 left-0 w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              </h3>
              <ul className="space-y-2">
                {footerLinks.platform.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href} 
                      className="text-gray-300 hover:text-blue-400 transition-all duration-200 block text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Agents Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-bold text-white mb-4 relative">
                Agents
                <div className="absolute bottom-0 left-0 w-6 h-0.5 bg-gradient-to-r from-green-400 to-teal-400 rounded-full"></div>
              </h3>
              <ul className="space-y-2">
                {footerLinks.agents.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href} 
                      className="text-gray-300 hover:text-green-400 transition-all duration-200 block text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-bold text-white mb-4 relative">
                Resources
                <div className="absolute bottom-0 left-0 w-6 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              </h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href} 
                      className="text-gray-300 hover:text-purple-400 transition-all duration-200 block text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-lg font-bold text-white mb-4 relative">
                Company
                <div className="absolute bottom-0 left-0 w-6 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
              </h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href} 
                      className="text-gray-300 hover:text-orange-400 transition-all duration-200 block text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Signup - More compact */}
        <motion.div
          className="bg-gradient-to-r from-blue-600/15 to-purple-600/15 backdrop-blur-sm rounded-xl p-6 mb-8 border border-blue-500/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-bold text-white mb-3">
              Stay Updated with AeroGenix AI
            </h3>
            <p className="text-gray-300 mb-4 max-w-xl mx-auto text-sm">
              Get the latest updates on new features, agent applications, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-sm"
              />
              <motion.button
                className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
                <FaArrowRight className="ml-2 text-xs" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-600/30 pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} AeroGenix AI. All rights reserved. Powered by AeroAegis.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {[
                { icon: FaTwitter, href: "#", color: "hover:text-blue-400" },
                { icon: FaLinkedin, href: "#", color: "hover:text-blue-600" },
                { icon: FaGithub, href: "#", color: "hover:text-gray-300" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors duration-200`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex space-x-4">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
