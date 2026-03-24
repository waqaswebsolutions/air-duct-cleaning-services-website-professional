import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'

export const metadata = {
  title: 'PureFlow Air | Professional Air Duct Cleaning Services in Tampa',
  description: 'Professional air duct cleaning, dryer vent cleaning, and air quality improvement services. NADCA certified technicians serving Tampa Bay.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}