import React from "react";

interface SectionProps {
  title: string;
  description: string;
  isVisible: boolean;
  onToggle: () => void;
}

export function Section({ title, description, isVisible, onToggle }: SectionProps) {
  return (
    <div className="accordion-item">
      <button
        type="button"
        className="accordion-item__header"
        onClick={onToggle}
        aria-expanded={isVisible}
      >
        <h3 className="accordion-item__title">{title}</h3>
        <span
          className={`accordion-item__chevron ${isVisible ? "accordion-item__chevron--open" : ""}`}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>
      {isVisible ? (
        <div className="accordion-item__body">{description}</div>
      ) : null}
    </div>
  );
}
