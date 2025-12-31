'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Sparkles } from "lucide-react"

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export default function Chat() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim() || isLoading) return
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: message.trim(),
      isUser: true,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    const currentMessage = message.trim()
    setMessage('')
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: currentMessage,
          businessType: 'startup',
          jurisdiction: 'India'
        }),
      })
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`)
      }
      
      const data = await response.json()
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.result?.response || 'I apologize, but I encountered an issue processing your request.',
        isUser: false,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Chat error:', error)
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'I apologize, but I\'m currently unable to respond. Please check your connection and try again.',
        isUser: false,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center min-h-full text-center">
              <div className="mb-6">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                <h1 className="text-2xl font-bold mb-2">Welcome to LegalEase AI</h1>
                <p className="text-muted-foreground max-w-md">
                  Your AI-powered legal assistant for Indian business law. Ask questions about compliance, contracts, or get help with legal documents.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 w-full max-w-2xl">
                <div className="p-4 border rounded-lg bg-background hover:bg-accent cursor-pointer transition-colors">
                  <h3 className="font-medium mb-2">Company Formation</h3>
                  <p className="text-sm text-muted-foreground">
                    Get guidance on registering your business in India
                  </p>
                </div>
                <div className="p-4 border rounded-lg bg-background hover:bg-accent cursor-pointer transition-colors">
                  <h3 className="font-medium mb-2">Contract Review</h3>
                  <p className="text-sm text-muted-foreground">
                    Understand contract terms and legal obligations
                  </p>
                </div>
                <div className="p-4 border rounded-lg bg-background hover:bg-accent cursor-pointer transition-colors">
                  <h3 className="font-medium mb-2">Compliance Help</h3>
                  <p className="text-sm text-muted-foreground">
                    Stay compliant with GST, labor laws, and regulations
                  </p>
                </div>
                <div className="p-4 border rounded-lg bg-background hover:bg-accent cursor-pointer transition-colors">
                  <h3 className="font-medium mb-2">Document Generation</h3>
                  <p className="text-sm text-muted-foreground">
                    Create legal documents tailored to your business
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`rounded-lg px-4 py-2 max-w-md ${
                    msg.isUser 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-background border'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-background border rounded-lg px-4 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      <div className="border-t bg-background p-4 flex-shrink-0">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto flex gap-2">
          <Input 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask me anything about Indian business law..." 
            className="flex-1"
            disabled={isLoading}
          />
          <Button type="submit" disabled={!message.trim() || isLoading}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  )
}