import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | ALPHY'S SERVICES LTD",
  description: "Cookie policy for Alphy's Services Ltd website.",
};

export default function CookiePolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="section-heading">Cookie Policy</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: February 2025</p>

      <div className="prose prose-gray mt-8 max-w-none space-y-6 text-gray-600">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">1. What are cookies?</h2>
          <p>
            Cookies are small text files that are placed on your device (computer, tablet or
            mobile) when you visit a website. They are widely used to make websites work more
            efficiently and to provide information to the site owner.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">2. Who we are</h2>
          <p>
            Alphy&apos;s Services Ltd operates the website alphysservicesltd.com. Our registered address
            is 421 Bilston Road, Wolverhampton WV2 2NN. Email: info@alphysservicesltd.com.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">3. How we use cookies</h2>
          <p>We may use cookies and similar technologies to:</p>
          <ul className="list-disc pl-6">
            <li>Ensure the website functions correctly (e.g. remembering your preferences)</li>
            <li>Understand how visitors use our site (e.g. analytics) to improve it</li>
            <li>Comply with legal or regulatory requirements</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">4. Types of cookies we may use</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Strictly necessary:</strong> Required for the website to work (e.g. security,
              load balancing). These do not require your consent under UK law.
            </li>
            <li>
              <strong>Functional:</strong> Remember choices you make (e.g. language, region) to give
              you a better experience.
            </li>
            <li>
              <strong>Analytics/performance:</strong> Help us see how visitors use the site (e.g.
              page views, traffic). We may use services that set such cookies; we will only do so in
              line with our Privacy Policy and your preferences where required.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">5. Managing cookies</h2>
          <p>
            You can control and delete cookies through your browser settings. You can also set your
            browser to refuse cookies. Note that blocking certain cookies may affect how the
            website works.
          </p>
          <p className="mt-2">
            For more information on how to manage cookies, visit{" "}
            <a
              href="https://www.aboutcookies.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-sky hover:underline"
            >
              aboutcookies.org
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">6. Changes</h2>
          <p>
            We may update this cookie policy from time to time. The &quot;Last updated&quot; date at the top
            will be revised when changes are made.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">7. Contact</h2>
          <p>
            For questions about our use of cookies, contact us at info@alphysservicesltd.com or see
            our <Link href="/privacy-policy" className="text-brand-sky hover:underline">Privacy Policy</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
