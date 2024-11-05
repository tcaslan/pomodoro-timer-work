import React from 'react';
import { Timer, Coffee, Brain, Star, Bell, Zap } from 'lucide-react';

export function InfoPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 text-white">
      <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Boost Your Productivity with Pomodoro Timer
        </h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Timer className="w-8 h-8" />
              What is the Pomodoro Technique?
            </h2>
            <p className="text-white/80 leading-relaxed text-lg">
              The Pomodoro Technique is a time management method developed by
              Francesco Cirillo in the late 1980s. It uses a timer to break work
              into focused 25-minute intervals, separated by short breaks. These
              intervals are known as "pomodoros," named after the tomato-shaped
              kitchen timer Cirillo used as a university student.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Coffee className="w-8 h-8" />
              How to use the Pomodoro Timer
            </h2>
            <ol className="space-y-4 text-lg text-white/80">
              <li className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">1</div>
                Add tasks to work on today
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">2</div>
                Set the pomodoro timer (25 minutes)
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">3</div>
                Focus on the task until the timer rings
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">4</div>
                Take a short break (5 minutes)
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">5</div>
                Every 4 pomodoros, take a longer break (15-30 minutes)
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Star className="w-8 h-8" />
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Bell className="w-6 h-6 text-white/80 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Customizable Timer</h3>
                  <p className="text-white/80">Adjust work and break durations to match your workflow</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-white/80 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Task Management</h3>
                  <p className="text-white/80">Keep track of your tasks and progress</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Brain className="w-8 h-8" />
              Benefits
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Increases focus and concentration
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Reduces mental fatigue
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Improves task estimation
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Creates a sense of accomplishment
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Helps maintain motivation
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Enhances work-life balance
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}