"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/lib/language-context";
import { useState, useEffect } from "react";

export function Navbar() {
  const { t } = useLanguage();
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const foreignHelp = document.getElementById('foreign-help');
      if (foreignHelp) {
        const rect = foreignHelp.getBoundingClientRect();
        setScrolledPastHero(rect.top <= 64); // 64px = navbar height
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="w-full max-w-480 mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <span className="text-2xl font-bold tracking-tight">MIGA</span>
          </Link>

          {/* Conditional Buttons */}
          <div className="relative">
            {/* Language Switcher - visible in hero */}
            <div className={`transition-all duration-300 ${scrolledPastHero ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
              <LanguageSwitcher />
            </div>
            
            {/* CTA Buttons - visible after scrolling */}
            <div className={`absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 md:gap-3 transition-all duration-300 ${scrolledPastHero ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
              <Button variant="secondary" size="sm" className="hidden sm:inline-flex whitespace-nowrap opacity-50 cursor-not-allowed"
                onClick={() => {
                  document.getElementById('make-iran-great-again')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t.nav.beWithIran}
              </Button>
              <Button 
                size="sm" 
                className="whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity"
                onClick={() => {
                  document.getElementById('foreign-help')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t.nav.freeIran}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
