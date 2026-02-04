import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";

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
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          {title}
        </h2>
        <div className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl text-justify">
          {description}
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 w-full">
        <div className="aspect-square bg-muted overflow-hidden relative">
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
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="w-full max-w-480 mx-auto px-6 md:px-12 lg:px-20 space-y-24 md:space-y-32 lg:space-y-40">
        {/* Section 1 */}
        <FeatureSection
          title="Iran Massacre"
          description="IRGC (Islamic Revolutionary Guard Corps) killed MORE than 38,000 Iranians in just 2 days! Why? Because people took to the streets in peaceful protests."
          imagePosition="right"
          imageSrc="/images/1.jpg"
        />

        <Separator className="max-w-4xl mx-auto" />

        {/* Section 2 */}
        <FeatureSection
          title="Freedom"
          description={"On January 8 and 9, 2026, massive protests erupted in cities across Iran, with hundreds of thousands of demonstrators—many of them young people—taking to the streets and chanting slogans like \"Freedom!\" and \"Death to the dictator!\" These largely peaceful demonstrations, driven by demands for political freedom and an end to the regime, were met with a violent crackdown. Security forces used live ammunition to suppress the protesters."}
          imagePosition="left"
          imageSrc="/images/3.JPG"
        />

        <Separator className="max-w-4xl mx-auto" />

        {/* Section 3 */}
        <FeatureSection
          title="Foreign Help"
          description={
            <p>
              The Islamic Republic regime shut down the internet and all forms of external communication for nearly two weeks. The regime <span className="underline">killed</span>, <span className="underline">hanged</span>, and <span className="underline">imprisoned</span> many protesters. We need your help to be their voice.
            </p>
          }
          imagePosition="right"
          imageSrc="/images/6.jpg"
        />

        <Separator className="max-w-4xl mx-auto" />

        {/* Section 4 */}
        <FeatureSection
          title="Be the Voice of Iran"
          description="The people of Iran need your help now. They are living in an open-air prison, with the IRGC carrying out hangings every day. More than 36,000 young dreamers have been killed, hundreds of thousands have been arrested or executed—and these numbers are rising every day. Shockingly, even doctors have been executed (or face execution) for helping injured protesters, and about 8,000 people have lost their eyes due to birdshot."
          imagePosition="left"
          imageSrc="/images/7.jpg"
        />

        <Separator className="max-w-4xl mx-auto" />

        {/* Section 5 */}
        <FeatureSection
          title="MAKE IRAN GREAT AGAIN"
          description={
            <p>
              To stay updated on the latest news and learn the names of the young people killed in the ongoing massacre in Iran, search hashtags such as{" "}
              <Link href="https://x.com/search?q=%23KingRezaPahlavi" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-foreground transition-colors">#KingRezaPahlavi</Link>,{" "}
              <Link href="https://x.com/search?q=%23IranMassacre" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-foreground transition-colors">#IranMassacre</Link>, and{" "}
              <Link href="https://x.com/search?q=%23DigitalBlackoutInIran" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-foreground transition-colors">#DigitalBlackoutInIran</Link>{" "}
              on X (Twitter) or Instagram. Thank you for your time and support. With your support and by spreading the truth, the people of Iran will be freed from the Ayatollah&apos;s dictatorship. ❤️
            </p>
          }
          imagePosition="right"
          imageSrc="/images/8.jpg"
        />
      </div>
    </section>
  );
}
