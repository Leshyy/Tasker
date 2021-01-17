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
                                    {(provided, snapshot) => (
                                        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} isDragging={snapshot.isDragging}>
                                            <TaskPreview
                                                key={task.id}
                                                task={task}
                                                group={group}
                                                onRemoveTask={onRemoveTask}
                                                onUpdateTask={onUpdateTask}
                                                isDragging={snapshot.isDragging}
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
