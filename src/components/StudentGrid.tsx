"use client";

import { Student } from "@/data/students";
import StudentCard from "./StudentCard";
import { motion } from "framer-motion";
import { Crown, Users, SearchX } from "lucide-react";

interface StudentGridProps {
    students: Student[];
}

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariant = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease },
    },
};

export default function StudentGrid({ students }: StudentGridProps) {
    const reps = students.filter((s) => s.isRep);

    if (students.length === 0) {
        return (
            <div className="w-full py-28 text-center">
                <div className="max-w-sm mx-auto">
                    <div className="w-16 h-16 mx-auto mb-5 rounded-2xl glass flex items-center justify-center">
                        <SearchX className="w-7 h-7" style={{ color: "var(--text-muted)" }} />
                    </div>
                    <p className="text-base font-heading font-semibold mb-1.5"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        No results found
                    </p>
                    <p className="text-sm font-sans" style={{ color: "var(--text-muted)" }}>
                        Try a different name, ID, or hometown.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div id="directory" className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-28 scroll-mt-8">

            {/* ── Class Representatives ── */}
            {reps.length > 0 && (
                <section className="mb-20">
                    <SectionHeader
                        icon={<Crown className="w-4 h-4" style={{ color: "var(--gold)" }} />}
                        title="Class Representatives"
                        count={reps.length}
                        variant="gold"
                    />
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
                    >
                        {reps.map((student) => (
                            <motion.div key={student.id} variants={cardVariant}>
                                <StudentCard student={student} />
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            )}

            {/* ── All Students ── */}
            {students.length > 0 && (
                <section>
                    <SectionHeader
                        icon={<Users className="w-4 h-4" style={{ color: "var(--accent-bright)" }} />}
                        title="The Family"
                        count={students.length}
                        variant="accent"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
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
    variant,
}: {
    icon: React.ReactNode;
    title: string;
    count: number;
    variant: "gold" | "accent";
}) {
    const isGold = variant === "gold";

    return (
        <div className="flex items-center gap-3 mb-8">
            <div className={`p-2 rounded-xl glass ${isGold ? "glow-gold" : "glow-accent"}`}>
                {icon}
            </div>
            <h2 className="text-xl md:text-2xl font-heading font-bold tracking-[-0.01em] whitespace-nowrap"
                style={{ color: "var(--text-primary)" }}
            >
                {title}
            </h2>
            <div className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider"
                style={{
                    background: isGold ? "var(--gold-glow)" : "var(--accent-glow)",
                    color: isGold ? "var(--gold)" : "var(--accent-bright)",
                    border: `1px solid ${isGold ? "rgba(245,166,35,0.15)" : "rgba(108,99,255,0.15)"}`,
                }}
            >
                {count}
            </div>
            <div className="h-px flex-1" style={{
                background: `linear-gradient(to right, ${isGold ? "rgba(245,166,35,0.12)" : "rgba(108,99,255,0.12)"}, transparent)`,
            }} />
        </div>
    );
}
