"use client";

import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { Language } from "@/lib/translations";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-1">
      <Button
        variant={language === "de" ? "secondary" : "ghost"}
        size="sm"
        onClick={() => setLanguage("de")}
        className="font-medium px-2"
      >
        DE
      </Button>
      <Button
        variant={language === "it" ? "secondary" : "ghost"}
        size="sm"
        onClick={() => setLanguage("it")}
        className="font-medium px-2"
      >
        IT
      </Button>
      <Button
        variant={language === "en" ? "secondary" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="font-medium px-2"
      >
        EN
      </Button>
    </div>
  );
}
