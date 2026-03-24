import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendAdminNotification({ name, email, phone, message, service, preferredDate }) {
  try {
    await resend.emails.send({
      from: 'PureFlow Air <onboarding@resend.dev>',
      to: [process.env.ADMIN_EMAIL],
      subject: `🔔 New Estimate Request from ${name}`,
      replyTo: email,
      html: `
        <h2>New Estimate Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service || 'Not specified'}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate || 'Not specified'}</p>
        ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
        <hr>
        <p>Reply to this email to respond directly to the customer.</p>
      `,
    })
    return true
  } catch (error) {
    console.error('Email error:', error)
    return false
  }
}

export async function sendCustomerAutoReply({ name, email }) {
  try {
    await resend.emails.send({
      from: 'PureFlow Air <onboarding@resend.dev>',
      to: [email],
      subject: `Thank you for contacting PureFlow Air!`,
      html: `
        <h2>Thank You, ${name}!</h2>
        <p>We've received your estimate request and will get back to you within 24 hours.</p>
        <p>If you need immediate assistance, call us at <strong>(813) 555-8267</strong>.</p>
        <br>
        <p>Best regards,<br>PureFlow Air Team</p>
        <p style="font-size: 12px;">NADCA Certified | Licensed & Insured</p>
      `,
    })
    return true
  } catch (error) {
    console.error('Auto-reply error:', error)
    return false
  }
}

export async function sendNewsletterWelcome({ email }) {
  try {
    await resend.emails.send({
      from: 'PureFlow Air <onboarding@resend.dev>',
      to: [email],
      subject: `Welcome to PureFlow Air Newsletter!`,
      html: `
        <h2>Welcome to PureFlow Air!</h2>
        <p>Thank you for subscribing to our newsletter. You'll receive tips on improving indoor air quality, special offers, and industry updates.</p>
        <br>
        <p>Best regards,<br>PureFlow Air Team</p>
      `,
    })
    return true
  } catch (error) {
    console.error('Newsletter error:', error)
    return false
  }
}