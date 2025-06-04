"use client"
import React from "react"
import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { fadeInUp } from "../../utils/animations"

const AnimatedSection = ({ children, className, variants = fadeInUp }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={controls} className={className}>
      {children}
    </motion.div>
  )
}

export default AnimatedSection
