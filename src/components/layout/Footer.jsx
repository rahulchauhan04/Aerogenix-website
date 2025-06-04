"use client"
import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import logo from '../../assets/images/logo2.png'

const Footer = () => {
  return (
    <footer className="text-black py-16 bg-white">
      <div className="container mx-auto px-">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <motion.div className="flex items-center mb-6" whileHover={{ scale: 1.05 }}>
              <img src={logo} alt="AeroAegis Logo" className="h-10" />
              <span className="ml-3 text-2xl font-bold">AeroAegis</span>
            </motion.div>
            <p className="text-gray-500 max-w-lg text-lg leading-relaxed">
              Empowering enterprises with intelligent solutions for digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-indigo-800">Platform</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/platform" className="text-gray-400 hover:text-indigo-800 transition-colors text-base">
                    AeroGenix Studio
                  </Link>
                </li>
                <li>
                  <Link to="/platform" className="text-gray-400 hover:text-indigo-800 transition-colors text-base">
                    AeroGenix Runtime
                  </Link>
                </li>
                <li>
                  <Link to="/platform" className="text-gray-400 hover:text-indigo-800 transition-colors text-base">
                    AeroGenix GPT
                  </Link>
                </li>
                <li>
                  <Link to="/platform" className="text-gray-400 hover:text-indigo-800 transition-colors text-base">
                    Control Center
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-indigo-800">Agents</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/agents" className="text-gray-400 hover:text-indigo-800 transition-colors text-base">
                    AeroChaos™
                  </Link>
                </li>
                <li>
                  <Link to="/agents" className="text-gray-400 hover:text-indigo-800 transition-colors text-base">
                    AeroEdge™
                  </Link>
                </li>
                <li>
                  <Link to="/agents" className="text-gray-400 hover:text-indigo-800 transition-colors text-base">
                    AeroInsight™
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-indigo-800">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-indigo-800 transition-colors text-base">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-indigo-800 transition-colors text-base">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-indigo-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0 text-lg">
            © {new Date().getFullYear()} AeroAegis. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <Link to="/privacy" className="text-gray-400 hover:text-indigo-800 transition-colors text-lg">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-indigo-800 transition-colors text-lg">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
