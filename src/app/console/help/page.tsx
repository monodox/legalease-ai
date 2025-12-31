import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle, Book, MessageSquare, FileText } from "lucide-react"

export default function Help() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Help & Support</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <HelpCircle className="h-8 w-8 mb-2" />
            <CardTitle>Getting Started</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Learn how to use LegalEase AI effectively for your business needs.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• How to ask legal questions</li>
              <li>• Understanding AI responses</li>
              <li>• Best practices for legal guidance</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <MessageSquare className="h-8 w-8 mb-2" />
            <CardTitle>Chat Features</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Master the AI chat interface and get better responses.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Conversation management</li>
              <li>• Context setting</li>
              <li>• Follow-up questions</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <FileText className="h-8 w-8 mb-2" />
            <CardTitle>Document Generation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Generate legal documents with AI assistance.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Available document types</li>
              <li>• Customization options</li>
              <li>• Review and editing</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Book className="h-8 w-8 mb-2" />
            <CardTitle>Legal Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Access comprehensive legal information and guides.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Indian business law basics</li>
              <li>• Compliance requirements</li>
              <li>• Industry-specific guidance</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}