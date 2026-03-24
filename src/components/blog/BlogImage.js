'use client'
import { useState } from 'react'
import { FiZoomIn, FiZoomOut } from 'react-icons/fi'

export default function BlogImage({ category, title, isLarge = false }) {
  const [isZoomed, setIsZoomed] = useState(false)

  const getImageContent = () => {
    switch(category) {
      case 'Tips':
        return {
          icon: '🔍',
          bgGradient: 'from-blue-500/20 to-cyan-500/20',
          elements: ['💨', '🏠', '🔧', '📋'],
          description: '5 Warning Signs'
        }
      case 'Energy Savings':
        return {
          icon: '💰',
          bgGradient: 'from-green-500/20 to-emerald-500/20',
          elements: ['💡', '📉', '⚡', '🏦'],
          description: 'Save up to 30%'
        }
      case 'Health':
        return {
          icon: '❤️',
          bgGradient: 'from-red-500/20 to-pink-500/20',
          elements: ['🌸', '🍃', '💪', '😊'],
          description: 'Breathe Better'
        }
      case 'Safety':
        return {
          icon: '🛡️',
          bgGradient: 'from-orange-500/20 to-red-500/20',
          elements: ['🔥', '⚠️', '✅', '🛡️'],
          description: 'Fire Prevention'
        }
      case 'Technology':
        return {
          icon: '💡',
          bgGradient: 'from-purple-500/20 to-indigo-500/20',
          elements: ['✨', '🔬', '⚛️', '💎'],
          description: 'UV-C Technology'
        }
      default:
        return {
          icon: '📝',
          bgGradient: 'from-primary/20 to-secondary/20',
          elements: ['📖', '✍️', '📌', '⭐'],
          description: 'Expert Tips'
        }
    }
  }

  const content = getImageContent()

  return (
    <div className="relative group">
      <div className={`w-full bg-gradient-to-br ${content.bgGradient} rounded-2xl overflow-hidden shadow-lg`}>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="grid" patternUnits="userSpaceOnUse" width="10" height="10">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
        </div>
        
        {/* Main Content */}
        <div className={`relative p-8 text-center ${isLarge ? 'py-16' : 'py-12'}`}>
          {/* Floating Elements Animation */}
          <div className="absolute inset-0 pointer-events-none">
            {content.elements.map((element, index) => (
              <div
                key={index}
                className="absolute text-2xl animate-float"
                style={{
                  top: `${15 + index * 20}%`,
                  left: `${10 + index * 25}%`,
                  animationDelay: `${index * 0.5}s`,
                  opacity: 0.3
                }}
              >
                {element}
              </div>
            ))}
          </div>
          
          {/* Main Icon */}
          <div className="text-7xl md:text-8xl mb-4 animate-pulse">
            {content.icon}
          </div>
          
          {/* Title/Description */}
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            {title?.split(' ').slice(0, 4).join(' ')}
          </h3>
          <p className="text-textDark text-lg font-medium">
            {content.description}
          </p>
          
          {/* Decorative Elements */}
          <div className="flex justify-center gap-2 mt-4">
            {content.elements.map((element, index) => (
              <span key={index} className="text-xl opacity-50">
                {element}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Zoom Button (optional) */}
      <button
        onClick={() => setIsZoomed(!isZoomed)}
        className="absolute bottom-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition opacity-0 group-hover:opacity-100"
        aria-label="Zoom image"
      >
        {isZoomed ? <FiZoomOut size={18} /> : <FiZoomIn size={18} />}
      </button>
      
      {/* Zoomed Modal */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setIsZoomed(false)}
        >
          <div className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden">
            <div className={`bg-gradient-to-br ${content.bgGradient} p-12 text-center`}>
              <div className="text-9xl mb-4">{content.icon}</div>
              <h3 className="text-3xl font-bold text-primary mb-2">{title}</h3>
              <p className="text-textDark text-xl">{content.description}</p>
              <div className="flex justify-center gap-4 mt-6">
                {content.elements.map((element, index) => (
                  <span key={index} className="text-3xl">
                    {element}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 text-center">
              <button className="bg-accent text-white px-6 py-2 rounded-lg">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}