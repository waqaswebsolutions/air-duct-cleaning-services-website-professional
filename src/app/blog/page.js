'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi'
import { getAllBlogPosts } from '@/data/blogPosts'
import BlogImage from '@/components/blog/BlogImage'

export default function BlogPage() {
  const blogPosts = getAllBlogPosts()

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Air Duct Cleaning Blog
          </h1>
          <p className="text-textDark max-w-2xl mx-auto">
            Expert tips, industry insights, and guides for better indoor air quality
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <BlogImage category={post.category} title={post.title} />
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><FiCalendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><FiClock size={14} /> {post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition">
                  {post.title}
                </h2>
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
      </div>
    </div>
  )
}