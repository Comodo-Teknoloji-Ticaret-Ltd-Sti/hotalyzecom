"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export const ScrollToTop: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false)
      }
    }

    window.addEventListener("scroll", checkScrollTop)
    return () => window.removeEventListener("scroll", checkScrollTop)
  }, [showScroll])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Button
      onClick={scrollTop}
      size="icon"
      className={`fixed bottom-4 right-4 z-50 transition-opacity ${showScroll ? "opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <ArrowUp className="h-4 w-4" />
    </Button>
  )
}
