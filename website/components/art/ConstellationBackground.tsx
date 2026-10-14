"use client";

import { useEffect, useRef } from "react";

type Star = { x: number; y: number; r: number; o: number; tw: number };

export function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let raf = 0;
    let stars: Star[] = [];

    const seed = (n: number) => {
      const list: Star[] = [];
      for (let i = 0; i < n; i += 1) {
        list.push({
          x: Math.random(),
          y: Math.random(),
          r: Math.random() * 1.2 + 0.3,
          o: Math.random() * 0.08 + 0.04,
          tw: Math.random() * Math.PI * 2,
        });
      }
      return list;
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = seed(width < 700 ? 70 : 110);
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      const time = t / 1000;

      for (let i = 0; i < stars.length; i += 1) {
        for (let j = i + 1; j < stars.length; j += 1) {
          const a = stars[i];
          const b = stars[j];
          const dx = (a.x - b.x) * width;
          const dy = (a.y - b.y) * height;
          const dist = Math.hypot(dx, dy);
          if (dist > 130) continue;
          const pulse = 0.5 + 0.5 * Math.sin(time / 8 + i * 0.2);
          ctx.strokeStyle = `rgba(124, 108, 242, ${0.045 * pulse * (1 - dist / 130)})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x * width, a.y * height);
          ctx.lineTo(b.x * width, b.y * height);
          ctx.stroke();
        }
      }

      stars.forEach((star, i) => {
        const twinkle = reduce ? 1 : 0.7 + 0.3 * Math.sin(time / 6 + star.tw);
        const rare = !reduce && Math.sin(time / 16 + i) > 0.992 ? 1.8 : 1;
        ctx.beginPath();
        ctx.fillStyle = `rgba(31, 41, 55, ${star.o * twinkle * rare})`;
        ctx.arc(star.x * width, star.y * height, star.r, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!reduce) {
        for (let i = 0; i < 18; i += 1) {
          const x = ((time * 4 + i * 73) % (width + 40)) - 20;
          const y = (Math.sin(time / 18 + i) * 0.5 + 0.5) * height;
          ctx.fillStyle = "rgba(143, 211, 211, 0.08)";
          ctx.beginPath();
          ctx.arc(x, y, 1.1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="nebula nebula-a" />
      <div className="nebula nebula-b" />
      <div className="nebula nebula-c" />
      <div className="dotted-grid" />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
