import { siteConfig } from "@/lib/site-config";
import Image from "next/image";

const trustBadges = [
  "100% Original Formula",
  "Cash on Delivery",
  "Free Delivery Nationwide",
];

const stats = [
  {
    number: "1200+",
    label: "Happy Customers",
  },
  {
    number: "4.9★",
    label: "Customer Rating",
  },
  {
    number: "60 Days",
    label: "Visible Results",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] hero-overlay">
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#D8B35B]/10 blur-[140px]" />

      <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-[#D8B35B]/10 blur-[120px]" />

      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#D8B35B]/10 blur-[140px]" />

      <div className="container-content relative z-10 grid gap-20 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        {/* LEFT */}

        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D8B35B]/25 bg-[#D8B35B]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#E6C46D]">
            <span className="h-2 w-2 rounded-full bg-[#D8B35B]" />
            Premium Weight Gainer Pakistan
          </span>

          <h1 className="mt-8 max-w-2xl text-5xl font-black leading-[1.02] tracking-tight text-white lg:text-7xl">
            Go From
            <span className="gold-text block mt-2">Skinny To Strong</span>
            Naturally.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
            Nutra-4 is a premium
            <strong className="text-[#D8B35B]">
              {" "}
              Weight Gainer in Pakistan
            </strong>{" "}
            designed for people who struggle to gain healthy weight. Packed with
            high-quality calories, protein, and essential nutrients to support
            muscle growth, healthy weight gain, and daily energy.
          </p>

          {/* CTA */}

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#order"
              className="shimmer inline-flex h-14 items-center justify-center rounded-full gold-gradient px-10 text-sm font-extrabold uppercase tracking-[0.18em] text-black shadow-[0_15px_40px_rgba(216,179,91,.35)] transition-all duration-300 hover:scale-105"
            >
              Order Now
            </a>

            <a
              href="#reviews"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 text-sm font-bold uppercase tracking-[0.15em] text-white backdrop-blur-xl transition hover:border-[#D8B35B] hover:text-[#D8B35B]"
            >
              Real Results
            </a>
          </div>

          {/* Price */}

          <div className="mt-10 flex items-center gap-5">
            <div className="gold-shadow flex h-28 w-28 flex-col items-center justify-center rounded-full border border-[#D8B35B]/40 bg-[#171717]">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D8B35B]">
                ONLY
              </span>

              <span className="mt-1 text-xl font-black text-white">
                {siteConfig.price}
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                Healthy Weight Gain Formula
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-7 text-white/60">
                Ideal for skinny men & women looking to gain healthy weight,
                increase muscle mass and improve strength naturally.
              </p>
            </div>
          </div>

          {/* Trust Badges */}

          <div className="mt-12 flex flex-wrap gap-4">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8L6.2 11L13 4"
                    stroke="#D8B35B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="text-xs font-bold uppercase tracking-wide text-white/80">
                  {badge}
                </span>
              </div>
            ))}
          </div>

          {/* Stats */}

          <div className="mt-14 grid grid-cols-3 gap-6">
            {stats.map((item) => (
              <div
                key={item.number}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <h3 className="gold-text text-3xl font-black">{item.number}</h3>

                <p className="mt-2 text-sm text-white/60">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE STARTS HERE */}
        {/* ================= RIGHT SIDE ================= */}

        <div className="relative flex items-center justify-center overflow-visible lg:pl-16 lg:pb-64">
          {/* Main Glow */}

          <div className="absolute h-[620px] w-[620px] rounded-full bg-[#D8B35B]/10 blur-[120px]" />

          <div className="absolute h-[420px] w-[420px] rounded-full border border-[#D8B35B]/15" />

          <div className="absolute h-[520px] w-[520px] rounded-full border border-white/5" />

          {/* Rating Card */}

          <div className="absolute -left-8 top-20 z-30 hidden w-56 rounded-3xl border border-white/10 bg-black/55 p-5 backdrop-blur-2xl lg:block">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D8B35B] text-xl">
                ⭐
              </div>

              <div className="lg:pr-4">
                <h3 className="text-3xl font-black text-white">4.9</h3>

                <p className="text-sm text-white/60">Customer Rating</p>
              </div>
            </div>

            <div className="mt-4 flex text-[#D8B35B]">★★★★★</div>
          </div>

          {/* Muscle Card */}

          <div className="absolute right-0 top-12 z-30 hidden w-60 rounded-3xl border border-white/10 bg-black/60 p-5 backdrop-blur-2xl lg:block">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D8B35B]/20">
                💪
              </div>

              <div>
                <h4 className="font-bold text-white">Muscle Growth</h4>

                <p className="mt-1 text-sm text-white/60">
                  High Protein Formula
                </p>
              </div>
            </div>
          </div>

          {/* Weight Gain Card */}

          {/* <div className="absolute bottom-12 left-6 z-30 hidden w-60 rounded-3xl border border-white/10 bg-black/60 p-5 backdrop-blur-2xl lg:block">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D8B35B]/20">
                ⚡
              </div>

              <div>
                <h4 className="font-bold text-white">Healthy Weight Gain</h4>

                <p className="mt-1 text-sm text-white/60">Balanced Calories</p>
              </div>
            </div>
          </div> */}

          {/* Product Circle */}

          <div className="relative flex h-[760px] w-full max-w-[640px] items-center justify-center">
            <div className="absolute h-[500px] w-[420px] rounded-full bg-gradient-to-br from-[#D8B35B]/30 to-transparent blur-3xl" />

            <div className="absolute h-[570px] w-[470px] rounded-full border border-[#D8B35B]/20" />

            <div className="absolute h-[640px] w-[540px] rounded-full border border-white/5" />

            {/* Floating Product */}
            <Image
              src="/images/product1.png"
              alt="Nutra-4 Weight Gainer"
              width={620}
              height={760}
              priority
              className="
      relative
      z-40
      w-full
      max-w-[560px]
      object-contain
      drop-shadow-[0_50px_90px_rgba(0,0,0,.8)]
      animate-floating
  "
            />

            {/* Ingredient Card */}

            {/* <div className="absolute right-0 top-44 rotate-90 lg:-right-28 lg:-top-10 rounded-3xl border border-white/10 bg-black/60 px-5 py-4 backdrop-blur-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D8B35B]">
                PREMIUM FORMULA
              </p>

              <h4 className="mt-2 text-lg font-black text-white">
                Protein + Healthy Calories
              </h4>
            </div> */}

            {/* Energy Card */}

            {/* <div className="absolute -left-8 bottom-40 z-30 rounded-3xl border border-white/10 bg-black/60 px-5 py-4 backdrop-blur-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D8B35B]">
                DAILY ENERGY
              </p>

              <h4 className="mt-2 text-lg font-black text-white">
                More Strength ⚡
              </h4>
            </div> */}

            {/* Bottom Card */}

            <div className="absolute -bottom-6 left-1/2 z-30 w-[90%] -translate-x-1/2 rounded-[28px] border border-white/10 bg-black/70 p-6 backdrop-blur-2xl">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <h3 className="gold-text text-2xl font-black">25g</h3>

                  <p className="mt-2 text-xs uppercase tracking-wider text-white/60">
                    Protein
                  </p>
                </div>

                <div>
                  <h3 className="gold-text text-2xl font-black">650+</h3>

                  <p className="mt-2 text-xs uppercase tracking-wider text-white/60">
                    Calories
                  </p>
                </div>

                <div>
                  <h3 className="gold-text text-2xl font-black">100%</h3>

                  <p className="mt-2 text-xs uppercase tracking-wider text-white/60">
                    Original
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
