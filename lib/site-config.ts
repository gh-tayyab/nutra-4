export const siteConfig = {
  name: "Nutra-4",
  domain: "nutra-4.com",
  url: "https://nutra-4.com",
  tagline: "Healthy weight gain, backed by real results.",
  description:
    "Nutra-4 is a weight gainer supplement made for the skinny-to-strong journey. Rs. 3,000 a box, free home delivery across Pakistan, and Cash on Delivery available.",
  price: "Rs. 3,000",
  priceNumeric: 3000,
  currency: "PKR",
  phones: [
    { label: "0310-0111154", href: "tel:+923100111154" },
    { label: "0317-1295122", href: "tel:+923171295122" },
  ],
  whatsapp: {
    number: "923100111154",
    href: "https://wa.me/923100111154?text=Hi%20Nutra-4%2C%20I%27d%20like%20to%20know%20more%20about%20the%20weight%20gainer.",
  },
  email: "info@nutra-4.com",
  address: "Karachi, Pakistan",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61550084624108",
    instagram: "https://www.instagram.com/nutra.4",
  },
  mapEmbedSrc:
    "https://maps.google.com/maps?q=Karachi%2C%20Pakistan&t=m&z=10&output=embed&iwloc=near",
};

export type SiteConfig = typeof siteConfig;
