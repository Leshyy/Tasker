import { TaskPreview } from "./TaskPreview";
import { Droppable, Draggable } from 'react-beautiful-dnd';


export function TaskList({ tasks, group, onRemoveTask, onUpdateTask }) {
    return (
        <section>
            <Droppable droppableId={group.id} type="task">
                {(provided) => (
                    <div className="tasks" {...provided.droppableProps} ref={provided.innerRef}>
                        {tasks.map((task, index) => {
                            return (
                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                    {(provided) => (
                                        <div {...provided.draggableProps} ref={provided.innerRef}>
                                            <TaskPreview
                                                key={task.id}
                                                task={task}
                                                group={group}
                                                onRemoveTask={onRemoveTask}
                                                onUpdateTask={onUpdateTask}
                                                provided={provided}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            )
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </section >
    )
}
