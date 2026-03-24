'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaHome, FaWind, FaLeaf } from 'react-icons/fa'

const services = [
  {
    icon: FaHome,
    title: "Air Duct Cleaning",
    description: "Professional removal of dust, allergens, mold, and contaminants from your entire ductwork system.",
    price: "$299+",
    color: "from-primary to-secondary"
  },
  {
    icon: FaWind,
    title: "Dryer Vent Cleaning",
    description: "Eliminate lint buildup and prevent fire hazards. Improves drying efficiency by up to 40%.",
    price: "$149+",
    color: "from-secondary to-accent"
  },
  {
    icon: FaLeaf,
    title: "Air Quality Solutions",
    description: "UV light installation, air quality testing, and HVAC sanitization for healthier indoor air.",
    price: "$199+",
    color: "from-accent to-primary"
  }
]

export default function ServiceIcons() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Professional Air Duct Services
          </h2>
          <p className="text-textDark max-w-2xl mx-auto">
            Comprehensive solutions for cleaner air, improved efficiency, and peace of mind
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-secondary">
                <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center text-3xl text-white`}>
                  <service.icon />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{service.title}</h3>
                <p className="text-textDark mb-3 text-sm">{service.description}</p>
                <p className="text-accent font-bold mb-4">Starting at {service.price}</p>
                <Link href="/contact">
                  <button className="bg-secondary text-white px-4 py-2 rounded-lg hover:scale-105 transition-all text-sm font-semibold">
                    Get Estimate
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}