'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiArrowLeft, FiShare2 } from 'react-icons/fi'
import { blogPosts } from '@/data/blogPosts'
import BlogImage from '@/components/blog/BlogImage'

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug
  const post = blogPosts[slug]

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    alert("Link copied to clipboard!")
  }

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-primary mb-4">Post Not Found</h1>
          <p className="text-textDark mb-6">The article you're looking for doesn't exist or has been moved.</p>
          <Link href="/blog" className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg hover:scale-105 transition">
            <FiArrowLeft /> Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom max-w-4xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-secondary hover:text-accent mb-6 transition">
          <FiArrowLeft /> Back to Blog
        </Link>
        
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Hero Image */}
          <BlogImage 
            category={post.category} 
            title={post.title}
            isLarge={true}
          />
          
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1"><FiCalendar /> {post.date}</span>
                <span className="flex items-center gap-1"><FiClock /> {post.readTime}</span>
                <span className="bg-primary/10 px-3 py-1 rounded-full text-primary text-xs font-semibold">
                  {post.category}
                </span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              {post.title}
            </h1>
            
            <div className="prose prose-lg max-w-none text-textDark" dangerouslySetInnerHTML={{ __html: post.content }} />
            
            <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap justify-between items-center gap-4">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 text-gray-600 hover:text-accent transition"
              >
                <FiShare2 /> Share this article
              </button>
              <Link href="/contact">
                <button className="bg-accent text-white px-6 py-2 rounded-lg hover:scale-105 transition">
                  Get Free Estimate
                </button>
              </Link>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  )
}