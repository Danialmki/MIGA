import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
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
            Standing together for freedom, democracy, and human rights in Iran.
          </p>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MIGA. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            The photos on this website are real and not AI-generated.
          </p>
        </div>
      </div>
    </footer>
  );
}
