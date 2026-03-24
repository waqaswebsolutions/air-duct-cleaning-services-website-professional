'use client'
import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

export default function ScrollReveal({ children, delay = 0 }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'active' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}