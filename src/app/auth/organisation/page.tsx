'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Plus } from "lucide-react"

export default function Organisation() {
  return (
    <div className="flex items-center justify-center p-4 min-h-[calc(100vh-200px)]">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Building className="h-5 w-5" />
              <CardTitle>Join Organisation</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="orgCode">Organisation Code</Label>
              <Input id="orgCode" placeholder="Enter organisation code" />
            </div>
            <Button className="w-full">Join Organisation</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              <CardTitle>Create Organisation</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="orgName">Organisation Name</Label>
              <Input id="orgName" placeholder="Enter organisation name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="orgDescription">Description</Label>
              <Input id="orgDescription" placeholder="Brief description" />
            </div>
            <Button className="w-full">Create Organisation</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}