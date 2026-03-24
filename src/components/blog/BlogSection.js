'use client'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi'
import { getAllBlogPosts } from '@/data/blogPosts'
import BlogImage from '@/components/blog/BlogImage'

export default function BlogSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const blogPosts = getAllBlogPosts().slice(0, 3)

  return (
    <section className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Latest Articles</h2>
          <p className="text-textDark max-w-2xl mx-auto">
            Expert tips and insights for better indoor air quality
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <BlogImage category={post.category} title={post.title} />
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><FiCalendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><FiClock size={14} /> {post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition">
                  {post.title}
                </h3>
                <p className="text-textDark mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`}>
                  <button className="text-secondary font-semibold hover:text-accent transition flex items-center gap-1">
                    Read More <FiArrowRight />
                  </button>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link href="/blog">
            <button className="bg-secondary text-white px-6 py-3 rounded-lg hover:scale-105 transition-all cursor-pointer font-semibold">
              View All Articles →
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}