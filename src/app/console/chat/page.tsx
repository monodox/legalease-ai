'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Send, Sparkles, Plus, Paperclip, Globe, FileText, Search } from "lucide-react"

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
  const [activeMode, setActiveMode] = useState<string | null>(null)

  const suggestedPrompts = [
    {
      title: "Company Formation",
      description: "Get guidance on registering your business in India",
      prompt: "How do I register a private limited company in India? What are the requirements and steps?"
    },
    {
      title: "Contract Review",
      description: "Understand contract terms and legal obligations",
      prompt: "What are the key clauses I should review in a service agreement? What legal obligations should I be aware of?"
    },
    {
      title: "Compliance Help",
      description: "Stay compliant with GST, labor laws, and regulations",
      prompt: "What are the GST compliance requirements for a startup in India? What labor law obligations do I have?"
    },
    {
      title: "Document Generation",
      description: "Create legal documents tailored to your business",
      prompt: "Can you help me create a non-disclosure agreement for my Indian startup?"
    }
  ]

  const handleSuggestedPrompt = (prompt: string) => {
    setMessage(prompt)
  }

  const handleModeSelect = (mode: string) => {
    setActiveMode(mode)
    // Add mode-specific logic here
    console.log(`Activated ${mode} mode`)
  }

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
      <div className="flex-1 overflow-y-auto px-3 md:px-6">
        <div className="max-w-4xl mx-auto py-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="mb-6">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                <h1 className="text-2xl font-bold mb-2">Welcome to LegalEase AI</h1>
                <p className="text-muted-foreground max-w-md">
                  Your AI-powered legal assistant for Indian business law. Ask questions about compliance, contracts, or get help with legal documents.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 w-full max-w-2xl">
                {suggestedPrompts.map((item, index) => (
                  <div 
                    key={index}
                    onClick={() => handleSuggestedPrompt(item.prompt)}
                    className="p-4 border rounded-lg bg-background hover:bg-accent cursor-pointer transition-colors"
                  >
                    <h3 className="font-medium mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4 pb-4">
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" type="button">
                <Plus className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => handleModeSelect('attach')}>
                <Paperclip className="h-4 w-4 mr-2" />
                Attach Docs & Images
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleModeSelect('web-search')}>
                <Globe className="h-4 w-4 mr-2" />
                Web Search Mode
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleModeSelect('create')}>
                <FileText className="h-4 w-4 mr-2" />
                Create Mode
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleModeSelect('research')}>
                <Search className="h-4 w-4 mr-2" />
                Deep Research
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Input 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={activeMode ? `${activeMode} mode active - Ask me anything...` : "Ask me anything about Indian business law..."}
            className="flex-1"
            disabled={isLoading}
          />
          <Button type="submit" disabled={!message.trim() || isLoading}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
        {activeMode && (
          <div className="max-w-4xl mx-auto mt-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              {activeMode === 'attach' && 'Attachment mode active - Upload documents and images'}
              {activeMode === 'web-search' && 'Web search mode active - Real-time information retrieval'}
              {activeMode === 'create' && 'Create mode active - Generate documents and images'}
              {activeMode === 'research' && 'Deep research mode active - Comprehensive analysis'}
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setActiveMode(null)}
                className="ml-auto h-6 px-2 text-xs"
              >
                Disable
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}