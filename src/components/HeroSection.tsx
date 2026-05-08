"use client";

import { useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Users } from "lucide-react";

// Floating particle component
function Particles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        let particles: Array<{
            x: number; y: number;
            vx: number; vy: number;
            size: number; opacity: number;
            hue: number;
        }> = [];

        const resize = () => {
            canvas.width = canvas.offsetWidth * window.devicePixelRatio;
            canvas.height = canvas.offsetHeight * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };

        const createParticles = () => {
            const count = Math.min(40, Math.floor(canvas.offsetWidth / 25));
            particles = Array.from({ length: count }, () => ({
                x: Math.random() * canvas.offsetWidth,
                y: Math.random() * canvas.offsetHeight,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.4 + 0.1,
                hue: Math.random() > 0.7 ? 180 : 210, // cyan or blue
            }));
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = canvas.offsetWidth;
                if (p.x > canvas.offsetWidth) p.x = 0;
                if (p.y < 0) p.y = canvas.offsetHeight;
                if (p.y > canvas.offsetHeight) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${p.opacity})`;
                ctx.fill();
            });

            // Connect nearby particles
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `hsla(190, 100%, 70%, ${0.06 * (1 - dist / 120)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            animationId = requestAnimationFrame(animate);
        };

        resize();
        createParticles();
        animate();

        window.addEventListener("resize", () => {
            resize();
            createParticles();
        });

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
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

const fadeUp = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            delay,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        },
    }),
};

export default function HeroSection() {
    const studentCount = 55;

    return (
        <section className="relative w-full min-h-[75vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=60&w=1920&auto=format&fit=crop"
                    alt="University Campus"
                    fill
                    priority
                    quality={50}
                    sizes="100vw"
                    className="object-cover object-center scale-105"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAABv/EAB8QAAICAgIDAQAAAAAAAAAAAAECAwQABREhBhIxQf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AruR8jt2K1ilDp6cMUyFC7TSl2X+D4wYxB//Z"
                />
                {/* Multi-layer overlay for cinematic depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/80 via-brand-deep/50 to-brand-deep z-[1]" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/40 via-transparent to-brand-deep/40 z-[1]" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-deep to-transparent z-[2]" />
            </div>

            {/* Particle overlay */}
            <Particles />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center py-20 md:py-28">
                {/* Logo Mark */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                    className="relative mb-10"
                >
                    <div className="w-24 h-24 md:w-32 md:h-32 glass rounded-3xl flex items-center justify-center shadow-[0_0_60px_rgba(0,229,255,0.12)] float">
                        <span className="text-3xl md:text-5xl font-heading font-black text-gradient-cyan tracking-[0.15em]">
                            CE
                        </span>
                    </div>
                    {/* Glowing ring */}
                    <div className="absolute -inset-3 rounded-[2rem] border border-brand-cyan/10 animate-pulse pointer-events-none" />
                </motion.div>

                {/* Headline */}
                <motion.h1
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.15}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-extrabold mb-5 tracking-tight leading-[1.05] text-white"
                >
                    Civil{" "}
                    <span className="text-gradient-cyan">
                        Engineering
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.3}
                    className="text-[11px] md:text-xs lg:text-sm font-sans text-white/50 mb-10 font-semibold tracking-[0.25em] md:tracking-[0.3em] uppercase"
                >
                    Rajshahi University of Engineering &amp; Technology
                </motion.p>

                {/* Info badges */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.45}
                    className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
                >
                    <div className="glass rounded-2xl px-5 py-2.5 md:px-7 md:py-3 flex items-center gap-3 glow-cyan">
                        <span className="text-sm md:text-base font-heading text-white/90 font-medium tracking-wider">
                            Series &apos;24
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan pulse-dot" />
                        <span className="text-sm md:text-base font-heading text-white/90 font-medium tracking-wider">
                            Section A
                        </span>
                    </div>
                    <div className="glass rounded-2xl px-5 py-2.5 md:px-7 md:py-3 flex items-center gap-2.5">
                        <Users className="w-4 h-4 text-brand-cyan/80" />
                        <span className="text-sm md:text-base font-heading text-white/70 font-medium">
                            {studentCount} Students
                        </span>
                    </div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <button
                        onClick={() => {
                            document.getElementById("directory")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors duration-300 cursor-pointer group"
                        aria-label="Scroll to directory"
                    >
                        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">Explore</span>
                        <ChevronDown className="w-5 h-5 animate-bounce" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
