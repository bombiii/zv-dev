import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-white/25 p-6 rounded-2xl backdrop-blur-3xl shadow-xl/30 flex flex-col gap-3">
      <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-200 uppercase">
        {project.title}
      </h3>
      {project.description && (
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
          {project.description}
        </p>
      )}
      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="flex gap-3 mt-auto pt-2">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-indigo-600 dark:text-indigo-300 hover:underline"
          >
            Live →
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-indigo-600 dark:text-indigo-300 hover:underline"
          >
            GitHub →
          </a>
        )}
      </div>
    </div>
  );
}
