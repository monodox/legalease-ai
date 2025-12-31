import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, BookOpen, Scale, Building } from "lucide-react"

export default function Knowledge() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Knowledge Base</h1>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search legal topics..." className="pl-10" />
        </div>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Building className="h-5 w-5" />
              <CardTitle>Company Formation</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">Private Limited Company Registration</h4>
              <p className="text-sm text-muted-foreground">
                Complete guide to registering a private limited company in India.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">Companies Act 2013</Badge>
                <Badge variant="secondary">ROC Filing</Badge>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">LLP Formation</h4>
              <p className="text-sm text-muted-foreground">
                Limited Liability Partnership registration process and requirements.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">LLP Act 2008</Badge>
                <Badge variant="secondary">Partnership</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Scale className="h-5 w-5" />
              <CardTitle>Contract Law</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">Essential Elements of Contracts</h4>
              <p className="text-sm text-muted-foreground">
                Understanding offer, acceptance, consideration, and legal capacity.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">Contract Act 1872</Badge>
                <Badge variant="secondary">Agreement</Badge>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">Breach of Contract Remedies</h4>
              <p className="text-sm text-muted-foreground">
                Legal remedies available for contract violations in India.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">Damages</Badge>
                <Badge variant="secondary">Specific Performance</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              <CardTitle>Compliance & Regulations</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">GST Compliance</h4>
              <p className="text-sm text-muted-foreground">
                Goods and Services Tax registration and filing requirements.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">GST Act</Badge>
                <Badge variant="secondary">Tax Filing</Badge>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">Labor Law Compliance</h4>
              <p className="text-sm text-muted-foreground">
                Employment regulations and statutory requirements for businesses.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">Labor Laws</Badge>
                <Badge variant="secondary">Employment</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}