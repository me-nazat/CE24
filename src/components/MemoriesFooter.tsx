"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Camera } from "lucide-react";

export default function MemoriesFooter() {
    const images = [
        {
            src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=60&w=800&auto=format&fit=crop",
            alt: "Campus life moments",
            span: "md:col-span-2 md:row-span-2",
            height: "h-52 md:h-auto",
        },
        {
            src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=60&w=400&auto=format&fit=crop",
            alt: "Classroom memories",
            span: "",
            height: "h-52",
        },
        {
            src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=60&w=400&auto=format&fit=crop",
            alt: "Graduation celebration",
            span: "",
            height: "h-52",
        },
        {
            src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=60&w=800&auto=format&fit=crop",
            alt: "Study sessions together",
            span: "md:col-span-2",
            height: "h-52",
            objectPosition: "object-bottom",
        },
    ];

    return (
        <footer className="w-full border-t border-white/[0.04] pt-20 mt-20 relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-6">
                        <Camera className="w-4 h-4 text-brand-cyan" />
                        <span className="text-xs font-semibold text-white/50 uppercase tracking-[0.2em]">Gallery</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3 tracking-tight">
                        Our Memories
                    </h2>
                    <p className="text-white/35 font-sans text-sm max-w-md mx-auto leading-relaxed">
                        A glimpse into our journey together as Civil Engineers.
                    </p>
                </motion.div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className={`${img.span} relative ${img.height} rounded-2xl overflow-hidden group cursor-pointer`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                loading="lazy"
                                quality={50}
                                sizes={img.span?.includes("col-span-2") ? "(max-width: 768px) 50vw, 400px" : "(max-width: 768px) 50vw, 200px"}
                                className={`object-cover ${img.objectPosition || ""} transition-all duration-700 ease-out group-hover:scale-110`}
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-brand-deep/30 group-hover:bg-brand-deep/10 transition-colors duration-500" />
                            {/* Bottom gradient */}
                            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-brand-deep/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Copyright Footer */}
            <div className="border-t border-white/[0.04] py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-2">
                    <p className="text-white/30 text-xs font-sans text-center leading-relaxed">
                        &copy; {new Date().getFullYear()} Civil Engineering, Series &apos;24, Section A &middot; RUET
                    </p>
                    <p className="text-white/20 text-[10px] text-center flex items-center gap-1.5">
                        Crafted with
                        <Heart className="w-3 h-3 text-red-400/60 inline" />
                        for the CE family
                    </p>
                </div>
            </div>
        </footer>
    );
}
