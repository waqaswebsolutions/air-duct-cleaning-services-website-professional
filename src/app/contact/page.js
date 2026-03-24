import ContactForm from '@/components/forms/ContactForm'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Contact Us</h1>
        <p className="text-xl text-textDark max-w-2xl mx-auto">
          Ready to breathe cleaner air? Get your free estimate today!
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <FaPhone />
                </div>
                <div>
                  <p className="font-semibold text-primary">Phone</p>
                  <p className="text-textDark">(813) 555-8267</p>
                  <p className="text-sm text-gray-500">Mon-Fri 8am-6pm | Sat 9am-4pm</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="font-semibold text-primary">Email</p>
                  <p className="text-textDark">hello@pureflowair.demo</p>
                  <p className="text-sm text-gray-500">We respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="font-semibold text-primary">Address</p>
                  <p className="text-textDark">1245 Clearwater Avenue<br />Tampa, FL 33607</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <FaClock />
                </div>
                <div>
                  <p className="font-semibold text-primary">Business Hours</p>
                  <p className="text-textDark">Monday-Friday: 8am-6pm</p>
                  <p className="text-textDark">Saturday: 9am-4pm</p>
                  <p className="text-textDark">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary/10 p-6 rounded-2xl border-l-4 border-secondary">
            <h3 className="font-semibold text-primary mb-3">Service Area</h3>
            <p className="text-textDark text-sm mb-3">We serve all of Tampa Bay area:</p>
            <div className="grid grid-cols-2 gap-2 text-sm text-textDark">
              <span>✓ Tampa</span>
              <span>✓ St. Petersburg</span>
              <span>✓ Clearwater</span>
              <span>✓ Brandon</span>
              <span>✓ Lutz</span>
              <span>✓ Wesley Chapel</span>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  )
}