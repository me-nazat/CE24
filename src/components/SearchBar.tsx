"use client";

import { Search, MapPin, Hash } from "lucide-react";

interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    filterType: "all" | "name" | "id" | "hometown";
    setFilterType: (type: "all" | "name" | "id" | "hometown") => void;
}

export default function SearchBar({
    searchQuery,
    setSearchQuery,
    filterType,
    setFilterType,
}: SearchBarProps) {
    return (
        <div className="sticky top-4 z-40 w-full max-w-3xl mx-auto px-4 mb-12">
            <div className="bg-white/85 dark:bg-brand-navy/85 backdrop-blur-xl rounded-2xl shadow-[0_4px_24px_rgb(0,0,0,0.08)] dark:shadow-[0_4px_24px_rgba(0,229,255,0.08)] border border-slate-200/50 dark:border-white/10 p-1.5 sm:p-2 flex flex-col sm:flex-row gap-1.5 transition-shadow duration-300 hover:shadow-[0_8px_32px_rgb(0,0,0,0.1)] dark:hover:shadow-[0_8px_32px_rgba(0,229,255,0.12)]">

                {/* Search Input */}
                <div className="relative flex-grow flex items-center">
                    <Search className="absolute left-3.5 w-[18px] h-[18px] text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search our family..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-transparent border-none py-2.5 pl-11 pr-4 text-foreground placeholder-slate-400 focus:outline-none focus:ring-0 font-sans text-base sm:text-lg"
                    />
                </div>

                {/* Filter Badges */}
                <div className="flex items-center gap-1 overflow-x-auto pb-0.5 sm:pb-0 px-1.5 sm:px-0 scrollbar-hide">
                    <FilterButton
                        active={filterType === "all"}
                        onClick={() => setFilterType("all")}
                        label="All"
                    />
                    <FilterButton
                        active={filterType === "name"}
                        onClick={() => setFilterType("name")}
                        label="Name"
                    />
                    <FilterButton
                        active={filterType === "id"}
                        onClick={() => setFilterType("id")}
                        icon={<Hash className="w-3.5 h-3.5 mr-0.5" />}
                        label="ID"
                    />
                    <FilterButton
                        active={filterType === "hometown"}
                        onClick={() => setFilterType("hometown")}
                        icon={<MapPin className="w-3.5 h-3.5 mr-0.5" />}
                        label="Home"
                    />
                </div>
            </div>
        </div>
    );
}

function FilterButton({
    active,
    onClick,
    icon,
    label,
}: {
    active: boolean;
    onClick: () => void;
    icon?: React.ReactNode;
    label: string;
}) {
    return (
        <button
            onClick={onClick}
            className={`flex flex-shrink-0 items-center px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${active
                    ? "bg-brand-cyan text-brand-navy shadow-sm font-semibold"
                    : "bg-transparent text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/60"
                }`}
        >
            {icon}
            {label}
        </button>
    );
}
