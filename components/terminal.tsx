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
}