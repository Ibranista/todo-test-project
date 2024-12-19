import { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput.tsx';
import TaskList from './components/TaskList.tsx';
import FilterButtons from './components/FilterButtons.tsx';

interface Task {
  id: number;
  description: string;
  completed: boolean;
  dueDate: string | null;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const addTask = (description: string, dueDate: string | null) => {
    const newTask: Task = {
      id: Date.now(),
      description,
      completed: false,
      dueDate: dueDate || null,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleCompletion = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (!a.dueDate && !b.dueDate) return 0;
    if (!a.dueDate) return 1;
    if (!b.dueDate) return -1;

    return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
  });

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-md mx-auto bg-white rounded shadow p-6">
        <h1 className="text-2xl font-bold mb-4">My To-Do List</h1>
        <TaskInput onAddTask={addTask} />
        <FilterButtons filter={filter} setFilter={setFilter} />
        <TaskList
          tasks={sortedTasks}
          onToggleCompletion={toggleCompletion}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
