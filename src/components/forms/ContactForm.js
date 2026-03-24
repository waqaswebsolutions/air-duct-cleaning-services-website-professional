'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const services = [
    'Air Duct Cleaning',
    'Dryer Vent Cleaning',
    'Air Quality Testing',
    'UV Light Installation',
    'HVAC Sanitization',
    'Annual Maintenance Plan'
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          preferredDate: '',
          message: ''
        })
        setTimeout(() => setStatus(''), 5000)
      } else {
        setStatus(data.error || 'Something went wrong')
        setTimeout(() => setStatus(''), 5000)
      }
    } catch (error) {
      setStatus('Network error - please try again')
      setTimeout(() => setStatus(''), 5000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-accent"
    >
      <h2 className="text-2xl font-bold mb-6 text-primary">Get a Free Estimate</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-textDark mb-2 font-medium">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label className="block text-textDark mb-2 font-medium">Email Address *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition"
            placeholder="john@example.com"
          />
        </div>
        
        <div>
          <label className="block text-textDark mb-2 font-medium">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition"
            placeholder="(813) 555-1234"
          />
        </div>
        
        <div>
          <label className="block text-textDark mb-2 font-medium">Service Interested In</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-textDark mb-2 font-medium">Preferred Date</label>
          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
        
        <div>
          <label className="block text-textDark mb-2 font-medium">Additional Details</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            placeholder="Tell us about your needs..."
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-all cursor-pointer disabled:opacity-50 disabled:hover:scale-100 font-semibold"
        >
          {loading ? 'Sending...' : 'Submit Request'}
        </button>
        
        {status === 'success' && (
          <div className="bg-success/10 text-success p-3 rounded-lg text-center border border-success/20">
            ✓ Thank you! We'll contact you within 24 hours.
          </div>
        )}
        
        {status && status !== 'success' && (
          <div className="bg-red-100 text-red-600 p-3 rounded-lg text-center">
            ⚠ {status}
          </div>
        )}
      </div>
    </motion.form>
  )
}