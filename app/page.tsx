"use client"

import { AuroraBackground } from "@/components/ui/aurora-background"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { CanvasText } from "@/components/ui/canvas-text"
import { useInView } from "@/hooks/useInView"

import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss,
  SiPython, SiDocker, SiGit, SiLinux, SiGithubactions,
  SiHtml5, SiCss, SiTestinglibrary, SiVite,
  SiMysql
} from "react-icons/si";
import Image from "next/image"
import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/ui/project-card"

const row1 = [
  { Icon: SiJavascript, label: "JavaScript", color: "text-yellow-400" },
  { Icon: SiTypescript, label: "TypeScript", color: "text-blue-500" },
  { Icon: SiReact, label: "React", color: "text-cyan-400" },
  { Icon: SiNextdotjs, label: "Next.js", color: "text-slate-100" },
  { Icon: SiNodedotjs, label: "Node.js", color: "text-green-500" },
  { Icon: SiTailwindcss, label: "Tailwind CSS", color: "text-cyan-400" },
  { Icon: SiCss, label: "CSS", color: "text-blue-500" },
  { Icon: SiTestinglibrary, label: "Testing Library", color: "text-green-400" },
];

const row2 = [
  { Icon: SiPython, label: "Python", color: "text-blue-400" },
  { Icon: SiDocker, label: "Docker", color: "text-blue-500" },
  { Icon: SiGit, label: "Git", color: "text-orange-500" },
  { Icon: SiLinux, label: "Linux", color: "text-yellow-200" },
  { Icon: SiGithubactions, label: "CI/CD", color: "text-blue-400" },
  { Icon: SiHtml5, label: "HTML5", color: "text-orange-500" },
  { Icon: SiVite, label: "Vite", color: "text-purple-500" },
  { Icon: SiMysql, label: "MySQL", color: "text-blue-600" },
];

const MarqueeContent = ({ items }: { items: typeof row1 }) => (
  <div className="flex shrink-0 items-center gap-8 pr-8">
    {items.map((item, idx) => (
      <div key={idx} className="flex w-52 shrink-0 items-center gap-3 text-lg font-semibold tracking-wide text-slate-900 dark:text-slate-200">
        <item.Icon className={`text-3xl ${item.color}`} />
        <span className="truncate">{item.label}</span>
      </div>
    ))}
  </div>
);

const MarqueeRow = ({ items, reverse = false }: { items: typeof row1, reverse?: boolean }) => (
  <div className={`flex w-max ${reverse ? 'animate-scroll-right' : 'animate-scroll-left'}`}>
    <MarqueeContent items={items} />
    <MarqueeContent items={items} />
  </div>
);

export default function Page() {
  const { ref: aboutRef, inView: aboutInView } = useInView();
  return (
    <AuroraBackground>
      <ThemeToggle />

      {/* HERO */}

      <title>Varga Zsombor | Szoftver  & Web Fejlesztő</title>
      <div className="absolute inset-0 h-full w-full overflow-y-auto overflow-x-hidden">
        
        <div className="flex w-full min-h-screen items-center justify-start p-6 md:pl-65">
          <div className="flex w-full max-w-5xl flex-col items-start justify-start gap-6 rounded-lg text-left animate-startup-hero [animation-delay:1000ms] opacity-0 ">
            <CanvasText
              text="Varga Zsombor"
              className="text-2xl font-bold md:text-4xl lg:text-6xl hover:transform hover:scale-103 transition-transform duration-700"
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
            <h2 className="-mt-5 text-4xl text-black/30 dark:text-indigo-200/20 animate-startup-hero [animation-delay:500ms] opacity-0">Szoftver Fejlesztő | Web Fejlesztő</h2>
            <div className="flex w-3xl border border-slate-400 dark:border-slate-400 animate-startup-hero [animation-delay:800ms] opacity-0"></div>
            <p className="text-slate-600 dark:text-slate-200 w-auto max-w-2xl text-lg animate-startup-hero [animation-delay:1000ms] opacity-0">
              Egy tanuló szoftver és web fejlesztő vagyok, aki szereti a technológiát és a kreatív problémamegoldást.
            </p>
            <Button
              variant="default"
              className="animate-startup-hero [animation-delay:1500ms] opacity-0"
              onClick={() => document.getElementById("projektek")?.scrollIntoView({ behavior: "smooth" })}
            >
              Projektek megtekintése
            </Button>
          </div>
        </div>

        {/* ABOUT ME */}

        <section ref={aboutRef} className={`w-full px-6 py-20 md:pl-30 transition-all duration-700 ease-out
    ${aboutInView
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10"
    }`}>
          <div className="mx-auto w-full max-w-6xl flex flex-col items-start gap-8">
            
            <p className="text-sm uppercase tracking-widest text-indigo-800 dark:text-indigo-200 mb-4">About me</p>
            
            <div className="flex flex-col md:flex-row gap-12 items-center">
              
              <div className="shrink-0 w-100 h-100 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-xl/30 overflow-hidden
              hover:scale-105 transition-transform duration-300">
                <Image
                  src="/avatar.jpg"
                  width={500}
                  height={500}
                  alt="Varga Zsombor"/>
              </div>

              <div className="flex flex-col gap-4 p-6 backdrop-blur-3xl rounded-2xl border border-white/25 shadow-xl/30">
                <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-200">
                  Szia, Zsombor vagyok. 👋
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In sed dolorum numquam consequatur asperiores sint! Soluta illum repellendus voluptate asperiores eligendi. Magnam omnis ad ipsam eveniet qui nemo asperiores tenetur.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum exercitationem optio ducimus facilis illum, reprehenderit placeat voluptates sint beatae ullam doloremque facere officia doloribus mollitia asperiores vitae molestias illo possimus?
                </p>
              </div>

            </div>
          </div>
        </section>

          {/* MARQUEE */}

        <section className="relative overflow-hidden border-t border-white/15 py-10 pb-20">
          <div className="mx-auto w-full max-w-6xl space-y-8 px-6">
            <p className="text-sm uppercase tracking-widest text-indigo-800 dark:text-indigo-200 mb-4">
              Nyelvek és eszközök
            </p>

            <div className="flex h-14 w-full items-center overflow-hidden rounded-lg relative mask-image-gradient">
              <MarqueeRow items={row1} />
            </div>

            <div className="flex h-14 w-full items-center overflow-hidden rounded-lg relative mask-image-gradient">
              <MarqueeRow items={row2} reverse />
            </div>
          </div>
        </section>
        
        {/* PROJECTS */}
        
        <section id="projektek" className="overflow-hidden border-t border-white/15 py-10 pb-20">
          <div className="mx-auto w-full max-w-6xl space-y-8 px-6">
            <p className="text-sm uppercase tracking-widest text-indigo-800 dark:text-indigo-200 mb-4">
              Projektek
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>
      </div>

    </AuroraBackground>
  
  )
}
