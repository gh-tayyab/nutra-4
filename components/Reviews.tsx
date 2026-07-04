import Image from "next/image";
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
    <div
      key={review.id}
      className="overflow-hidden rounded-2xl border border-line bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* WhatsApp Screenshot */}
      <div className="overflow-hidden">
        <Image
          src={`/images/reviews/${review.id}.jpeg`}
          alt={`${review.name} WhatsApp Review`}
          width={400}
          height={700}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Customer Info */}
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-ink">{review.name}</h3>

          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
            WhatsApp
          </span>
        </div>

        <p className="mt-3 text-sm text-stone leading-relaxed">
          {review.quote}
        </p>
      </div>
    </div>
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
