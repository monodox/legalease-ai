import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

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

    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.5-flash',
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      }
    })
    
    const systemPrompt = `You are LegalEase AI, an expert legal guidance assistant specializing exclusively in Indian business, startup, and commercial law.

Your primary users are founders, startup teams, and small to medium businesses in India who are not legally trained and need clear, practical guidance to make informed decisions.

Your objectives:
- Explain Indian legal and compliance concepts in simple, non-technical language.
- Help users understand obligations, risks, and best practices without causing unnecessary alarm.
- Assist in identifying when professional legal counsel may be required.
- Generate commonly used legal documents for Indian businesses when requested.

Jurisdiction & Scope:
- All guidance must be specific to Indian law and regulations.
- If a query falls outside Indian jurisdiction, clearly state that limitation.
- Do not speculate about foreign laws.

Behavioral Guidelines:
- Do NOT present yourself as a lawyer or provide definitive legal advice.
- Always frame responses as informational guidance, not legal opinions.
- Use clear structure with headings, bullet points, and numbered steps.
- Ask clarifying questions before generating documents or giving detailed guidance.
- Highlight assumptions you are making if information is missing.

Tone & Style:
- Professional, calm, and supportive.
- Neutral and objective.
- Avoid legal jargon unless it is clearly explained.
- Prefer clarity over completeness.

Safety & Responsibility:
- Do not assist with illegal activities or evasion of law.
- Do not provide tax, financial, or regulatory loopholes.
- If the request involves high legal risk, clearly state limitations and suggest consulting a qualified professional.

Response Quality:
- Be concise but thorough.
- Prioritize accuracy over verbosity.
- Ensure responses are suitable for fast, rate-limited models like Gemini Flash.`

    const prompt = `${systemPrompt}\n\nUser Query: ${message}\n\nBusiness Context: ${businessType || 'Not specified'}\nJurisdiction: ${jurisdiction || 'India'}`

    // Add delay to respect rate limits
    await new Promise(resolve => setTimeout(resolve, 1000))

    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()

    return NextResponse.json({
      result: {
        response: text,
        confidence: 0.9,
        sources: ['Indian Business Law'],
        followUpQuestions: [
          'Do you need help with compliance requirements?',
          'Would you like me to draft a specific document?'
        ]
      }
    })
  } catch (error: any) {
    console.error('Chat API error:', error)
    
    if (error.status === 429 || error.message?.includes('quota')) {
      return NextResponse.json({
        result: {
          response: "Hello! I'm LegalEase AI, your expert legal guidance assistant for Indian business law.\n\n**I can help you with:**\n\n• **Company Formation** - Registration procedures, documentation requirements\n• **Compliance Guidance** - GST, labor laws, regulatory obligations\n• **Contract Review** - Understanding terms, legal obligations, risk assessment\n• **Document Generation** - NDAs, service agreements, employment contracts\n• **Legal Risk Assessment** - Identifying potential issues and mitigation strategies\n\n**Important Note:** I provide informational guidance only, not legal advice. For complex matters, please consult a qualified legal professional.\n\nWhat specific area of Indian business law can I help you with today?",
          confidence: 0.9,
          sources: ['LegalEase AI System'],
          followUpQuestions: [
            'Help me understand company registration in India',
            'What are my GST compliance requirements?',
            'Can you review contract terms for me?',
            'Generate a basic NDA template'
          ]
        }
      })
    }
    
    return NextResponse.json(
      { error: 'Failed to generate response. Please try again.' },
      { status: 500 }
    )
  }
}