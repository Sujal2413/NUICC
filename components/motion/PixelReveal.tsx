"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface PixelRevealProps {
  children: ReactNode;
  cols?: number;
  rows?: number;
}

export default function PixelReveal({ children, cols = 12, rows = 8 }: PixelRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !revealed) {
            setRevealed(true);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [revealed]);

  const centerX = Math.floor(cols / 2);
  const centerY = Math.floor(rows / 2);

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      {children}
      {!revealed && (
        <div
          className="pixel-grid"
          style={{
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
          }}
        >
          {Array.from({ length: cols * rows }).map((_, i) => {
            const x = i % cols;
            const y = Math.floor(i / cols);
            const dist = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
            return (
              <div
                key={i}
                className="pixel-cell"
                style={{ animationDelay: `${dist * 60}ms` }}
              />
            );
          })}
        </div>
      )}
      {revealed && (
        <div
          className="pixel-grid"
          style={{
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
          }}
        >
          {Array.from({ length: cols * rows }).map((_, i) => {
            const x = i % cols;
            const y = Math.floor(i / cols);
            const dist = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
            return (
              <div
                key={i}
                className="pixel-cell revealed"
                style={{ animationDelay: `${dist * 60}ms` }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
