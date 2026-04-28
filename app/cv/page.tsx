"use client"

import { AuroraBackground } from "@/components/ui/aurora-background"
import { ThemeToggle } from "@/components/theme-toggle"
import dynamic from "next/dynamic"
import NavBar from "@/components/ui/nav-bar"

const PdfViewer = dynamic(() => import("@/components/ui/pdf-viewer"), {
  ssr: false,
  loading: () => <p>Betöltés...</p>,
})

export default function CV() {
  return (
    <AuroraBackground>
      <NavBar />
      <ThemeToggle />

      
      <div className="w-full transition-all duration-700 ease-out max-w-2xl m-10">
        <PdfViewer />
      </div>
    </AuroraBackground>
  )
}