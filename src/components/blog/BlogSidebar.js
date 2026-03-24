import Link from 'next/link'

export default function BlogSidebar({ categories, recentPosts }) {
  return (
    <div className="space-y-8">
      {/* Categories */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-xl font-bold text-primary mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map((cat, i) => (
            <li key={i}>
              <Link href={`/blog?category=${cat}`} className="text-textDark hover:text-accent transition block py-1">
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-xl font-bold text-primary mb-4">Recent Posts</h3>
        <ul className="space-y-3">
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="text-textDark hover:text-accent transition block">
                <p className="font-medium">{post.title}</p>
                <p className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}