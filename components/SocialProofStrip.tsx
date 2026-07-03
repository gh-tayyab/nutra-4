"use client";

import { useEffect, useState } from "react";

const quotes = [
  { text: "Gained visible weight in the first month. Genuinely surprised.", name: "Verified customer" },
  { text: "Cash on delivery made it an easy first order — product delivered on time.", name: "Verified customer" },
  { text: "No bloating, no weird aftertaste. Just consistent gains.", name: "Verified customer" },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="#A9781E">
          <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L1.3 7.8l6.1-.7L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function SocialProofStrip() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="border-y border-line bg-paper2 py-6">
      <div className="container-content flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <Stars />
          <span className="text-sm font-extrabold text-ink">4.8/5</span>
          <span className="text-sm text-stone">from 500+ happy customers</span>
        </div>

        <div className="max-w-md" role="status" aria-live="polite">
          <p className="text-sm font-semibold italic text-ink">
            &ldquo;{quotes[index].text}&rdquo;
          </p>
          <p className="mt-1 text-xs text-stone">— {quotes[index].name}</p>
        </div>
      </div>
    </section>
  );
}
