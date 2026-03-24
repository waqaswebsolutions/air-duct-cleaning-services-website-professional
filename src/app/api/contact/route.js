import dbConnect from '@/lib/mongodb'
import Lead from '@/models/Lead'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    await dbConnect()
    
    const body = await request.json()
    const { name, email, phone, service, preferredDate, preferredTime, propertyType, squareFootage, heardFrom, message } = body
    
    console.log('📝 Form submission received:', { name, email, service })
    
    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Please fill in all required fields' }, { status: 400 })
    }
    
    const lead = await Lead.create({
      name,
      email,
      phone,
      service: service || '',
      preferredDate: preferredDate || '',
      preferredTime: preferredTime || '',
      propertyType: propertyType || '',
      squareFootage: squareFootage || '',
      heardFrom: heardFrom || '',
      message: message || '',
      package: 'professional',
    })
    
    console.log('✅ Lead saved! ID:', lead._id)
    
    // Send email notification
    try {
      await resend.emails.send({
        from: 'PureFlow Air <onboarding@resend.dev>',
        to: [process.env.ADMIN_EMAIL],
        subject: `New Estimate Request from ${name}`,
        replyTo: email,
        html: `
          <h2>New Estimate Request (Professional Package)</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${service || 'Not specified'}</p>
          <p><strong>Preferred Date:</strong> ${preferredDate || 'Not specified'}</p>
          <p><strong>Property Type:</strong> ${propertyType || 'Not specified'}</p>
          ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
          <hr>
          <p>Reply to this email to respond directly to the customer.</p>
        `,
      })
    } catch (emailError) {
      console.error('Email error:', emailError.message)
    }
    
    return NextResponse.json({ success: true, message: 'Thank you! We will contact you soon.' }, { status: 201 })
    
  } catch (error) {
    console.error('❌ Error:', error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}