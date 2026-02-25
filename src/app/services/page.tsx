import Image from "next/image";
import Link from "next/link";
import { ServiceDetailCard } from "@/components/ServiceDetailCard";
import { mainServices } from "@/data/mainServices";

const standardCleaning = {
  title: "Standard Cleaning",
  description:
    "Designed to keep your home or office consistently clean, fresh and organised. It focuses on high traffic areas and commonly used surfaces to maintain a healthy, tidy environment. This service is ideal for weekly, bi-weekly or monthly upkeep and helps prevent dirt and build-up from accumulating over time.",
  sections: [
    {
      name: "Kitchen",
      items: [
        "Wiping and sanitizing countertops",
        "Cleaning exterior surfaces of appliances",
        "Scrubbing sink and polishing fixtures",
        "Wiping cabinet fronts",
        "Cleaning stovetop surface",
        "Taking out trash",
        "Sweeping and mopping floors",
      ],
    },
    {
      name: "Bathrooms",
      items: [
        "Cleaning and disinfecting toilets",
        "Scrubbing sinks and countertops",
        "Cleaning mirrors",
        "Wiping down showers and tubs (surface clean)",
        "Emptying trash",
        "Sweeping and mopping floors",
      ],
    },
    {
      name: "Living Areas and Bedrooms",
      items: [
        "Dusting furniture and surfaces",
        "Wiping light switches and high-touch areas",
        "Making beds (if requested)",
        "Sweeping and mopping hard floors",
        "General tidying",
      ],
    },
    {
      name: "Throughout Space",
      items: [
        "Emptying trash bins",
        "Removing cobwebs",
        "Spot cleaning glass and mirrors",
        "Floor care throughout the property",
      ],
    },
  ],
};

const deepCleaning = {
  title: "Deep Cleaning",
  description:
    "Detailed, top-to-bottom cleaning service that goes far beyond regular maintenance cleaning. It targets built-up dirt, grime, bacteria, and hidden dust in areas that aren't cleaned on a daily or weekly basis.",
  sections: [
    {
      name: "Kitchen",
      items: [
        "Scrubbing and sanitizing countertops",
        "Cleaning inside and outside of appliances (microwave, oven exterior, refrigerator exterior)",
        "Degreasing stovetop and backsplash",
        "Cleaning cabinet fronts",
        "Scrubbing sink and polishing fixtures",
        "Cleaning baseboards and corners",
        "Removing built-up grease and grime",
      ],
    },
    {
      name: "Bathrooms",
      items: [
        "Scrubbing tile and grout",
        "Removing soap scum and hard water stains",
        "Disinfecting toilet (inside and out)",
        "Deep cleaning shower/tub",
        "Cleaning mirrors and fixtures",
        "Sanitizing high touch areas",
        "Cleaning vents and baseboards",
      ],
    },
    {
      name: "Living Areas and Bedrooms",
      items: [
        "Dusting all surfaces, including hard to reach areas",
        "Cleaning baseboards and trim",
        "Wiping doors, door frames and light switches",
        "Vacuuming under furniture (when accessible)",
        "Cleaning window sills and tracks",
        "Removing cobwebs",
      ],
    },
    {
      name: "Throughout the Home or Office",
      items: [
        "Detailed dusting of vents and ceiling fans",
        "Spot cleaning walls",
        "Thorough floor cleaning (vacuuming and mopping)",
        "Trash removal",
        "Sanitizing frequently touched areas",
      ],
    },
  ],
};

