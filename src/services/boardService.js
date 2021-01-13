import { boards } from '../data/mondayDB.json'

export const boardService = {
    query,
    save,
    remove,
    getById
}


function query() {
    return boards
}

function save() {
    // socketService.emit('borardUpdate')

}

function remove() {

}

function getById(boardId) {
    return boards.find(board => board._id === boardId)
}