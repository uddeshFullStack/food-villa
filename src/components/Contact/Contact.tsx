import React from "react";

const contactDetails = [
  { icon: "📞", title: "Phone", value: "7059219618", hint: "Mon–Sun, 9 AM – 9 PM" },
  { icon: "✉️", title: "Email", value: "support@foodvilla.demo", hint: "We reply within 24 hours" },
  { icon: "📍", title: "Office", value: "Kolkata, India", hint: "Zestora HQ" },
];

export function Contact() {
  return (
    <section className="page-shell">
      <header className="page-header">
        <h1 className="page-header__title">Contact us</h1>
        <p className="page-header__subtitle">
          Reach out for orders, feedback, or partnership queries.
        </p>
      </header>

      <div className="contact-grid">
        {contactDetails.map((item) => (
          <article key={item.title} className="contact-card">
            <span className="contact-card__icon" aria-hidden="true">{item.icon}</span>
            <p className="contact-card__title">{item.title}</p>
            <p className="contact-card__value">{item.value}</p>
            <p className="contact-card__hint">{item.hint}</p>
          </article>
        ))}
      </div>

      <div className="content-card mt-6">
        <h2 className="m-0 text-lg font-bold text-gray-900">Send a message</h2>
        <p className="mt-2 text-sm text-gray-600">
          Form is for demo only — submissions are not stored.
        </p>
        <form className="mt-4 grid gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
          <input type="text" className="search-input w-full" placeholder="Your name" />
          <input type="email" className="search-input w-full" placeholder="Email address" />
          <textarea className="search-input min-h-[120px] w-full sm:col-span-2" placeholder="How can we help?" />
          <button type="submit" className="search-btn sm:col-span-2 sm:w-fit">Send message</button>
        </form>
      </div>
    </section>
  );
}
