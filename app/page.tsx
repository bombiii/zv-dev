import { AuroraBackground } from "@/components/ui/aurora-background"
import { Button } from "@/components/ui/button"

import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss,
  SiPython, SiDocker, SiGit, SiLinux, SiGithubactions,
  SiHtml5, SiCss, SiSass, SiChakraui, SiStorybook, SiJest, SiTestinglibrary, SiVite
} from "react-icons/si";

const row1 = [
  { Icon: SiJavascript, label: "JavaScript", color: "text-yellow-400" },
  { Icon: SiTypescript, label: "TypeScript", color: "text-blue-500" },
  { Icon: SiReact, label: "React", color: "text-cyan-400" },
  { Icon: SiNextdotjs, label: "Next.js", color: "text-slate-100" },
  { Icon: SiNodedotjs, label: "Node.js", color: "text-green-500" },
  { Icon: SiTailwindcss, label: "Tailwind CSS", color: "text-cyan-400" },
  { Icon: SiCss, label: "CSS", color: "text-blue-500" },
];

const row2 = [
  { Icon: SiPython, label: "Python", color: "text-blue-400" },
  { Icon: SiDocker, label: "Docker", color: "text-blue-500" },
  { Icon: SiGit, label: "Git", color: "text-orange-500" },
  { Icon: SiLinux, label: "Linux", color: "text-yellow-200" },
  { Icon: SiGithubactions, label: "CI/CD", color: "text-blue-400" },
  { Icon: SiHtml5, label: "HTML5", color: "text-orange-500" },
  { Icon: SiVite, label: "Vite", color: "text-purple-500" },
];

// 1. Updated: We now apply the animation classes DIRECTLY to this wrapper
const MarqueeContent = ({ items, reverse = false }: { items: typeof row1, reverse?: boolean }) => (
  <div 
    className={`flex shrink-0 items-center gap-8 pr-8 ${reverse ? 'animate-scroll-right' : 'animate-scroll-left'}`}
  >
    {items.map((item, idx) => (
      <div key={idx} className="flex w-52 shrink-0 items-center gap-3 text-lg font-semibold tracking-wide text-slate-200">
        <item.Icon className={`text-3xl ${item.color}`} />
        <span className="truncate">{item.label}</span>
      </div>
    ))}
  </div>
);

export default function Page() {
  return (
    <AuroraBackground>
      <div className="absolute inset-0 h-full w-full overflow-y-auto overflow-x-hidden">
        
        <div className="flex w-full min-h-screen items-center justify-start p-6 md:pl-30">
          <div className="flex w-full max-w-5xl flex-col items-start justify-start gap-6 rounded-lg text-left">
            <h1 className="text-7xl font-bold text-indigo-200">Varga Zsombor</h1>
            <h2 className="-mt-5 text-4xl text-indigo-200/20">Software Developer | Web Developer</h2>
            <div className="flex w-3xl border border-slate-400"></div>
            <p className="text-slate-200">
              Fedezd fel a projektjeimet, ahol a kreativitás és a technológia találkozik.
            </p>
            <Button variant="default">Projektek megtekintése</Button>
          </div>
        </div>

        <section className="relative overflow-hidden border-t border-white/15 py-10 pb-20">
          <div className="mx-auto w-full max-w-6xl space-y-8 px-6">
            <p className="text-sm uppercase tracking-widest text-slate-300">
              Languages & tools
            </p>

            {/* 2. Updated: Removed the extra `.marquee` wrapper. The children handle it now! */}
            {/* Row 1: Left Scrolling */}
            <div className="flex h-14 w-full items-center overflow-hidden rounded-lg text-slate-50 relative mask-image-gradient">
              <MarqueeContent items={row1} />
              <MarqueeContent items={row1} />
            </div>

            {/* Row 2: Right Scrolling */}
            <div className="flex h-14 w-full items-center overflow-hidden rounded-lg text-slate-50 relative mask-image-gradient">
              <MarqueeContent items={row2} reverse />
              <MarqueeContent items={row2} reverse />
            </div>
            
          </div>
        </section>

      </div>
    </AuroraBackground>
  )
}