import { AuroraBackground } from "@/components/ui/aurora-background"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <AuroraBackground>
      <div className="flex w-full min-h-screen items-center justify-start p-6 md:pl-30">
        <div className="flex w-full max-w-5xl flex-col items-start justify-start gap-6 rounded-lg text-left">
          <h1 className="text-7xl font-bold text-indigo-200 ">Varga Zsombor</h1>
          <h2 className="text-4xl font- text-indigo-200/20 -mt-1">Software Developer | Web Developer</h2>
          <div className="flex w-3xl border border-slate-400"></div>
          <p className="text-slate-200">
            Explore my projects and experience in web development.
          </p>
          <Button variant="default">View Projects</Button>
        </div>
      </div>
    </AuroraBackground>
  )
}