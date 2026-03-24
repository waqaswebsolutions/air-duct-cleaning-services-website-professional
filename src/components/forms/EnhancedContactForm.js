'use client'
import { useState } from 'react'
import { FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'

export default function EnhancedContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    propertyType: '',
    squareFootage: '',
    heardFrom: '',
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

  const timeSlots = ['Morning (8am-12pm)', 'Afternoon (12pm-4pm)', 'Evening (4pm-8pm)']
  const propertyTypes = ['Single Family Home', 'Apartment/Condo', 'Townhouse', 'Commercial']
  const heardFromOptions = ['Google', 'Facebook', 'Word of Mouth', 'Yelp', 'Other']

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
          name: '', email: '', phone: '', service: '', preferredDate: '',
          preferredTime: '', propertyType: '', squareFootage: '', heardFrom: '', message: ''
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
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-accent">
      <h2 className="text-2xl font-bold text-primary mb-2">Get a Free Estimate</h2>
      <p className="text-textDark text-sm mb-6">Fill out the form and we'll respond within 24 hours</p>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-textDark mb-2 text-sm font-medium">Full Name *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-textDark mb-2 text-sm font-medium">Email *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="john@example.com"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-textDark mb-2 text-sm font-medium">Phone *</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="(813) 555-1234"
            />
          </div>
          <div>
            <label className="block text-textDark mb-2 text-sm font-medium">Service Interested In *</label>
            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              <option value="">Select a service</option>
              {services.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-textDark mb-2 text-sm font-medium">Preferred Date</label>
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          <div>
            <label className="block text-textDark mb-2 text-sm font-medium">Preferred Time</label>
            <select
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              <option value="">Select time</option>
              {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-textDark mb-2 text-sm font-medium">Property Type</label>
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              <option value="">Select property type</option>
              {propertyTypes.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-textDark mb-2 text-sm font-medium">Square Footage (approx)</label>
            <input
              type="text"
              name="squareFootage"
              value={formData.squareFootage}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="e.g., 2000 sq ft"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-textDark mb-2 text-sm font-medium">How did you hear about us?</label>
          <select
            name="heardFrom"
            value={formData.heardFrom}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            <option value="">Select an option</option>
            {heardFromOptions.map(h => <option key={h} value={h}>{h}</option>)}
          </select>
        </div>
        
        <div>
          <label className="block text-textDark mb-2 text-sm font-medium">Additional Details</label>
          <textarea
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            placeholder="Tell us more about your needs..."
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-all cursor-pointer disabled:opacity-50 disabled:hover:scale-100 font-semibold flex items-center justify-center gap-2"
        >
          {loading ? 'Sending...' : <><FiSend /> Submit Request</>}
        </button>
        
        {status === 'success' && (
          <div className="bg-success/10 text-success p-3 rounded-lg text-center border border-success/20 flex items-center justify-center gap-2">
            <FiCheck /> ✓ Thank you! We'll contact you soon.
          </div>
        )}
        
        {status && status !== 'success' && (
          <div className="bg-red-100 text-red-600 p-3 rounded-lg text-center flex items-center justify-center gap-2">
            <FiAlertCircle /> ⚠ {status}
          </div>
        )}
      </div>
    </form>
  )
}