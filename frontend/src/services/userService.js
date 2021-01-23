import { httpService } from "./httpService"

const BASE_URL = 'api/user'

export const userService = {
    getUsers,
    getById,
    addNotification,
    update,
    // remove,
    // increaseScore,
    // getLoggedinUser,
    // _saveLocalUser
}

async function getUsers() {
    const users = await httpService.get(BASE_URL)
    return users

}

async function getById(userId) {
    return await httpService.get(BASE_URL + '/' + userId)
}

async function addNotification(userId, notification) {
    const user = await getById(userId)
    user.notifications.push(notification)
    return user
}

async function update(user) {
    const savedUser = await httpService.put(BASE_URL + '/' + user._id, user)
    console.log('after put', savedUser);
}