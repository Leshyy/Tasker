import { TaskPreview } from "./TaskPreview";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


export function TaskList({ tasks, group, onRemoveTask, onUpdateTask, handleDragEnd }) {
    return (
        <section>
            {/* <DragDropContext onDragEnd={handleDragEnd}> */}
                <Droppable droppableId={group.id} type="task">
                    {(provided) => (
                        <div className="tasks" {...provided.droppableProps} ref={provided.innerRef}>
                            {tasks.map((task, index) => {
                                return (
                                    <Draggable key={task.id} draggableId={task.id} index={index}>
                                        {(provided) => (
                                            <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                <TaskPreview
                                                    key={task.id}
                                                    task={task}
                                                    group={group}
                                                    onRemoveTask={onRemoveTask}
                                                    onUpdateTask={onUpdateTask}
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
            {/* </DragDropContext> */}
        </section >
    )
}
