import React, { useEffect, useState } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { useTimer } from '../context/TimerContext';
import { TimerMode } from '../types';
import { CircularProgress } from './CircularProgress';

export function Timer() {
  const { state, dispatch } = useTimer();
  const [progress, setProgress] = useState(100);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const modes: { label: string; value: TimerMode; icon: string }[] = [
    { label: 'Pomodoro', value: 'pomodoro', icon: '🍅' },
    { label: 'Short Break', value: 'shortBreak', icon: '☕' },
    { label: 'Long Break', value: 'longBreak', icon: '🌴' },
  ];

  const getTotalTime = (mode: TimerMode) => {
    switch (mode) {
      case 'pomodoro':
        return 25 * 60;
      case 'shortBreak':
        return 5 * 60;
      case 'longBreak':
        return 15 * 60;
    }
  };

  useEffect(() => {
    const totalTime = getTotalTime(state.mode);
    setProgress((state.timeLeft / totalTime) * 100);
  }, [state.timeLeft, state.mode]);

  return (
    <div className="space-y-6">
      <div className="flex space-x-4 bg-white/10 p-2 rounded-full backdrop-blur-sm">
        {modes.map((mode) => (
          <button
            key={mode.value}
            onClick={() => dispatch({ type: 'SET_MODE', payload: mode.value })}
            className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
              state.mode === mode.value
                ? 'bg-white text-red-600 shadow-lg scale-105'
                : 'text-white/80 hover:bg-white/10'
            }`}
          >
            <span>{mode.icon}</span>
            {mode.label}
          </button>
        ))}
      </div>

      <div className="relative flex justify-center">
        <CircularProgress progress={progress} size={300} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-6xl font-bold text-white mb-4 font-mono">
            {formatTime(state.timeLeft)}
          </div>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => dispatch({ type: state.isRunning ? 'STOP' : 'START' })}
              className={`group flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 ${
                state.isRunning
                  ? 'bg-white/20 hover:bg-white/30'
                  : 'bg-white text-red-600 hover:bg-white/90'
              }`}
            >
              {state.isRunning ? (
                <Pause className="w-6 h-6 text-white" />
              ) : (
                <Play className="w-6 h-6 ml-1" />
              )}
            </button>
            {!state.isRunning && (
              <button
                onClick={() => dispatch({ type: 'RESET' })}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <RotateCcw className="w-5 h-5 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
        <span className="text-white/80">Completed Today:</span>
        <div className="flex gap-1">
          {[...Array(state.completedPomodoros)].map((_, i) => (
            <span key={i} role="img" aria-label="completed pomodoro">
              🍅
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}