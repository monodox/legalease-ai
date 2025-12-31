'use client'

import Link from "next/link"
import { Plus, Bot, Brain, Library, MessageSquare, User, Settings, HelpCircle, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ConsoleSidebar() {
  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 border-r bg-background z-40 flex flex-col">
      <div className="p-4 flex-1">
        <nav className="space-y-4">
          <Button className="w-full justify-start" asChild>
            <Link href="/console/chat">
              <Plus className="h-4 w-4 mr-2" />
              New Chat
            </Link>
          </Button>
          
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/console/agents">
                <Bot className="h-4 w-4 mr-2" />
                Agents
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/console/knowledge">
                <Brain className="h-4 w-4 mr-2" />
                Knowledge
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/console/library">
                <Library className="h-4 w-4 mr-2" />
                Library
              </Link>
            </Button>
          </div>

          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2 px-2">Recent Chats</h3>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground px-2 py-1">
                No recent chats
              </p>
            </div>
          </div>
        </nav>
      </div>

      <div className="p-4 border-t">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" className="w-full justify-start">
              <User className="h-4 w-4 mr-2" />
              <div className="text-left">
                <div className="text-sm font-medium">John Doe</div>
                <div className="text-xs text-muted-foreground">john@company.com</div>
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
  )
}