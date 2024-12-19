import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleCompletion, onDeleteTask }) {
  return (
    <ul className="space-y-2">
      {tasks?.length === 0 && (
        <p className="text-gray-500">No tasks available.</p>
      )}
      {tasks?.map((task) => (
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
