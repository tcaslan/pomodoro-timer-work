import React, { useState } from 'react';
import { Plus, Check, Trash, Clock } from 'lucide-react';
import { Task } from '../types';
import { useTimer } from '../context/TimerContext';

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const { state } = useTimer();

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now().toString(),
          title: newTask.trim(),
          completed: false,
          pomodoros: 0,
        },
      ]);
      setNewTask('');
    }
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const incrementPomodoros = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, pomodoros: task.pomodoros + 1 } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <div className="bg-white/5 p-4 rounded-2xl">
        <p className="text-lg font-semibold text-white mb-4">Tasks</p>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
            placeholder="What are you working on?"
            className="flex-1 px-4 py-2 bg-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
          <button
            onClick={addTask}
            className="p-2 bg-white text-red-600 rounded-xl hover:bg-white/90 transition-colors"
          >
            <Plus className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-2">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between p-3 bg-white/5 rounded-xl group hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3 flex-1">
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                    task.completed
                      ? 'bg-white border-white'
                      : 'border-white/50 hover:border-white'
                  }`}
                >
                  {task.completed && <Check className="w-3 h-3 text-red-600" />}
                </button>
                <span
                  className={`text-white text-sm flex-1 ${
                    task.completed ? 'line-through opacity-50' : ''
                  }`}
                >
                  {task.title}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => incrementPomodoros(task.id)}
                    className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Clock className="w-3 h-3 text-white/80" />
                    <span className="text-white/80 text-sm">
                      {task.pomodoros}
                    </span>
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="p-1 hover:bg-white/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Trash className="w-3 h-3 text-white/80" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {tasks.length === 0 && (
            <div className="text-center text-white/50 py-6 text-sm">
              No tasks yet. Add a task to get started!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
