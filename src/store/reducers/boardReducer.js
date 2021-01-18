const initialState = {
    activeBoard: null,
    boards: []
}

export function boardReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_BOARDS':
            return { ...state, boards: action.boards };
        case 'SET_BOARD':
            return { ...state, activeBoard: action.board };
        case 'REMOVE_BOARD':
            return { ...state, boards: state.boards.filter(board => action.boardId !== board._id) };
        default:
            return state;
    }
}
