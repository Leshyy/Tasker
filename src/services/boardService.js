import { httpService } from './httpService'

const BASE_URL = 'board'

export const boardService = {
    query,
    save,
    remove,
    getById
}


async function query() {
    const boards = await httpService.get(BASE_URL)
    return boards
}

function save() {
    // socketService.emit('borardUpdate')

}

async function remove(boardId) {
    await httpService.delete(BASE_URL + '/' + boardId)
}

async function getById(boardId) {
    return await httpService.get(BASE_URL + '/' + boardId)
}

