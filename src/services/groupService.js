import { taskService } from './taskService';
import { utilService } from './utilService';


export const groupService = {
    add,
    remove
}

function add(name, board) {
    const updatedBoard = { ...board }
    const group = _createGroup(name)
    updatedBoard.groups.push(group)
    return updatedBoard
}
function remove(groupId, board) {
    const updatedGroups = board.groups.filter(group => group.id !== groupId)
    board.groups = [...updatedGroups]
    return board
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