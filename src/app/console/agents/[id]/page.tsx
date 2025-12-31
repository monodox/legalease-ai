'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Send, Bot, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface AgentPageProps {
  params: {
    id: string
  }
}

const agentData: Record<string, any> = {
  'compliance-advisor': {
    name: 'Compliance Advisor',
    description: 'Specialized in Indian business compliance and regulatory requirements.',
    tags: ['GST', 'Labor Laws', 'ROC'],
    icon: Bot
  },
  'document-generator': {
    name: 'Document Generator', 
    description: 'Creates legal documents tailored to Indian business requirements.',
    tags: ['Contracts', 'Agreements', 'NDAs'],
    icon: Bot
  }
}

export default function AgentPage({ params }: AgentPageProps) {
  const agent = agentData[params.id] || agentData['compliance-advisor']

  return (
    <div className="h-screen flex flex-col">
      <div className="border-b p-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/console/agents">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            <h1 className="text-lg font-semibold">{agent.name}</h1>
          </div>
          <div className="flex gap-2">
            {agent.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </div>
        <p className="text-muted-foreground mt-2">{agent.description}</p>
      </div>

      <div className="flex-1 p-4 overflow-y-auto bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-20">
            <Bot className="h-12 w-12 text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">
              Start chatting with {agent.name}
            </p>
          </div>
        </div>
      </div>
      
      <div className="border-t bg-background p-4">
        <div className="max-w-4xl mx-auto flex gap-2">
          <Input 
            placeholder={`Ask ${agent.name} anything...`}
            className="flex-1"
          />
          <Button>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}