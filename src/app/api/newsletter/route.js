import dbConnect from '@/lib/mongodb'
import Newsletter from '@/models/Newsletter'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    await dbConnect()
    
    const { email } = await request.json()
    
    if (!email) {
      return NextResponse.json({ error: 'Email required' }, { status: 400 })
    }
    
    const existing = await Newsletter.findOne({ email })
    if (existing) {
      return NextResponse.json({ message: 'Already subscribed' }, { status: 200 })
    }
    
    await Newsletter.create({ email })
    
    return NextResponse.json({ success: true }, { status: 201 })
  } catch (error) {
    console.error('Newsletter error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}