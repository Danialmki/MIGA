import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Unicorn Studio Background Container */}
      <div
        id="unicorn-studio-background"
        className="absolute inset-0 z-0 bg-black flex items-center justify-center"
        aria-hidden="true"
        data-purpose="unicorn-studio-interactive-background"
      >
        {/* Lion and Sun Logo */}
        <Image
          src="/images/lion-and-sun-mono.svg"
          alt="Lion and Sun"
          width={400}
          height={400}
          className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 invert animate-fade-in"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full w-full flex flex-col justify-end">
        <div className="w-full max-w-480 mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-24 lg:pb-32">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold tracking-tight leading-[0.9] max-w-[90%] md:max-w-[80%] lg:max-w-[70%]">
            <span className="block animate-slide-in-left">MAKE IRAN</span>
            <span className="block text-primary animate-slide-in-left-delay">GREAT AGAIN</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
