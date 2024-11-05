import React from 'react';
import { Timer, Coffee, Brain } from 'lucide-react';

export function Info() {
  return (
    <div className="text-white space-y-8">
      <h1 className="text-3xl font-bold mb-4">
        Pomodoro Timer Work - Online Pomodoro Timer
      </h1>

      <section>
        <p className="text-2xl font-semibold mb-4">Tasks</p>
        <p className="text-white/80 text-sm leading-relaxed mb-4">
          Add and manage your tasks to stay focused during each Pomodoro
          session.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Coffee className="w-6 h-6" />
          How to Use the Timer
        </h2>
        <p className="text-white/80 text-sm leading-relaxed mb-4">
          Follow these simple steps to maximize your productivity:
        </p>
        <ol className="space-y-2 text-sm text-white/80 mb-8">
          <li className="flex items-center gap-2">
            <div className="flex h-5 w-5 text-xs items-center justify-center rounded-full bg-white/20">
              1
            </div>
            Add tasks to work on
          </li>
          <li className="flex items-center gap-2">
            <div className="flex h-5 w-5 text-xs items-center justify-center rounded-full bg-white/20">
              2
            </div>
            Start the 25-minute timer
          </li>
          <li className="flex items-center gap-2">
            <div className="flex h-5 w-5 text-xs items-center justify-center rounded-full bg-white/20">
              3
            </div>
            Focus until the timer rings
          </li>
          <li className="flex items-center gap-2">
            <div className="flex h-5 w-5 text-xs items-center justify-center rounded-full bg-white/20">
              4
            </div>
            Take a short break (5 min)
          </li>
          <li className="flex items-center gap-2">
            <div className="flex h-5 w-5 text-xs items-center justify-center rounded-full bg-white/20">
              5
            </div>
            After 4 pomodoros, take a longer break (15 min)
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6" />
          Key Benefits
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-2">Focus Enhancement</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Increases concentration and helps maintain sustained attention
              during work sessions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Mental Freshness</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Regular breaks reduce mental fatigue and keep your mind sharp
              throughout the day.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Better Planning</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Improves task estimation and helps break down large projects into
              manageable chunks.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Achievement Tracking</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Creates a clear sense of accomplishment as you complete each
              Pomodoro session.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
