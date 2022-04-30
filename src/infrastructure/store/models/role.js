import LocalFsDB from '../../fake-db/LocalFsDB.js'

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

const buildImages = (count) => new Array(count).fill('https://pbs.twimg.com/profile_images/598503127629762562/iFySk-lp_400x400.jpg')

const buildPermissions = () => JSON.parse(JSON.stringify(permissions)).map((permission) => {
  const newActions = Object.keys(permission.actions).reduce((prev, curr) => ({...prev, [curr]: Boolean(Math.round(Math.random() * 1))}), {})  
  return Object.assign(permission, { actions: newActions })
})

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
    permissions: buildPermissions()
  },
  {
    id: '#45',
    assigned_users: 5,
    name: 'Users',
    createdByRole: 'Administrator',
    createdByUser: '#1234567',
    imagesURL: buildImages(5),
    permissions: buildPermissions()
  },
  {
    id: '#63',
    assigned_users: 3,
    name: 'Support',
    createdByRole: 'Administrator',
    createdByUser: '#1234567',
    imagesURL: buildImages(3),
    permissions: buildPermissions()
  },
  {
    id: '#89',
    assigned_users: 2,
    name: 'Restricted User',
    createdByRole: 'Administrator',
    createdByUser: '#1234567',
    imagesURL: buildImages(2),
    permissions: buildPermissions()
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
  
  findOne() {}

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
}

export default Role