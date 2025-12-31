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
      <div className="flex flex-1 pt-12 md:pt-16">
        <ConsoleSidebar />
        <main className="flex-1 md:ml-64 ml-0 px-3 md:px-6 py-4 md:py-6 overflow-x-hidden">
          <div className="max-w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}