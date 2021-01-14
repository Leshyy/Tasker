import { taskService } from './taskService';
import { utilService } from './utilService';


export const groupService = {
    add,
    remove
}

function add(name, board) {
    const group = _createGroup(name)
    board.groups.push(group)
    return board
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