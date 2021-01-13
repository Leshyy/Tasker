export function loadBoards() {

}
export function updateBoard() {
    board = boardService.save(board)
    // dispatch({type: 'SET_BOARD', board})
}

export function loadBoard() {
    board = boardService.getById(27)
    dispatch({ type: 'SET_BOARD', board })
    socketService.on('boardUpdate', updatedBoard => {
        dispatch({ type: 'SET_BOARD', board })
    })

}

export function removeBoard() {

}