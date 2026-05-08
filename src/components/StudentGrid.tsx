"use client";

import { Student } from "@/data/students";
import StudentCard from "./StudentCard";
import { motion } from "framer-motion";
import { Crown, Users } from "lucide-react";

interface StudentGridProps {
    students: Student[];
}

const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.06 },
    },
};

const cardItem = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        },
    },
};

export default function StudentGrid({ students }: StudentGridProps) {
    const reps = students.filter((s) => s.isRep);

    if (students.length === 0) {
        return (
            <div className="w-full py-24 text-center">
                <div className="max-w-md mx-auto">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl glass flex items-center justify-center">
                        <svg className="w-10 h-10 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                    <p className="text-lg text-white/50 font-heading font-medium mb-2">
                        No students found
                    </p>
                    <p className="text-sm text-white/30 font-sans">
                        Try adjusting your search or filter criteria.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div id="directory" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 overflow-visible scroll-mt-8">

            {/* ── Class Representatives ── */}
            {reps.length > 0 && (
                <section className="mb-20">
                    <SectionHeader
                        icon={<Crown className="w-5 h-5 text-brand-accent" />}
                        title="Class Representatives"
                        count={reps.length}
                        accentColor="accent"
                    />
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                    >
                        {reps.map((student) => (
                            <motion.div key={student.id} variants={cardItem}>
                                <StudentCard student={student} />
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            )}

            {/* ── The Family ── */}
            {students.length > 0 && (
                <section>
                    <SectionHeader
                        icon={<Users className="w-5 h-5 text-brand-cyan" />}
                        title="The Family"
                        count={students.length}
                        accentColor="cyan"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                        {students.map((student) => (
                            <div key={student.id} className="reveal-card cv-auto">
                                <StudentCard student={student} />
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}

function SectionHeader({
    icon,
    title,
    count,
    accentColor,
}: {
    icon: React.ReactNode;
    title: string;
    count: number;
    accentColor: "cyan" | "accent";
}) {
    return (
        <div className="flex items-center gap-4 mb-10">
            <div className={`p-2.5 rounded-xl glass ${accentColor === "accent" ? "glow-accent" : "glow-cyan"}`}>
                {icon}
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight whitespace-nowrap">
                {title}
            </h2>
            <div className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${accentColor === "accent"
                ? "bg-brand-accent/10 text-brand-accent border border-brand-accent/20"
                : "bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20"
                }`}>
                {count}
            </div>
            <div className={`h-px flex-1 ${accentColor === "accent"
                ? "bg-gradient-to-r from-brand-accent/20 to-transparent"
                : "bg-gradient-to-r from-brand-cyan/20 to-transparent"
                }`} />
        </div>
    );
}
