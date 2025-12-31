import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Edit, Share, FileText, Calendar, User } from "lucide-react"
import Link from "next/link"

interface LibraryPageProps {
  params: {
    id: string
  }
}

const documentData: Record<string, any> = {
  'partnership-deed-template': {
    title: 'Partnership Deed Template',
    type: 'Legal Document',
    size: '245 KB',
    format: 'PDF',
    createdAt: '2024-01-15',
    createdBy: 'AI Generator',
    tags: ['Partnership', 'Business Agreement', 'Template'],
    description: 'Standard partnership agreement template for Indian businesses with customizable clauses.',
    content: `
PARTNERSHIP DEED

This Partnership Deed is executed on [DATE] between:

PARTNERS:
1. [PARTNER 1 NAME], S/o [FATHER NAME], residing at [ADDRESS]
2. [PARTNER 2 NAME], S/o [FATHER NAME], residing at [ADDRESS]

BUSINESS DETAILS:
- Business Name: [BUSINESS NAME]
- Business Address: [BUSINESS ADDRESS]
- Nature of Business: [BUSINESS NATURE]

TERMS AND CONDITIONS:
1. Capital Contribution
2. Profit and Loss Sharing
3. Duties and Responsibilities
4. Decision Making Process
5. Dissolution Terms

[Additional clauses and legal provisions...]
    `
  },
  'nda-template': {
    title: 'Non-Disclosure Agreement',
    type: 'Legal Document', 
    size: '180 KB',
    format: 'PDF',
    createdAt: '2024-01-10',
    createdBy: 'AI Generator',
    tags: ['NDA', 'Confidentiality', 'Template'],
    description: 'Comprehensive NDA template for protecting confidential business information.',
    content: 'NDA document content...'
  }
}

export default function LibraryPage({ params }: LibraryPageProps) {
  const document = documentData[params.id] || documentData['partnership-deed-template']

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/console/library">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          <h1 className="text-2xl font-bold">{document.title}</h1>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="border rounded-lg p-6 bg-background">
            <h3 className="font-semibold mb-4">Document Preview</h3>
            <div className="bg-muted/50 p-4 rounded border min-h-[400px] font-mono text-sm whitespace-pre-line">
              {document.content}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border rounded-lg p-4 bg-background">
            <h3 className="font-semibold mb-4">Document Details</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Type:</span>
                <span>{document.type}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Created:</span>
                <span>{document.createdAt}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Created by:</span>
                <span>{document.createdBy}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Size:</span>
                <span className="ml-2">{document.size}</span>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-medium mb-2">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {document.tags.map((tag: string) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              {document.description}
            </p>
          </div>

          <div className="border rounded-lg p-4 bg-background">
            <h3 className="font-semibold mb-4">Actions</h3>
            <div className="space-y-2">
              <Button className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download {document.format}
              </Button>
              <Button variant="outline" className="w-full">
                <Edit className="h-4 w-4 mr-2" />
                Edit Document
              </Button>
              <Button variant="outline" className="w-full">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}