import { Button } from "@/components/ui/button"
import { User, LogOut } from "lucide-react"

export function ConsoleHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">LegalEase AI Console</h1>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4 mr-2" />
            Profile
          </Button>
          <Button variant="ghost" size="sm">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  )
}