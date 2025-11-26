import { NextResponse } from 'next/server'
import dbConnect from '../../../../lib/mongodb'
import Contact from '../../../../models/Contact'

export async function POST(request) {
  try {
    // Connect to database
    await dbConnect()

    // Parse request body
    const body = await request.json()
    const { name, email, type, subject, message } = body

    // Validate required fields
    if (!name || !email || !type || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Create new contact submission
    const contact = await Contact.create({
      name,
      email,
      type,
      subject,
      message,
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        data: {
          id: contact._id,
          name: contact.name,
          email: contact.email,
          createdAt: contact.createdAt,
        }
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form submission error:', error)

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err) => err.message)
      return NextResponse.json(
        { success: false, error: messages.join(', ') },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}

export async function GET(request) {
  try {
    await dbConnect()
    
    const contacts = await Contact.find({}).sort({ createdAt: -1 }).limit(50)
    
    return NextResponse.json(
      { success: true, data: contacts },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error fetching contacts:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch contacts' },
      { status: 500 }
    )
  }
}

