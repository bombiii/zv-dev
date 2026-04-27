"use client"

import { AuroraBackground } from "@/components/ui/aurora-background"
import { ThemeToggle } from "@/components/theme-toggle"
import { useInView } from "@/hooks/useInView"
import dynamic from "next/dynamic"

const PdfViewer = dynamic(() => import("@/components/ui/pdf-viewer"), {
  ssr: false,
  loading: () => <p>Betöltés...</p>,
})

export default function CV() {
  const { ref: aboutRef, inView: aboutInView } = useInView()
  return (
    <AuroraBackground>
      <ThemeToggle />

      
      <div className="w-full px-6 py-20 transition-all duration-700 ease-out md:pl-30
         max-w-2xl">
        <PdfViewer />
      </div>
    </AuroraBackground>
  )
}