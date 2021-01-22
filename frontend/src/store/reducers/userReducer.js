// let localLoggedinUser = null
let localLoggedinUser = {
    _id: "600877404b50bc8b342c1734",
    isAdmin: true,
    notifications: [
        {
            byUser: {
                _id: "600877404b50bc8b342c1732",
                fullname: "Tair Bitan",
                imgUrl: "https://res.cloudinary.com/tair/image/upload/v1611221821/Tair_xdnngm.jpg"
            },
            content: "Note that the data structure is dnoe. now you can import it and use real data",
            createdAt: 1606733792261.0
        }
    ],
    fullname: "Tamir Leshetz",
    username: "Tamir",
    email: "tamir.leshetz@gmail.com",
    password: "tamir1234",
    phoneNumber: "0546543145",
    birthday: "04/03/2000",
    company: "Mister Bit.",
    score: 0.0,
    createdAt: 1601297334426.0,
    imgUrl: "https://res.cloudinary.com/tair/image/upload/v1611221822/Tamir_zzn3m4.jpg"
}
// if (sessionStorage.loggedinUser) localLoggedinUser = JSON.parse(sessionStorage.loggedinUser)

const initialState = {
    loggedInUser: localLoggedinUser,
    users: []
}

export function userReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_USERS':
            return { ...state, users: action.users }
        case 'LOGIN_USER':
            return { ...state, loggedInUser: action.user }
        case 'LOGOUT_USER':
            return { ...state, loggedInUser: null };
        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter(user => user._id !== action.userId)
            }
        default:
            return state
    }
}
