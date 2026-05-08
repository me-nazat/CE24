"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { useDebounce } from "use-debounce";
import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import { students } from "@/data/students";

// Dynamically import heavy components
const StudentGrid = dynamic(() => import("@/components/StudentGrid"), {
  loading: () => (
    <div className="w-full py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-[3/4] rounded-3xl skeleton" />
          ))}
        </div>
      </div>
    </div>
  ),
});
const MemoriesFooter = dynamic(() => import("@/components/MemoriesFooter"), { ssr: false });

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  // Debounce search query by 300ms to prevent lag while typing on low-end devices
  const [debouncedSearchQuery] = useDebounce(searchQuery, 300);
  const [filterType, setFilterType] = useState<"all" | "name" | "id" | "hometown">("all");

  const filteredStudents = useMemo(() => {
    if (!debouncedSearchQuery.trim()) return students;

    const lowerQuery = debouncedSearchQuery.toLowerCase();

    return students.filter((student) => {
      switch (filterType) {
        case "name":
          return student.name.toLowerCase().includes(lowerQuery);
        case "id":
          return student.studentId.toLowerCase().includes(lowerQuery);
        case "hometown":
          return student.hometown.toLowerCase().includes(lowerQuery);
        case "all":
        default:
          return (
            student.name.toLowerCase().includes(lowerQuery) ||
            student.studentId.toLowerCase().includes(lowerQuery) ||
            student.hometown.toLowerCase().includes(lowerQuery)
          );
      }
    });
  }, [debouncedSearchQuery, filterType]);

  return (
    <main className="min-h-screen flex flex-col items-center bg-brand-deep">
      <HeroSection />

      <div className="w-full relative -mt-8 z-20">
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filterType={filterType}
          setFilterType={setFilterType}
        />
      </div>

      <div className="flex-1 w-full">
        <StudentGrid students={filteredStudents} />
      </div>

      <MemoriesFooter />
    </main>
  );
}
