"use client"

import { AuroraBackground } from "@/components/ui/aurora-background"
import { ThemeToggle } from "@/components/theme-toggle"
import NavBar from "@/components/ui/navbar"
import { cv } from "@/data/cv"
import { SiGithub } from "react-icons/si"

export default function CV() {
  return (
    <AuroraBackground>
      <title>CV | Varga Zsombor</title>
      <NavBar />
      <ThemeToggle />

      <div className="absolute inset-0 h-full w-full overflow-y-auto">
        <div className="flex min-h-screen w-full justify-center px-4 py-24 pb-16">
          <div className="flex w-full max-w-3xl flex-col gap-4">
            {/* HEADER */}
            <div className="rounded-2xl border border-white/25 bg-white/10 p-8 shadow-xl/30 backdrop-blur-3xl">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100">
                    {cv.name}
                  </h1>
                  <p className="mt-1 text-indigo-700 dark:text-indigo-300">
                    {cv.title}
                  </p>
                </div>
                <button
                  onClick={() => window.print()}
                  className="shrink-0 rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-700 transition-all duration-200 hover:bg-indigo-500/20 dark:text-indigo-300 print:hidden"
                >
                  Letöltés / Nyomtatás
                </button>
              </div>

              <div className="mt-4 flex flex-wrap gap-4 border-t border-white/20 pt-4">
                <a
                  href={`mailto:${cv.email}`}
                  className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-indigo-700 dark:text-slate-400 dark:hover:text-indigo-300"
                >
                  <svg
                    className="h-4 w-4 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {cv.email}
                </a>
                <a
                  href={cv.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-indigo-700 dark:text-slate-400 dark:hover:text-indigo-300"
                >
                  <SiGithub className="h-4 w-4 shrink-0" />
                  {cv.githubLabel}
                </a>
              </div>
            </div>

            {/* SKILLS */}
            <div className="rounded-2xl border border-white/25 bg-white/10 p-6 shadow-xl/30 backdrop-blur-3xl">
              <p className="mb-4 text-xs tracking-widest text-indigo-800 uppercase dark:text-indigo-200">
                Készségek
              </p>
              <div className="flex flex-col gap-3">
                {cv.skills.map((group) => (
                  <div
                    key={group.label}
                    className="flex flex-col gap-2 sm:flex-row sm:items-center"
                  >
                    <span className="w-36 shrink-0 text-sm font-medium text-slate-500 dark:text-slate-400">
                      {group.label}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-0.5 text-xs text-indigo-700 dark:text-indigo-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* EDUCATION */}
            <div className="rounded-2xl border border-white/25 bg-white/10 p-6 shadow-xl/30 backdrop-blur-3xl">
              <p className="mb-4 text-xs tracking-widest text-indigo-800 uppercase dark:text-indigo-200">
                Tanulmányok
              </p>
              <div className="flex flex-col gap-5">
                {cv.education.map((edu, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="w-28 shrink-0 pt-0.5 text-sm text-slate-500 dark:text-slate-400">
                      {edu.period}
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <p className="font-semibold text-slate-800 dark:text-slate-100">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-indigo-700 dark:text-indigo-300">
                        {edu.degree}
                      </p>
                      {edu.location && (
                        <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                          {edu.location}
                        </p>
                      )}
                      {edu.details && (
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                          {edu.details}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* EXPERIENCE */}
            <div className="rounded-2xl border border-white/25 bg-white/10 p-6 shadow-xl/30 backdrop-blur-3xl">
              <p className="mb-4 text-xs tracking-widest text-indigo-800 uppercase dark:text-indigo-200">
                Tapasztalat
              </p>
              <div className="flex flex-col gap-6">
                {cv.experience.map((exp, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="w-28 shrink-0 pt-0.5 text-sm text-slate-500 dark:text-slate-400">
                      {exp.period}
                    </span>
                    <div className="flex flex-col gap-2">
                      <div>
                        <p className="font-semibold text-slate-800 dark:text-slate-100">
                          {exp.company}
                        </p>
                        <p className="text-sm text-indigo-700 dark:text-indigo-300">
                          {exp.role}
                        </p>
                        {exp.location && (
                          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                            {exp.location}
                          </p>
                        )}
                      </div>
                      {exp.bullets.length > 0 && (
                        <ul className="flex flex-col gap-1.5">
                          {exp.bullets.map((bullet, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* LANGUAGES */}
            <div className="rounded-2xl border border-white/25 bg-white/10 p-6 shadow-xl/30 backdrop-blur-3xl">
              <p className="mb-4 text-xs tracking-widest text-indigo-800 uppercase dark:text-indigo-200">
                Nyelvek
              </p>
              <div className="flex flex-wrap gap-3">
                {cv.languages.map((lang) => (
                  <div
                    key={lang.language}
                    className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md"
                  >
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-100">
                      {lang.language}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  )
}
