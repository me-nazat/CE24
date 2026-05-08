"use client";

import { useState, useRef, useEffect } from "react";
import { Search, MapPin, Hash, X, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="sticky top-4 z-40 w-full max-w-3xl mx-auto px-4 mb-14"
        >
            <div
                className={`glass rounded-2xl p-1.5 sm:p-2 flex flex-col sm:flex-row gap-1.5 transition-all duration-300 ${isFocused
                    ? "border-brand-cyan/20 shadow-[0_0_40px_rgba(0,229,255,0.08)]"
                    : ""
                    }`}
            >
                {/* Search Input */}
                <div className="relative flex-grow flex items-center">
                    <Search className={`absolute left-3.5 w-[18px] h-[18px] transition-colors duration-200 ${isFocused ? "text-brand-cyan" : "text-white/30"}`} />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search students..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className="w-full bg-transparent border-none py-2.5 pl-11 pr-10 text-white placeholder-white/25 focus:outline-none focus:ring-0 font-sans text-base sm:text-lg"
                        id="search-input"
                    />
                    {/* Clear button */}
                    <AnimatePresence>
                        {searchQuery && (
                            <motion.button
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.15 }}
                                onClick={() => {
                                    setSearchQuery("");
                                    inputRef.current?.focus();
                                }}
                                className="absolute right-3 p-1 rounded-lg bg-white/5 hover:bg-white/10 text-white/40 hover:text-white/70 transition-all duration-200 cursor-pointer"
                                aria-label="Clear search"
                            >
                                <X className="w-3.5 h-3.5" />
                            </motion.button>
                        )}
                    </AnimatePresence>
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
                        icon={<User className="w-3.5 h-3.5" />}
                        label="Name"
                    />
                    <FilterButton
                        active={filterType === "id"}
                        onClick={() => setFilterType("id")}
                        icon={<Hash className="w-3.5 h-3.5" />}
                        label="ID"
                    />
                    <FilterButton
                        active={filterType === "hometown"}
                        onClick={() => setFilterType("hometown")}
                        icon={<MapPin className="w-3.5 h-3.5" />}
                        label="Home"
                    />
                </div>
            </div>
        </motion.div>
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
            className={`flex flex-shrink-0 items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-250 cursor-pointer ${active
                ? "bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/20 font-semibold shadow-[0_0_12px_rgba(0,229,255,0.1)]"
                : "text-white/40 hover:text-white/60 hover:bg-white/[0.04]"
                }`}
        >
            {icon}
            {label}
        </button>
    );
}
