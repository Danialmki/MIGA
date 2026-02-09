"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="w-full max-w-480 mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-muted-foreground">
            #KingRezaPahlavi
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          {/* Brand */}
          <Link href="/" className="inline-block">
            <span className="text-2xl font-bold tracking-tight">MIGA</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            {t.footer.tagline}
          </p>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <p className="text-sm text-muted-foreground">
            {t.footer.photoDisclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
