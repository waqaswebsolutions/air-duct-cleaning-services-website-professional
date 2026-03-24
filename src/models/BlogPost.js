import mongoose from 'mongoose'

const BlogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  excerpt: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: '/images/blog-placeholder.jpg',
  },
  author: {
    type: String,
    default: 'PureFlow Air Team',
  },
  category: {
    type: String,
    default: 'Air Duct Cleaning',
  },
  readTime: {
    type: Number,
    default: 5,
  },
  published: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.BlogPost || mongoose.model('BlogPost', BlogPostSchema)