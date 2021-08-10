const users = []


// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({id, username, room}) => {
    // Clean the data 
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // Validate the data
    if (!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    // Check for existing username
    const existingUser = users.find((user) => {
        return user.username === username && user.room === room
    })

    // Validate username
    if (existingUser) {
        return {
            error: 'Username is in use'
        }
    }

    // Store user 
    const user = { id, username, room}
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    const index = users.findIndex((user) => user.id === id)
    return users[index]

}
const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    const usersInRoom = users.filter((user) => user.room === room)
    return usersInRoom
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}


// addUser({
//     id:22,
//     username:'1',
//     room: ' xd'
// })
// addUser({
//     id:32,
//     username:'2',
//     room: ' xd'
// })
// addUser({
//     id:42,
//     username:'3',
//     room: ' xdd'
// })
// console.log(users)
// console.log(getUser(32))
// console.log(getUser(52))
// console.log(getUsersInRoom('xd'))
