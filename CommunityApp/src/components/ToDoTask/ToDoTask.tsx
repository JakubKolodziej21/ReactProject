import { ToDoTaskType } from '../../types';
import './ToDoTask.css';

type ToDoTaskProps = ToDoTaskType & {
    onToggleCompletion: (id: number) => void;
}

export const ToDoTask = ({ userId, id, title, completed, onToggleCompletion }: ToDoTaskProps) => {
    return (
      <div className={`task ${completed ? 'completed' : ''}`}>
        <div className="task-header">
          <span className="task-id">Task ID: {id}</span>
          <span className="task-user">User ID: {userId}</span>
        </div>
        <div className="task-title">{title}</div>
        <div onClick={() => onToggleCompletion(id)} className={`task-status ${completed ? "completed" : "incompleted"}`}>
            {completed ? 'Mark as Incompleted' : 'Mark as completed'}
        </div>
      </div>
    );
  };
  