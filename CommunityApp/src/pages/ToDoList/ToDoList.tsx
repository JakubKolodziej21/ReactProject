import { useContext, useEffect, useState } from "react"
import { userContext } from "../../components/AuthRequired"
import { getUserToDoList } from "../../services/api";
import { ToDoTask } from "../../components/ToDoTask/ToDoTask";
import "./ToDoList.css";
import { ToDoTaskType } from "../../types";

export default function ToDoList()
{
    const user = useContext(userContext);
    const [todoList, setTodoList] = useState<ToDoTaskType[]>([]);

    useEffect(() => {
        const getToDoList = async () => {
            try {
                if(!user?.id) throw new Error("No user id set!");
                const todoData = await getUserToDoList(user?.id);
                setTodoList(todoData);
            } catch (error) {
                console.log(error);
            }
        }
        getToDoList();
    }, []);

    const handleToggleCompletion = (taskId: number) => {
        const updatedTaskList = todoList.map((task: ToDoTaskType) =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTodoList(updatedTaskList);
      };

    const completedTasks = todoList.filter((task: ToDoTaskType) => task.completed);
    const incompletedTasks = todoList.filter((task: ToDoTaskType) => !task.completed);

    return (
        <>
            <div className="task-list">
                <div className="task-group">
                    <h2>Completed Tasks</h2>
                    {completedTasks.map((task: ToDoTaskType) => (
                        <ToDoTask
                            key={task.id}
                            userId={task.userId}
                            id={task.id}
                            title={task.title}
                            completed={task.completed}
                            onToggleCompletion={handleToggleCompletion}
                        />
                    ))}
                </div>
                <div className="task-group">
                    <h2>Incompleted Tasks</h2>
                    {incompletedTasks.map((task: ToDoTaskType) => (
                        <ToDoTask
                            key={task.id}
                            userId={task.userId}
                            id={task.id}
                            title={task.title}
                            completed={task.completed}
                            onToggleCompletion={handleToggleCompletion}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}