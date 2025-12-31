import { ConsoleHeader } from "@/components/console/console-header"
import { ConsoleSidebar } from "@/components/console/console-sidebar"

export default function ConsoleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <ConsoleHeader />
      <div className="flex flex-1 pt-12 md:pt-16 overflow-hidden">
        <ConsoleSidebar />
        <main className="flex-1 md:ml-64 ml-0 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  )
}