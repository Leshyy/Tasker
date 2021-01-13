import { boards } from '../data/boardDB.json'

var gBoards = boards

export const boardService = {
    query,
    save,
    remove,
    getById
}


function query() {
    return gBoards
}

function save() {
    // socketService.emit('borardUpdate')

}

function remove(boardId) {
    gBoards = gBoards.filter(board => board._id !== boardId)
}

function getById(boardId) {
    return gBoards.find(board => board._id === boardId)
}

