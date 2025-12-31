'use client'

import Link from "next/link"
import { Plus, Bot, Brain, Library, MessageSquare, User, Settings, HelpCircle, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ConsoleSidebar() {
  return (
    <>
      <aside className="fixed left-0 top-12 md:top-16 bottom-0 w-64 bg-background z-40 flex flex-col transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out">
        <div className="p-3 md:p-4 flex-1">
          <nav className="space-y-3 md:space-y-4">
            <Button className="w-full justify-start text-sm" asChild>
              <Link href="/console/chat">
                <Plus className="h-4 w-4 mr-2" />
                New Chat
              </Link>
            </Button>
            
            <div className="space-y-1 md:space-y-2">
              <Button variant="ghost" className="w-full justify-start text-sm" asChild>
                <Link href="/console/agents">
                  <Bot className="h-4 w-4 mr-2" />
                  Agents
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start text-sm" asChild>
                <Link href="/console/knowledge">
                  <Brain className="h-4 w-4 mr-2" />
                  Knowledge
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start text-sm" asChild>
                <Link href="/console/library">
                  <Library className="h-4 w-4 mr-2" />
                  Library
                </Link>
              </Button>
            </div>

            <div className="hidden md:block">
              <h3 className="text-sm font-medium text-muted-foreground mb-2 px-2">Recent Chats</h3>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground px-2 py-1">
                  No recent chats
                </p>
              </div>
            </div>
          </nav>
        </div>

        <div className="p-3 md:p-4 border-t">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start text-sm">
                <User className="h-4 w-4 mr-2" />
                <div className="text-left">
                  <div className="text-sm font-medium">John Doe</div>
                  <div className="text-xs text-muted-foreground hidden md:block">john@company.com</div>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <div className="space-y-1">
                <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                  <Link href="/console/settings">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                  <Link href="/console/help">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Help
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </aside>
      <div className="fixed left-64 top-0 bottom-0 w-px bg-border z-50 hidden md:block" />
    </>
  )
}