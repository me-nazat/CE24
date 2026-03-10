"use client";

import { useState } from "react";
import Image from "next/image";
import { Student } from "@/data/students";
import { MapPin, GraduationCap, School, Facebook, Phone } from "lucide-react";

interface StudentCardProps {
    student: Student;
}

export default function StudentCard({ student }: StudentCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative w-full aspect-[3/4] max-w-sm mx-auto group perspective-1000 cv-auto hover:z-10"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div
                className={`w-full h-full transition-transform duration-700 preserve-3d cursor-pointer ${isFlipped ? "rotate-y-180" : ""
                    }`}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front of Card */}
                <div
                    className={`absolute w-full h-full backface-hidden flex flex-col items-center justify-center p-6 rounded-3xl backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1 ${student.isRep
                        ? "border-brand-accent/50 shadow-[0_0_30px_rgba(234,179,8,0.15)] group-hover:shadow-[0_0_40px_rgba(234,179,8,0.3)] group-hover:border-brand-accent/80"
                        : "border-white/40 dark:border-slate-700/50 group-hover:border-brand-cyan/30 group-hover:shadow-[0_10px_40px_rgba(0,229,255,0.15)]"
                        }`}
                    style={{ backfaceVisibility: "hidden" }}
                >
                    {student.isRep && (
                        <div className="absolute top-4 right-4 bg-brand-accent/10 text-brand-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Class Rep
                        </div>
                    )}

                    <div className="relative w-36 h-36 md:w-40 md:h-40 mb-6 rounded-full overflow-hidden border-[3px] border-white dark:border-slate-700 shadow-xl transition-transform duration-500 group-hover:scale-105">
                        <Image
                            src={student.avatarUrl}
                            alt={student.name}
                            fill
                            sizes="(max-width: 768px) 144px, 160px"
                            className="object-cover"
                        />
                    </div>

                    <h3 className="text-xl font-heading font-semibold text-brand-navy dark:text-white mb-2 text-center">
                        {student.name}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 font-sans font-medium">
                        ID: {student.studentId}
                    </p>
                </div>

                {/* Back of Card */}
                <div
                    className={`absolute w-full h-full backface-hidden rotate-y-180 flex flex-col justify-between p-6 rounded-3xl bg-gradient-to-br from-brand-navy to-slate-900 border ${student.isRep ? "border-brand-accent/50" : "border-brand-cyan/30"
                        } shadow-2xl text-white`}
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="space-y-4 flex-1 flex flex-col justify-center">
                        <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                            <div>
                                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-0.5">Hometown</p>
                                <p className="font-medium text-sm">{student.hometown}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <School className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                            <div>
                                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-0.5">High School</p>
                                <p className="font-medium text-sm leading-tight">{student.highSchool}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <GraduationCap className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                            <div>
                                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-0.5">College</p>
                                <p className="font-medium text-sm leading-tight">{student.college}</p>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-4 pt-4 border-t border-white/10">
                        {student.socials.facebook && (
                            <a href={student.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-brand-cyan hover:text-brand-navy transition-colors" onClick={(e) => e.stopPropagation()}>
                                <Facebook className="w-5 h-5" />
                            </a>
                        )}
                        {student.socials.whatsapp && (
                            <a href={`https://wa.me/${student.socials.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-brand-cyan hover:text-brand-navy transition-colors" onClick={(e) => e.stopPropagation()}>
                                <Phone className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
