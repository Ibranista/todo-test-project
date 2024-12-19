import { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import FilterButtons from './components/FilterButtons';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const addTask = (description, dueDate) => {
    const newTask = {
      id: Date.now(),
      description,
      completed: false,
      dueDate: dueDate || null,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleCompletion = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (!a.dueDate && !b.dueDate) return 0;
    if (!a.dueDate) return 1;
    if (!b.dueDate) return -1;
    return new Date(a.dueDate) - new Date(b.dueDate);
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
