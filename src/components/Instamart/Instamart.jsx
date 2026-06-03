import React, { useState } from "react";
import { Section } from "./Section";

const sections = [
  {
    id: "about",
    title: "About Instamart",
    description:
      "Quick grocery delivery with curated essentials and everyday deals for your household.",
  },
  {
    id: "team",
    title: "Team Instamart",
    description:
      "Our team focuses on fast fulfillment, quality checks, and reliable last-mile delivery.",
  },
  {
    id: "career",
    title: "Careers",
    description:
      "Join us to build scalable logistics, product, and operations experiences.",
  },
  {
    id: "other",
    title: "Others",
    description:
      "Partnerships, support policies, and additional Instamart program information.",
  },
];

export function Instamart() {
  const [visibleSection, setVisibleSection] = useState(null);

  return (
    <section className="mx-auto max-w-3xl space-y-4">
      <h1 className="page-title">InstaMart</h1>
      {sections.map((section) => (
        <Section
          key={section.id}
          title={section.title}
          description={section.description}
          isVisible={visibleSection === section.id}
          onToggle={() =>
            setVisibleSection((current) =>
              current === section.id ? null : section.id
            )
          }
        />
      ))}
    </section>
  );
}
