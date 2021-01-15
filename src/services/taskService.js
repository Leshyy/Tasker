import { utilService } from './utilService';


export const taskService = {
    add,
    remove,
    createTask,
    update,
    getTypesToRender
}

function add(txt, board, groupId) {
    const newTask = createTask(txt)
    const updatedBoard = { ...board }
    updatedBoard.groups.find(currGroup => currGroup.id === groupId)
        .tasks.push(newTask)
    return updatedBoard


}

function update(task, board, groupId) {
    const updatedBoard = { ...board }
    const currGroup = updatedBoard.groups.find(currGroup => currGroup.id === groupId)
    const taskIdx = currGroup.tasks.findIndex(currTask => currTask.id === task.id)
    currGroup.tasks[taskIdx] = { ...task }
    return updatedBoard

}

function remove(id, board, group) {
    const filteredTasks = group.tasks.filter(task => task.id !== id)
    const updatedBoard = { ...board }
    updatedBoard.groups.find(currGroup => currGroup.id === group.id)
        .tasks = [...filteredTasks]
    return updatedBoard
}
function getTypesToRender(type) {
    return (type === 'status') ? ['Completed', 'Working on it', 'Stuck'] : ['Low', 'Medium', 'High']
}
function createTask(txt) {
    return {
        id: utilService.makeId(),
        name: txt,
        tags: [
            "demo",
            "instructions",
            "tutorial"
        ],
        createdAt: 1606733763732,
        updatedAt: 1606733763732,
        members: [
            {
                _id: "2uk35b",
                fullname: "Tair Bitan",
                imgUrl: ""
            },
            {
                _id: "2h3j5b",
                fullname: "Amit Weiss",
                imgUrl: ""
            },
            {
                _id: "kj346",
                fullname: "Tamir Leshetz",
                imgUrl: ""
            }
        ],
        status: "New",
        priority: "High",
        note: "Add notes to your task",
        dueDate: 1606820163000,
        comments: [
            {
                by: {
                    _id: "2uk35b",
                    fullname: "Tair Bitan",
                    imgUrl: ""
                },
                text: "This is the task's chat"
            },
            {
                by: {
                    _id: "2h3j5b",
                    fullname: "Amit Weiss",
                    imgUrl: ""
                },
                text: "Here you can send comments, thoughts and updates about the task"
            },
            {
                by: {
                    _id: "kj346",
                    fullname: "Tamir Leshetz",
                    imgUrl: ""
                },
                text: "Or simply chat with the task members"
            }
        ]
    }
}