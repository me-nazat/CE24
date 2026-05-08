"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Users } from "lucide-react";

/* ── Ambient Particles ── */
function Particles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let raf: number;
        const dots: { x: number; y: number; vx: number; vy: number; r: number; o: number }[] = [];

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = canvas.offsetWidth * dpr;
            canvas.height = canvas.offsetHeight * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const init = () => {
            const count = Math.min(50, Math.floor(canvas.offsetWidth / 20));
            dots.length = 0;
            for (let i = 0; i < count; i++) {
                dots.push({
                    x: Math.random() * canvas.offsetWidth,
                    y: Math.random() * canvas.offsetHeight,
                    vx: (Math.random() - 0.5) * 0.25,
                    vy: (Math.random() - 0.5) * 0.25,
                    r: Math.random() * 1.5 + 0.5,
                    o: Math.random() * 0.3 + 0.05,
                });
            }
        };

        const draw = () => {
            const w = canvas.offsetWidth;
            const h = canvas.offsetHeight;
            ctx.clearRect(0, 0, w, h);

            for (const d of dots) {
                d.x += d.vx;
                d.y += d.vy;
                if (d.x < 0) d.x = w;
                if (d.x > w) d.x = 0;
                if (d.y < 0) d.y = h;
                if (d.y > h) d.y = 0;

                ctx.beginPath();
                ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(108, 99, 255, ${d.o})`;
                ctx.fill();
            }

            // Connections
            for (let i = 0; i < dots.length; i++) {
                for (let j = i + 1; j < dots.length; j++) {
                    const dx = dots[i].x - dots[j].x;
                    const dy = dots[i].y - dots[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(dots[i].x, dots[i].y);
                        ctx.lineTo(dots[j].x, dots[j].y);
                        ctx.strokeStyle = `rgba(108, 99, 255, ${0.04 * (1 - dist / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            raf = requestAnimationFrame(draw);
        };

        resize();
        init();
        draw();

        const handleResize = () => { resize(); init(); };
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full z-[1] pointer-events-none"
            aria-hidden="true"
        />
    );
}

/* ── Motion variants ── */
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, delay, ease },
    }),
};

export default function HeroSection() {
    const total = 60;

    return (
        <section className="relative w-full min-h-[80vh] md:min-h-[88vh] flex items-start justify-center overflow-hidden">
            {/* BG Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://i.ibb.co.com/qFXLSM9M/ce24-A-pic.jpg"
                    alt="University Campus"
                    fill
                    priority
                    unoptimized
                    quality={75}
                    sizes="100vw"
                    className="object-cover object-[center_20%]"
                />
                {/* Cinematic overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)]/75 via-[var(--bg-primary)]/45 to-[var(--bg-primary)] z-[1]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)]/40 via-transparent to-[var(--bg-primary)]/40 z-[1]" />
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--bg-primary)] to-transparent z-[2]" />
            </div>

            <Particles />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center pt-16 md:pt-20 pb-24">
                {/* Logo */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                    className="relative mb-5"
                >
                    <div className="w-24 h-20 md:w-32 md:h-24 rounded-3xl glass flex items-center justify-center float-slow shadow-[0_0_50px_rgba(108,99,255,0.15)]">
                        <span className="text-3xl md:text-4xl font-heading font-extrabold text-gradient tracking-[0.12em]">
                            CE
                        </span>
                    </div>
                    <div className="absolute -inset-3 rounded-[28px] border border-accent/20 pulse-ring pointer-events-none" />
                </motion.div>

                {/* Title */}
                <motion.h1
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.12}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-heading font-extrabold mb-4 tracking-[-0.02em] leading-[1.08]"
                >
                    <span className="text-[var(--text-primary)]">Civil </span>
                    <span className="text-gradient">Engineering</span>
                </motion.h1>

                {/* Uni name */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.24}
                    className="text-[10px] sm:text-xs font-sans font-semibold uppercase tracking-[0.3em] mb-10"
                    style={{ color: "var(--text-secondary)" }}
                >
                    Rajshahi University of Engineering &amp; Technology
                </motion.p>

                {/* Badges */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.36}
                    className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 mt-2"
                >
                    <div className="glass backdrop-blur-2xl bg-[rgba(255,255,255,0.15)] border border-white/20 rounded-full px-5 lg:px-6 py-2.5 lg:py-3 flex items-center gap-3 glow-accent shadow-lg">
                        <span className="text-sm lg:text-base font-heading font-bold tracking-wide text-white drop-shadow-md">
                            Series &apos;24
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-accent pulse-ring shadow-lg" />
                        <span className="text-sm lg:text-base font-heading font-bold tracking-wide text-white drop-shadow-md">
                            Section A
                        </span>
                    </div>
                    <div className="glass backdrop-blur-2xl bg-[rgba(255,255,255,0.15)] border border-white/20 rounded-full px-5 lg:px-6 py-2.5 lg:py-3 flex items-center gap-2.5 shadow-lg">
                        <Users className="w-4 h-4 lg:w-5 lg:h-5 text-accent-bright drop-shadow-md" />
                        <span className="text-sm lg:text-base font-heading font-bold text-white drop-shadow-md">
                            {total} Students
                        </span>
                    </div>
                </motion.div>

                {/* Scroll CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2"
                >
                    <button
                        onClick={() => document.getElementById("directory")?.scrollIntoView({ behavior: "smooth" })}
                        className="flex flex-col items-center gap-1.5 cursor-pointer group"
                        style={{ color: "var(--text-muted)" }}
                        aria-label="Scroll to directory"
                    >
                        <span className="text-[9px] uppercase tracking-[0.25em] font-semibold group-hover:text-accent-bright transition-colors duration-300">
                            Explore
                        </span>
                        <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-accent-bright transition-colors duration-300" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
