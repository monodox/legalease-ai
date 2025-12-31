'use client'

import { Button } from "@/components/ui/button"
import { User, LogOut, Gavel, Menu, X } from "lucide-react"
import { useState } from "react"

export function ConsoleHeader() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background px-4 md:px-6 py-3 md:py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Gavel className="h-5 w-5 md:h-6 md:w-6 text-primary" />
          {sidebarOpen && <h1 className="text-base md:text-lg font-semibold hidden sm:block">LegalEase AI</h1>}
          <div className="h-4 md:h-6 w-px bg-border ml-2 hidden sm:block" />
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex"
          >
            {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
        
        <div className="flex items-center gap-1 md:gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <User className="h-4 w-4 mr-2" />
            <span className="hidden md:inline">Profile</span>
          </Button>
          <Button variant="ghost" size="sm">
            <LogOut className="h-4 w-4 mr-0 md:mr-2" />
            <span className="hidden md:inline">Logout</span>
          </Button>
        </div>
      </div>
    </header>
  )
}