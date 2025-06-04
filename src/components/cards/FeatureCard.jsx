"use client"
import React from "react"
import { motion } from "framer-motion"

const FeatureCard = ({ icon, title, description, delay = 0, gradient = "from-blue-50 to-indigo-50" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)" }}
      className={`bg-gradient-to-br ${gradient} p-8 rounded-2xl shadow-lg border border-white/50 hover:border-blue-200 transition-all duration-300 relative overflow-hidden group backdrop-blur-sm`}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
      <div className="relative z-10">
        <motion.div
          className="text-blue-600 text-4xl mb-6 inline-block"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

export default FeatureCard
