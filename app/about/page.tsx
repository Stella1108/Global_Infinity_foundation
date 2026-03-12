'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="container py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-primary mb-6"
      >
        About Global Infinity Foundation
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="prose max-w-3xl"
      >
        <p className="text-lg mb-4">
          Global Infinity Foundation is committed to advancing music as a tool for education,
          cultural preservation, and community development. The foundation brings together educators,
          musicians, artisans, and supporters who believe in the positive impact of music on society.
        </p>
        <p className="text-lg mb-4">
          Through carefully designed programs and initiatives, the foundation works to expand access
          to music education, support instrument makers, and create meaningful cultural experiences
          through events.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
        <p className="text-lg mb-4">
          To build a world where music becomes a bridge connecting culture, education, and community
          growth.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="text-lg">
          To promote music education, support the craftsmanship of traditional musical instruments,
          and organize cultural events that raise resources for meaningful social initiatives.
        </p>
      </motion.div>
    </div>
  )
}