import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { message, businessType, jurisdiction } = body

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // TODO: Replace with actual Gemini API call
    const response = {
      result: {
        response: "I'm currently being set up to help with Indian business law. Please check back soon for AI-powered legal assistance.",
        confidence: 0.8,
        sources: ['Indian Companies Act 2013'],
        followUpQuestions: [
          'What specific legal area do you need help with?',
          'Are you looking for compliance guidance?'
        ]
      }
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}