import { GroupPreview } from './GroupPreview'
// import { useState } from 'react'
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export function GroupList({ groups, onAddTask, onRemoveTask, onUpdateTask, onRemoveGroup }) {
    return (
        <section className="group-list">
            {groups.map(group => {
                return <GroupPreview
                    key={group.id}
                    onRemoveTask={onRemoveTask}
                    onAddTask={onAddTask}
                    onUpdateTask={onUpdateTask}
                    group={group}
                    onRemoveGroup={onRemoveGroup}
                />
            })}
        </section>
    )
}

