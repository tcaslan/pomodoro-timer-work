import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TimerProvider } from './context/TimerContext';
import { Timer } from './components/Timer';
import { TaskList } from './components/TaskList';
import { Info } from './components/Info';
import { Footer } from './components/Footer';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Contact } from './pages/Contact';

export function App() {
  return (
    <Router>
      <TimerProvider>
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-700 transition-colors p-4 md:p-8">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
              
              <div className="max-w-5xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8">
                  <div className="grid md:grid-cols-[1fr,380px] gap-8">
                    <div className="space-y-8">
                      <Timer />
                      <TaskList />
                    </div>
                    
                    <div className="border-t md:border-l md:border-t-0 border-white/10 pt-8 md:pt-0 md:pl-8">
                      <Info />
                    </div>
                  </div>
                </div>
                <Footer />
              </div>
            </div>
          } />
          <Route path="/privacy" element={
            <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-700">
              <Privacy />
            </div>
          } />
          <Route path="/terms" element={
            <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-700">
              <Terms />
            </div>
          } />
          <Route path="/contact" element={
            <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-700">
              <Contact />
            </div>
          } />
        </Routes>
      </TimerProvider>
    </Router>
  );
}