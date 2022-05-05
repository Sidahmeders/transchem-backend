import LocalFsDB from '../../fake-db/LocalFsDB.js'
import { buildImages, buildPermissions } from '../../utils.js'

// ** Vars
const permissions = [
  {
    name: 'users-management',
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
    name: 'home',
    actions: {
      read: true,
      create: true,
      update: true,
      delete: true,
    }
  },
  {
    name: 'second-page',
    actions: {
      read: true,
      create: true,
      update: true,
      delete: true,
    }
  }
]

const roles = [
  {
    id: '777',
    createdByUser: null,
    name: 'Administrator',
    assigned_users: 1,
    imagesURL: buildImages(1),
    permissions
  },
  {
    id: '13',
    assigned_users: 7,
    name: 'Manager',
    createdByUser: 'admin-id',
    imagesURL: buildImages(7),
    permissions: buildPermissions(permissions)
  },
  {
    id: '45',
    assigned_users: 5,
    name: 'Users',
    createdByUser: 'admin-id',
    imagesURL: buildImages(5),
    permissions: buildPermissions(permissions)
  },
  {
    id: '63',
    assigned_users: 3,
    name: 'Support',
    createdByUser: 'admin-id',
    imagesURL: buildImages(3),
    permissions: buildPermissions(permissions)
  },
  {
    id: '89',
    assigned_users: 2,
    name: 'Restricted User',
    createdByUser: 'admin-id',
    imagesURL: buildImages(2),
    permissions: buildPermissions(permissions)
  }
]

class Role extends LocalFsDB {
  constructor() {
    super()
    this.document = roles
  }
}

export default Role