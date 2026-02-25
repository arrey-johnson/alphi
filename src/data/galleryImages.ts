/**
 * All gallery images: hero and services.
 * Used on the Gallery page.
 */
export type GalleryImage = {
  src: string;
  alt: string;
  category: "hero" | "services";
};

export const galleryImages: GalleryImage[] = [
  // Hero
  { src: "/hero/2150520639.jpg", alt: "Ready for a spotless space", category: "hero" },
  { src: "/hero/2149345516.jpg", alt: "Residential and commercial cleaning", category: "hero" },
  { src: "/hero/2148112715.jpg", alt: "Welcome to Alphy's Services", category: "hero" },
  { src: "/hero/2149345525.jpg", alt: "Fresh, organised, stress-free", category: "hero" },
  // Services
  { src: "/services/20668.jpg", alt: "House cleaning", category: "services" },
  { src: "/services/2148112715.jpg", alt: "Office and commercial cleaning", category: "services" },
  { src: "/services/2149345523.jpg", alt: "Deep cleaning", category: "services" },
  { src: "/services/2149345535.jpg", alt: "Move-in / Move-out cleaning", category: "services" },
  { src: "/services/2150359024.jpg", alt: "One-off and recurring cleaning", category: "services" },
  { src: "/services/2150520639.jpg", alt: "Customised cleaning plans", category: "services" },
  { src: "/services/2151340149.jpg", alt: "Upholstery cleaning", category: "services" },
  { src: "/services/21780.jpg", alt: "Carpet cleaning", category: "services" },
];
