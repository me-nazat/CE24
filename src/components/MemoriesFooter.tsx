import Image from "next/image";

export default function MemoriesFooter() {
    const images = [
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2032&auto=format&fit=crop",
    ];

    return (
        <footer className="w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-heading font-bold text-brand-navy dark:text-white mb-3">
                        Our Memories
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 font-sans">
                        A glimpse into our journey together as Civil Engineers.
                    </p>
                </div>

                {/* Simple Masonry-style Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="md:col-span-2 md:row-span-2 relative h-48 md:h-auto rounded-2xl overflow-hidden group">
                        <Image
                            src={images[0]}
                            alt="Memory 1"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                    <div className="relative h-48 rounded-2xl overflow-hidden group">
                        <Image
                            src={images[1]}
                            alt="Memory 2"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                    <div className="relative h-48 rounded-2xl overflow-hidden group">
                        <Image
                            src={images[2]}
                            alt="Memory 3"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                    <div className="md:col-span-2 relative h-48 rounded-2xl overflow-hidden group">
                        <Image
                            src={images[3]}
                            alt="Memory 4"
                            fill
                            className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                </div>
            </div>

            {/* Minimalist Copyright Footer */}
            <div className="bg-slate-50 dark:bg-brand-navy py-8 border-t border-slate-200 dark:border-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-sans text-center">
                        &copy; {new Date().getFullYear()} Civil Engineering, Series '24, Section A. Rajshahi University of Engineering and Technology. All rights reserved.
                    </p>
                    <p className="text-slate-400 dark:text-slate-500 text-xs mt-2 text-center">
                        Designed with ♥ for the CE family.
                    </p>
                </div>
            </div>
        </footer>
    );
}
