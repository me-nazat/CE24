"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Student } from "@/data/students";
import { MapPin, GraduationCap, School, Facebook, Phone } from "lucide-react";

interface StudentCardProps {
    student: Student;
}

export default function StudentCard({ student }: StudentCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = useCallback(() => {
        setIsFlipped(prev => !prev);
    }, []);

    return (
        <div
            className="relative w-full aspect-[3/4] max-w-[320px] sm:max-w-sm mx-auto group perspective-1000 cv-auto hover:z-10"
            onClick={handleFlip}
        >
            <div
                className={`w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] preserve-3d cursor-pointer will-change-transform ${isFlipped ? "rotate-y-180" : ""
                    }`}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front of Card */}
                <div
                    className={`absolute w-full h-full backface-hidden flex flex-col items-center justify-center p-6 rounded-3xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-[0_4px_24px_rgb(0,0,0,0.06)] dark:shadow-[0_4px_24px_rgb(0,0,0,0.25)] border transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 ${student.isRep
                        ? "border-brand-accent/40 shadow-[0_0_24px_rgba(234,179,8,0.12)] group-hover:shadow-[0_0_36px_rgba(234,179,8,0.25)] group-hover:border-brand-accent/70"
                        : "border-slate-200/60 dark:border-slate-700/40 group-hover:border-brand-cyan/25 group-hover:shadow-[0_8px_32px_rgba(0,229,255,0.12)]"
                        }`}
                    style={{ backfaceVisibility: "hidden" }}
                >
                    {student.isRep && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-brand-accent/15 to-brand-accent/5 text-brand-accent text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-[0.15em] border border-brand-accent/20">
                            ★ Class Rep
                        </div>
                    )}

                    <div className="relative w-48 h-48 md:w-56 md:h-56 mb-6 rounded-full overflow-hidden border-[3px] border-white dark:border-slate-700 shadow-lg transition-transform duration-300 group-hover:scale-[1.03]">
                        <Image
                            src={student.avatarUrl}
                            alt={student.name}
                            fill
                            quality={55}
                            loading="lazy"
                            sizes="(max-width: 768px) 192px, 224px"
                            className="object-cover"
                        />
                    </div>

                    <h3 className="text-lg font-heading font-semibold text-brand-navy dark:text-white mb-1.5 text-center leading-snug">
                        {student.name}
                    </h3>
                    <p className="text-slate-400 dark:text-slate-500 font-sans font-medium text-sm tracking-wide">
                        ID: {student.studentId}
                    </p>
                </div>

                {/* Back of Card */}
                <div
                    className={`absolute w-full h-full backface-hidden rotate-y-180 flex flex-col justify-between p-6 rounded-3xl bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navy border ${student.isRep ? "border-brand-accent/40" : "border-brand-cyan/20"
                        } shadow-xl text-white`}
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="space-y-4 flex-1 flex flex-col justify-center">
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
                    <div className="flex justify-center gap-3 pt-4 border-t border-white/10">
                        {student.socials.facebook && (
                            <SocialButton href={student.socials.facebook} label="Facebook">
                                <Facebook className="w-[18px] h-[18px]" />
                            </SocialButton>
                        )}
                        {student.socials.whatsapp && (
                            <>
                                <SocialButton href={`tel:+${student.socials.whatsapp.replace(/[^0-9]/g, '')}`} label="Call">
                                    <Phone className="w-[18px] h-[18px]" />
                                </SocialButton>
                                <SocialButton href={student.socials.whatsapp} label="WhatsApp" external>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </SocialButton>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
    return (
        <div className="flex items-start gap-3">
            {icon}
            <div className="min-w-0">
                <p className="text-[10px] text-slate-400 uppercase tracking-[0.15em] font-semibold mb-0.5">{label}</p>
                <p className="font-medium text-sm leading-snug truncate">{value}</p>
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
            className="p-2.5 rounded-full bg-white/5 hover:bg-brand-cyan hover:text-brand-navy transition-all duration-200 hover:scale-110 active:scale-95"
            onClick={(e) => e.stopPropagation()}
        >
            {children}
        </a>
    );
}
