'use client'
import { motion } from 'framer-motion'
import { FiMessageCircle } from 'react-icons/fi'

export default function WhatsAppButton() {
  const phoneNumber = "18135558267"
  const message = "Hello! I'm interested in your air duct cleaning services."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg cursor-pointer"
      style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
    >
      <FiMessageCircle size={28} />
    </motion.a>
  )
}