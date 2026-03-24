'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

const faqs = [
  {
    question: "How often should I have my air ducts cleaned?",
    answer: "The National Air Duct Cleaners Association (NADCA) recommends having your air ducts cleaned every 3-5 years. However, if you have pets, smokers in the home, recent renovations, or family members with allergies, more frequent cleaning may be beneficial."
  },
  {
    question: "How long does the duct cleaning process take?",
    answer: "A typical residential duct cleaning takes 2-4 hours depending on the size of your home, number of vents, and accessibility of the ductwork. Our technicians will provide a time estimate during the free inspection."
  },
  {
    question: "Will duct cleaning reduce my energy bills?",
    answer: "Yes! Clean ducts improve airflow, allowing your HVAC system to operate more efficiently. Homeowners typically see a 10-20% reduction in energy costs after professional duct cleaning."
  },
  {
    question: "Is the cleaning process messy?",
    answer: "No! Our HEPA-filtered vacuum systems create negative pressure in your ducts, pulling debris directly into our collection units. We also use protective coverings on floors and furniture to ensure your home stays clean."
  },
  {
    question: "Are your technicians certified?",
    answer: "Yes! All our technicians are NADCA certified and undergo continuous training to stay current with industry best practices. We're also fully licensed and insured."
  },
  {
    question: "Do you offer any guarantees?",
    answer: "Absolutely! We offer a 100% satisfaction guarantee on all our work. If you're not completely satisfied, we'll come back and make it right at no additional cost."
  }
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-textDark max-w-2xl mx-auto">
            Find answers to common questions about our air duct cleaning services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition flex justify-between items-center"
              >
                <span className="font-semibold text-primary text-lg">{faq.question}</span>
                <FiChevronDown
                  className={`text-accent transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 mt-2' : 'max-h-0'
                }`}
              >
                <div className="bg-gray-50 rounded-xl p-6 ml-4">
                  <p className="text-textDark">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}