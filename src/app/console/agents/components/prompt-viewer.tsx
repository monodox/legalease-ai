'use client'

import { Card } from '@/components/ui/card'

interface PromptViewerProps {
  prompt: string
  isVisible: boolean
}

export function PromptViewer({ prompt, isVisible }: PromptViewerProps) {
  if (!isVisible) return null

  return (
    <Card className="p-4 mt-4 bg-slate-50">
      <h4 className="font-medium text-sm text-slate-600 mb-2">System Prompt</h4>
      <pre className="text-xs text-slate-700 whitespace-pre-wrap font-mono">
        {prompt}
      </pre>
    </Card>
  )
}