import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { Section } from "./Section";

const sections = [
  { id: "about", title: "About Instamart", description: "Quick grocery delivery with curated essentials and everyday deals for your household." },
  { id: "team", title: "Team Instamart", description: "Our team focuses on fast fulfillment, quality checks, and reliable last-mile delivery." },
  { id: "career", title: "Careers", description: "Join us to build scalable logistics, product, and operations experiences." },
  { id: "other", title: "Others", description: "Partnerships, support policies, and additional Instamart program information." },
] as const;

export function Instamart() {
  const [visibleSection, setVisibleSection] = useState<string | null>("about");

  return (
    <section className="page-shell space-y-6">
      <header className="page-header">
        <h1 className="page-header__title">InstaMart</h1>
        <p className="page-header__subtitle">
          Grocery and essentials — expand a section to read more.
        </p>
      </header>

      <div className="content-card flex flex-wrap items-center justify-between gap-4">
        <p className="m-0 text-sm text-gray-700">Hungry for restaurant food?</p>
        <Link to={ROUTES.HOME} className="search-btn">Order food</Link>
      </div>

      <div className="space-y-3">
        {sections.map((section) => (
          <Section
            key={section.id}
            title={section.title}
            description={section.description}
            isVisible={visibleSection === section.id}
            onToggle={() =>
              setVisibleSection((c) => (c === section.id ? null : section.id))
            }
          />
        ))}
      </div>
    </section>
  );
}
