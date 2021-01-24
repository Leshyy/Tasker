import { utilService } from './utilService';


export const taskService = {
    add,
    remove,
    createTask,
    update,
    getById,
    addComment,
    removeMember,
    addMember
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

function getById(task, group) {
    const foundTask = group.tasks.find(currTask => currTask.id === task.id);
    return foundTask;
}

function addComment(comment, task) {
    const updatedTask = { ...task }
    comment.createdAt = Date.now()
    updatedTask.comments.unshift(comment)
    return updatedTask

}

function removeMember(task, memberId) {
    const updatedTask = { ...task }
    updatedTask.members = updatedTask.members.filter(member => member._id !== memberId)
    return updatedTask
}

function addMember(task, member) {
    const updatedTask = { ...task }
    updatedTask.members.push(member)
    return updatedTask
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
        members: [],
        status: "New",
        priority: "Low",
        note: "Add notes to your task",
        dateRange: {
            startDate: new Date(),
            endDate: new Date()
        },
        comments: [
            {
                by: {
                    _id: "600877404b50bc8b342c1732",
                    fullname: "Tair Bitan",
                    imgUrl: "https://res.cloudinary.com/tair/image/upload/v1611221821/Tair_xdnngm.jpg"
                },
                text: "This is the task's chat",
                createdAt: Date.now()
            },
            {
                by: {
                    _id: "600877404b50bc8b342c1733",
                    fullname: "Amit Weiss",
                    imgUrl: "https://res.cloudinary.com/tair/image/upload/v1611221821/Amit_cgtbfo.jpg"
                },
                text: "Here you can send comments, thoughts and updates about the task",
                createdAt: Date.now()
            },
            {
                by: {
                    _id: "600877404b50bc8b342c1734",
                    fullname: "Tamir Leshetz",
                    imgUrl: "https://res.cloudinary.com/tair/image/upload/v1611221822/Tamir_zzn3m4.jpg"
                },
                text: "Or simply chat with the task members",
                createdAt: Date.now()
            }
        ]
    }
}