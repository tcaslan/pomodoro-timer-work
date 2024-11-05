import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { TimerMode, TimerState } from '../types';

const POMODORO_TIME = 25 * 60;
const SHORT_BREAK_TIME = 5 * 60;
const LONG_BREAK_TIME = 15 * 60;

type TimerAction =
  | { type: 'START' }
  | { type: 'STOP' }
  | { type: 'RESET' }
  | { type: 'TICK' }
  | { type: 'SET_MODE'; payload: TimerMode };

const initialState: TimerState = {
  mode: 'pomodoro',
  timeLeft: POMODORO_TIME,
  isRunning: false,
  completedPomodoros: 0,
};

const TimerContext = createContext<{
  state: TimerState;
  dispatch: React.Dispatch<TimerAction>;
} | null>(null);

function timerReducer(state: TimerState, action: TimerAction): TimerState {
  switch (action.type) {
    case 'START':
      return { ...state, isRunning: true };
    case 'STOP':
      return { ...state, isRunning: false };
    case 'RESET':
      return {
        ...state,
        timeLeft: getTimeForMode(state.mode),
        isRunning: false,
      };
    case 'TICK':
      if (state.timeLeft <= 0) {
        const newMode = getNextMode(state.mode);
        return {
          ...state,
          mode: newMode,
          timeLeft: getTimeForMode(newMode),
          isRunning: false,
          completedPomodoros:
            state.mode === 'pomodoro'
              ? state.completedPomodoros + 1
              : state.completedPomodoros,
        };
      }
      return { ...state, timeLeft: state.timeLeft - 1 };
    case 'SET_MODE':
      return {
        ...state,
        mode: action.payload,
        timeLeft: getTimeForMode(action.payload),
        isRunning: false,
      };
    default:
      return state;
  }
}

function getTimeForMode(mode: TimerMode): number {
  switch (mode) {
    case 'pomodoro':
      return POMODORO_TIME;
    case 'shortBreak':
      return SHORT_BREAK_TIME;
    case 'longBreak':
      return LONG_BREAK_TIME;
  }
}

function getNextMode(currentMode: TimerMode): TimerMode {
  switch (currentMode) {
    case 'pomodoro':
      return 'shortBreak';
    case 'shortBreak':
    case 'longBreak':
      return 'pomodoro';
  }
}

export function TimerProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(timerReducer, initialState);

  useEffect(() => {
    let interval: number;
    if (state.isRunning) {
      interval = setInterval(() => dispatch({ type: 'TICK' }), 1000);
    }
    return () => clearInterval(interval);
  }, [state.isRunning]);

  return (
    <TimerContext.Provider value={{ state, dispatch }}>
      {children}
    </TimerContext.Provider>
  );
}

export function useTimer() {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
}