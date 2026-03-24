'use client'
import { useState } from 'react'
import { FiClock } from 'react-icons/fi'

export default function BusinessHours() {
  const [showHolidayHours, setShowHolidayHours] = useState(false)

  const regularHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ]

  const holidayHours = [
    { day: "New Year's Day", hours: "Closed" },
    { day: "Memorial Day", hours: "9:00 AM - 3:00 PM" },
    { day: "Independence Day", hours: "Closed" },
    { day: "Labor Day", hours: "9:00 AM - 3:00 PM" },
    { day: "Thanksgiving", hours: "Closed" },
    { day: "Christmas Day", hours: "Closed" },
  ]

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <FiClock className="text-accent" size={24} />
        <h3 className="text-xl font-bold text-primary">Business Hours</h3>
      </div>
      
      <div className="space-y-2 mb-4">
        {regularHours.map((item, index) => (
          <div key={index} className="flex justify-between text-sm">
            <span className="font-medium">{item.day}</span>
            <span className="text-textDark">{item.hours}</span>
          </div>
        ))}
      </div>
      
      <button
        onClick={() => setShowHolidayHours(!showHolidayHours)}
        className="text-accent text-sm font-semibold hover:underline"
      >
        {showHolidayHours ? "Hide Holiday Hours" : "Show Holiday Hours"}
      </button>
      
      {showHolidayHours && (
        <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
          {holidayHours.map((item, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span className="text-textDark">{item.day}</span>
              <span className="text-textDark">{item.hours}</span>
            </div>
          ))}
        </div>
      )}
      
      <p className="text-xs text-gray-500 mt-4">
        * Emergency service available after hours - call for pricing
      </p>
    </div>
  )
}