// import { storageService } from './asyncStorageService'
import { httpService } from './httpService'
const SCORE_FOR_REVIEW = 10
const BASE_URL = 'api'


export const userService = {
    login,
    logout,
    signup,
    getUsers,
    getById,
    remove,
    update,
    getLoggedinUser,
    increaseScore,
    addNotification
}

function getUsers() {
    return httpService.get(`${BASE_URL}/user`)
}

function getById(userId) {
    return httpService.get(`${BASE_URL}/user/${userId}`)
}

function remove(userId) {
    return httpService.delete(`${BASE_URL}/user/${userId}`)
}

async function update(user) {
    user = await httpService.put(`${BASE_URL}/user/${user._id}`, user)
    if (getLoggedinUser()._id === user._id) _saveLocalUser(user)
}

async function increaseScore(by = SCORE_FOR_REVIEW) {
    const user = getLoggedinUser()
    user.score = user.score + by || by
    await update(user)
    return user.score
}

async function login(userCred) {
    const user = await httpService.post(`${BASE_URL}/auth/login`, userCred)
    if (user) return _saveLocalUser(user)
}

async function signup(userCred) {
    const user = await httpService.post(`${BASE_URL}/auth/signup`, userCred)
    return _saveLocalUser(user)
}

async function logout() {
    sessionStorage.clear()
    return await httpService.post(`${BASE_URL}/auth/logout`)
}

function _saveLocalUser(user) {
    sessionStorage.setItem('loggedinUser', JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem('loggedinUser'))
}

async function addNotification(userId, notification) {
    const user = await getById(userId)
    user.notifications.push(notification)
    return user
}


