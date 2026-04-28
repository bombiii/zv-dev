"use client"

import { AuroraBackground } from "@/components/ui/aurora-background"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { CanvasText } from "@/components/ui/canvas-text"
import { useInView } from "@/hooks/useInView"
import Link from "next/link"

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiPython,
  SiDocker,
  SiGit,
  SiLinux,
  SiGithubactions,
  SiHtml5,
  SiCss,
  SiTestinglibrary,
  SiVite,
  SiMysql,
  SiGithub,
} from "react-icons/si"
import Image from "next/image"
import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/ui/project-card"

const row1 = [
  { Icon: SiJavascript, label: "JavaScript", color: "text-yellow-400" },
  { Icon: SiTypescript, label: "TypeScript", color: "text-blue-500" },
  { Icon: SiReact, label: "React", color: "text-cyan-400" },
  {
    Icon: SiNextdotjs,
    label: "Next.js",
    color: "text-slate-900 dark:text-slate-100",
  },
  { Icon: SiNodedotjs, label: "Node.js", color: "text-green-500" },
  { Icon: SiTailwindcss, label: "Tailwind CSS", color: "text-cyan-400" },
  { Icon: SiCss, label: "CSS", color: "text-blue-500" },
  { Icon: SiTestinglibrary, label: "Testing Library", color: "text-green-400" },
]

const row2 = [
  { Icon: SiPython, label: "Python", color: "text-blue-400" },
  { Icon: SiDocker, label: "Docker", color: "text-blue-500" },
  { Icon: SiGit, label: "Git", color: "text-orange-500" },
  {
    Icon: SiLinux,
    label: "Linux",
    color: "text-orange-500 dark:text-yellow-200",
  },
  { Icon: SiGithubactions, label: "CI/CD", color: "text-blue-400" },
  { Icon: SiHtml5, label: "HTML5", color: "text-orange-500" },
  { Icon: SiVite, label: "Vite", color: "text-purple-500" },
  { Icon: SiMysql, label: "MySQL", color: "text-blue-600" },
]

const MarqueeContent = ({ items }: { items: typeof row1 }) => (
  <div className="flex shrink-0 items-center gap-8 pr-8">
    {items.map((item, idx) => (
      <div
        key={idx}
        className="flex w-52 shrink-0 items-center gap-3 text-lg font-semibold tracking-wide text-slate-900 dark:text-slate-200"
      >
        <item.Icon className={`text-3xl ${item.color}`} />
        <span className="truncate">{item.label}</span>
      </div>
    ))}
  </div>
)

const MarqueeRow = ({
  items,
  reverse = false,
}: {
  items: typeof row1
  reverse?: boolean
}) => (
  <div
    className={`flex w-max ${reverse ? "animate-scroll-right" : "animate-scroll-left"}`}
  >
    <MarqueeContent items={items} />
    <MarqueeContent items={items} />
  </div>
)

