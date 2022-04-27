import LocalFsDB from '../../fake-db/LocalFsDB.js'

// ** Vars
const data = [
  {
    totalUsers: 4,
    title: 'Administrator',
    users: [
      {
        size: 'sm',
        title: 'Vinnie Mostowy',
        img: 'https://pbs.twimg.com/profile_images/598503127629762562/iFySk-lp_400x400.jpg'
      },
      {
        size: 'sm',
        title: 'Allen Rieske',
        img: 'https://pbs.twimg.com/profile_images/598503127629762562/iFySk-lp_400x400.jpg'
      },
      {
        size: 'sm',
        title: 'Julee Rossignol',
        img: 'https://pbs.twimg.com/profile_images/598503127629762562/iFySk-lp_400x400.jpg'
      },
      {
        size: 'sm',
        title: 'Kaith Dsouza',
        img: 'https://pbs.twimg.com/profile_images/598503127629762562/iFySk-lp_400x400.jpg'
      }
    ]
  },
  {
    totalUsers: 7,
    title: 'Manager',
    users: [
      {
        size: 'sm',
        title: 'Jimmy Ressula',
        img: 'https://pbs.twimg.com/profile_images/598503127629762562/iFySk-lp_400x400.jpg'
      },
      {
        size: 'sm',
        title: 'John Doe',
        img: 'https://pbs.twimg.com/profile_images/598503127629762562/iFySk-lp_400x400.jpg'
      },
      {
        size: 'sm',
        title: 'Kristi Lawker',
        img: 'https://pbs.twimg.com/profile_images/598503127629762562/iFySk-lp_400x400.jpg'
      },
      {
        size: 'sm',
        title: 'Kaith D',
        img: 'https://pbs.twimg.com/profile_images/598503127629762562/iFySk-lp_400x400.jpg'
      },
      {
        size: 'sm',
        title: 'Danny Paul',
        img: 'https://pbs.twimg.com/profile_images/598503127629762562/iFySk-lp_400x400.jpg'
      }
    ]
  },
  {
    totalUsers: 5,
    title: 'Users',
    users: [
      {
        size: 'sm',
        title: 'Andrew Tye',
        img: 'https://pbs.twimg.com/profile_images/598503127629762562/iFySk-lp_400x400.jpg'
      },
      {
        size: 'sm',
        title: 'Rishi Swaat',
        img: 'https://pbs.twimg.com/profile_images/598503127629762562/iFySk-lp_400x400.jpg'
      },
      {
        size: 'sm',
        title: 'Rossie Kim',
        img: 'https://pbs.twimg.com/profile_images/598503127629762562/iFySk-lp_400x400.jpg'
      },
      {
        size: 'sm',
        title: 'Kim Merchent',
        img: 'https://pbs.twimg.com/profile_images/598503127629762562/iFySk-lp_400x400.jpg'
      },
      {
        size: 'sm',
        title: 'Sam Dsouza',
        img: 'https://pbs.twimg.com/profile_images/598503127629762562/iFySk-lp_400x400.jpg'
      }
    ]
  },
  {
    totalUsers: 3,
    title: 'Support',
    users: [
      {
        size: 'sm',
        title: 'Kim Karlos',
        img: 'https://pbs.twimg.com/profile_images/598503127629762562/iFySk-lp_400x400.jpg'
      },
      {
        size: 'sm',
        title: 'Katy Turner',
        img: 'https://pbs.twimg.com/profile_images/598503127629762562/iFySk-lp_400x400.jpg'
      },
      {
        size: 'sm',
        title: 'Peter Adward',
        img: 'https://pbs.twimg.com/profile_images/598503127629762562/iFySk-lp_400x400.jpg'
      },
      {
        size: 'sm',
        title: 'Kaith Dsouza',
        img: 'https://pbs.twimg.com/profile_images/598503127629762562/iFySk-lp_400x400.jpg'
      },
      {
        size: 'sm',
        title: 'John Parker',
        img: 'https://pbs.twimg.com/profile_images/598503127629762562/iFySk-lp_400x400.jpg'
      }
    ]
  },
  {
    totalUsers: 2,
    title: 'Restricted User',
    users: [
      {
        size: 'sm',
        title: 'Kim Merchent',
        img: 'https://pbs.twimg.com/profile_images/598503127629762562/iFySk-lp_400x400.jpg'
      },
      {
        size: 'sm',
        title: 'Sam Dsouza',
        img: 'https://pbs.twimg.com/profile_images/598503127629762562/iFySk-lp_400x400.jpg'
      },
      {
        size: 'sm',
        title: 'Nurvi Karlos',
        img: 'https://pbs.twimg.com/profile_images/598503127629762562/iFySk-lp_400x400.jpg'
      },
      {
        size: 'sm',
        title: 'Andrew Tye',
        img: 'https://pbs.twimg.com/profile_images/598503127629762562/iFySk-lp_400x400.jpg'
      },
      {
        size: 'sm',
        title: 'Rossie Kim',
        img: 'https://pbs.twimg.com/profile_images/598503127629762562/iFySk-lp_400x400.jpg'
      }
    ]
  }
]

const rolesArr = [
  'User Management',
  'Content Management',
  'Disputes Management',
  'Database Management',
  'Financial Management',
  'Reporting',
  'API Control',
  'Repository Management',
  'Payroll'
]

class Role extends LocalFsDB {
  constructor(role) {
    super()
    this.role = role
  }

  findAll() {
    return {
      data,
      rolesArr
    }
  }
}

export default Role