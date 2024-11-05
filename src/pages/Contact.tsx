import React from 'react';
import { Mail, Github, Twitter } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';

export function Contact() {
  return (
    <PageLayout title="Contact Us">
      <div className="space-y-8">
        <p className="text-white/80 leading-relaxed">
          We'd love to hear from you! Whether you have a question about features, need help with the timer, or just want to share your feedback, you can reach us through any of the following channels:
        </p>

        <div className="space-y-4">
          <a 
            href="mailto:contact@pomodorotimer.com" 
            className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
          >
            <Mail className="w-5 h-5 text-white/60" />
            <div>
              <div className="font-medium text-white">Email</div>
              <div className="text-sm text-white/60">contact@pomodorotimer.com</div>
            </div>
          </a>

          <a 
            href="https://github.com/tcaslan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
          >
            <Github className="w-5 h-5 text-white/60" />
            <div>
              <div className="font-medium text-white">GitHub</div>
              <div className="text-sm text-white/60">Report issues or contribute</div>
            </div>
          </a>

          <a 
            href="https://twitter.com/pomodorotimer" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
          >
            <Twitter className="w-5 h-5 text-white/60" />
            <div>
              <div className="font-medium text-white">Twitter</div>
              <div className="text-sm text-white/60">Follow us for updates</div>
            </div>
          </a>
        </div>
      </div>
    </PageLayout>
  );
}