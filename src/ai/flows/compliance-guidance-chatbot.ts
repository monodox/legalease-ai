import { defineFlow } from '@genkit-ai/flow'
import { generate } from '@genkit-ai/ai'
import { googleAI } from '@genkit-ai/googleai'
import { initializeGenkit } from '../genkit'
import { ComplianceQuerySchema, ComplianceResponseSchema } from '../types/legal'
import { DEFAULT_MODEL } from '../../agents/types'

// Initialize Genkit
initializeGenkit()

export const runComplianceChat = defineFlow(
  {
    name: 'complianceChat',
    inputSchema: ComplianceQuerySchema,
    outputSchema: ComplianceResponseSchema,
  },
  async (input) => {
    const response = await generate({
      model: DEFAULT_MODEL,
      prompt: `You are LegalEase AI, an expert legal guidance assistant specializing exclusively in Indian business, startup, and commercial law.

Your primary users are founders, startup teams, and small to medium businesses in India who are not legally trained and need clear, practical guidance to make informed decisions.

Business Type: ${input.businessType || 'Not specified'}
Jurisdiction: ${input.jurisdiction || 'India (General)'}
Additional Context: ${input.context || 'None'}

User Query: ${input.message}`,
      config: {
        temperature: 0.3,
        maxOutputTokens: 1000,
      },
    })

    return {
      response: response.text(),
      confidence: 0.85,
      sources: ['Indian Companies Act 2013', 'Contract Act 1872'],
      followUpQuestions: [
        'Would you like specific compliance requirements?',
        'Do you need help with documentation?',
        'Are there any regulatory concerns?',
      ],
    }
  }
)