import { boardService } from "../../services/boardService"
import { socketService } from "../../services/socketService"

export function loadBoards() {
    return async dispatch => {
        try {
            const boards = await boardService.query()
            dispatch({ type: 'SET_BOARDS', boards })
        } catch (err) {
            console.log('Board Actions: err in loadUsers', err)
        } finally {
        }
    }
}

export function loadBoard(boardId) {
    return async dispatch => {
        try {
            const board = await boardService.getById(boardId)
            dispatch({ type: 'SET_BOARD', board });
        } catch (err) {
            console.log('Board Actions: err in loadUsers', err)
        } finally {
        }
    }
}

export function updateBoard(board) {
    return async dispatch => {
        try {
            dispatch({ type: 'SET_BOARD', board })
            socketService.emit('board update')
            boardService.update(board)
        } catch (err) {
            console.log('Board Actions: err in loadUsers', err)
        } finally {
        }
    }
}

export function addBoard(boardName) {
    return async dispatch => {
        try {
            const board = await boardService.add(boardName)
            dispatch({ type: 'ADD_BOARD', board })
            dispatch({ type: 'SET_BOARD', board })
            socketService.emit('boards update', 'added board')
        } catch (err) {
            console.log('Board Actions: err in loadUsers', err)
        } finally {
        }
    }
}

export function updateBoards(board, boards) {
    return dispatch => {
        try {
            const updatedBoards = boardService.updateBoards(board, boards)
            dispatch({ type: 'SET_BOARDS', boards: updatedBoards })
        } catch (err) {
            console.log('Board Actions: err in loadUsers', err)
        } finally {
        }
    }
}

export function removeBoard(boardId) {
    return async dispatch => {
        try {
            dispatch({ type: 'REMOVE_BOARD', boardId })
            await boardService.remove(boardId)
            socketService.emit('boards update', 'removed board')
        } catch (err) {
            console.log('Board Actions: err in loadUsers', err)
        } finally {
        }
    }
}

