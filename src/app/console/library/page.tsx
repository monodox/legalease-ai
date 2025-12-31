import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileText, Search, Upload, Image } from "lucide-react"

export default function Library() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Document Library</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Upload
          </Button>
          <Button>
            <FileText className="h-4 w-4 mr-2" />
            New Document
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search documents and images..." className="pl-10" />
        </div>
      </div>
      
      <div className="text-center py-12">
        <div className="flex justify-center gap-4 mb-4">
          <FileText className="h-8 w-8 text-muted-foreground" />
          <Image className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-medium mb-2">No documents or images yet</h3>
        <p className="text-muted-foreground mb-4">
          Store your created documents, templates, and images in your personal library.
        </p>
        <div className="flex gap-2 justify-center">
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Upload Files
          </Button>
          <Button>
            <FileText className="h-4 w-4 mr-2" />
            Create Document
          </Button>
        </div>
      </div>
    </div>
  )
}