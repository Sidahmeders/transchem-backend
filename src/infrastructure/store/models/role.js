import LocalFsDB from '../../fake-db/LocalFsDB.js'
import { buildImages, buildPermissions } from '../../utils.js'

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
  constructor() {
    super()
    this.document = roles
  }
}

export default Role