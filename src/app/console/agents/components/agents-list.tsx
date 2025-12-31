'use client'

import { AGENTS } from '@/agents'
import { AgentDetails } from './agent-details'

export function AgentsList() {
  return (
    <div className="space-y-6">
      {AGENTS.map((agent) => (
        <AgentDetails key={agent.id} agent={agent} />
      ))}
    </div>
  )
}