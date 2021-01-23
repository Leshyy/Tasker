import { userService } from "../../services/userService"

export function loadUsers() {

}
export function addUser() {

}

export function updateUser(user) {
    return async dispatch => {
        try {
            const loggedInUser = await userService.getById('600877404b50bc8b342c1734')
            dispatch({ type: 'SET_USER', user: loggedInUser })
            // await userService.update(user)
            // socketService.emit('user update')
        } catch (err) {
            console.log('user Actions: err in loadUsers', err)
        } finally {
        }
    }
}

export function loginUser(user) {
    return async dispatch => {
        try {
            dispatch({ type: 'LOGIN_USER', user })
        } catch (err) {
            console.log('user Actions: err in loadUsers', err)
        } finally {
        }
    }

}
export function removeUser() {

}
// export function logoutUser() {
//     return (dispatch) => {
//         userService.logout().then(() => {
//             const action = {
//                 type: 'LOGOUT_USER',
//             }
//             dispatch(action);
//         })
//     }
// }