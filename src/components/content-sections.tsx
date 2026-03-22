"use client";

import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";
import { useLanguage } from "@/lib/language-context";

interface FeatureSectionProps {
  title: string;
  description: string | ReactNode;
  imagePosition?: "left" | "right";
  imageSrc?: string;
  imagePlaceholder?: string;
}

function FeatureSection({
  title,
  description,
  imagePosition = "right",
  imageSrc,
  imagePlaceholder = "Feature Image",
}: FeatureSectionProps) {
  const isImageLeft = imagePosition === "left";

  return (
    <div
      className={`flex flex-col ${
        isImageLeft ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-8 md:gap-12 lg:gap-20 items-center`}
    >
      {/* Text Content */}
      <div className="flex-1 space-y-4 md:space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 lg:mb-8 px-2 md:px-4 lg:px-6">
          {title}
        </h2>
        <div className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl text-justify">
          {description}
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 w-full">
        <div className="aspect-square bg-muted overflow-hidden relative mb-4 md:mb-6 lg:mb-8 px-2 md:px-4 lg:px-6">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <span className="text-muted-foreground">{imagePlaceholder}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function ContentSections() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="w-full max-w-480 mx-auto px-6 md:px-12 lg:px-20 space-y-24 md:space-y-32 lg:space-y-40">
        {/* Section 1 */}
        <FeatureSection
          title={t.sections.iranMassacre.title}
          description={t.sections.iranMassacre.description}
          imagePosition="right"
          imageSrc="/images/1.jpg"
        />

        <Separator className="max-w-4xl mx-auto" />

        {/* Section 2 */}
        <FeatureSection
          title={t.sections.freedom.title}
          description={t.sections.freedom.description}
          imagePosition="left"
          imageSrc="/images/3.jpg"
        />

        <Separator className="max-w-4xl mx-auto" />

        {/* Section 3 */}
        <div id="foreign-help">
          <FeatureSection
            title={t.sections.foreignHelp.title}
            description={
              <p>
                {t.sections.foreignHelp.description} <span className="underline">{t.sections.foreignHelp.killed}</span>, <span className="underline">{t.sections.foreignHelp.hanged}</span>, and <span className="underline">{t.sections.foreignHelp.imprisoned}</span> {t.sections.foreignHelp.descriptionEnd}
              </p>
            }
            imagePosition="right"
            imageSrc="/images/6.jpg"
          />
        </div>

        <Separator className="max-w-4xl mx-auto" />

        {/* Section 4 */}
        <FeatureSection
          title={t.sections.beTheVoice.title}
          description={t.sections.beTheVoice.description}
          imagePosition="left"
          imageSrc="/images/7.jpg"
        />

        <Separator className="max-w-4xl mx-auto" />

        {/* Section 5 */}
        <div id="make-iran-great-again">
          <FeatureSection
            title={t.sections.makeGreatAgain.title}
            description={
              <p>
                {t.sections.makeGreatAgain.descriptionStart}{" "}
                <Link href="https://x.com/search?q=%23KingRezaPahlavi" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-foreground transition-colors">#KingRezaPahlavi</Link>,{" "}
                <Link href="https://x.com/search?q=%23IranMassacre" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-foreground transition-colors">#IranMassacre</Link>, and{" "}
                <Link href="https://x.com/search?q=%23DigitalBlackoutInIran" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-foreground transition-colors">#DigitalBlackoutInIran</Link>{" "}
                {t.sections.makeGreatAgain.descriptionEnd}
              </p>
            }
            imagePosition="right"
            imageSrc="/images/8.jpg"
          />
        </div>
      </div>
    </section>
  );
}
