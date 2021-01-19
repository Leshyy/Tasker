import { groupService } from './groupService'
import { httpService } from './httpService'
import { utilService } from './utilService'

const BASE_URL = 'board'

export const boardService = {
    query,
    remove,
    getById,
    add,
    update,
    updateBoards
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
    const board = _createBoard(boardName)
    const savedBoard = await httpService.post(BASE_URL, board)
    return savedBoard
}

function updateBoards(updatedBoard, boards) {
    return boards.map(board => {
        if (board._id === updatedBoard._id) {
            return updatedBoard
        }
        return board
    })
}


function _createBoard(boardName) {
    return {
        _id: utilService.makeId(),
        name: boardName,
        status: [
            {
                txt: "Completed",
                color: "#00ca71"
            },
            {
                txt: "Working on it",
                color: "#fdab3d"
            },
            {
                txt: "Stuck",
                color: "#e44258"
            },
            {
                txt: "New",
                color: "gray"
            }
        ],
        priority: [
            {
                txt: "Low",
                color: "#00ca71"
            },
            {
                txt: "Medium",
                color: "#fdab3d"
            },
            {
                txt: "High",
                color: "#e44258"
            }
        ],
        creator: {
            _id: "2uk35b",
            fullname: "Tair Bitan",
            imgUrl: ""
        },
        groups: [
            groupService.createGroup('group1'),
            groupService.createGroup('group2'),
            groupService.createGroup('group3')
        ],
        createdAt: Date.now(),
        desc: 'edit your new board...'
    }
}

