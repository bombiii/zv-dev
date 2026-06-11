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
}