import { boardService } from "../../services/boardService"

export function loadBoards() {
    return async dispatch => {
        try {
            const boards = await boardService.query()
            dispatch({ type: 'SET_BOARDS', boards })
        } catch (err) {
            console.log('Board Actions: err in loadUsers', err)
        } finally {
            // dispatch({ type: 'LOADING_DONE' })
        }
    }
}

export function loadBoard(boardId) {
    return async dispatch => {
        try {
            const board = await boardService.getById(boardId)
            dispatch({ type: 'SET_BOARD', board })
        } catch (err) {
            console.log('Board Actions: err in loadUsers', err)
        } finally {
            // dispatch({ type: 'LOADING_DONE' })
        }
    }
}

export function removeBoard(boardId) {
    return async dispatch => {
        try {
            await boardService.remove(boardId)
        } catch (err) {
            console.log('Board Actions: err in loadUsers', err)
        } finally {
            // dispatch({ type: 'LOADING_DONE' })
        }
    }
}

export function addBoard(boardName) {
    return async dispatch => {
        try {
            const savedBoard = await boardService.add(boardName)
            dispatch({ type: 'SET_BOARD', board: savedBoard })
        } catch (err) {
            console.log('Board Actions: err in loadUsers', err)
        } finally {
            // dispatch({ type: 'LOADING_DONE' })
        }
    }

}

