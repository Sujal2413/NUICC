"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight canvas globe — a glowing champagne dot-sphere that rotates on
 * its own and drifts with scroll, with pulsing U.S. and India markers joined
 * by a travelling arc. Pure 2D canvas (no Three.js), GPU-friendly, paused when
 * offscreen and disabled under prefers-reduced-motion.
 */

type Vec3 = { x: number; y: number; z: number };

const DOTS = 720;
// lon/lat in degrees for the two endpoints of the trade arc.
const DENVER = { lat: 39.7, lon: -104.99 };
const DELHI = { lat: 28.6, lon: 77.2 };

function fibonacciSphere(n: number): Vec3[] {
  const pts: Vec3[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const t = golden * i;
    pts.push({ x: Math.cos(t) * r, y, z: Math.sin(t) * r });
  }
  return pts;
}

function latLonToVec(lat: number, lon: number): Vec3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return {
    x: -Math.sin(phi) * Math.cos(theta),
    y: Math.cos(phi),
    z: Math.sin(phi) * Math.sin(theta),
  };
}

function rotateY(p: Vec3, a: number): Vec3 {
  const c = Math.cos(a), s = Math.sin(a);
  return { x: p.x * c - p.z * s, y: p.y, z: p.x * s + p.z * c };
}

function rotateX(p: Vec3, a: number): Vec3 {
  const c = Math.cos(a), s = Math.sin(a);
  return { x: p.x, y: p.y * c - p.z * s, z: p.y * s + p.z * c };
}

export default function Globe({ height = 250 }: { height?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const dots = fibonacciSphere(DOTS);
    const denver = latLonToVec(DENVER.lat, DENVER.lon);
    const delhi = latLonToVec(DELHI.lat, DELHI.lon);

    let w = 0, h = 0, R = 0, cx = 0, cy = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = w / 2;
      cy = h / 2;
      R = Math.min(w, h) * 0.4;
    };
    resize();
    window.addEventListener("resize", resize);

    let scrollTilt = 0;
    const onScroll = () => {
      const r = canvas.getBoundingClientRect();
      const p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
      scrollTilt = Math.max(-1, Math.min(1, p)) * 0.5;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    let running = true;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { running = e.isIntersecting; }),
      { threshold: 0 }
    );
    io.observe(canvas);

    const project = (p: Vec3) => {
      // simple perspective: closer points (z>0) push slightly outward
      const persp = 1 + p.z * 0.18;
      return { sx: cx + p.x * R * persp, sy: cy - p.y * R * persp, z: p.z };
    };

    let raf = 0;
    let spin = 0;
    let arcT = 0;

    const draw = () => {
      raf = requestAnimationFrame(draw);
      if (!running) return;
      if (!reduced) {
        spin += 0.0024;
        arcT = (arcT + 0.004) % 1;
      }
      const tilt = -0.35 + scrollTilt;

      ctx.clearRect(0, 0, w, h);

      // ambient glow behind the globe
      const glow = ctx.createRadialGradient(cx, cy, R * 0.2, cx, cy, R * 1.5);
      glow.addColorStop(0, "rgba(217,179,109,0.16)");
      glow.addColorStop(1, "rgba(217,179,109,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      // dot sphere
      for (const d of dots) {
        const p = rotateX(rotateY(d, spin), tilt);
        const { sx, sy, z } = project(p);
        const front = (z + 1) / 2; // 0 back, 1 front
        const size = 0.5 + front * 1.4;
        ctx.beginPath();
        ctx.arc(sx, sy, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(217,179,109,${0.12 + front * 0.5})`;
        ctx.fill();
      }

      // markers + arc
      const dvr = rotateX(rotateY(denver, spin), tilt);
      const dli = rotateX(rotateY(delhi, spin), tilt);

      // arc (lift midpoint off the sphere)
      ctx.beginPath();
      const steps = 48;
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const lift = 1 + Math.sin(t * Math.PI) * 0.35;
        const ix = (dvr.x + (dli.x - dvr.x) * t) * lift;
        const iy = (dvr.y + (dli.y - dvr.y) * t) * lift;
        const iz = (dvr.z + (dli.z - dvr.z) * t) * lift;
        const { sx, sy } = project({ x: ix, y: iy, z: iz });
        if (i === 0) ctx.moveTo(sx, sy);
        else ctx.lineTo(sx, sy);
      }
      ctx.strokeStyle = "rgba(224,124,35,0.55)";
      ctx.lineWidth = 1.4;
      ctx.stroke();

      // travelling pulse along the arc
      const lift = 1 + Math.sin(arcT * Math.PI) * 0.35;
      const px = (dvr.x + (dli.x - dvr.x) * arcT) * lift;
      const py = (dvr.y + (dli.y - dvr.y) * arcT) * lift;
      const pz = (dvr.z + (dli.z - dvr.z) * arcT) * lift;
      const pp = project({ x: px, y: py, z: pz });
      ctx.beginPath();
      ctx.arc(pp.sx, pp.sy, 2.6, 0, Math.PI * 2);
      ctx.fillStyle = "#f7d994";
      ctx.fill();

      // endpoint markers (only when on the visible hemisphere)
      for (const m of [dvr, dli]) {
        if (m.z < -0.2) continue;
        const { sx, sy } = project(m);
        const pulse = 3 + (reduced ? 0 : (Math.sin(spin * 6) + 1) * 2);
        ctx.beginPath();
        ctx.arc(sx, sy, pulse, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(247,217,148,0.18)";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(sx, sy, 2.4, 0, Math.PI * 2);
        ctx.fillStyle = "#fff6dd";
        ctx.fill();
      }
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="Interactive globe showing NUICC's U.S.–India trade reach"
      style={{ width: "100%", height, display: "block" }}
    />
  );
}
