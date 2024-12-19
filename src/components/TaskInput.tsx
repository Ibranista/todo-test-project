import { useState, ChangeEvent, FormEvent } from 'react';

interface TaskInputProps {
  onAddTask: (description: string, dueDate: string) => void;
}

function TaskInput({ onAddTask }: TaskInputProps) {
  const [description, setDescription] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;
    onAddTask(description, dueDate);
    setDescription('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
      <input
        type="text"
        placeholder="Enter new task"
        className="border border-gray-300 p-2 rounded"
        value={description}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
      />
      <input
        type="date"
        className="border border-gray-300 p-2 rounded"
        value={dueDate}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setDueDate(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskInput;
