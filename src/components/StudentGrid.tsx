import { Student } from "@/data/students";
import StudentCard from "./StudentCard";

interface StudentGridProps {
    students: Student[];
}

export default function StudentGrid({ students }: StudentGridProps) {
    const reps = students.filter((s) => s.isRep);
    const generalStudents = students;

    if (students.length === 0) {
        return (
            <div className="w-full py-20 text-center">
                <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">
                    No students found matching your search.
                </p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

            {/* Class Representatives Section */}
            {reps.length > 0 && (
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-navy dark:text-white">
                            Class Representatives
                        </h2>
                        <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {reps.map((student) => (
                            <StudentCard key={student.id} student={student} />
                        ))}
                    </div>
                </div>
            )}

            {/* The Family Sector */}
            {generalStudents.length > 0 && (
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-navy dark:text-white">
                            The Family
                        </h2>
                        <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {generalStudents.map((student) => (
                            <StudentCard key={student.id} student={student} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
