'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import StatsSection from '@/components/StatsSection'
import InstructorGrid from '@/components/InstructorGrid'
import FaqSection from '@/components/FaqSection'
import { Music, Guitar, CalendarHeart } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary/50 to-background pt-20 pb-16">
        <div className="container text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold text-primary mb-4"
          >
            Empowering Communities Through Music, Craftsmanship, and Cultural Events
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Global Infinity Foundation is a non-profit organization dedicated to nurturing the
            transformative power of music in society.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" className="mr-4">Explore Our Work</Button>
            <Button size="lg" variant="outline">Get Involved</Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Focus Areas */}
      <section className="container py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Focus Areas
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <Music className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Music Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Providing accessible music learning opportunities, training programs, and workshops
                  to nurture young talent and promote cultural heritage.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <Guitar className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Instrument Production & Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Supporting the production and distribution of quality musical instruments while
                  promoting traditional craftsmanship.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CalendarHeart className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Events & Fundraising</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Organizing concerts, cultural festivals, and fundraising events that celebrate
                  music while generating resources for our initiatives.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-secondary/30 py-20">
        <div className="container grid md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-lg">
              To create a society where music education, cultural heritage, and artistic expression
              are accessible to all.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-lg">
              To promote music education, support traditional instrument craftsmanship, and organize
              cultural initiatives that generate sustainable resources for social development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Instructor Grid */}
      <InstructorGrid />

      {/* FAQ Section */}
      <FaqSection />

      {/* Newsletter CTA */}
      <section className="container py-20 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Trusted by Students Around the World</h2>
          <p className="text-muted-foreground mb-6">
            Sign up to receive emails with news and updates.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            />
            <Button>Subscribe</Button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}