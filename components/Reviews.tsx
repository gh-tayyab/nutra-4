import AssetSlot from "./AssetSlot";
import { reviews } from "@/lib/reviews";

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-24">
      <div className="container-content">
        <div className="max-w-xl">
          <span className="eyebrow">Reviews</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Real customers. Real screenshots.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-stone sm:text-base">
            Every review here is from an actual buyer, shared with their
            permission via WhatsApp or Instagram — no stock photos, no
            duplicated faces.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.id}
              className="flex flex-col overflow-hidden rounded-xl2 border border-line bg-white shadow-card"
            >
              <AssetSlot
                label={`${review.source} Screenshot — ${review.id}`}
                aspect="aspect-[4/3]"
                className="rounded-none border-0 border-b border-line"
              />
              <blockquote className="flex-1 p-6">
                <p className="text-sm leading-relaxed text-ink">&ldquo;{review.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="flex items-center justify-between border-t border-line px-6 py-4">
                <span className="text-sm font-extrabold text-ink">{review.name}</span>
                <span className="text-xs font-bold uppercase tracking-wide text-gold">
                  via {review.source}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-xs text-stone">
          Have you tried Nutra-4? Send us your photo on{" "}
          <a href="#contact" className="font-bold text-gold-deep underline">
            WhatsApp or Instagram
          </a>{" "}
          and we may feature it here.
        </p>
      </div>
    </section>
  );
}
