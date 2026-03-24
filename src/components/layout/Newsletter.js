'use client'
import { useState } from 'react'
import { FaEnvelope } from 'react-icons/fa'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus('success')
        setEmail('')
        setTimeout(() => setStatus(''), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus(''), 5000)
      }
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus(''), 5000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-gradient-to-r from-primary to-secondary py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <FaEnvelope className="text-5xl text-white mx-auto mb-4 animate-float" />
          <h2 className="text-3xl font-bold text-white mb-2">Stay Updated</h2>
          <p className="text-white/90 mb-6">
            Subscribe to our newsletter for air quality tips, special offers, and industry updates.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition cursor-pointer disabled:opacity-50"
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {status === 'success' && (
            <p className="text-success bg-white/20 mt-3 p-2 rounded">✓ Subscribed successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-300 mt-3">⚠ Something went wrong. Please try again.</p>
          )}
        </div>
      </div>
    </section>
  )
}