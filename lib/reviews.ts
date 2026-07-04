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
    id: "review1",
    name: "Verified customer",
    quote:
    "The customer noticed a significant increase in appetite and healthy weight gain, reaching 58kg while following the recommended routine.",
    source: "WhatsApp",
  },
  {
    id: "review2",
    name: "Verified customer",
    quote:
    "A happy customer shared positive feedback after seeing noticeable results and thanked the Nutra-4 team for helping achieve healthy weight gain.",
    source: "Instagram",
  },
  {
    id: "review3",
    name: "Verified customer",
    quote:
    "Used Nutra-4 for 24 days and gained 5kg. The customer was so satisfied that they asked if they could continue with another box.",
    source: "WhatsApp",
  },
];
