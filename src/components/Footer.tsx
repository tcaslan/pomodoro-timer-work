import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="mt-8 border-t border-white/10 pt-8">
      <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
        <Link to="/privacy" className="hover:text-white transition-colors">
          Privacy Policy
        </Link>
        <Link to="/terms" className="hover:text-white transition-colors">
          Terms of Service
        </Link>
        <Link to="/contact" className="hover:text-white transition-colors">
          Contact
        </Link>
        <a 
          href="https://github.com/tcaslan" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-white transition-colors"
        >
          GitHub
        </a>
      </div>
      <div className="text-center mt-4 text-sm text-white/40">
        © {new Date().getFullYear()} Pomodoro Timer. All rights reserved.
      </div>
    </footer>
  );
}