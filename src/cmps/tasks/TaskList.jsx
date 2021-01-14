import { TaskPreview } from "./TaskPreview";

export function TaskList({ tasks, group, onRemoveTask, onUpdateTask }) {
    return (
        <div>
            {tasks.map(task => {
                return <TaskPreview
                    key={task.id}
                    task={task}
                    group={group}
                    onRemoveTask={onRemoveTask}
                    onUpdateTask={onUpdateTask}
                />
            })}
        </div>
    )
}
