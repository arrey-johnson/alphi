import { galleryImages } from "@/data/galleryImages";
import { GalleryGrid } from "@/components/GalleryGrid";

export const metadata = {
  title: "Gallery | ALPHY'S SERVICES LTD",
  description: "See our cleaning work — residential, commercial, deep cleans and more.",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-sky/10 via-white to-brand-pink/10 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-brand-sky/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-brand-sky">
            Our work
          </span>
          <h1 className="mt-4 section-heading">Gallery</h1>
          <p className="section-subheading max-w-2xl mx-auto">
            A glimpse of the spaces we clean — from homes to offices. Filter by category or click any image to enlarge.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <GalleryGrid images={galleryImages} />
      </section>
    </div>
  );
}
