import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

interface KnowledgePageProps {
  params: {
    id: string
  }
}

const knowledgeData: Record<string, any> = {
  'company-formation': {
    title: 'Company Formation in India',
    category: 'Business Setup',
    tags: ['Companies Act 2013', 'ROC Filing', 'Incorporation'],
    content: `
# Company Formation in India

## Overview
Starting a company in India involves several legal requirements and procedures governed by the Companies Act, 2013.

## Types of Companies
- **Private Limited Company**: Most popular for startups
- **Public Limited Company**: For larger businesses
- **One Person Company (OPC)**: For single entrepreneurs
- **Limited Liability Partnership (LLP)**: For professional services

## Registration Process
1. **Digital Signature Certificate (DSC)**: Required for directors
2. **Director Identification Number (DIN)**: Unique ID for directors  
3. **Name Reservation**: Check and reserve company name
4. **Incorporation**: File incorporation documents with ROC
5. **PAN and TAN**: Obtain tax identification numbers

## Required Documents
- Memorandum of Association (MOA)
- Articles of Association (AOA)
- Director consent and address proof
- Registered office proof

## Compliance Requirements
- Annual filing of financial statements
- Board meetings and resolutions
- Statutory audits
- ROC compliance
    `
  },
  'contract-law': {
    title: 'Contract Law Essentials',
    category: 'Legal Framework',
    tags: ['Contract Act 1872', 'Agreement', 'Legal Obligations'],
    content: `
# Contract Law in India

## Governing Law
The Indian Contract Act, 1872 governs all contracts in India.

## Essential Elements
1. **Offer**: Proposal made by one party
2. **Acceptance**: Agreement to the offer
3. **Consideration**: Something of value exchanged
4. **Legal Capacity**: Parties must be competent
5. **Free Consent**: Agreement without coercion
6. **Lawful Object**: Purpose must be legal

## Types of Contracts
- Express contracts
- Implied contracts
- Executed contracts
- Executory contracts

## Breach of Contract
When one party fails to perform their obligations, remedies include:
- Damages
- Specific performance
- Injunction
- Rescission
    `
  }
}

export default function KnowledgePage({ params }: KnowledgePageProps) {
  const knowledge = knowledgeData[params.id] || knowledgeData['company-formation']

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/console/knowledge">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          <h1 className="text-2xl font-bold">{knowledge.title}</h1>
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        <Badge>{knowledge.category}</Badge>
        {knowledge.tags.map((tag: string) => (
          <Badge key={tag} variant="secondary">{tag}</Badge>
        ))}
      </div>

      <div className="max-w-4xl">
        <div className="prose prose-gray max-w-none">
          <div className="whitespace-pre-line">
            {knowledge.content}
          </div>
        </div>

        <div className="mt-8 p-4 border rounded-lg bg-muted/50">
          <h3 className="font-semibold mb-2">Need More Help?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Get personalized guidance from our AI legal assistant.
          </p>
          <Button asChild>
            <Link href="/console/chat">
              Ask AI Assistant
              <ExternalLink className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}