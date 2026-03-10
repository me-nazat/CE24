import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden py-24 md:py-32 lg:min-h-[80vh]">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
                    alt="University Campus"
                    fill
                    priority
                    className="object-cover object-center"
                />
                {/* Dark overlay with slight navy tint */}
                <div className="absolute inset-0 bg-brand-navy/70 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
                {/* Animated Logo Placeholder */}
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center mb-10 shadow-[0_0_50px_rgba(0,229,255,0.2)] animate-fade-in-up">
                    <span className="text-4xl md:text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-br from-brand-cyan via-white to-brand-cyan tracking-widest drop-shadow-[0_2px_10px_rgba(0,229,255,0.5)]">
                        CE
                    </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-6 tracking-tight leading-tight text-white drop-shadow-2xl animate-fade-in-up delay-100">
                    Welcome to <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-blue-400 to-indigo-400 drop-shadow-md">
                        Civil Engineering
                    </span>
                </h1>
                <p className="text-xs md:text-sm lg:text-base font-sans text-slate-300/90 mb-10 font-semibold tracking-[0.2em] md:tracking-[0.3em] uppercase drop-shadow-lg max-w-3xl text-center animate-fade-in-up delay-200">
                    Rajshahi University of Engineering and Technology
                </p>

                <div className="inline-flex items-center gap-4 md:gap-6 px-6 md:px-10 py-3 md:py-4 rounded-full bg-slate-900/40 border border-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-slate-900/60 hover:border-white/20 transition-all duration-300 animate-fade-in-up delay-300">
                    <p className="text-base md:text-xl font-heading text-white font-medium tracking-wider drop-shadow-md">
                        CE 24 Series
                    </p>
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-cyan shadow-[0_0_12px_rgba(0,229,255,1)]" />
                    <p className="text-base md:text-xl font-heading text-white font-medium tracking-wider drop-shadow-md">
                        Section A
                    </p>
                </div>
            </div>
        </section>
    );
}
