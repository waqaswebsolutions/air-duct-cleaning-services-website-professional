import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">PureFlow Air</h3>
            <p className="text-gray-300 text-sm">
              Professional air duct cleaning services in Tampa and surrounding areas. NADCA certified technicians.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-accent transition">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-accent transition">Services</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-accent transition">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-accent transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📞 (813) 555-8267</li>
              <li>✉️ hello@pureflowair.demo</li>
              <li>📍 1245 Clearwater Ave, Tampa, FL 33607</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Mon-Fri: 8am - 6pm</li>
              <li>Saturday: 9am - 4pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} PureFlow Air. All rights reserved. | NADCA Certified | Licensed & Insured</p>
        </div>
      </div>
    </footer>
  )
}