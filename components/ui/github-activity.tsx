"use client";

import { useEffect, useState } from "react";
import { SiGithub } from "react-icons/si";

export default function GitHubActivity() {
  const [pushes, setPushes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const res = await fetch("https://api.github.com/users/bombiii/events/public");
        if (!res.ok) throw new Error("Hiba a lekérdezés során");
        const events = await res.json();
        
        const pushEvents = events.filter((e: any) => e.type === "PushEvent").slice(0, 5);
        setPushes(pushEvents);
      } catch (error) {
        console.error("GitHub fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivity();
  }, []);

  return (
    <div className="flex w-full flex-col gap-4 rounded-2xl border border-white/25 bg-white/10 p-6 shadow-xl/30 backdrop-blur-3xl transition-transform duration-300 hover:scale-[1.02]">
      <div className="flex items-center gap-3 mb-2">
        <SiGithub className="text-2xl text-indigo-700 dark:text-indigo-200" />
        <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-200">Élő GitHub Aktivitás</h3>
      </div>

      {loading ? (
        <p className="text-slate-600 dark:text-slate-300">Adatok betöltése...</p>
      ) : pushes.length === 0 ? (
        <p className="text-slate-600 dark:text-slate-300">Nem sikerült betölteni az adatokat, vagy nincs friss aktivitás.</p>
      ) : (
        <div className="space-y-5 text-sm relative border-l border-slate-400 dark:border-slate-600 ml-3 mt-2">
          {pushes.map((event: any) => {
            const repoName = event.repo?.name?.split("/")[1] || "ismeretlen repó";
            
            const branchName = event.payload?.ref?.replace("refs/heads/", "") || "branch";
            
            const commits = event.payload?.commits || [];
            const commitsCount = commits.length;
            
            const date = new Date(event.created_at).toLocaleDateString("hu-HU", {
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit"
            });

            return (
              <div key={event.id} className="relative pl-6">
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[6.5px] top-1.5 ring-4 ring-white/10"></div>
                
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{date}</p>
                <p className="text-slate-700 dark:text-slate-200 text-base">
                  {commitsCount > 0 ? (
                    <>
                      Pushed <span className="font-bold text-indigo-600 dark:text-indigo-400">{commitsCount} commit</span> to <span className="font-bold text-slate-800 dark:text-slate-300">{branchName}</span> in{" "}
                    </>
                  ) : (
                    <>
                      Pushed to <span className="font-bold text-slate-800 dark:text-slate-300">{branchName}</span> in{" "}
                    </>
                  )}
                  
                  <a
                    href={`https://github.com/${event.repo?.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-slate-900 dark:text-white hover:underline"
                  >
                    {repoName}
                  </a>
                </p>
                
                {commitsCount > 0 && commits[0]?.message && (
                  <p className="text-slate-600 dark:text-slate-400 italic truncate mt-1 border-l-2 border-indigo-300 pl-2">
                    "{commits[0].message}"
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}