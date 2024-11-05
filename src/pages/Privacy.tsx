import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function Privacy() {
  return (
    <PageLayout title="Privacy Policy">
      <div className="space-y-6 text-white/80">
        <section>
          <h2 className="text-xl font-semibold mb-4 text-white">Information We Collect</h2>
          <p className="leading-relaxed">
            We do not collect any personal information. All task data and timer settings are stored locally in your browser.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-white">Cookies</h2>
          <p className="leading-relaxed">
            We do not use cookies or any other tracking technologies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-white">Local Storage</h2>
          <p className="leading-relaxed">
            Your tasks and timer preferences are stored in your browser's local storage. This data never leaves your device.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-white">Third-Party Services</h2>
          <p className="leading-relaxed">
            We do not integrate with any third-party services or analytics platforms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-white">Updates to This Policy</h2>
          <p className="leading-relaxed">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}