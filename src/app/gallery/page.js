'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiCalendar, FiMapPin, FiZoomIn } from 'react-icons/fi'

// Professional air duct cleaning images from Unsplash
const images = [
  {
    id: 1,
    title: "Professional Duct Cleaning Equipment",
    description: "State-of-the-art HEPA vacuum system used for thorough duct cleaning",
    image: "https://lh3.googleusercontent.com/proxy/XjVnNwfkTN8SAnh8wUvstSRqrfI7CwkQUjSDzBnwY4keSrnz0DuKCFh75TL27FZQjKLIo-NRhH0SI7vgyia1d-U5NLFRczPpEJo",
    category: "Equipment",
    date: "March 2024",
    location: "Tampa, FL"
  },
  {
    id: 2,
    title: "Technician Inspecting Air Ducts",
    description: "NADCA-certified technician performing detailed inspection",
    image: "https://www.socool.sg/wp-content/uploads/2024/07/Easy-Steps-on-How-to-Inspect-HVAC-Ducts-2.webp",
    category: "Team",
    date: "March 2024",
    location: "St. Petersburg, FL"
  },
  {
    id: 3,
    title: "HVAC System Maintenance",
    description: "Professional cleaning of HVAC components for optimal performance",
    image: "https://www.tkrefrigeration.co.uk/wp-content/uploads/2023/10/Understanding-HVAC-Maintenance-vs.-HVAC-Service.jpg",
    category: "Services",
    date: "February 2024",
    location: "Clearwater, FL"
  },
  {
    id: 4,
    title: "Air Quality Testing",
    description: "Comprehensive air quality assessment using professional equipment",
    image: "https://theservicehq.com/wp-content/uploads/2024/07/air-duct-cleaning-scaled-e1614606960963.jpg",
    category: "Services",
    date: "February 2024",
    location: "Brandon, FL"
  },
  {
    id: 5,
    title: "Professional Team at Work",
    description: "Our certified technicians ensuring quality service",
    image: "https://ductcleaning-co.com/wp-content/uploads/2023/03/bees-team-1024x683.jpg",
    category: "Team",
    date: "January 2024",
    location: "Lutz, FL"
  },
  {
    id: 6,
    title: "Advanced Cleaning Technology",
    description: "Using industry-leading equipment for superior results",
    image: "https://shopcdnpro.grainajz.com/925/upload/product/8cb4fb5fcfdee31b9a560071ee9b613cff69d2d0716c5d1576574aa176a12efb.jpg",
    category: "Equipment",
    date: "January 2024",
    location: "Wesley Chapel, FL"
  },
  {
    id: 7,
    title: "Residential Duct Cleaning",
    description: "Thorough cleaning of residential HVAC systems",
    image: "https://yoursuperinspector.com/wp-content/uploads/2024/07/duct-clearning.webp",
    category: "Services",
    date: "March 2024",
    location: "Tampa, FL"
  },
  {
    id: 8,
    title: "Customer Satisfaction",
    description: "Happy homeowners enjoying cleaner indoor air",
    image: "data:image/jpeg;base64,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",
    category: "Team",
    date: "February 2024",
    location: "St. Petersburg, FL"
  },
  {
    id: 9,
    title: "Dryer Vent Cleaning Service",
    description: "Specialized equipment for dryer vent maintenance",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDOsjcVMV2wqCMdoQNjtUNoXFlG5ilJxO8sg&s",
    category: "Services",
    date: "March 2024",
    location: "Clearwater, FL"
  },
  {
    id: 10,
    title: "UV Light Installation",
    description: "Advanced air purification technology installation",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ejsijAUYfDz5IACMz507ItG6DnJniqspWw&s",
    category: "Services",
    date: "February 2024",
    location: "Brandon, FL"
  },
  {
    id: 11,
    title: "Quality Assurance Check",
    description: "Final inspection ensuring complete satisfaction",
    image: "https://pnwproclean.net/wp-content/uploads/2022/07/air-duct-cleaning-1-e1658516575147-1006x1024.jpg",
    category: "Team",
    date: "January 2024",
    location: "Lutz, FL"
  },
  {
    id: 12,
    title: "Commercial Duct Cleaning",
    description: "Professional service for commercial properties",
    image: "https://ductdudes.ca/wp-content/uploads/2022/02/duct_dudes_profs-32-1024x683.jpg",
    category: "Services",
    date: "March 2024",
    location: "Tampa, FL"
  }
]

const categories = ["All", "Services", "Equipment", "Team"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxOpen, setLightboxOpen] = useState(null)

  const filteredImages = selectedCategory === "All"
    ? images
    : images.filter(img => img.category === selectedCategory)

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Work Gallery
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See our professional air duct cleaning services in action
          </p>
          <p className="text-sm text-gray-400 mt-2">Real projects from homes and businesses in Tampa Bay</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition font-medium ${selectedCategory === category
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group cursor-pointer"
              onClick={() => setLightboxOpen(image)}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <FiZoomIn className="text-white text-3xl" />
                  </div>
                  <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    {image.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-primary text-lg mb-1 group-hover:text-orange-500 transition">
                    {image.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{image.description}</p>
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <FiCalendar size={12} /> {image.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiMapPin size={12} /> {image.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-4xl font-bold text-orange-500 mb-2">5,000+</div>
            <p className="text-gray-700 font-medium">Homes Serviced</p>
            <p className="text-sm text-gray-500">Since 2009 in Tampa Bay</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
            <p className="text-gray-700 font-medium">Years Experience</p>
            <p className="text-sm text-gray-500">NADCA Certified Technicians</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
            <p className="text-gray-700 font-medium">Satisfaction Guaranteed</p>
            <p className="text-sm text-gray-500">Quality service you can trust</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-3">Ready for Cleaner Air?</h3>
            <p className="text-gray-600 mb-4">Experience the PureFlow Air difference in your home</p>
            <a href="/contact" className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:scale-105 transition font-semibold">
              Get Your Free Estimate
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(null)}
          >
            <button
              onClick={() => setLightboxOpen(null)}
              className="absolute top-6 right-6 text-white text-3xl hover:text-orange-500 z-10 transition"
            >
              <FiX />
            </button>
            <div
              className="max-w-5xl w-full bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[60vh] md:h-[70vh] bg-gray-100">
                <img
                  src={lightboxOpen.image}
                  alt={lightboxOpen.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-primary mb-2">{lightboxOpen.title}</h2>
                <p className="text-gray-600 mb-4">{lightboxOpen.description}</p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <FiCalendar /> {lightboxOpen.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiMapPin /> {lightboxOpen.location}
                  </span>
                  <span className="bg-primary/10 px-3 py-1 rounded-full text-primary text-xs">
                    {lightboxOpen.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}