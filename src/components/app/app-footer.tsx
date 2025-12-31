import Link from "next/link"

export function AppFooter() {
  return (
    <footer className="border-t bg-background mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <Link href="/legal/terms" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/legal/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/legal/cookies" className="hover:underline">
            Cookie Policy
          </Link>
        </div>
        <div className="text-center text-sm text-muted-foreground mt-4">
          © 2024 LegalEase AI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}