"use client";

import { useEffect, useRef } from "react";

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const isHovering = useRef<boolean>(false);
  const mousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const particlesRef = useRef<
    Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
    }>
  >([]);

  const getScreenConfig = (width: number) => {
    // Screen size configurations
    if (width < 640) {
      // sm
      return {
        baseCount: 50,
        maxMultiplier: 1,
        visibilityRadius: 250,
        connectionDistance: 120,
        particleSize: 1.5,
        lineWidth: 0.8,
      };
    } else if (width < 768) {
      // md
      return {
        baseCount: 75,
        maxMultiplier: 1.5,
        visibilityRadius: 300,
        connectionDistance: 150,
        particleSize: 1.5,
        lineWidth: 0.8,
      };
    } else if (width < 1024) {
      // lg
      return {
        baseCount: 100,
        maxMultiplier: 2,
        visibilityRadius: 350,
        connectionDistance: 180,
        particleSize: 1.5,
        lineWidth: 0.8,
      };
    } else if (width < 1280) {
      // xl
      return {
        baseCount: 125,
        maxMultiplier: 2.25,
        visibilityRadius: 400,
        connectionDistance: 200,
        particleSize: 1.5,
        lineWidth: 0.8,
      };
    } else {
      // 2xl and above
      return {
        baseCount: 150,
        maxMultiplier: 2.5,
        visibilityRadius: 450,
        connectionDistance: 220,
        particleSize: 1.5,
        lineWidth: 0.8,
      };
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      const config = getScreenConfig(rect.width);

      // Calculate particle count based on screen size
      const areaMultiplier = Math.min(
        Math.sqrt((rect.width * rect.height) / (375 * 667)),
        config.maxMultiplier
      );
      const particleCount = Math.floor(config.baseCount * areaMultiplier);

      particlesRef.current = [];
      const columns = Math.ceil(Math.sqrt(particleCount));
      const rows = Math.ceil(particleCount / columns);
      const cellWidth = rect.width / columns;
      const cellHeight = rect.height / rows;

      for (let i = 0; i < particleCount; i++) {
        const col = i % columns;
        const row = Math.floor(i / columns);
        const x = col * cellWidth + Math.random() * cellWidth;
        const y = row * cellHeight + Math.random() * cellHeight;

        particlesRef.current.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
        });
      }
    };
    updateCanvasSize();

    const draw = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isHovering.current) {
        const config = getScreenConfig(canvas.width);

        particlesRef.current.forEach((particle, i) => {
          const dx = particle.x - mousePos.current.x;
          const dy = particle.y - mousePos.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < config.visibilityRadius) {
            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

            ctx.beginPath();
            ctx.arc(
              particle.x,
              particle.y,
              config.particleSize,
              0,
              Math.PI * 2
            );
            ctx.fillStyle = "#1B365D";
            ctx.fill();

            particlesRef.current.forEach((particle2, j) => {
              if (i === j) return;
              const dx2 = particle.x - particle2.x;
              const dy2 = particle.y - particle2.y;
              const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

              if (distance2 < config.connectionDistance) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(particle2.x, particle2.y);
                ctx.strokeStyle = `rgba(27, 54, 93, ${
                  (1 - distance2 / config.connectionDistance) * 0.3
                })`;
                ctx.lineWidth = config.lineWidth;
                ctx.stroke();
              }
            });
          }
        });
      }

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleResize = () => {
      updateCanvasSize();
    };

    draw();
    canvas.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden bg-gradient-to-b from-gray-50 to-white"
      style={{ zIndex: 0 }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: 0.5 }}
        onMouseEnter={() => (isHovering.current = true)}
        onMouseLeave={() => (isHovering.current = false)}
      />
    </div>
  );
}
