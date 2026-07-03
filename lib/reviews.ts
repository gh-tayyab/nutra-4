// Real customer reviews only — no stock/fake reviewer photos.
//
// To add a new review once you've collected a WhatsApp/Instagram screenshot
// with the customer's permission:
//   1. Save the screenshot to /public/images/reviews/ (e.g. review-04.jpg)
//   2. Add a new object below with a unique `id` and the `photo` path
//   3. Swap the AssetSlot in components/Reviews.tsx for a real <Image> once
//      you have at least one real photo to test with
export type Review = {
  id: string;
  name: string;
  quote: string;
  photo?: string; // path in /public/images/reviews/, once collected
  source: "WhatsApp" | "Instagram";
};

export const reviews: Review[] = [
  {
    id: "review-01",
    name: "Verified customer",
    quote:
      "Placeholder — replace with a real WhatsApp/Instagram screenshot and quote once collected.",
    source: "WhatsApp",
  },
  {
    id: "review-02",
    name: "Verified customer",
    quote:
      "Placeholder — replace with a real WhatsApp/Instagram screenshot and quote once collected.",
    source: "Instagram",
  },
  {
    id: "review-03",
    name: "Verified customer",
    quote:
      "Placeholder — replace with a real WhatsApp/Instagram screenshot and quote once collected.",
    source: "WhatsApp",
  },
];
