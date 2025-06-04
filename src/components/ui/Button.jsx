"use client"
import React from "react"
import { motion } from "framer-motion"

const Button = ({ primary, children, className = "", icon, onClick, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center relative overflow-hidden ${
        primary
          ? "bg-gradient-to-r from-blue-700 via-blue-700 to-blue-800 text-white hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 shadow-xl cursor-pointer"
          : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700 bg-white/80 backdrop-blur-sm cursor-pointer"
      } ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center">
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </span>
      {primary && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0"
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  )
}

export default Button
