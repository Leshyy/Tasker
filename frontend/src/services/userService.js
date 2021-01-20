import { httpService } from "./httpService"

const BASE_URL = 'api/user'

export const userService = {
    getUsers,
    getById,
    // update,
    // remove,
    // increaseScore,
    // getLoggedinUser,
    // _saveLocalUser
}

async function getUsers() {
    const users = await httpService.get(BASE_URL)
    console.log('users', users);
    return users

}

async function getById(userId) {
    return await httpService.get(BASE_URL + '/' + userId)
}