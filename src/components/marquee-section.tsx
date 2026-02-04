"use client";

const topRowQuotes = [
  "Make Iran Great Again",
  "38,000 People Has Been Killed",
  "Iran Massacre",
  "King Reza Pahlavi",
  "Kill The Dictator",
  "Be With Iran",
  "IRGC is a terrorist organisation",
  "Save Iranians",
  "Iran Holocaust",
  "Make Iran Great Again",
  "38,000 People Has Been Killed",
  "Iran Massacre",
];

const bottomRowQuotes = [
  "Kill The Dictator",
  "Be With Iran",
  "IRGC is a terrorist organisation",
  "King Reza Pahlavi",
  "Iran Massacre",
  "Make Iran Great Again",
  "38,000 People Has Been Killed",
  "Save Iranians",
  "Iran Holocaust",
  "Kill The Dictator",
  "Be With Iran",
  "IRGC is a terrorist organisation",
];

function TestimonialCard({ quote }: { quote: string }) {
  return (
    <div className="shrink-0 w-72 sm:w-80 md:w-96 p-6 md:p-8 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm shadow-sm">
      <div className="flex flex-col gap-4">
        {/* Quote text */}
        <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight tracking-tight">
          {quote}
        </p>
        
        {/* Decorative line */}
        <div className="w-12 h-1 bg-primary/30 rounded-full mt-2" />
      </div>
    </div>
  );
}

export function MarqueeSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 overflow-hidden bg-black">
      {/* Top Row - Animates Left */}
      <div className="mb-6 md:mb-8">
        <div className="flex gap-4 md:gap-6 animate-marquee-left">
          {/* Duplicate for seamless loop */}
          {[...topRowQuotes, ...topRowQuotes].map((quote, index) => (
            <TestimonialCard key={`top-${index}`} quote={quote} />
          ))}
        </div>
      </div>

      {/* Bottom Row - Animates Right */}
      <div>
        <div className="flex gap-4 md:gap-6 animate-marquee-right">
          {/* Duplicate for seamless loop */}
          {[...bottomRowQuotes, ...bottomRowQuotes].map((quote, index) => (
            <TestimonialCard key={`bottom-${index}`} quote={quote} />
          ))}
        </div>
      </div>
    </section>
  );
}
