"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Camera } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function MemoriesFooter() {
    const images = [
        {
            src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=60&w=800&auto=format&fit=crop",
            alt: "Campus life moments",
            span: "col-span-2 row-span-2",
            height: "h-48 md:h-auto",
        },
        {
            src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=60&w=400&auto=format&fit=crop",
            alt: "Graduation celebration",
            span: "",
            height: "h-48",
        },
        {
            src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=60&w=400&auto=format&fit=crop",
            alt: "Study sessions together",
            span: "",
            height: "h-48",
        },
        {
            src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=60&w=800&auto=format&fit=crop",
            alt: "Classroom memories",
            span: "col-span-2",
            height: "h-48",
        },
    ];

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

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-3">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08, ease }}
                            className={`${img.span} relative ${img.height} rounded-xl overflow-hidden group cursor-pointer`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                loading="lazy"
                                quality={50}
                                sizes={img.span?.includes("col-span-2") ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 transition-colors duration-500"
                                style={{
                                    background: "rgba(5,5,8,0.3)",
                                }}
                            />
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background: "linear-gradient(to top, rgba(5,5,8,0.5) 0%, transparent 50%)",
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
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
