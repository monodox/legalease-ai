import Link from "next/link"

export function AppHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background">
      <div className="container mx-auto px-4 py-4">
        <Link href="/" className="text-xl font-bold">
          LegalEase AI
        </Link>
      </div>
    </header>
  )
}