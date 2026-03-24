'use client'
import { motion } from 'framer-motion'
import { FiAward, FiUsers, FiTool, FiShield } from 'react-icons/fi'

export default function AboutPage() {
  const stats = [
    { number: "15+", label: "Years Experience", icon: FiAward },
    { number: "5,000+", label: "Happy Customers", icon: FiUsers },
    { number: "24/7", label: "Emergency Service", icon: FiTool },
    { number: "100%", label: "Satisfaction", icon: FiShield },
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About PureFlow Air
            </h1>
            <p className="text-lg text-textDark mb-6">
              PureFlow Air is Tampa's premier air duct cleaning service, dedicated to improving indoor air quality for homes and businesses throughout the Tampa Bay area. With over 15 years of industry experience, we've helped thousands of families breathe cleaner, healthier air.
            </p>
            <p className="text-textDark mb-6">
              Our team consists of NADCA-certified technicians who undergo rigorous training and stay current with the latest industry standards. We use state-of-the-art HEPA-filtered vacuum systems and advanced cleaning techniques to ensure your ductwork is thoroughly cleaned without spreading contaminants throughout your home.
            </p>
            <p className="text-textDark mb-6">
              Our mission is simple: to help you breathe cleaner, healthier air while improving the efficiency of your HVAC system. Clean air ducts can reduce energy costs by up to 20% and significantly decrease allergens and dust in your home.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="bg-primary/5 rounded-xl p-4 text-center">
                    <Icon className="w-8 h-8 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-textDark">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-primary to-secondary p-1 rounded-2xl shadow-xl">
              <div className="bg-white rounded-xl p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Our Team</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">👨‍🔧</div>
                    <div>
                      <p className="font-bold text-primary">Mike Thompson</p>
                      <p className="text-sm text-textDark">Lead Technician | 15+ years</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">👩‍💼</div>
                    <div>
                      <p className="font-bold text-primary">Sarah Martinez</p>
                      <p className="text-sm text-textDark">Customer Service Manager | 10+ years</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">🔧</div>
                    <div>
                      <p className="font-bold text-primary">David Chen</p>
                      <p className="text-sm text-textDark">HVAC Specialist | 12+ years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white p-6 rounded-xl shadow-md border-l-4 border-accent">
              <h3 className="text-xl font-bold text-primary mb-4">Certifications</h3>
              <ul className="space-y-2 text-textDark">
                <li>✓ NADCA Certified (National Air Duct Cleaners Association)</li>
                <li>✓ EPA Lead-Safe Certified Firm</li>
                <li>✓ Better Business Bureau A+ Rated</li>
                <li>✓ Fully Licensed in Florida: CAC1815756</li>
                <li>✓ Fully Insured - Liability and Workers' Compensation</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}