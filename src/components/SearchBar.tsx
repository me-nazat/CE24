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
            <div className="bg-white/80 dark:bg-brand-navy/80 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.1)] dark:shadow-[0_8px_30px_rgba(0,229,255,0.1)] border border-white/20 dark:border-white/10 p-2 flex flex-col sm:flex-row gap-2 transition-all">

                {/* Search Input */}
                <div className="relative flex-grow flex items-center">
                    <Search className="absolute left-4 w-5 h-5 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search our family..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-transparent border-none py-3 pl-12 pr-4 text-foreground placeholder-slate-400 focus:outline-none focus:ring-0 font-sans text-lg"
                    />
                </div>

                {/* Filter Badges/Dropdown - simplified to buttons for mobile friendliness */}
                <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 px-2 sm:px-0 scrollbar-hide">
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
                        icon={<Hash className="w-4 h-4 mr-1" />}
                        label="ID"
                    />
                    <FilterButton
                        active={filterType === "hometown"}
                        onClick={() => setFilterType("hometown")}
                        icon={<MapPin className="w-4 h-4 mr-1" />}
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
            className={`flex flex-shrink-0 items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${active
                    ? "bg-brand-cyan text-brand-navy shadow-md"
                    : "bg-transparent text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                }`}
        >
            {icon}
            {label}
        </button>
    );
}
