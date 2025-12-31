import { AppHeader } from "@/components/app/app-header"
import { AppFooter } from "@/components/app/app-footer"

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />
      <main className="flex-1 container mx-auto px-4 py-8 pt-24">
        {children}
      </main>
      <AppFooter />
    </div>
  )
}