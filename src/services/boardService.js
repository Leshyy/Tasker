import { httpService } from './httpService'
import { utilService } from './utilService'

const BASE_URL = 'board'

export const boardService = {
    query,
    remove,
    getById,
    add,
    update
}


async function query() {
    const boards = await httpService.get(BASE_URL)
    return boards
}

async function update(board) {
    await httpService.put(BASE_URL + '/' + board._id, board)
}

async function remove(boardId) {
    await httpService.delete(BASE_URL + '/' + boardId)
}

async function getById(boardId) {
    return await httpService.get(BASE_URL + '/' + boardId)
}

async function add(boardName) {
    console.log(boardName, 'board');
    const board = _createBoard(boardName)
    const savedBoard = await httpService.post(BASE_URL, board)
    return savedBoard
}

function _createBoard(boardName) {
    return {
        _id: utilService.makeId(),
        name: boardName,
        groups: [
            {
                id: utilService.makeId(),
                name: "Group Title",
                createdAt: Date.now(),
                color: utilService.getRandomColor(),
                tasks: [
                    {
                        id: utilService.makeId(),
                        name: 'item 1',
                        status: "Completed",
                        priority: "High",
                        note: "Add notes to your task",
                        dueDate: 1606820163000,
                    },
                    {
                        id: utilService.makeId(),
                        name: 'item 2',
                        status: "Completed",
                        priority: "High",
                        note: "Add notes to your task",
                        dueDate: 1606820163000,
                    },
                ]
            },
        ],
        createdAt: Date.now(),
        desc: 'edit your new board...'
    }
}

