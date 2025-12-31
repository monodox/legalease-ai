'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SystemAgent } from '@/agents/types'
import { PromptViewer } from './prompt-viewer'

interface AgentDetailsProps {
  agent: SystemAgent
}

export function AgentDetails({ agent }: AgentDetailsProps) {
  const [showPrompt, setShowPrompt] = useState(false)

  return (
    <Card className="p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900">{agent.name}</h3>
        <p className="text-slate-600 mt-1">{agent.description}</p>
      </div>

      <div className="mb-4 text-sm text-slate-500">
        Model: {agent.model} | Temperature: {agent.temperature} | Max tokens: {agent.maxOutputTokens}
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => setShowPrompt(!showPrompt)}
      >
        {showPrompt ? 'Hide' : 'Show'} System Prompt
      </Button>

      <PromptViewer prompt={agent.systemPrompt} isVisible={showPrompt} />
    </Card>
  )
}