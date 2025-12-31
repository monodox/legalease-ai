import { ConsoleHeader } from "@/components/console/console-header"
import { ConsoleSidebar } from "@/components/console/console-sidebar"

export default function ConsoleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <ConsoleHeader />
      <div className="flex flex-1 pt-16">
        <ConsoleSidebar />
        <main className="flex-1 ml-64">
          {children}
        </main>
      </div>
    </div>
  )
}