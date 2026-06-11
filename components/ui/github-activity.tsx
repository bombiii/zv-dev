"use client"

import { useEffect, useState } from "react"
import { SiGithub } from "react-icons/si"

export default function GitHubActivity() {
  const [pushes, setPushes] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/bombiii/events/public"
        )
        if (!res.ok) throw new Error("Hiba a lekérdezés során")
        const events = await res.json()

        const pushEvents = events
          .filter((e: any) => e.type === "PushEvent")
          .slice(0, 5)
        setPushes(pushEvents)
      } catch (error) {
        console.error("GitHub fetch error:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchActivity()
  }, [])

  return
  ;<div></div>
}
