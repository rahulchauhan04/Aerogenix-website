"use client"
import React from "react"
import { motion } from "framer-motion"
import { FaCheckCircle } from "react-icons/fa"

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  },
}

const PlatformCard = ({ icon, title, description, features, color = "blue", delay = 0 }) => {
  const colorClasses = {
    blue: "from-blue-50 to-blue-100 border-blue-200 text-blue-600",
    green: "from-green-50 to-green-100 border-green-200 text-green-600",
    purple: "from-purple-50 to-purple-100 border-purple-200 text-purple-600",
    orange: "from-orange-50 to-orange-100 border-orange-200 text-orange-600",
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`bg-gradient-to-br ${colorClasses[color]} p-8 rounded-2xl shadow-lg border-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
    >
      <div className="relative z-10">
        <div className="flex items-start mb-6">
          <motion.div className={`${colorClasses[color].split(" ")[2]} text-3xl mr-4 mt-1`} animate={pulseAnimation}>
            {icon}
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
            <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
          </div>
        </div>
        {features && (
          <div className="space-y-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: delay + 0.1 * index }}
                className="flex items-center text-gray-600"
              >
                <FaCheckCircle className="text-green-500 mr-3 text-sm" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default PlatformCard
