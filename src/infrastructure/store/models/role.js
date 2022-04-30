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
    assigned_users: 4,
    name: 'Administrator',
    createdByRole: 'RoleName',
    createdByUser: 'User-ID',
    imagesURL: buildImages(4),
    permissions
  },
  {
    assigned_users: 7,
    name: 'Manager',
    createdByRole: 'RoleName',
    createdByUser: 'User-ID',
    imagesURL: buildImages(7),
    permissions: buildPermissions()
  },
  {
    assigned_users: 5,
    name: 'Users',
    createdByRole: 'RoleName',
    createdByUser: 'User-ID',
    imagesURL: buildImages(5),
    permissions: buildPermissions()
  },
  {
    assigned_users: 3,
    name: 'Support',
    createdByRole: 'RoleName',
    createdByUser: 'User-ID',
    imagesURL: buildImages(3),
    permissions: buildPermissions()
  },
  {
    assigned_users: 2,
    name: 'Restricted User',
    createdByRole: 'RoleName',
    createdByUser: 'User-ID',
    imagesURL: buildImages(2),
    permissions: buildPermissions()
  }
]

class Role extends LocalFsDB {
  constructor(role) {
    super()
    this.role = role
  }

  findAll() {
    return {
      roles
    }
  }
}

export default Role