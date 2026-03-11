"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { useDebounce } from "use-debounce";
import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import { students } from "@/data/students";

// Dynamically import heavy components
const StudentGrid = dynamic(() => import("@/components/StudentGrid"), {
  loading: () => <div className="w-full text-center py-20 text-brand-cyan">Loading Directory...</div>
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
  }, [searchQuery, filterType]);

  return (
    <main className="min-h-screen flex flex-col items-center">
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
