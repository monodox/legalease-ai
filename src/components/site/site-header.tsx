import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/site/home" className="text-xl font-bold">
          LegalEase AI
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/site/home" className="text-sm hover:underline">
            Home
          </Link>
          <Link href="/site/features" className="text-sm hover:underline">
            Features
          </Link>
          <Link href="/site/company" className="text-sm hover:underline">
            Company
          </Link>
          <Link href="/site/resources" className="text-sm hover:underline">
            Resources
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/auth/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}