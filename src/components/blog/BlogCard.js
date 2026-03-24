import Link from 'next/link'
import { FaCalendar, FaClock, FaUser } from 'react-icons/fa'

export default function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="h-48 bg-gradient-to-r from-primary to-secondary relative">
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <span className="text-4xl">📰</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <FaCalendar className="text-accent" /> {new Date(post.createdAt).toLocaleDateString()}
          </span>
          <span className="flex items-center gap-1">
            <FaClock className="text-accent" /> {post.readTime} min read
          </span>
          <span className="flex items-center gap-1">
            <FaUser className="text-accent" /> {post.author}
          </span>
        </div>
        <h3 className="text-xl font-bold text-primary mb-2 hover:text-accent transition">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="text-textDark mb-4 line-clamp-2">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="text-accent font-semibold hover:underline inline-flex items-center gap-1"
        >
          Read More →
        </Link>
      </div>
    </div>
  )
}