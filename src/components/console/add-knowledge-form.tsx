'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { Plus, Link, FileText, Upload } from 'lucide-react'

interface AddKnowledgeFormProps {
  trigger?: React.ReactNode
}

export function AddKnowledgeForm({ trigger }: AddKnowledgeFormProps) {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')
  const [textContent, setTextContent] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (type: 'url' | 'text' | 'file') => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Adding knowledge:', { type, title, description, url, textContent, file })
    
    // Reset form
    setTitle('')
    setDescription('')
    setUrl('')
    setTextContent('')
    setFile(null)
    setIsSubmitting(false)
    setOpen(false)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Knowledge
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add to Knowledge Base</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title..."
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Brief description..."
              />
            </div>
          </div>

          <Tabs defaultValue="url" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="url">
                <Link className="h-4 w-4 mr-2" />
                URL
              </TabsTrigger>
              <TabsTrigger value="text">
                <FileText className="h-4 w-4 mr-2" />
                Text
              </TabsTrigger>
              <TabsTrigger value="file">
                <Upload className="h-4 w-4 mr-2" />
                File
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="url" className="space-y-4">
              <div>
                <Label htmlFor="url">Website URL</Label>
                <Input
                  id="url"
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com"
                />
              </div>
              <Button 
                onClick={() => handleSubmit('url')}
                disabled={!title || !url || isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Adding...' : 'Add URL to Knowledge Base'}
              </Button>
            </TabsContent>
            
            <TabsContent value="text" className="space-y-4">
              <div>
                <Label htmlFor="content">Text Content</Label>
                <Textarea
                  id="content"
                  value={textContent}
                  onChange={(e) => setTextContent(e.target.value)}
                  placeholder="Paste your text content here..."
                  rows={8}
                />
              </div>
              <Button 
                onClick={() => handleSubmit('text')}
                disabled={!title || !textContent || isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Adding...' : 'Add Text to Knowledge Base'}
              </Button>
            </TabsContent>
            
            <TabsContent value="file" className="space-y-4">
              <div>
                <Label htmlFor="file">Upload Document</Label>
                <Input
                  id="file"
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.txt"
                />
                {file && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                  </p>
                )}
              </div>
              <Button 
                onClick={() => handleSubmit('file')}
                disabled={!title || !file || isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Uploading...' : 'Upload Document to Knowledge Base'}
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}