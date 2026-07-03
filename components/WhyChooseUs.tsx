const rows = [
  { feature: "Quality-checked formula", nutra4: true, generic: false },
  { feature: "Cash on Delivery", nutra4: true, generic: false },
  { feature: "Free home delivery", nutra4: true, generic: false },
  { feature: "Local support, real phone numbers", nutra4: true, generic: false },
  { feature: "Transparent, single-product focus", nutra4: true, generic: false },
];

function Check({ ok }: { ok: boolean }) {
  if (ok) {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-label="Yes">
        <circle cx="9" cy="9" r="9" fill="#A9781E" />
        <path d="M4.8 9.2L7.4 11.8L13.2 6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-label="No">
      <circle cx="9" cy="9" r="9" fill="#E6E1D6" />
      <path d="M6 6L12 12M12 6L6 12" stroke="#6B6559" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="bg-paper2 py-16 sm:py-24">
      <div className="container-content">
        <div className="max-w-xl">
          <span className="eyebrow">Why Choose Nutra-4</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Compared to generic gainers.
          </h2>
        </div>

        <div className="mt-10 overflow-hidden rounded-xl2 border border-line bg-white shadow-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line bg-ink text-paper">
                <th className="px-6 py-4 text-left font-extrabold">Feature</th>
                <th className="px-6 py-4 text-center font-extrabold text-gold">Nutra-4</th>
                <th className="px-6 py-4 text-center font-extrabold text-paper/60">Generic Gainer</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature} className="border-b border-line last:border-0">
                  <td className="px-6 py-4 font-semibold text-ink">{row.feature}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center"><Check ok={row.nutra4} /></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center"><Check ok={row.generic} /></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
