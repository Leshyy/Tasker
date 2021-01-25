
let localLoggedinUser = {
    isAdmin: false,
    fullname: "Guest Guestis",
    username: "Guest",
    email: "Guest@gmail.com",
    phoneNumber: "0524735510",
    birthday: "20/02/2000",
    company: "Mister Bit.",
}

if (sessionStorage.loggedinUser) localLoggedinUser = JSON.parse(sessionStorage.loggedinUser)

const initialState = {
    loggedInUser: localLoggedinUser,
    users: []
}

export function userReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, loggedInUser: action.user }
        case 'LOGOUT_USER':
            return { ...state, loggedInUser: null }
        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter(user => user._id !== action.userId)
            }
        case 'SET_USERS':
            return { ...state, users: action.users }
        default:
            return state
    }
}
