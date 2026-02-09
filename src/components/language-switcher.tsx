"use client";

import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "de" : "en")}
      className="font-medium"
    >
      {language === "en" ? "DE" : "EN"}
    </Button>
  );
}
