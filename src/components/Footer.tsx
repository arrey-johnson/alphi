import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const footerLinks = {
  company: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/reviews", label: "Reviews" },
    { href: "/faqs", label: "FAQs" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/cookie-policy", label: "Cookie Policy" },
  ],
};

const socialLinks = [
  { href: "https://www.instagram.com/alphysservices", label: "Instagram", icon: "instagram" },
  { href: "https://www.facebook.com/alphysservicesltd", label: "Facebook", icon: "facebook" },
  { href: "https://share.google/nAQK3t3ucsNqiZdbX", label: "Google Business", icon: "google" },
];

/** Soap foam bubbles – positions and sizes for floating effect */
const bubbles = [
  { size: 12, left: "5%", top: "15%", delay: "0s" },
  { size: 8, left: "12%", top: "45%", delay: "0.5s" },
  { size: 14, left: "22%", top: "25%", delay: "1s" },
  { size: 10, left: "35%", top: "60%", delay: "0.2s" },
  { size: 6, left: "48%", top: "20%", delay: "1.5s" },
  { size: 11, left: "55%", top: "50%", delay: "0.8s" },
  { size: 9, left: "68%", top: "30%", delay: "0.3s" },
  { size: 7, left: "78%", top: "55%", delay: "1.2s" },
  { size: 13, left: "88%", top: "18%", delay: "0.6s" },
  { size: 8, left: "95%", top: "42%", delay: "1s" },
];

function SocialIcon({ icon }: { icon: string }) {
  const className = "h-5 w-5";
  if (icon === "instagram") {
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    );
  }
  if (icon === "facebook") {
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    );
  }
  if (icon === "google") {
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.827-2.827C16.343 1.117 14.22 0 12.48 0 5.867 0 .307 5.583.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.085-1.334-.165-1.92H12.48z" />
      </svg>
    );
  }
  return null;
}

export function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-300">
      {/* Wave top edge */}
      <div className="relative h-16 w-full sm:h-20 md:h-24" aria-hidden>
        <svg
          className="absolute bottom-0 left-0 h-full w-full"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60C240 100 480 20 720 60C960 100 1200 20 1440 60V120H0V60Z"
            fill="#111827"
          />
          <path
            d="M0 75C360 35 720 95 1080 75C1260 65 1380 85 1440 75V120H0V75Z"
            fill="#1f2937"
          />
          <path
            d="M0 90C300 50 600 110 900 90C1200 70 1320 90 1440 85V120H0V90Z"
            fill="#111827"
          />
        </svg>
      </div>

      {/* Floating soap bubbles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {bubbles.map((b, i) => (
          <span
            key={i}
            className="animate-float-bubble absolute rounded-full bg-white/20 shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.3)]"
            style={{
              width: b.size,
              height: b.size,
              left: b.left,
              top: b.top,
              animationDelay: b.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white">ALPHY&apos;S SERVICES LTD</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Professional residential and commercial cleaning. Wolverhampton &amp; surrounding areas.
            </p>
            <a
              href="https://wa.me/447852145002"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-500"
            >
              <WhatsAppIcon className="h-5 w-5" aria-hidden />
              Chat on WhatsApp
            </a>
          </div>

          <div>
            <h4 className="font-semibold text-white">Quick links</h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>
                <a href="tel:01902239420" className="flex items-center gap-2 transition hover:text-white">
                  <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  01902 239420
                </a>
              </li>
              <li>
                <a href="tel:07852145002" className="flex items-center gap-2 transition hover:text-white">
                  <WhatsAppIcon className="h-4 w-4 shrink-0" aria-hidden />
                  07852 145002
                </a>
              </li>
              <li>
                <a href="mailto:info@alphysservicesltd.com" className="flex items-center gap-2 transition hover:text-white">
                  <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@alphysservicesltd.com
                </a>
              </li>
              <li className="flex gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>421 Bilston Road, Wolverhampton WV2 2NN</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Follow us</h4>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition hover:bg-brand-sky hover:text-white"
                  aria-label={link.label}
                >
                  <SocialIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Alphy&apos;s Services Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-500 transition hover:text-gray-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