const moveInOut = {
  title: "Move-in / Move-out Cleaning",
  description:
    "Detailed top-to-bottom service designed to prepare a property for its next chapter. Whether someone is settling into a new space or leaving one behind, this service ensures the home is spotless, sanitized and ready for the next occupant.",
  sections: [
    {
      name: "Kitchen",
      items: [
        "Cleaning inside and outside of cabinets and drawers",
        "Cleaning inside refrigerator and oven (upon request)",
        "Degreasing stovetop and backsplash",
        "Sanitizing countertops and sinks",
        "Polishing fixtures",
        "Cleaning baseboards and corners",
      ],
    },
    {
      name: "Bathrooms",
      items: [
        "Deep scrubbing showers, tubs, tile and grout",
        "Disinfecting toilets inside and out",
        "Cleaning inside cabinets and drawers",
        "Removing soap scum and hard water buildup",
        "Polishing mirrors and fixtures",
      ],
    },
    {
      name: "Living Areas and Bedrooms",
      items: [
        "Cleaning inside closets",
        "Wiping doors, door frames and trim",
        "Cleaning baseboards and window sills",
        "Spot cleaning walls",
        "Vacuuming and mopping floors",
      ],
    },
    {
      name: "Throughout the Property",
      items: [
        "Cleaning interior windows (as requested)",
        "Thorough floor cleaning",
        "Trash removal",
      ],
    },
  ],
};

const upholsteryCleaning = {
  title: "Upholstery Cleaning",
  description: "We clean sofas, armchairs and recliners, dining room chairs, ottomans, headboards, office chairs and waiting room seating.",
};

/** Map service name to anchor id for scroll */
const serviceToAnchor: Record<string, string> = {
  "House cleaning": "standard-cleaning",
  "Office and commercial cleaning": "standard-cleaning",
  "Deep cleaning": "deep-cleaning",
  "Move-in / Move-out": "move-in-out",
  "One-off & recurring": "standard-cleaning",
  "Customised plans": "standard-cleaning",
  "Upholstery cleaning": "upholstery",
  "Carpet cleaning": "standard-cleaning",
};

export const metadata = {
  title: "Services | ALPHY'S SERVICES LTD",
  description: "Standard cleaning, deep cleaning, move-in/move-out and upholstery cleaning in Wolverhampton.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero with background image */}
      <section className="relative min-h-[36vh] overflow-hidden sm:min-h-[40vh]">
        <div className="absolute inset-0">
          <Image
            src="/hero/2148112715.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div
          className="absolute inset-0 bg-black/55 mix-blend-multiply"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" aria-hidden />
        <div className="relative z-10 flex min-h-[36vh] flex-col items-center justify-center px-4 py-14 sm:min-h-[40vh] sm:py-16">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
              What we offer
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl">
              Our Services
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/95 drop-shadow-md">
              Professional cleaning tailored to your needs. All services can be one-off or recurring.
            </p>
          </div>
        </div>
      </section>

      {/* Service overview grid */}
      <section className="relative bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl font-semibold text-gray-900 sm:text-2xl">
            Main services
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-gray-600">
            Click a service to jump to full details below.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {mainServices.map((service) => {
              const anchor = serviceToAnchor[service.name];
              return (
                <li key={service.name}>
                  <a
                    href={anchor ? `#${anchor}` : "#standard-cleaning"}
                    className="group relative block overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm transition-all duration-300 hover:border-brand-sky/40 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-sky focus:ring-offset-2"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt=""
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                        aria-hidden
                      />
                      <h3 className="absolute bottom-0 left-0 right-0 p-4 text-base font-semibold text-white drop-shadow-md sm:text-lg">
                        {service.name}
                      </h3>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Detailed service blocks - 2-column card layout */}
      <section id="services-detail" className="scroll-mt-24 border-t border-gray-100 bg-gray-50/50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Service details
            </h2>
            <p className="mt-2 text-gray-600">
              Expand each area to see what&apos;s included.
            </p>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <ServiceDetailCard
              id="standard-cleaning"
              title={standardCleaning.title}
              description={standardCleaning.description}
              sections={standardCleaning.sections}
              accent="sky"
            />
            <ServiceDetailCard
              id="deep-cleaning"
              title={deepCleaning.title}
              description={deepCleaning.description}
              sections={deepCleaning.sections}
              accent="pink"
            />
            <ServiceDetailCard
              id="move-in-out"
              title={moveInOut.title}
              description={moveInOut.description}
              sections={moveInOut.sections}
              accent="green"
            />
            <ServiceDetailCard
              id="upholstery"
              title={upholsteryCleaning.title}
              description={upholsteryCleaning.description}
              accent="sky"
            />
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
