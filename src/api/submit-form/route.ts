import { NextResponse } from 'next/server'
import { prisma } from '@/app/lib/db'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    const newLead = await prisma.lead.create({
      data: { email },
    })

    return NextResponse.json({ success: true, lead: newLead })
  } catch (error) {
    console.error('Error processing form submission:', error)
    return NextResponse.json({ success: false, error: 'Error submitting form' }, { status: 500 })
  }
}
