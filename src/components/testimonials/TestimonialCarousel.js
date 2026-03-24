'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'

const testimonials = [
  {
    id: 1,
    name: "Robert Henderson",
    location: "Tampa, FL",
    text: "My allergies have improved significantly since PureFlow cleaned my ducts. The team was professional, on time, and showed me before/after photos. Highly recommend!",
    rating: 5,
    avatar: "R"
  },
  {
    id: 2,
    name: "Linda Patterson",
    location: "St. Petersburg, FL",
    text: "Great service! They explained everything upfront, no hidden fees. The technicians were knowledgeable and did a thorough job. My house feels so much fresher now.",
    rating: 5,
    avatar: "L"
  },
  {
    id: 3,
    name: "Thomas Bradley",
    location: "Clearwater, FL",
    text: "Best duct cleaning service in Tampa Bay. Fair pricing, excellent work, and they even pointed out some minor issues with my HVAC system. Very professional team.",
    rating: 5,
    avatar: "T"
  },
  {
    id: 4,
    name: "Amanda Foster",
    location: "Brandon, FL",
    text: "Technicians were punctual, courteous, and did a fantastic job. They wore shoe covers and cleaned up everything. My energy bills have gone down noticeably.",
    rating: 5,
    avatar: "A"
  },
  {
    id: 5,
    name: "James Morrison",
    location: "Lutz, FL",
    text: "Highly recommend PureFlow! They were thorough, answered all my questions, and the price was exactly what they quoted. My home feels cleaner and smells fresher.",
    rating: 5,
    avatar: "J"
  }
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [])

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0
    })
  }

  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join hundreds of satisfied homeowners who have experienced cleaner air and improved HVAC efficiency
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-2xl font-bold">
                  {testimonials[current].avatar}
                </div>
              </div>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <FiStar key={i} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="text-lg mb-4 italic">"{testimonials[current].text}"</p>
              <p className="font-bold text-xl">{testimonials[current].name}</p>
              <p className="text-gray-300">{testimonials[current].location}</p>
            </motion.div>
          </AnimatePresence>
          
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-12 bg-white/20 hover:bg-white/30 rounded-full p-2 transition"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-12 bg-white/20 hover:bg-white/30 rounded-full p-2 transition"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
        
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > current ? 1 : -1)
                setCurrent(idx)
              }}
              className={`w-2 h-2 rounded-full transition ${
                idx === current ? 'bg-accent w-6' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}