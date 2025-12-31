import { z } from 'zod'

export const ComplianceQuerySchema = z.object({
  message: z.string().min(1, 'Message is required'),
  businessType: z.string().optional(),
  jurisdiction: z.string().optional(),
  context: z.string().optional(),
})

export const DocumentRequestSchema = z.object({
  documentType: z.enum(['partnership-deed', 'mou', 'nda', 'employment-contract']),
  businessDetails: z.object({
    name: z.string(),
    type: z.string(),
    jurisdiction: z.string(),
  }),
  customFields: z.record(z.string()).optional(),
})

export const ComplianceResponseSchema = z.object({
  response: z.string(),
  confidence: z.number().min(0).max(1),
  sources: z.array(z.string()).optional(),
  followUpQuestions: z.array(z.string()).optional(),
})

export const DocumentResponseSchema = z.object({
  document: z.string(),
  title: z.string(),
  sections: z.array(z.object({
    heading: z.string(),
    content: z.string(),
  })),
  disclaimers: z.array(z.string()),
})

export type ComplianceQuery = z.infer<typeof ComplianceQuerySchema>
export type DocumentRequest = z.infer<typeof DocumentRequestSchema>
export type ComplianceResponse = z.infer<typeof ComplianceResponseSchema>
export type DocumentResponse = z.infer<typeof DocumentResponseSchema>