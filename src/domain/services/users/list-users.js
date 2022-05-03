export default function makeListUsers({ usersDB }) {
  return async function listUsers() {
    const usersList = await usersDB.listUsers()
    return Promise.resolve(usersList)
  }
}