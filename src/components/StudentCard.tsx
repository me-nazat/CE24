"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import { Student } from "@/data/students";
import { MapPin, GraduationCap, School, Facebook, Phone, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

interface StudentCardProps {
    student: Student;
}

export default function StudentCard({ student }: StudentCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleFlip = useCallback(() => {
        setIsFlipped(prev => !prev);
    }, []);

    return (
        <div
            ref={cardRef}
            className="relative w-full aspect-[3/4] max-w-[320px] sm:max-w-sm mx-auto group perspective-1000 cv-auto"
            onClick={handleFlip}
        >
            <div
                className={`w-full h-full transition-transform duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] preserve-3d cursor-pointer will-change-transform ${isFlipped ? "rotate-y-180" : ""
                    }`}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* ── Front ── */}
                <div
                    className={`absolute w-full h-full backface-hidden flex flex-col items-center justify-center p-6 rounded-3xl transition-all duration-400 ${student.isRep
                        ? "bg-gradient-to-br from-amber-950/40 via-[rgba(255,255,255,0.04)] to-amber-950/20 border border-brand-accent/20 glow-accent"
                        : "glass card-lift"
                        }`}
                    style={{ backfaceVisibility: "hidden" }}
                >
                    {/* Rep badge */}
                    {student.isRep && (
                        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-brand-accent/10 text-brand-accent text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-[0.15em] border border-brand-accent/20">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            Class Rep
                        </div>
                    )}

                    {/* Avatar with skeleton */}
                    <div className="relative w-44 h-44 md:w-52 md:h-52 mb-6 rounded-full overflow-hidden">
                        {/* Skeleton loader */}
                        {!imgLoaded && (
                            <div className="absolute inset-0 skeleton rounded-full" />
                        )}

                        {/* Ring border */}
                        <div className={`absolute -inset-[3px] rounded-full ${student.isRep
                            ? "bg-gradient-to-br from-brand-accent via-amber-300 to-brand-accent"
                            : "bg-gradient-to-br from-brand-cyan/40 via-indigo-500/30 to-brand-cyan/40"
                            }`} />
                        <div className="absolute inset-0 rounded-full bg-brand-deep" />

                        <div className="absolute inset-[3px] rounded-full overflow-hidden">
                            <Image
                                src={student.avatarUrl}
                                alt={student.name}
                                fill
                                quality={60}
                                loading="lazy"
                                sizes="(max-width: 768px) 176px, 208px"
                                className={`object-cover transition-all duration-500 group-hover:scale-[1.06] ${imgLoaded ? "opacity-100" : "opacity-0"}`}
                                onLoad={() => setImgLoaded(true)}
                            />
                        </div>

                        {/* Hover glow */}
                        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-brand-cyan/10 to-transparent pointer-events-none" />
                    </div>

                    <h3 className="text-lg font-heading font-semibold text-white mb-1.5 text-center leading-snug">
                        {student.name}
                    </h3>
                    <p className="text-white/35 font-sans font-medium text-sm tracking-wider">
                        {student.studentId}
                    </p>

                    {/* Flip hint */}
                    <div className="absolute bottom-4 right-4 text-white/15 group-hover:text-white/30 transition-colors duration-300">
                        <RotateCcw className="w-4 h-4" />
                    </div>
                </div>

                {/* ── Back ── */}
                <div
                    className={`absolute w-full h-full backface-hidden rotate-y-180 flex flex-col justify-between p-6 rounded-3xl bg-gradient-to-br from-brand-navy via-[#0d1f3c] to-brand-navy border ${student.isRep ? "border-brand-accent/25" : "border-brand-cyan/15"
                        } text-white overflow-hidden`}
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    {/* Subtle pattern on back */}
                    <div className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                            backgroundSize: '24px 24px'
                        }}
                    />

                    <div className="relative space-y-5 flex-1 flex flex-col justify-center">
                        <InfoRow
                            icon={<MapPin className="w-[18px] h-[18px] text-brand-cyan shrink-0 mt-0.5" />}
                            label="Hometown"
                            value={student.hometown}
                        />
                        <InfoRow
                            icon={<School className="w-[18px] h-[18px] text-brand-cyan shrink-0 mt-0.5" />}
                            label="High School"
                            value={student.highSchool}
                        />
                        <InfoRow
                            icon={<GraduationCap className="w-[18px] h-[18px] text-brand-cyan shrink-0 mt-0.5" />}
                            label="College"
                            value={student.college}
                        />
                    </div>

                    {/* Social Links */}
                    <div className="relative flex justify-center gap-3 pt-5 border-t border-white/[0.06]">
                        {student.socials.facebook && (
                            <SocialButton href={student.socials.facebook} label="Facebook" external>
                                <Facebook className="w-[18px] h-[18px]" />
                            </SocialButton>
                        )}
                        {student.socials.phone && (
                            <SocialButton href={`tel:${student.socials.phone.replace(/[^0-9+]/g, '')}`} label="Call">
                                <Phone className="w-[18px] h-[18px]" />
                            </SocialButton>
                        )}
                        {student.socials.whatsapp && (
                            <SocialButton href={student.socials.whatsapp} label="WhatsApp" external>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </SocialButton>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
    return (
        <div className="flex items-start gap-3.5">
            {icon}
            <div className="min-w-0">
                <p className="text-[10px] text-white/30 uppercase tracking-[0.18em] font-semibold mb-1">{label}</p>
                <p className="font-medium text-sm leading-snug text-white/90 truncate">{value}</p>
            </div>
        </div>
    );
}

function SocialButton({ href, label, external, children }: { href: string; label: string; external?: boolean; children: React.ReactNode }) {
    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={label}
            className="p-3 rounded-xl glass glass-hover text-white/60 hover:text-brand-cyan transition-all duration-250 hover:scale-110 active:scale-95 cursor-pointer"
            onClick={(e) => e.stopPropagation()}
        >
            {children}
        </a>
    );
}
