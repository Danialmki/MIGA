export const translations = {
  en: {
    nav: {
      beWithIran: "BE WITH IRAN",
      freeIran: "FREE IRAN",
    },
    hero: {
      makeIran: "MAKE IRAN",
      greatAgain: "GREAT AGAIN",
    },
    marquee: {
      quotes: [
        "Make Iran Great Again",
        "38,000 People Has Been Killed",
        "Iran Massacre",
        "King Reza Pahlavi",
        "Kill The Dictator",
        "Be With Iran",
        "IRGC is a terrorist organisation",
        "Save Iranians",
        "Iran Holocaust",
      ],
    },
    sections: {
      iranMassacre: {
        title: "Iran Massacre",
        description:
          "IRGC (Islamic Revolutionary Guard Corps) killed MORE than 38,000 Iranians in just 2 days! Why? Because people took to the streets in peaceful protests.",
      },
      freedom: {
        title: "Freedom",
        description:
          'On January 8 and 9, 2026, massive protests erupted in cities across Iran, with hundreds of thousands of demonstrators—many of them young people—taking to the streets and chanting slogans like "Freedom!" and "Death to the dictator!" These largely peaceful demonstrations, driven by demands for political freedom and an end to the regime, were met with a violent crackdown. Security forces used live ammunition to suppress the protesters.',
      },
      foreignHelp: {
        title: "Foreign Help",
        description: "The Islamic Republic regime shut down the internet and all forms of external communication for nearly two weeks. The regime",
        killed: "killed",
        hanged: "hanged",
        imprisoned: "imprisoned",
        descriptionEnd: "many protesters. We need your help to be their voice.",
      },
      beTheVoice: {
        title: "Be the Voice of Iran",
        description:
          "The people of Iran need your help now. They are living in an open-air prison, with the IRGC carrying out hangings every day. More than 36,000 young dreamers have been killed, hundreds of thousands have been arrested or executed—and these numbers are rising every day. Shockingly, even doctors have been executed (or face execution) for helping injured protesters, and about 8,000 people have lost their eyes due to birdshot.",
      },
      makeGreatAgain: {
        title: "MAKE IRAN GREAT AGAIN",
        descriptionStart: "To stay updated on the latest news and learn the names of the young people killed in the ongoing massacre in Iran, search hashtags such as",
        descriptionEnd: "on X (Twitter) or Instagram. Thank you for your time and support. With your support and by spreading the truth, the people of Iran will be freed from the Ayatollah's dictatorship. ❤️",
      },
    },
    footer: {
      tagline: "Standing together for freedom, democracy, and human rights in Iran.",
      copyright: "MIGA. All rights reserved.",
      photoDisclaimer: "The photos on this website are real and not AI-generated.",
    },
  },
  de: {
    nav: {
      beWithIran: "MIT IRAN SEIN",
      freeIran: "BEFREIT IRAN",
    },
    hero: {
      makeIran: "MACHT IRAN",
      greatAgain: "WIEDER GROẞ",
    },
    marquee: {
      quotes: [
        "Macht Iran Wieder Groß",
        "38.000 Menschen Wurden Getötet",
        "Iran Massaker",
        "König Reza Pahlavi",
        "Tötet Den Diktator",
        "Steht Zu Iran",
        "IRGC ist eine terroristische Organisation",
        "Rettet Die Iraner",
        "Iran Holocaust",
      ],
    },
    sections: {
      iranMassacre: {
        title: "Iran Massaker",
        description:
          "Die IRGC (Islamische Revolutionsgarde) tötete in nur 2 Tagen MEHR als 38.000 Iraner! Warum? Weil die Menschen bei friedlichen Protesten auf die Straße gingen.",
      },
      freedom: {
        title: "Freiheit",
        description:
          'Am 8. und 9. Januar 2026 brachen in Städten im ganzen Iran massive Proteste aus, bei denen Hunderttausende von Demonstranten – viele von ihnen junge Menschen – auf die Straße gingen und Parolen wie „Freiheit!" und „Tod dem Diktator!" riefen. Diese weitgehend friedlichen Demonstrationen, die von Forderungen nach politischer Freiheit und einem Ende des Regimes angetrieben wurden, wurden gewaltsam niedergeschlagen. Sicherheitskräfte setzten scharfe Munition ein, um die Proteste zu unterdrücken.',
      },
      foreignHelp: {
        title: "Ausländische Hilfe",
        description: "Das Regime der Islamischen Republik hat das Internet und alle Formen der externen Kommunikation für fast zwei Wochen abgeschaltet. Das Regime hat viele Demonstranten",
        killed: "getötet",
        hanged: "gehängt",
        imprisoned: "inhaftiert",
        descriptionEnd: ". Wir brauchen Ihre Hilfe, um ihre Stimme zu sein.",
      },
      beTheVoice: {
        title: "Sei Die Stimme Des Iran",
        description:
          "Die Menschen im Iran brauchen jetzt Ihre Hilfe. Sie leben in einem Freiluftgefängnis, und die IRGC führt jeden Tag Hinrichtungen durch. Mehr als 36.000 junge Träumer wurden getötet, Hunderttausende wurden verhaftet oder hingerichtet – und diese Zahlen steigen jeden Tag. Schockierenderweise wurden sogar Ärzte hingerichtet (oder stehen vor der Hinrichtung), weil sie verletzten Demonstranten geholfen haben, und etwa 8.000 Menschen haben durch Schrotkugeln ihr Augenlicht verloren.",
      },
      makeGreatAgain: {
        title: "MACHT IRAN WIEDER GROẞ",
        descriptionStart: "Um über die neuesten Nachrichten auf dem Laufenden zu bleiben und die Namen der jungen Menschen zu erfahren, die beim anhaltenden Massaker im Iran getötet wurden, suchen Sie nach Hashtags wie",
        descriptionEnd: "auf X (Twitter) oder Instagram. Vielen Dank für Ihre Zeit und Unterstützung. Mit Ihrer Unterstützung und durch die Verbreitung der Wahrheit wird das iranische Volk von der Diktatur des Ayatollahs befreit. ❤️",
      },
    },
    footer: {
      tagline: "Gemeinsam für Freiheit, Demokratie und Menschenrechte im Iran.",
      copyright: "MIGA. Alle Rechte vorbehalten.",
      photoDisclaimer: "Die Fotos auf dieser Website sind echt und nicht KI-generiert.",
    },
  },
};

export type Language = "en" | "de";
export type Translations = typeof translations.en;
