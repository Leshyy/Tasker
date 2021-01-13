import { boardService } from "../../services/boardService"

export function loadBoards() {
    return async dispatch => {
        try {
            const boards = await boardService.query()
            dispatch({ type: 'SET_BOARDS', boards })
        } catch (err) {
            console.log('Board Actions: err in loadUsers', err)
        } finally {
            console.log('lielllliiii');
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
    // const board = await boardService.getById(boardId)
    // dispatch({ type: 'SET_BOARD', board })
}

// export async function removeBoard(boardId) {
//     try {
//         await boardService.remove(boardId)
//         console.log('deleted');
//     } catch (err) {
//         console.log('Board Actions: err in loadUsers', err)
//     } finally {
//         console.log('lielllliiii');
//     }
// }

export function removeBoard(boardId) {
    return async dispatch => {
        try {
            await boardService.remove(boardId)
            console.log('deleted');
        } catch (err) {
            console.log('Board Actions: err in loadUsers', err)
        } finally {
            console.log('lielllliiii');
            // dispatch({ type: 'LOADING_DONE' })
        }
    }
}

export function updateBoard() {
    // board = boardService.save(board)
    // dispatch({type: 'SET_BOARD', board})
}

