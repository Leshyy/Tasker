import { userService } from '../../services/userService'



export function loadUsers() {
    return async dispatch => {
        try {
            dispatch({ type: 'LOADING_START' })
            const users = await userService.getUsers()
            dispatch({ type: 'SET_USERS', users })
        } catch (err) {
            console.log('UserActions: err in loadUsers', err)
        } finally {
            dispatch({ type: 'LOADING_DONE' })
        }
    }
}

export function removeUser(userId) {
    return async dispatch => {
        try {
            await userService.remove(userId)
            dispatch({ type: 'REMOVE_USER', userId })
        } catch (err) {
            console.log('UserActions: err in removeUser', err)
        }
    }
}

export function updateUser(user) {
    return async dispatch => {
        try {
            const loggedInUser = await userService.getById('600877404b50bc8b342c1734')
            dispatch({ type: 'SET_USER', user: loggedInUser })
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

export function login(userCreds) {
    return async dispatch => {
        try {
            const user = await userService.login(userCreds)
            if (user) {
                dispatch({ type: 'SET_USER', user })
                return user
            }
        } catch (err) {
            console.log('UserActions: err in login', err)
        }
    }
}

export function signup(userCreds) {
    return async dispatch => {
        try {
            const user = await userService.signup(userCreds)
            dispatch({ type: 'SET_USER', user })
            return user
        } catch (err) {
            console.log('UserActions: err in signup', err)
        }
    }
}

export function logout() {
    console.log('beklilut');
    return async dispatch => {
        try {
            dispatch({ type: 'SET_USER', user: null })
            await userService.logout()
        } catch (err) {
            console.log('UserActions: err in logout', err)
        }
    }
}
