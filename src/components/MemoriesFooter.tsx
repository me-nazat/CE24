"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Camera } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function MemoriesFooter() {
    // Single memory photo as requested
    return (
        <footer className="w-full pt-20 mt-16 relative overflow-hidden" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            {/* Glow line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px" style={{
                background: "linear-gradient(to right, transparent, var(--accent-glow), transparent)"
            }} />

            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease }}
                    className="text-center mb-10"
                >
                    <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5">
                        <Camera className="w-3.5 h-3.5" style={{ color: "var(--accent-bright)" }} />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--text-muted)" }}>
                            Gallery
                        </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold tracking-[-0.01em] mb-2" style={{ color: "var(--text-primary)" }}>
                        Our Memories
                    </h2>
                    <p className="text-sm max-w-sm mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
                        A glimpse into our journey together.
                    </p>
                </motion.div>

                {/* Single Image Photo */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease }}
                    className="relative w-full h-[350px] md:h-[500px] rounded-[24px] overflow-hidden group cursor-pointer shadow-2xl"
                >
                    <Image
                        src="https://i.ibb.co.com/qFXLSM9M/ce24-A-pic.jpg"
                        alt="ce24-A-pic"
                        fill
                        unoptimized
                        loading="lazy"
                        quality={85}
                        className="object-cover object-[center_35%] transition-transform duration-[800ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.03]"
                    />
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 transition-colors duration-500"
                        style={{
                            background: "rgba(5,5,8,0.15)",
                        }}
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                            background: "linear-gradient(to top, rgba(5,5,8,0.6) 0%, transparent 60%)",
                        }}
                    />
                </motion.div>
            </div>

            {/* Bottom */}
            <div className="py-7" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-1.5">
                    <p className="text-[11px] font-sans text-center" style={{ color: "var(--text-muted)" }}>
                        &copy; {new Date().getFullYear()} Civil Engineering, Series &apos;24, Section A &middot; RUET
                    </p>
                    <p className="text-[10px] text-center flex items-center gap-1" style={{ color: "var(--text-muted)" }}>
                        Crafted with
                        <Heart className="w-2.5 h-2.5 text-red-400/50" />
                        for the CE family
                    </p>
                </div>
            </div>
        </footer>
    );
}
