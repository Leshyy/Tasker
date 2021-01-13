import { TaskPreview } from "./TaskPreview";

export function TaskList({ tasks }) {
    console.log('tasks is:', tasks);
    return (
        <div>
            {tasks.map(task => {
                return <TaskPreview key={task.id} task={task} />
            })}

        </div>
    )
}
