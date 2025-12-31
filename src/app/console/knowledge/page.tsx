import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, BookOpen, Upload } from "lucide-react"
import { AddKnowledgeForm } from "@/components/console/add-knowledge-form"

export default function Knowledge() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Knowledge Base</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Upload
          </Button>
          <AddKnowledgeForm />
        </div>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search knowledge base..." className="pl-10" />
        </div>
      </div>

      <div className="text-center py-12">
        <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-medium mb-2">No knowledge base entries yet</h3>
        <p className="text-muted-foreground mb-4">
          Start building your legal knowledge base by adding documents, articles, and references.
        </p>
        <AddKnowledgeForm trigger={
          <Button>
            <BookOpen className="h-4 w-4 mr-2" />
            Add Your First Entry
          </Button>
        } />
      </div>
    </div>
  )
}