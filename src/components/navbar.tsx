"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="w-full max-w-480 mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <span className="text-2xl font-bold tracking-tight">MIGA</span>
          </Link>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 md:gap-3">
            <Button variant="secondary" size="sm" className="hidden sm:inline-flex" disabled>
              BE WITH IRAN
            </Button>
            <Button size="sm" disabled>
              FREE IRAN
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
