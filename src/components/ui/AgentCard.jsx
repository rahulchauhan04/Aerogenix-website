"use client"
import React from "react"
import { motion } from "framer-motion"
import { FaArrowRight } from "react-icons/fa"
import Button from "./Button"
import { floatingAnimation } from "../../utils/animations"

const AgentCard = ({ title, subtitle, description, useCase, deployIn, ctaText, delay = 0, icon, gradient }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className="bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-lg border border-white/50 hover:border-blue-200 transition-all duration-300 relative overflow-hidden group h-full flex flex-col"
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-blue-400"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
      />
      <div className="relative z-10 flex-1 flex flex-col">
        <div>          <div className="flex items-start mb-4">
            <motion.div className="text-blue-600 text-3xl mr-4 flex-shrink-0">
              <img src={icon} alt="Agent logo" className="w-10 h-10 lg:w-12 lg:h-12 object-contain"/>
            </motion.div>
            <div className="min-w-0 flex-1">
              <h3 className="text-xl lg:text-2xl font-bold mb-2 text-gray-800 leading-tight">{title}</h3>
              <p className="text-blue-600 font-semibold text-base lg:text-lg mb-4">{subtitle}</p>
            </div>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed text-sm lg:text-base">{description}</p>
          <div className="space-y-3 mb-6">
            <div className="bg-white/60 p-3 rounded-lg shadow">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">Use Case:</span> {useCase}
              </p>
            </div>
            <div className="bg-white/60 p-3 rounded-lg shadow">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">Deploy in:</span> {deployIn}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-auto">
          <Button primary className="w-full justify-center" icon={<FaArrowRight />}>
            {ctaText}
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export default AgentCard