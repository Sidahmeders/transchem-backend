export default function makeListUsers({ usersDB }) {
  return async function listUsers({ id, email }) {
    console.log(id, email, 'In domain services') // TODO: LIST USER BASED ON WHO CREATED THEM.
    const usersList = await usersDB.listUsers()
    return Promise.resolve(usersList)
  }
}