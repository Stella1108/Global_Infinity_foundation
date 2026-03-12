'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Mic, School, Award } from 'lucide-react'

const programs = [
  { icon: BookOpen, title: 'Classical music training programs' },
  { icon: Mic, title: 'Workshops and masterclasses by experienced musicians' },
  { icon: School, title: 'Outreach programs for schools and communities' },
  { icon: Award, title: 'Scholarships and support for talented students' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function MusicEducationPage() {
  return (
    <div className="container py-20">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-4xl font-bold text-primary mb-6"
      >
        Music Education
      </motion.h1>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ delay: 0.2 }}
        className="text-lg mb-12 max-w-2xl"
      >
        Music education is at the heart of Global Infinity Foundation&apos;s work. We provide learning
        opportunities that inspire creativity, discipline, and cultural appreciation.
      </motion.p>
      <div className="grid md:grid-cols-2 gap-6">
        {programs.map((prog, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <prog.icon className="w-10 h-10 text-primary mb-2" />
                <CardTitle>{prog.title}</CardTitle>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}