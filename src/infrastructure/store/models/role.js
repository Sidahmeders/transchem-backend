import LocalFsDB from '../../fake-db/LocalFsDB.js'
import { buildImages, buildPermissions } from '../../../utils.js'

// ** Vars
const permissions = [
  {
    name: 'User Management',
    actions: {
      read: true,
      create: true,
      update: true,
      delete: true,
    },
  },
  {
    name:'Content Management',
    actions: {
      read: true,
      create: true,
      update: true,
      delete: true,
    }, 
  },  
  {
    name:'Disputes Management',
     actions: {
      read: true,
      create: true,
      update: true,
      delete: true,
    },
  },
  {
    name:'Database Management',
     actions: {
      read: true,
      create: true,
      update: true,
      delete: true,
    },
  },
  {
    name:'Financial Management',
     actions: {
      read: true,
      create: true,
      update: true,
      delete: true,
    },
  },
  {
    name:'Reporting',
     actions: {
      read: true,
      create: true,
      update: true,
      delete: true,
    },
  },
  {
    name:'API Control',
     actions: {
      read: true,
      create: true,
      update: true,
      delete: true,
    },
  },
  {
    name:'Repository Management',
     actions: {
      read: true,
      create: true,
      update: true,
      delete: true,
    },
  },
  {
    name:'Payroll',
     actions: {
      read: true,
      create: true,
      update: true,
      delete: true,
    },
  }
]

const roles = [
  {
    id: '#1234567',
    assigned_users: 4,
    name: 'Administrator',
    createdByRole: null,
    createdByUser: '#1234567',
    imagesURL: buildImages(4),
    permissions
  },
  {
    id: '#13',
    assigned_users: 7,
    name: 'Manager',
    createdByRole: 'Administrator',
    createdByUser: '#1234567',
    imagesURL: buildImages(7),
    permissions: buildPermissions(permissions)
  },
  {
    id: '#45',
    assigned_users: 5,
    name: 'Users',
    createdByRole: 'Administrator',
    createdByUser: '#1234567',
    imagesURL: buildImages(5),
    permissions: buildPermissions(permissions)
  },
  {
    id: '#63',
    assigned_users: 3,
    name: 'Support',
    createdByRole: 'Administrator',
    createdByUser: '#1234567',
    imagesURL: buildImages(3),
    permissions: buildPermissions(permissions)
  },
  {
    id: '#89',
    assigned_users: 2,
    name: 'Restricted User',
    createdByRole: 'Administrator',
    createdByUser: '#1234567',
    imagesURL: buildImages(2),
    permissions: buildPermissions(permissions)
  }
]

class Role extends LocalFsDB {
  constructor(role) {
    super()
    this.role = role
  }

  #latency = 10

  create(role) {
    return new Promise((resolve) => {
      setTimeout(() => {
        roles.push(role)
        resolve(role)
      }, this.#latency)
    })
  }

  findById(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = roles.filter((role) => (role.id === id))[0]
        resolve(result)
      }, this.#latency)
    })
  }
  
  findOne(query) {
    const result = this.find(query)
    return result[0]
  }

  find(query) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (Object.keys(query) === 0) resolve(roles)
        const result = []
        roles.forEach((role) => {
          let isValid = true
          Object.entries(query).forEach(([k, v]) => (isValid &= query[k] === role[k] && query[v] === query[v]))
          if (isValid) result.push(role)
        })
        resolve(result)
      }, this.#latency)
    })
  }
  
  findAll() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(roles), this.#latency)
    })
  }

  findByIdAndUpdate(id, update) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = roles.findIndex((role) => role.id == id)
        const updatedRole = Object.assign(roles[index], update)
        roles.splice(index, 1, updatedRole)
        resolve(updatedRole)
      }, this.#latency)
    })
  }

  findOneAndUpdate(query, update) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Object.keys(query) === 0) reject('query is empty')
        roles.forEach((role, index) => {
          let isValid = true
          Object.entries(query).forEach(([k, v]) => (isValid &= query[k] === role[k] && query[v] === query[v]))
          if (isValid) {
            const updatedRole = Object.assign(role, update)
            roles.splice(index, 1, updatedRole)
            resolve(Object.assign(role, updatedRole))
          }
        })
        resolve(null)
      }, this.#latency)
    })
  }
}

export default Role