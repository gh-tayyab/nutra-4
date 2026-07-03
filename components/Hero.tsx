import { siteConfig } from "@/lib/site-config";
import AssetSlot from "./AssetSlot";
import Image from "next/image";

const trustBadges = [
  "100% Original Formula",
  "Cash on Delivery",
  "Free Delivery Nationwide",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-content grid gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="order-1 lg:order-1">
          <span className="eyebrow">Weight Gainer · Since 2023</span>
          <h1 className="mt-4 text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Go from skinny to strong — visibly, in weeks.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-stone sm:text-lg">
            Nutra-4 is a single-formula weight gainer built for people who
            struggle to put on weight no matter how much they eat. One product,
            done properly.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="foil-seal h-28 w-28 flex-shrink-0 flex-col text-ink sm:h-24 sm:w-24">
              <span className="text-[10px] font-extrabold uppercase tracking-wider">
                Only
              </span>
              <span className="text-2xl font-extrabold leading-none md:text-xl sm:text-xl ml-4">
                {siteConfig.price}
              </span>
            </div>

            <a href="#order" className="btn-primary whitespace-nowrap">
              Order Now
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2">
            {trustBadges.map((badge) => (
              <li
                key={badge}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-stone"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 7.5L5.2 10.5L12 3"
                    stroke="#A9781E"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {badge}
              </li>
            ))}
          </ul>
        </div>

        <div className="order-2 lg:order-2">
          <div className="relative mx-auto w-full max-w-md h-[400px]">
            <div
              className="absolute -inset-6 -z-10 rounded-full"
              aria-hidden="true"
            />

            <Image
              src="/images/product1.png"
              alt="Hero Product Shot"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
