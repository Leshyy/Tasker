import { GroupPreview } from './GroupPreview'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export function GroupList({ groups, onAddTask, onRemoveTask, onRemoveGroup, handleDragEnd, onUpdateTask }) {


    return (
        <section className="group-list">
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="groups">
                    {(provided) => (
                        <div className="groups" {...provided.droppableProps} ref={provided.innerRef}>
                            {groups.map((group, index) => {
                                return (
                                    <Draggable key={group.id} draggableId={group.id} index={index}>
                                        {(provided) => (
                                            <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                <GroupPreview
                                                    onRemoveTask={onRemoveTask}
                                                    onAddTask={onAddTask}
                                                    group={group}
                                                    onRemoveGroup={onRemoveGroup}
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
            </DragDropContext>
        </section>
    )
}

