import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-[65vh] flex items-center justify-center overflow-hidden py-20 md:py-28 lg:min-h-[75vh]">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=60&w=1920&auto=format&fit=crop"
                    alt="University Campus"
                    fill
                    priority
                    quality={50}
                    sizes="100vw"
                    className="object-cover object-center"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAABv/EAB8QAAICAgIDAQAAAAAAAAAAAAECAwQABREhBhIxQf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AruR8jt2K1ilDp6cMUyFC7TSl2X+D4wYxB//Z"
                />
                {/* Layered overlay for depth */}
                <div className="absolute inset-0 bg-brand-navy/65 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/30 via-transparent to-background" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
                {/* Logo Mark */}
                <div className="w-20 h-20 md:w-28 md:h-28 bg-white/[0.07] backdrop-blur-xl rounded-full border border-white/15 flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(0,229,255,0.15)] animate-fade-in-up">
                    <span className="text-3xl md:text-4xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-br from-brand-cyan via-white to-brand-cyan tracking-widest">
                        CE
                    </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-5 tracking-tight leading-[1.1] text-white animate-fade-in-up delay-100">
                    Welcome to <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-blue-400 to-indigo-400">
                        Civil Engineering
                    </span>
                </h1>
                <p className="text-[11px] md:text-xs lg:text-sm font-sans text-white/70 mb-8 font-semibold tracking-[0.2em] md:tracking-[0.25em] uppercase max-w-3xl text-center animate-fade-in-up delay-200">
                    Rajshahi University of Engineering &amp; Technology
                </p>

                <div className="inline-flex items-center gap-3 md:gap-5 px-5 md:px-8 py-2.5 md:py-3.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.2)] animate-fade-in-up delay-300">
                    <p className="text-sm md:text-lg font-heading text-white/90 font-medium tracking-wider">
                        CE 24 Series
                    </p>
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
                    <p className="text-sm md:text-lg font-heading text-white/90 font-medium tracking-wider">
                        Section A
                    </p>
                </div>
            </div>
        </section>
    );
}
