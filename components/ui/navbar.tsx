"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function NavBar() {
  const pathname = usePathname()
  const router = useRouter()
  const [activeSection, setActiveSection] = useState<string>("/")

  useEffect(() => {
    if (pathname !== "/") return

    const sections = [
      { id: "projektek", path: "/#projektek" },
    ]

    const observers = sections.map(({ id, path }) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(path)
          else setActiveSection("/")
        },
        { threshold: 0.3 }
      )
      observer.observe(el)
      return observer
    })

    return () => observers.forEach(o => o?.disconnect())
  }, [pathname])

  const activeHref = pathname !== "/" ? pathname : activeSection

  const linkClass = (href: string) =>
    `rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
      activeHref === href
        ? "bg-indigo-500/20 text-indigo-700 dark:text-indigo-300"
        : "text-slate-600 hover:bg-white/20 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
    }`

  const handleProjektek = (e: React.MouseEvent) => {
    e.preventDefault()
    if (pathname === "/") {
      document.getElementById("projektek")?.scrollIntoView({ behavior: "smooth" })
    } else {
      router.push("/#projektek")
    }
  }

  return (
    <nav className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-2xl border border-white/20 bg-white/10 px-3 py-2 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-black/20">
        <Link href="/" className={linkClass("/")}>Főoldal</Link>
        <a href="/#projektek" onClick={handleProjektek} className={linkClass("/#projektek")}>
          Projektek
        </a>
        <Link href="/cv" className={linkClass("/cv")}>CV</Link>
      </div>
    </nav>
  )
}