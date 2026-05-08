"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { useDebounce } from "use-debounce";
import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import { students } from "@/data/students";

const StudentGrid = dynamic(() => import("@/components/StudentGrid"), {
  loading: () => (
    <div className="w-full py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-[3/4] rounded-[20px] skeleton" />
          ))}
        </div>
      </div>
    </div>
  ),
});
const MemoriesFooter = dynamic(() => import("@/components/MemoriesFooter"), { ssr: false });

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery] = useDebounce(searchQuery, 300);
  const [filterType, setFilterType] = useState<"all" | "name" | "id" | "hometown">("all");

  const filteredStudents = useMemo(() => {
    if (!debouncedSearchQuery.trim()) return students;

    const q = debouncedSearchQuery.toLowerCase();

    return students.filter((s) => {
      switch (filterType) {
        case "name":
          return s.name.toLowerCase().includes(q);
        case "id":
          return s.studentId.toLowerCase().includes(q);
        case "hometown":
          return s.hometown.toLowerCase().includes(q);
        default:
          return (
            s.name.toLowerCase().includes(q) ||
            s.studentId.toLowerCase().includes(q) ||
            s.hometown.toLowerCase().includes(q)
          );
      }
    });
  }, [debouncedSearchQuery, filterType]);

  return (
    <main className="min-h-screen flex flex-col items-center" style={{ background: "var(--bg-primary)" }}>
      <HeroSection />

      <div className="w-full relative -mt-12 md:-mt-16 z-20">
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
