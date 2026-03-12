'use client'

import { motion } from 'framer-motion'
import { Users, Award, Music } from 'lucide-react'

const stats = [
  { icon: Users, value: '500+', label: 'Students Trained' },
  { icon: Award, value: '30+', label: 'Artisans Supported' },
  { icon: Music, value: '50+', label: 'Events Organized' },
]

export default function StatsSection() {
  return (
    <section className="bg-primary text-primary-foreground py-12">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <stat.icon className="w-12 h-12 mb-3" />
            <div className="text-3xl font-bold">{stat.value}</div>
            <div className="text-sm opacity-90">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}