import Image from "next/image";

export default function MemoriesFooter() {
    const images = [
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=60&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=60&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=60&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=60&w=800&auto=format&fit=crop",
    ];

    return (
        <footer className="w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-heading font-bold text-brand-navy dark:text-white mb-3">
                        Our Memories
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 font-sans text-sm">
                        A glimpse into our journey together as Civil Engineers.
                    </p>
                </div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    <div className="md:col-span-2 md:row-span-2 relative h-48 md:h-auto rounded-2xl overflow-hidden group">
                        <Image
                            src={images[0]}
                            alt="Campus life moments"
                            fill
                            loading="lazy"
                            quality={50}
                            sizes="(max-width: 768px) 50vw, 400px"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-brand-navy/15 group-hover:bg-transparent transition-colors duration-300" />
                    </div>
                    <div className="relative h-48 rounded-2xl overflow-hidden group">
                        <Image
                            src={images[1]}
                            alt="Classroom memories"
                            fill
                            loading="lazy"
                            quality={50}
                            sizes="(max-width: 768px) 50vw, 200px"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-brand-navy/15 group-hover:bg-transparent transition-colors duration-300" />
                    </div>
                    <div className="relative h-48 rounded-2xl overflow-hidden group">
                        <Image
                            src={images[2]}
                            alt="Graduation celebration"
                            fill
                            loading="lazy"
                            quality={50}
                            sizes="(max-width: 768px) 50vw, 200px"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-brand-navy/15 group-hover:bg-transparent transition-colors duration-300" />
                    </div>
                    <div className="md:col-span-2 relative h-48 rounded-2xl overflow-hidden group">
                        <Image
                            src={images[3]}
                            alt="Study sessions together"
                            fill
                            loading="lazy"
                            quality={50}
                            sizes="(max-width: 768px) 50vw, 400px"
                            className="object-cover object-bottom transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-brand-navy/15 group-hover:bg-transparent transition-colors duration-300" />
                    </div>
                </div>
            </div>

            {/* Copyright Footer */}
            <div className="bg-slate-50 dark:bg-brand-navy py-6 border-t border-slate-200 dark:border-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-1.5">
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-sans text-center leading-relaxed">
                        &copy; {new Date().getFullYear()} Civil Engineering, Series &apos;24, Section A &middot; RUET
                    </p>
                    <p className="text-slate-400 dark:text-slate-500 text-[10px] text-center">
                        Designed with ♥ for the CE family
                    </p>
                </div>
            </div>
        </footer>
    );
}
