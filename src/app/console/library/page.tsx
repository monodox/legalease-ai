import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileText, Download, Search } from "lucide-react"

export default function Library() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Document Library</h1>
        <Button>
          <FileText className="h-4 w-4 mr-2" />
          New Document
        </Button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search documents..." className="pl-10" />
        </div>
      </div>
      
      <div className="grid gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg">Partnership Deed Template</CardTitle>
              <p className="text-sm text-muted-foreground">Created 2 days ago</p>
            </div>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Standard partnership agreement template for Indian businesses.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg">Non-Disclosure Agreement</CardTitle>
              <p className="text-sm text-muted-foreground">Created 1 week ago</p>
            </div>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Confidentiality agreement for business discussions.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg">Employment Contract</CardTitle>
              <p className="text-sm text-muted-foreground">Created 2 weeks ago</p>
            </div>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Standard employment agreement compliant with Indian labor laws.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}