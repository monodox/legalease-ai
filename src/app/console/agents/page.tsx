import { AgentsList } from './components/agents-list'

export default function AgentsPage() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">AI Agents</h1>
        <p className="text-slate-600 mt-2">
          Specialized AI assistants for different aspects of Indian business law
        </p>
      </div>

      <AgentsList />
    </div>
  )
}