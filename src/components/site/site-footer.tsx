import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link href="/site/features" className="block hover:underline">
                Features
              </Link>
              <Link href="/site/resources" className="block hover:underline">
                Resources
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link href="/site/company" className="block hover:underline">
                About Us
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link href="/legal/terms" className="block hover:underline">
                Terms of Service
              </Link>
              <Link href="/legal/privacy" className="block hover:underline">
                Privacy Policy
              </Link>
              <Link href="/legal/cookies" className="block hover:underline">
                Cookie Policy
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link href="/site/resources" className="block hover:underline">
                Help Center
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          © 2024 LegalEase AI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}