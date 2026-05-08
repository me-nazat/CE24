"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Student } from "@/data/students";
import { MapPin, GraduationCap, School, Facebook, Phone, RotateCcw } from "lucide-react";

interface StudentCardProps {
    student: Student;
}

export default function StudentCard({ student }: StudentCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);

    const handleFlip = useCallback(() => {
        setIsFlipped(prev => !prev);
    }, []);

    const isRep = student.isRep;

    return (
        <div
            className="relative w-full aspect-[3/4] max-w-[300px] mx-auto perspective-1200 cursor-pointer group"
            onClick={handleFlip}
        >
            <motion.div
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                className="w-full h-full preserve-3d relative"
            >
                {/* ── FRONT ── */}
                <div
                    className={`absolute w-full h-full backface-hidden flex flex-col items-center justify-center p-5 rounded-[20px] overflow-hidden group ${isRep ? "card-surface-rep" : "card-surface"
                        }`}
                    style={{ backfaceVisibility: "hidden" }}
                >
                    {/* Top accent line */}
                    <div className={`absolute top-0 left-6 right-6 h-px ${isRep
                        ? "bg-gradient-to-r from-transparent via-gold/30 to-transparent"
                        : "bg-gradient-to-r from-transparent via-accent/20 to-transparent"
                        }`} />

                    {/* Rep badge */}
                    {isRep && (
                        <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.15em] border"
                            style={{
                                background: "rgba(245, 166, 35, 0.08)",
                                color: "var(--gold)",
                                borderColor: "rgba(245, 166, 35, 0.18)",
                            }}
                        >
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                            CR
                        </div>
                    )}

                    {/* Avatar */}
                    <div className="relative w-36 h-36 md:w-44 md:h-44 mb-5 flex-shrink-0">
                        {/* Conic ring */}
                        <div className={`absolute -inset-[2.5px] rounded-full ${isRep ? "ring-gradient-gold" : "ring-gradient"}`} />
                        {/* Inner bg */}
                        <div className="absolute inset-0 rounded-full" style={{ background: "var(--bg-primary)" }} />

                        {/* Skeleton */}
                        {!imgLoaded && (
                            <div className="absolute inset-[3px] rounded-full skeleton" />
                        )}

                        {/* Photo */}
                        <div className="absolute inset-[2.5px] rounded-full overflow-hidden">
                            <Image
                                src={student.avatarUrl}
                                alt={student.name}
                                fill
                                quality={60}
                                loading="lazy"
                                sizes="(max-width: 768px) 144px, 176px"
                                className={`object-cover transition-all duration-500 ease-out group-hover:scale-[1.05] ${imgLoaded ? "opacity-100" : "opacity-0"}`}
                                onLoad={() => setImgLoaded(true)}
                            />
                        </div>

                        {/* Hover shimmer */}
                        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none"
                            style={{ background: "radial-gradient(circle at 50% 30%, rgba(108,99,255,0.08), transparent 70%)" }}
                        />
                    </div>

                    {/* Name */}
                    <h3 className="text-base md:text-lg font-heading font-semibold text-center leading-snug mb-1 tracking-[-0.01em]"
                        style={{ color: "var(--text-primary)" }}
                    >
                        {student.name}
                    </h3>

                    {/* ID */}
                    <p className="text-xs font-sans font-medium tracking-widest"
                        style={{ color: "var(--text-muted)" }}
                    >
                        {student.studentId}
                    </p>

                    {/* Flip hint */}
                    <div className="absolute bottom-3.5 right-3.5 opacity-0 group-hover:opacity-40 transition-opacity duration-300">
                        <RotateCcw className="w-3.5 h-3.5" style={{ color: "var(--text-muted)" }} />
                    </div>
                </div>

                {/* ── BACK ── */}
                <div
                    className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col justify-between p-5 rounded-[20px] overflow-hidden"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        background: "var(--bg-elevated)",
                        border: `1px solid ${isRep ? "rgba(245,166,35,0.15)" : "var(--border-subtle)"}`,
                    }}
                >
                    {/* Dot texture */}
                    <div className="absolute inset-0 opacity-[0.025]"
                        style={{
                            backgroundImage: "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)",
                            backgroundSize: "20px 20px",
                        }}
                    />

                    {/* Top accent */}
                    <div className={`absolute top-0 left-6 right-6 h-px ${isRep
                        ? "bg-gradient-to-r from-transparent via-gold/20 to-transparent"
                        : "bg-gradient-to-r from-transparent via-accent/15 to-transparent"
                        }`} />

                    {/* Info */}
                    <div className="relative flex-1 flex flex-col justify-center space-y-5">
                        <InfoRow
                            icon={<MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--accent-bright)" }} />}
                            label="Hometown"
                            value={student.hometown}
                        />
                        <InfoRow
                            icon={<School className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--accent-bright)" }} />}
                            label="High School"
                            value={student.highSchool}
                        />
                        <InfoRow
                            icon={<GraduationCap className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--accent-bright)" }} />}
                            label="College"
                            value={student.college}
                        />
                    </div>

                    {/* Social */}
                    <div className="relative flex justify-center gap-2.5 pt-4 mt-2" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                        {student.socials.facebook && (
                            <SocialBtn href={student.socials.facebook} label="Facebook" external>
                                <Facebook className="w-4 h-4" />
                            </SocialBtn>
                        )}
                        {student.socials.phone && (
                            <SocialBtn href={`tel:${student.socials.phone.replace(/[^0-9+]/g, '')}`} label="Call">
                                <Phone className="w-4 h-4" />
                            </SocialBtn>
                        )}
                        {student.socials.whatsapp && (
                            <SocialBtn href={student.socials.whatsapp} label="WhatsApp" external>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </SocialBtn>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
    return (
        <div className="flex items-start gap-3">
            {icon}
            <div className="min-w-0">
                <p className="text-[9px] uppercase tracking-[0.2em] font-semibold mb-0.5"
                    style={{ color: "var(--text-muted)" }}
                >{label}</p>
                <p className="text-sm font-medium leading-snug truncate"
                    style={{ color: "var(--text-primary)" }}
                >{value}</p>
            </div>
        </div>
    );
}

function SocialBtn({ href, label, external, children }: { href: string; label: string; external?: boolean; children: React.ReactNode }) {
    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={label}
            className="p-2.5 rounded-xl glass glass-hover transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            style={{ color: "var(--text-secondary)" }}
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--accent-bright)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}
        >
            {children}
        </a>
    );
}
