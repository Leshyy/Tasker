import { taskService } from './taskService';
import { utilService } from './utilService';


export const groupService = {
    add,
    remove,
    update
}

function add(name, board) {
    const updatedBoard = { ...board }
    const group = _createGroup(name)
    updatedBoard.groups.push(group)
    return updatedBoard
}
function remove(groupId, board) {
    const updatedBoard = { ...board }
    const updatedGroups = updatedBoard.groups.filter(group => group.id !== groupId)
    updatedBoard.groups = [...updatedGroups]
    return updatedBoard
}

function update(group, board) {
    const updatedBoard = { ...board }
    let groupIdx = updatedBoard.groups.findIndex(currGroup => currGroup.id === group.id)
    updatedBoard.groups[groupIdx] = { ...group }
    return updatedBoard
}


function _createGroup(name) {
    return {
        id: utilService.makeId(),
        name,
        createdAt: 1606733763732,
        updatedAt: 1606733763732,
        tasks: [
            taskService.createTask('task1'),
            taskService.createTask('task2'),
            taskService.createTask('task3')
        ]
    }
}