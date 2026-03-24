'use client'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaShieldAlt, FaClock, FaUsers, FaLeaf, FaMedal } from 'react-icons/fa'

const benefits = [
  { icon: FaMedal, title: "NADCA Certified", desc: "Nationally certified technicians" },
  { icon: FaShieldAlt, title: "Licensed & Insured", desc: "Fully licensed and insured" },
  { icon: FaClock, title: "Same-Day Service", desc: "Available when you need us" },
  { icon: FaCheckCircle, title: "100% Guaranteed", desc: "Satisfaction guaranteed" },
  { icon: FaLeaf, title: "Eco-Friendly", desc: "Safe for family and pets" },
  { icon: FaUsers, title: "Expert Team", desc: "15+ years experience" },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose PureFlow Air?
          </h2>
          <p className="text-textDark max-w-2xl mx-auto">
            We're committed to providing the highest quality air duct cleaning services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-xl">
                <benefit.icon />
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">{benefit.title}</h3>
                <p className="text-sm text-textDark">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}