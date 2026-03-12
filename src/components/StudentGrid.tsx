import { Student } from "@/data/students";
import StudentCard from "./StudentCard";

interface StudentGridProps {
    students: Student[];
}

export default function StudentGrid({ students }: StudentGridProps) {
    const reps = students.filter((s) => s.isRep);

    if (students.length === 0) {
        return (
            <div className="w-full py-20 text-center">
                <div className="max-w-md mx-auto">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                    <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">
                        No students found matching your search.
                    </p>
                    <p className="text-sm text-slate-400 dark:text-slate-500 mt-2">
                        Try adjusting your search or filter criteria.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 overflow-visible">

            {/* Class Representatives Section */}
            {reps.length > 0 && (
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-navy dark:text-white drop-shadow-sm whitespace-nowrap">
                            Class Representatives
                        </h2>
                        <div className="h-px bg-gradient-to-r from-slate-200 dark:from-slate-700 to-transparent flex-1" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {reps.map((student) => (
                            <div key={student.id} className="reveal-card">
                                <StudentCard student={student} />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* The Family Section */}
            {students.length > 0 && (
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-navy dark:text-white drop-shadow-sm whitespace-nowrap">
                            The Family
                        </h2>
                        <div className="h-px bg-gradient-to-r from-slate-200 dark:from-slate-700 to-transparent flex-1" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                        {students.map((student) => (
                            <div key={student.id} className="reveal-card cv-auto">
                                <StudentCard student={student} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
