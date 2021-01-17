import { TaskToWeek } from "./TaskToWeek";

export function ListMyWeek({ boards }) {
    return (
        <div>
            {boards.map(board => {
                return <TaskToWeek key={board._id} board={board} />
            })}
        </div>
    )
}
