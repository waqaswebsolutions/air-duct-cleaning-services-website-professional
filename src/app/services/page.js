'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiCheck, FiArrowRight } from 'react-icons/fi'

const services = [
  {
    id: "duct-cleaning",
    title: "Air Duct Cleaning",
    description: "Complete removal of dust, debris, allergens, mold spores, and contaminants from your entire ductwork system. Our powerful HEPA-filtered vacuum equipment ensures thorough cleaning without spreading particles throughout your home. Recommended every 3-5 years for optimal air quality.",
    price: "$299 - $599",
    benefits: [
      "Improves indoor air quality by up to 50%",
      "Reduces allergens, dust, and pet dander",
      "Increases HVAC efficiency by up to 30%",
      "Extends equipment lifespan",
      "Removes musty odors and mold spores"
    ],
    icon: "🏠"
  },
  {
    id: "dryer-vent",
    title: "Dryer Vent Cleaning",
    description: "Eliminate lint buildup and prevent fire hazards with our professional dryer vent cleaning service. We clear blockages and ensure proper airflow for safer, more efficient drying. Clogged dryer vents are the leading cause of dryer fires.",
    price: "$149 - $249",
    benefits: [
      "Prevents fire hazards (leading cause of home fires)",
      "Reduces drying time by up to 40%",
      "Saves energy costs",
      "Extends dryer lifespan",
      "Reduces wear on clothing"
    ],
    icon: "🌀"
  },
  {
    id: "air-quality",
    title: "Air Quality Testing",
    description: "Comprehensive indoor air quality assessment to identify pollutants, allergens, VOCs, mold, and contaminants. We provide detailed lab reports and professional recommendations for improving your indoor air environment.",
    price: "$199",
    benefits: [
      "Identifies hidden air quality issues",
      "Custom recommendations for improvement",
      "Peace of mind for families with allergies",
      "Healthier home environment",
      "Pre-purchase inspection available"
    ],
    icon: "💨"
  },
  {
    id: "uv-light",
    title: "UV Light Installation",
    description: "Install UV-C germicidal lights in your HVAC system to eliminate bacteria, mold, viruses, and airborne pathogens. This advanced technology continuously sanitizes your air and HVAC components for year-round protection.",
    price: "$399 - $599",
    benefits: [
      "Kills up to 99.9% of airborne pathogens",
      "Prevents mold growth on AC coils",
      "Improves overall air purity",
      "Low maintenance - bulbs last 1-2 years",
      "Reduces allergy and asthma triggers"
    ],
    icon: "💡"
  },
  {
    id: "hvac-sanitization",
    title: "HVAC Sanitization",
    description: "Deep clean and sanitize your entire HVAC system including coils, drain pans, and plenum boxes. This service eliminates bacteria, mold, and musty odors while improving system efficiency.",
    price: "$149 - $299",
    benefits: [
      "Eliminates musty odors",
      "Prevents mold regrowth",
      "Improves system efficiency",
      "FDA-approved sanitizers",
      "Safe for families and pets"
    ],
    icon: "🧹"
  },
  {
    id: "maintenance-plan",
    title: "Annual Maintenance Plan",
    description: "Comprehensive annual maintenance including duct inspection, filter replacement, dryer vent check, and priority scheduling. Perfect for homeowners who want year-round peace of mind.",
    price: "$199/year",
    benefits: [
      "Annual duct inspection",
      "Filter replacements (2 per year)",
      "Dryer vent safety check",
      "Priority scheduling",
      "10% off additional services"
    ],
    icon: "📅"
  }
]

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h1>
          <p className="text-textDark max-w-2xl mx-auto">
            Comprehensive air quality solutions for your home or business. All services performed by NADCA-certified technicians using industry-leading equipment.
          </p>
        </div>
        
        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-4">
                <div className="lg:col-span-1 bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex flex-col items-center justify-center text-center">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h2 className="text-2xl font-bold text-primary">{service.title}</h2>
                  <div className="text-3xl font-bold text-accent mt-4">{service.price}</div>
                </div>
                <div className="lg:col-span-3 p-8">
                  <p className="text-textDark mb-6">{service.description}</p>
                  <h3 className="font-bold text-primary mb-3">Key Benefits:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-textDark">
                        <FiCheck className="text-success" /> {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <button className="bg-accent text-white px-6 py-3 rounded-lg hover:scale-105 transition-all cursor-pointer font-semibold flex items-center gap-2">
                      Get Free Estimate <FiArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 bg-primary/5 p-8 rounded-2xl border border-primary/20">
          <h2 className="text-2xl font-bold text-primary mb-4 text-center">Why Regular Duct Cleaning Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">❤️</div>
              <h3 className="font-bold text-primary mb-2">Health Benefits</h3>
              <p className="text-textDark text-sm">Regular duct cleaning reduces allergens, dust mites, mold spores, and bacteria that can trigger asthma and allergies.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💰</div>
              <h3 className="font-bold text-primary mb-2">Energy Savings</h3>
              <p className="text-textDark text-sm">Clean ducts improve airflow, reducing HVAC workload by up to 30% and lowering monthly energy bills by 10-20%.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🔧</div>
              <h3 className="font-bold text-primary mb-2">System Longevity</h3>
              <p className="text-textDark text-sm">Reducing dust and debris in your system prevents premature wear, extending HVAC equipment life by 3-5 years.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}