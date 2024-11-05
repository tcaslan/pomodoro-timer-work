import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function Terms() {
  return (
    <PageLayout title="Terms of Service">
      <div className="space-y-6 text-white/80">
        <section>
          <h2 className="text-xl font-semibold mb-4 text-white">1. Terms</h2>
          <p className="leading-relaxed">
            By accessing this website, you agree to be bound by these terms of service and agree that you are responsible for compliance with any applicable local laws.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-white">2. Use License</h2>
          <p className="leading-relaxed">
            Permission is granted to temporarily use this website for personal, non-commercial transitory viewing only.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-white">3. Disclaimer</h2>
          <p className="leading-relaxed">
            The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-white">4. Limitations</h2>
          <p className="leading-relaxed">
            In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}