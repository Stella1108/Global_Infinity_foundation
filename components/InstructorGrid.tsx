'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

// Placeholder images – replace with actual Unsplash or local images
const instructors = [
  { name: 'Eric Martinetti', instrument: 'Violin', year: '2018', image: '/instructor1.jpg' },
  { name: 'David Butler', instrument: 'Guitar', year: '2020', image: '/instructor2.jpg' },
  { name: 'George White', instrument: 'Bass', year: '2020', image: '/instructor3.jpg' },
  { name: 'Andy Hall', instrument: 'Drums', year: '2020', image: '/instructor4.jpg' },
  { name: 'Dave Stryker', instrument: 'Piano', year: '2020', image: '/instructor5.jpg' },
  { name: 'Chris Esterline', instrument: 'Trumpet', year: '2020', image: '/instructor6.jpg' },
  { name: 'Misty Rains', instrument: 'Flute', year: '2020', image: '/instructor7.jpg' },
  { name: 'Caterina Lichtenberg', instrument: 'Voice', year: '2020', image: '/instructor8.jpg' },
  { name: 'Alison Brown', instrument: 'Violin', year: '2020', image: '/instructor9.jpg' },
  { name: 'Gritty Hines', instrument: 'Guitar', year: '2020', image: '/instructor10.jpg' },
  { name: 'Zachary Deak', instrument: 'Bass', year: '2020', image: '/instructor11.jpg' },
  { name: 'Allison de Groot', instrument: 'Piano', year: '2020', image: '/instructor12.jpg' },
  { name: 'Andy Mickles', instrument: 'Guitar', year: '2020', image: '/instructor13.jpg' },
  { name: 'Alex Hargreaves', instrument: 'Violin', year: '2020', image: '/instructor14.jpg' },
  { name: 'Mike Block', instrument: 'Piano', year: '2020', image: '/instructor15.jpg' },
  { name: 'Alex Karpeles', instrument: 'Violin', year: '2020', image: '/instructor16.jpg' },
  { name: 'Alex Karpeles', instrument: 'Piano', year: '2020', image: '/instructor17.jpg' },
]

export default function InstructorGrid() {
  return (
    <section className="container py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Learn from World‑Class Musicians & Artisans</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {instructors.map((person, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.02 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-square overflow-hidden rounded-lg mb-2 bg-muted">
              <Image
                src={person.image}
                alt={person.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="font-semibold text-sm">{person.name}</h3>
            <p className="text-xs text-muted-foreground">{person.instrument} • {person.year}</p>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button variant="outline" size="lg">View all instructors</Button>
      </div>
    </section>
  )
}