'use client'
import { useState, useEffect } from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('/api/testimonials')
      const data = await response.json()
      setTestimonials(data)
    } catch (error) {
      console.error('Error fetching testimonials:', error)
      // Fallback testimonials
      setTestimonials([
        {
          name: "Robert Henderson",
          location: "Tampa, FL",
          text: "My allergies have improved significantly since PureFlow cleaned my ducts. The team was professional, on time, and showed me before/after photos.",
          rating: 5
        },
        {
          name: "Linda Patterson",
          location: "St. Petersburg, FL",
          text: "Great service! They explained everything upfront, no hidden fees. The technicians were knowledgeable and did a thorough job.",
          rating: 5
        },
        {
          name: "Thomas Bradley",
          location: "Clearwater, FL",
          text: "Best duct cleaning service in Tampa Bay. Fair pricing, excellent work, and they even pointed out some minor issues with my HVAC system.",
          rating: 5
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse">Loading testimonials...</div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-textDark max-w-2xl mx-auto">
            Join hundreds of satisfied homeowners who have experienced cleaner air
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 relative"
            >
              <FaQuoteLeft className="text-accent/20 text-4xl absolute top-4 right-4" />
              <div className="flex text-accent mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-textDark mb-4 italic">"{testimonial.text}"</p>
              <div className="mt-4">
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}