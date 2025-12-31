import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, HelpCircle, Video, FileText } from "lucide-react"

export default function Resources() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Resources</h1>
        <p className="text-xl text-muted-foreground">
          Everything you need to get started and succeed
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <Book className="h-8 w-8 mb-2" />
            <CardTitle>Documentation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Comprehensive guides and API documentation to help you integrate and use our platform effectively.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Video className="h-8 w-8 mb-2" />
            <CardTitle>Video Tutorials</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Step-by-step video tutorials covering all aspects of the platform and best practices.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <HelpCircle className="h-8 w-8 mb-2" />
            <CardTitle>Help Center</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Find answers to frequently asked questions and get support when you need it.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <FileText className="h-8 w-8 mb-2" />
            <CardTitle>Case Studies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Learn how other organizations have successfully implemented LegalEase AI in their workflows.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}