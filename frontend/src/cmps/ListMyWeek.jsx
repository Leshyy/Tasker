import { TaskToWeek } from "./TaskToWeek";

export function ListMyWeek({ boards, username }) {
    return (
        <div>
            {boards.map(board => {
                return <TaskToWeek key={board._id} board={board} username={username} />
            })}
        </div>
    )
}
