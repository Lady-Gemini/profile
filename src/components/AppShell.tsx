"use client";

import { motion, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";

export function AppShell({ children }: { children: ReactNode }) {
  const { scrollYProgress, scrollY } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.15 });
  const yOne = useTransform(scrollY, [0, 1200], [0, -80]);
  const yTwo = useTransform(scrollY, [0, 1200], [0, 80]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, smoothOptions);
  const smoothMouseY = useSpring(mouseY, smoothOptions);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let mouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particlesArray: any[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (!canvas) return;
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          this.x -= dx / 25;
          this.y -= dy / 25;
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const init = () => {
      particlesArray = [];
      let numberOfParticles = (canvas.width * canvas.height) / 15000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 1) - 0.5;
        let directionY = (Math.random() * 1) - 0.5;
        let color = "rgba(217, 164, 65, 0.4)"; 

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    };

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + 
                         ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
          if (distance < (canvas.width/10) * (canvas.height/10)) {
            opacityValue = 1 - (distance/25000);
            ctx.strokeStyle = `rgba(217, 164, 65, ${opacityValue * 0.25})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    };

    init();
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-grid">
      <canvas 
        ref={canvasRef} 
        className="pointer-events-none fixed inset-0 z-[1] opacity-60 dark:opacity-40"
      />

      {/* Global scroll progress indicator */}
      <motion.div
        className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-[#C06A3A] to-[#F4B400] shadow-[0_0_15px_#F4B400]"
        style={{ scaleX: progress }}
      />

      {/* Interactive Cursor Glow */}
      <motion.div
        className="pointer-events-none fixed z-[-1] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-br from-[#D9A441]/20 to-[#C06A3A]/20 dark:from-[#F4B400]/15 dark:to-[#E97A5A]/15 blur-[120px]"
        style={{
          left: smoothMouseX,
          top: smoothMouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Soft parallax atmosphere */}
      <div className="pointer-events-none fixed inset-0 z-[-10]">
        <motion.div
          style={{ y: yOne }}
          className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#E3A72F]/30 dark:bg-[#D9A441]/25 blur-[100px] mix-blend-multiply dark:mix-blend-screen"
        />
        <motion.div
          style={{ y: yTwo }}
          className="absolute -bottom-24 -right-16 h-[500px] w-[500px] rounded-full bg-[#E97A5A]/30 dark:bg-[#3E5B4C]/50 blur-[120px] mix-blend-multiply dark:mix-blend-screen"
        />
      </div>

      <SiteNav />
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-8 md:py-10 relative z-10">{children}</main>
      <SiteFooter />
    </div>
  );
}
