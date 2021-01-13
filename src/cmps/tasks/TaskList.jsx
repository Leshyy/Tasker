import { TaskPreview } from "./TaskPreview";

export function TaskList({ task }) {
    console.log('group is:', task);
    return (
        <div>
            <TaskPreview />
        </div>
    )
}
