import React from 'react';
import { Timer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function PageLayout({ children, title }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-700 transition-colors">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
      
      <header className="border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
          >
            <Timer className="w-6 h-6" />
            <span className="font-bold text-lg">Pomodoro Timer</span>
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
          <h1 className="text-3xl font-bold mb-8 text-white">{title}</h1>
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}