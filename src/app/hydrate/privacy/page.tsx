import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Hydrate",
  description:
    "Privacy policy for the Hydrate iOS hydration tracking app by David Arnold.",
};

export default function HydratePrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4">
        Hydrate &mdash; Privacy Policy
      </h1>
      <p className="text-text-muted mb-12">Effective Date: March 8, 2026</p>

      <div className="space-y-10 text-text-secondary leading-relaxed">
        {/* Introduction */}
        <section>
          <p>
            Hydrate is a hydration tracking app for iOS built by David Arnold.
            Your privacy matters. This policy explains what data Hydrate
            collects, how it&apos;s used, and what choices you have.
          </p>
        </section>

        {/* The Short Version */}
        <section className="p-6 sm:p-8 rounded-lg border border-accent-primary/20 bg-accent-primary/5">
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            The Short Version
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-accent-primary mt-1">•</span>
              <span>
                <strong className="text-text-primary">
                  All your data stays on your device.
                </strong>{" "}
                Hydrate does not have a server. Your hydration logs, profile,
                and preferences are stored locally using on-device storage.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-primary mt-1">•</span>
              <span>
                <strong className="text-text-primary">
                  No accounts. No sign-ups. No tracking.
                </strong>{" "}
                There are no user accounts, no analytics SDKs, no advertising
                identifiers, and no behavioral tracking of any kind.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-primary mt-1">•</span>
              <span>
                <strong className="text-text-primary">
                  Two optional network requests.
                </strong>{" "}
                Barcode scanning and food search contact third-party APIs.
                These are the only network calls the app makes.
              </span>
            </li>
          </ul>
        </section>

        {/* Data Stored on Your Device */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Data Stored on Your Device
          </h2>
          <p className="mb-4">
            Hydrate stores the following information locally on your iPhone.
            None of this data is transmitted to us or any third party:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-accent-primary mt-1">•</span>
              <span>
                <strong className="text-text-primary">Profile information</strong>{" "}
                &mdash; weight, height, activity level, and wake/sleep schedule
                (used to calculate your daily hydration goal)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-primary mt-1">•</span>
              <span>
                <strong className="text-text-primary">Hydration logs</strong>{" "}
                &mdash; beverages and foods you log, including timestamps and
                volumes
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-primary mt-1">•</span>
              <span>
                <strong className="text-text-primary">Progression data</strong>{" "}
                &mdash; XP, level, streaks, and achievement progress
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-primary mt-1">•</span>
              <span>
                <strong className="text-text-primary">App preferences</strong>{" "}
                &mdash; unit system, theme, notification settings, and reminder
                schedule
              </span>
            </li>
          </ul>
          <p className="mt-4">
            You can export all of your data as a JSON file at any time from
            Settings. You can also delete all data from Settings using the
            &ldquo;Reset All Data&rdquo; option.
          </p>
        </section>

        {/* Network Requests */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Network Requests
          </h2>
          <p className="mb-4">
            Hydrate makes network requests only when you use these two
            features:
          </p>
          <div className="space-y-6">
            <div className="p-5 rounded-lg border border-text-muted/10 bg-bg-secondary/30">
              <h3 className="font-semibold text-text-primary mb-2">
                Barcode Scanning
              </h3>
              <p>
                When you scan a beverage barcode, Hydrate sends the barcode
                number to the{" "}
                <a
                  href="https://world.openfoodfacts.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-primary hover:text-accent-secondary transition-colors"
                >
                  Open Food Facts
                </a>{" "}
                API to look up product information. Only the barcode number is
                sent. No personal data is included in this request.
              </p>
            </div>
            <div className="p-5 rounded-lg border border-text-muted/10 bg-bg-secondary/30">
              <h3 className="font-semibold text-text-primary mb-2">
                Food Search
              </h3>
              <p>
                When you search for a food item, Hydrate queries the{" "}
                <a
                  href="https://fdc.nal.usda.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-primary hover:text-accent-secondary transition-colors"
                >
                  USDA FoodData Central
                </a>{" "}
                API to retrieve nutritional data. Only the search term is sent.
                No personal data is included in this request.
              </p>
            </div>
          </div>
          <p className="mt-4">
            Both of these APIs are public databases. Hydrate does not control
            their privacy practices. You can review their respective privacy
            policies at the links above.
          </p>
        </section>

        {/* Camera */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Camera Access
          </h2>
          <p>
            Hydrate requests camera access solely to scan beverage barcodes.
            The camera feed is processed on-device in real time. No images or
            video are stored, recorded, or transmitted. You can deny or revoke
            camera permission at any time in iOS Settings without affecting
            other app functionality.
          </p>
        </section>

        {/* Notifications */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Notifications
          </h2>
          <p>
            Hydrate can send local notifications to remind you to drink water.
            These notifications are scheduled entirely on your device &mdash;
            no push notification server is involved. You can enable, disable,
            or customize reminders in Settings.
          </p>
        </section>

        {/* In-App Purchases */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            In-App Purchases
          </h2>
          <p>
            Hydrate offers a premium upgrade through Apple&apos;s In-App
            Purchase system. All payment processing is handled by Apple. We do
            not receive or store any payment information, credit card numbers,
            or Apple ID details.
          </p>
        </section>

        {/* Children */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Children&apos;s Privacy
          </h2>
          <p>
            Hydrate is not directed at children under 13. We do not knowingly
            collect personal information from children. Since all data is
            stored locally on the device and never transmitted, there is no
            collection of children&apos;s data by us under any circumstances.
          </p>
        </section>

        {/* Changes */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Changes to This Policy
          </h2>
          <p>
            If this policy changes, the updated version will be posted at this
            URL with a new effective date. Since Hydrate does not collect email
            addresses or contact information, we cannot notify you directly of
            changes.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Contact
          </h2>
          <p>
            If you have questions about this privacy policy or the Hydrate app,
            contact David Arnold at{" "}
            <a
              href="mailto:david.christopher.arnold@gmail.com"
              className="text-accent-primary hover:text-accent-secondary transition-colors"
            >
              david.christopher.arnold@gmail.com
            </a>
            .
          </p>
        </section>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-text-muted/10">
        <p className="text-sm text-text-muted text-center">
          This privacy policy applies to the Hydrate iOS app, version 1.0 and
          later.
        </p>
      </div>
    </div>
  );
}
