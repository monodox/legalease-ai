import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, FileText, Shield, Zap } from "lucide-react"

export default function Features() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Features</h1>
        <p className="text-xl text-muted-foreground">
          Powerful AI tools designed specifically for Indian business law compliance
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <Brain className="h-8 w-8 mb-2" />
            <CardTitle>AI Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              AI algorithms specialized in Indian business law and compliance
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <FileText className="h-8 w-8 mb-2" />
            <CardTitle>Document Generation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Generate Indian business documents with jurisdiction-specific compliance
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Shield className="h-8 w-8 mb-2" />
            <CardTitle>Secure Platform</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Enterprise-grade security for your sensitive data
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Zap className="h-8 w-8 mb-2" />
            <CardTitle>Fast Processing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Lightning-fast processing for immediate results
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}