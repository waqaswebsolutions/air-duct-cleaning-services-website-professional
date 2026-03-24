'use client'
import Hero from '@/components/home/Hero'
import ServiceIcons from '@/components/home/ServiceIcons'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import TestimonialCarousel from '@/components/testimonials/TestimonialCarousel'
import EnhancedContactForm from '@/components/forms/EnhancedContactForm'
import BlogSection from '@/components/blog/BlogSection'
import NewsletterForm from '@/components/forms/NewsletterForm'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceIcons />
      <WhyChooseUs />
      
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <EnhancedContactForm />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-primary mb-6">Why Choose PureFlow Air?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-success text-xl">✓</span>
                    <span>NADCA certified technicians with 15+ years experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-success text-xl">✓</span>
                    <span>Free estimates with no obligation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-success text-xl">✓</span>
                    <span>100% satisfaction guaranteed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-success text-xl">✓</span>
                    <span>Same-day service available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-success text-xl">✓</span>
                    <span>Fully licensed and insured</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <TestimonialCarousel />
      <BlogSection />
      <NewsletterForm />
    </>
  )
}