"use client";

import { useEffect, useRef } from "react";

/**
 * Original 2D-canvas cursor: a glow that follows the pointer plus a small
 * particle burst on click. The name nods to React Bits' "SplashCursor" concept,
 * but this is an independent implementation — React Bits' version is a WebGL
 * fluid simulation and shares no code with this. See PROVENANCE.md.
 */
export default function SplashCursor() {
  const glowRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<
    { x: number; y: number; vx: number; vy: number; life: number; size: number }[]
  >([]);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 680px), (pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isMobile || reducedMotion) return;

    const glow = glowRef.current;
    const canvas = canvasRef.current;
    if (!glow || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Mouse move → glow follow
    const onMouseMove = (e: MouseEvent) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Click → subtle splash particles
    const onMouseDown = (e: MouseEvent) => {
      for (let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 * i) / 8 + Math.random() * 0.5;
        const speed = 1.5 + Math.random() * 2;
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          size: 2 + Math.random() * 3,
        });
      }
    };
    window.addEventListener("mousedown", onMouseDown);

    // Animation loop
    let rafId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current = particles.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.025;
        if (p.life <= 0) return false;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(217, 179, 109, ${p.life * 0.5})`;
        ctx.fill();
        return true;
      });
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      <canvas ref={canvasRef} className="splash-canvas" aria-hidden="true" />
    </>
  );
}
