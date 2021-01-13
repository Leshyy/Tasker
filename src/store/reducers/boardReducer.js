const initialState = {
    activeBoard: null,
    boards: []
}

export function boardReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_BOARDS':
            return { ...state, boards: action.boards };
        case 'SET_ACTIVE_BOARD':
            return { ...state, activeBoard: action.board };

        default:
            return state;
    }
}