export default function Page() {
  const { ref: aboutRef, inView: aboutInView } = useInView()
  return (
    <AuroraBackground>
      <ThemeToggle />

      {/* HERO */}

      <title>Varga Zsombor | Szoftver & Web Fejlesztő</title>
      <div className="absolute inset-0 h-full w-full overflow-x-hidden overflow-y-auto" id="scroll-container">
        <div className="flex min-h-screen w-full items-center justify-start p-6 md:pl-65">
          <div className="flex w-full max-w-5xl animate-startup-hero flex-col items-start justify-start gap-6 rounded-lg text-left opacity-0 [animation-delay:300ms]">
            <CanvasText
              text="Varga Zsombor"
              className="text-2xl font-bold transition-transform duration-700 hover:scale-103 hover:transform md:text-4xl lg:text-6xl"
              backgroundClassName="bg-blue-700 dark:bg-indigo-200"
              colors={[
                "rgba(0, 153, 255, 1)",
                "rgba(0, 153, 255, 0.9)",
                "rgba(0, 153, 255, 0.8)",
                "rgba(0, 153, 255, 0.7)",
                "rgba(0, 153, 255, 0.6)",
                "rgba(0, 153, 255, 0.5)",
                "rgba(0, 153, 255, 0.4)",
                "rgba(0, 153, 255, 0.3)",
                "rgba(0, 153, 255, 0.2)",
                "rgba(0, 153, 255, 0.1)",
              ]}
              lineGap={4}
              animationDuration={20}
            />
            <h2 className="-mt-5 animate-startup-hero text-4xl text-black/30 opacity-0 [animation-delay:500ms] dark:text-indigo-200/20">
              Szoftver Fejlesztő | Web Fejlesztő
            </h2>
            <div className="flex w-3xl animate-startup-hero border border-slate-400 opacity-0 [animation-delay:600ms] dark:border-slate-400"></div>
            <p className="w-auto max-w-2xl animate-startup-hero text-lg text-slate-600 opacity-0 [animation-delay:800ms] dark:text-slate-200">
              Egy tanuló szoftver és web fejlesztő vagyok, aki szereti a
              technológiát és a kreatív problémamegoldást.
            </p>
            <div id="hero-buttons" className="flex gap-3">
              <Button
                variant="default"
                className="animate-startup-hero opacity-0 [animation-delay:1000ms] mr-3"
                onClick={() =>
                  document
                    .getElementById("projektek")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Projektek megtekintése
              </Button>
              
              <Link href="/cv">
                <Button
                  variant="default"
                  className="animate-startup-hero opacity-0 [animation-delay:1500ms]">
                  CV megtekintése
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* ABOUT ME */}

        <section
          ref={aboutRef}
          className={`w-full px-6 py-20 transition-all duration-700 ease-out md:pl-30 ${
            aboutInView
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-8">
            <p className="mb-4 text-sm tracking-widest text-indigo-800 uppercase dark:text-indigo-200">
              Rólam
            </p>

            <div className="flex flex-col items-center gap-12 md:flex-row">
              <div className="h-100 w-100 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-xl/30 backdrop-blur-md transition-transform duration-300 hover:scale-105">
                <Image
                  src="/avatar.jpg"
                  width={500}
                  height={500}
                  alt="Varga Zsombor"
                />
              </div>

              <div className="flex flex-col gap-4 rounded-2xl border border-white/25 p-6 shadow-xl/30 backdrop-blur-3xl">
                <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-200">
                  Szia, Zsombor vagyok. 👋
                </h2>
                <p className="max-w-2xl leading-relaxed text-slate-600 dark:text-slate-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  sed dolorum numquam consequatur asperiores sint! Soluta illum
                  repellendus voluptate asperiores eligendi. Magnam omnis ad
                  ipsam eveniet qui nemo asperiores tenetur.
                </p>
                <p className="max-w-2xl leading-relaxed text-slate-600 dark:text-slate-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum exercitationem optio ducimus facilis illum,
                  reprehenderit placeat voluptates sint beatae ullam doloremque
                  facere officia doloribus mollitia asperiores vitae molestias
                  illo possimus?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}

        <section className="relative overflow-hidden border-t border-white/15 py-10 pb-20">
          <div className="mx-auto w-full max-w-6xl space-y-8 px-6">
            <p className="mb-4 text-sm tracking-widest text-indigo-800 uppercase dark:text-indigo-200">
              Nyelvek és eszközök
            </p>

            <div className="mask-image-gradient relative flex h-14 w-full items-center overflow-hidden rounded-lg">
              <MarqueeRow items={row1} />
            </div>

            <div className="mask-image-gradient relative flex h-14 w-full items-center overflow-hidden rounded-lg">
              <MarqueeRow items={row2} reverse />
            </div>
          </div>
        </section>

        {/* PROJECTS */}

        <section
          id="projektek"
          className="overflow-hidden border-t border-white/15 py-10 pb-20"
        >
          <div className="mx-auto w-full max-w-6xl space-y-8 px-6">
            <p className="mb-4 text-sm tracking-widest text-indigo-800 uppercase dark:text-indigo-200">
              Projektek
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}

        <section className="border-t border-white/15 py-10 pb-20">
          <div className="mx-auto w-full max-w-6xl px-6 flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-3xl font-bold text-slate-700 dark:text-slate-100">Lépj kapcsolatba velem</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Nyitott vagyok együttműködésre és lehetőségekre.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/bombiii"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/25 bg-white/10 px-6 py-4 shadow-xl/30 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-white/40 hover:bg-white/20"
              >
                <SiGithub className="text-2xl text-slate-700 dark:text-slate-100" />
                <span className="font-medium text-slate-700 dark:text-slate-100">GitHub</span>
              </a>

              <a
                href="mailto:zsomborvarga077@gmail.com"
                className="flex items-center gap-3 rounded-xl border border-white/25 bg-white/10 px-6 py-4 shadow-xl/30 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-white/40 hover:bg-white/20"
              >
                <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-medium text-slate-700 dark:text-slate-100">Email</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </AuroraBackground>
  )
}
