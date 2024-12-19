import TaskItem from './TaskItem';

interface Task {
  id: number;
  description: string;
  completed: boolean;
  dueDate: string | null;
}

interface TaskListProps {
  tasks: Task[];
  onToggleCompletion: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

function TaskList({ tasks, onToggleCompletion, onDeleteTask }: TaskListProps) {
  return (
    <ul className="space-y-2">
      {tasks.length === 0 && (
        <p className="text-gray-500">No tasks available.</p>
      )}
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleCompletion={onToggleCompletion}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
