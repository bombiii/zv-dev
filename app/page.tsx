import { AuroraBackground } from "@/components/ui/aurora-background"
import { Button } from "@/components/ui/button"
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiPython } from "react-icons/si"

export default function Page() {
  return (
    <AuroraBackground>
      {/* Scrollable Wrapper: This prevents AuroraBackground from hiding your lower content */}
      <div className="absolute inset-0 h-full w-full overflow-y-auto overflow-x-hidden">
        
        {/* Hero Section */}
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

        {/* Marquee Section */}
        <section className="relative overflow-hidden py-10 pb-20">
          <div className="mx-auto w-full max-w-6xl space-y-6 px-6">
            <p className="text-xl uppercase tracking-widest text-slate-300">
              Languages & tools
            </p>

            {/* Row 1: Left Scrolling */}
            <div className="flex h-12 items-center overflow-hidden rounded-lg bg-white/10 text-slate-50 border border-white/15 ring-1 ring-indigo-300/30 backdrop-blur-sm">
              <div className="marquee">
                <span className="whitespace-nowrap pr-8 text-lg font-semibold tracking-wide">
                  JavaScript &nbsp;&nbsp; TypeScript &nbsp;&nbsp; React &nbsp;&nbsp; Next.js &nbsp;&nbsp; Node.js &nbsp;&nbsp; Express &nbsp;&nbsp; GraphQL &nbsp;&nbsp; Tailwind CSS
                </span>
                {/* Duplicated span for seamless loop */}
                <span className="whitespace-nowrap pr-8 text-lg font-semibold tracking-wide">
                  JavaScript &nbsp;&nbsp; TypeScript &nbsp;&nbsp; React &nbsp;&nbsp; Next.js &nbsp;&nbsp; Node.js &nbsp;&nbsp; Express &nbsp;&nbsp; GraphQL &nbsp;&nbsp; Tailwind CSS
                </span>
              </div>
            </div>

            {/* Row 2: Right Scrolling */}
            <div className="flex h-12 items-center overflow-hidden rounded-lg bg-white/10 text-slate-50 border border-white/15 ring-1 ring-indigo-300/30 backdrop-blur-sm">
              <div className="marquee marquee--reverse">
                <span className="whitespace-nowrap pr-8 text-lg font-semibold tracking-wide">
                  Python &nbsp;&nbsp; Django &nbsp;&nbsp; Flask &nbsp;&nbsp; PostgreSQL &nbsp;&nbsp; Docker &nbsp;&nbsp; Git &nbsp;&nbsp; Linux &nbsp;&nbsp; CI/CD
                </span>
                <span className="whitespace-nowrap pr-8 text-lg font-semibold tracking-wide">
                  Python &nbsp;&nbsp; Django &nbsp;&nbsp; Flask &nbsp;&nbsp; PostgreSQL &nbsp;&nbsp; Docker &nbsp;&nbsp; Git &nbsp;&nbsp; Linux &nbsp;&nbsp; CI/CD
                </span>
              </div>
            </div>

            {/* Row 3: Left Scrolling */}
            <div className="flex h-12 items-center overflow-hidden rounded-lg bg-white/10 text-slate-50 border border-white/15 ring-1 ring-indigo-300/30 backdrop-blur-sm">
              <div className="marquee">
                <span className="whitespace-nowrap pr-8 text-lg font-semibold tracking-wide">
                  HTML5 &nbsp;&nbsp; CSS3 &nbsp;&nbsp; SASS &nbsp;&nbsp; Chakra UI &nbsp;&nbsp; Storybook &nbsp;&nbsp; Jest &nbsp;&nbsp; Testing Library &nbsp;&nbsp; Vite
                </span>
                <span className="whitespace-nowrap pr-8 text-lg font-semibold tracking-wide">
                  HTML5 &nbsp;&nbsp; CSS3 &nbsp;&nbsp; SASS &nbsp;&nbsp; Chakra UI &nbsp;&nbsp; Storybook &nbsp;&nbsp; Jest &nbsp;&nbsp; Testing Library &nbsp;&nbsp; Vite
                </span>
              </div>
            </div>

          </div>
        </section>

      </div>
    </AuroraBackground>
  )
}