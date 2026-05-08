"use client";

import { useState, useRef } from "react";
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
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="sticky top-4 z-40 w-[95%] md:w-full max-w-2xl mx-auto md:px-4 mb-14"
        >
            <div
                className={`glass rounded-2xl p-1.5 flex flex-col sm:flex-row gap-1 transition-all duration-300 ${isFocused
                    ? "shadow-[0_0_0_1px_rgba(108,99,255,0.15),0_8px_40px_-8px_rgba(108,99,255,0.1)]"
                    : ""
                    }`}
                style={{
                    borderColor: isFocused ? "rgba(108, 99, 255, 0.15)" : undefined,
                }}
            >
                {/* Input */}
                <div className="relative flex-grow flex items-center">
                    <Search
                        className="absolute left-3.5 w-4 h-4 transition-colors duration-200"
                        style={{ color: isFocused ? "var(--accent-bright)" : "var(--text-muted)" }}
                    />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search by name, ID, or hometown…"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className="w-full bg-transparent border-none py-2.5 pl-10 pr-9 focus:outline-none focus:ring-0 font-sans text-sm"
                        style={{ color: "var(--text-primary)", caretColor: "var(--accent-bright)" }}
                        id="search-input"
                    />

                    <AnimatePresence>
                        {searchQuery && (
                            <motion.button
                                initial={{ opacity: 0, scale: 0.7 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.7 }}
                                transition={{ duration: 0.12 }}
                                onClick={() => {
                                    setSearchQuery("");
                                    inputRef.current?.focus();
                                }}
                                className="absolute right-2.5 p-1 rounded-md transition-colors duration-150 cursor-pointer"
                                style={{ background: "var(--surface-glass)", color: "var(--text-muted)" }}
                                aria-label="Clear search"
                            >
                                <X className="w-3 h-3" />
                            </motion.button>
                        )}
                    </AnimatePresence>
                </div>

                {/* Divider */}
                <div className="hidden sm:block w-px self-stretch my-1.5 mx-1" style={{ background: "var(--border-subtle)" }} />

                {/* Filters */}
                <div className="flex items-center gap-0.5 overflow-x-auto scrollbar-hide px-1 sm:px-0">
                    <Pill active={filterType === "all"} onClick={() => setFilterType("all")} label="All" />
                    <Pill active={filterType === "name"} onClick={() => setFilterType("name")} icon={<User className="w-3 h-3" />} label="Name" />
                    <Pill active={filterType === "id"} onClick={() => setFilterType("id")} icon={<Hash className="w-3 h-3" />} label="ID" />
                    <Pill active={filterType === "hometown"} onClick={() => setFilterType("hometown")} icon={<MapPin className="w-3 h-3" />} label="Home" />
                </div>
            </div>
        </motion.div>
    );
}

function Pill({
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
            className="flex flex-shrink-0 items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer"
            style={{
                background: active ? "var(--accent-glow)" : "transparent",
                color: active ? "var(--accent-bright)" : "var(--text-muted)",
                border: active ? "1px solid rgba(108,99,255,0.15)" : "1px solid transparent",
            }}
        >
            {icon}
            {label}
        </button>
    );
}
