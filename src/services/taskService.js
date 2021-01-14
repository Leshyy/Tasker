import { boardService } from './boardService'
import { utilService } from './utilService';


export const taskService = {
    add,
    remove
}

function add(txt) {
    return _createTask(txt)
}
function remove(id, group) {
    return group.tasks.filter(task => task.id !== id)
}

function _createTask(txt) {
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