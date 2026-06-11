"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

type HistoryItem = {
  command: string;
  output: React.ReactNode;
};

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "",
      output: 'Üdvözöllek a terminálomban! Gépeld be a "help" parancsot a lehetőségekért.',
    },
  ]);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const router = useRouter();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);
  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const rawInput = input.trim();
      const lowerInput = rawInput.toLowerCase();
      
      const [cmd, ...argsArray] = lowerInput.split(/\s+/);
      const arg = argsArray.join(" ");
      
      let output: React.ReactNode = "";

      switch (cmd) {
        case "help":
          output = "Elérhető parancsok: help, whoami, projects, terminal, goto, clear";
          break;
        case "whoami":
          output = "Varga Zsombor vagyok, tanuló szoftver és webfejlesztő. Szeretem a Next.js-t és a jó rendszereket.";
          break;
        case "projects":
          output = "Görgess lejjebb a 'Projektek' szekcióhoz, vagy használd a 'goto projektek' parancsot!";
          break;
        case "terminal":
          output = "Ez a doboz egy interaktív terminál, amelyet a weboldalban használhatsz, akár navigációhoz is.";
          break;
        case "goto":
          if (!arg) {
            output = "Használat: goto <cél> | Elérhető célok: projektek, cv, home";
          } else if (arg === "cv") {
            output = "Navigálás a CV oldalra...";
            setTimeout(() => {
              router.push("/cv");
            }, 600);
          } else if (arg === "projektek") {
            output = "Görgetés a projektekhez...";
            document.getElementById("projektek")?.scrollIntoView({ behavior: "smooth" });
          } else if (arg === "home") {
            output = "Görgetés a lap tetejére...";
            document.getElementById("scroll-container")?.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            output = `Ismeretlen cél: ${arg}. Elérhető célok: projektek, cv, home`;
          }
          break;
        case "clear":
          setHistory([]);
          setInput("");
          return;
        case "":
          output = "";
          break;
        default:
          output = `Parancs nem található: ${cmd}. Gépeld be a "help"-et.`;
      }

      setHistory((prev) => [...prev, { command: rawInput, output }]);
      setInput("");
    }
  };

  return (
    <div 
      ref={containerRef}
      className="w-full max-w-3xl rounded-2xl border border-white/25 bg-black/80 p-4 shadow-xl/30 backdrop-blur-3xl font-mono text-sm text-green-400 h-80 overflow-y-auto cursor-text transition-transform duration-300 hover:scale-[1.02] scroll-smooth"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>

      <div className="space-y-2">
        {history.map((item, index) => (
          <div key={index}>
            {item.command && (
              <div className="flex gap-2 text-gray-300">
                <span className="text-purple-400">guest@zv-dev:~$</span>
                <span>{item.command}</span>
              </div>
            )}
            <div className="text-green-300 mt-1">{item.output}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-2">
        <span className="text-purple-400">guest@zv-dev:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          className="bg-transparent border-none outline-none text-gray-300 flex-1 focus:ring-0"
        />
      </div>
    </div>
  );
}