import { boardService } from "../../services/boardService"

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
            const boardToSend = await boardService.getById(boardId)
            dispatch({ type: 'SET_BOARD', board: boardToSend });
            return boardToSend;
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
        } catch (err) {
            console.log('Board Actions: err in loadUsers', err)
        } finally {
        }
    }
}

export function updateBoard(board) {
    return dispatch => {
        try {
            boardService.update(board)
            dispatch({ type: 'SET_BOARD', board })
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
            await boardService.remove(boardId)
            dispatch({ type: 'REMOVE_BOARD', boardId })
        } catch (err) {
            console.log('Board Actions: err in loadUsers', err)
        } finally {
        }
    }
}

