function TaskItem({ task, onToggleCompletion, onDeleteTask }) {
  return (
    <li className="flex items-center justify-between bg-gray-50 p-2 rounded">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleCompletion(task.id)}
          className="h-5 w-5"
        />
        <span
          className={`${task.completed ? 'line-through text-gray-400' : ''}`}
        >
          {task.description}
        </span>
        {task.dueDate && (
          <span className="text-sm text-gray-500">Due: {task.dueDate}</span>
        )}
      </div>
      <button
        onClick={() => onDeleteTask(task.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
