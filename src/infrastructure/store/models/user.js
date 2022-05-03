import LocalFsDB from '../../fake-db/LocalFsDB.js'

/**
 * id
 * roleName
 * roleId
 * email
 * fullName
 * passwordHash
 * createdAt
 * isAdmin
 */

const users = [
  {
    id: 1,
    fullName: 'Galen Slixby',
    roleName: 'editor',
    roleId: 'roleName-ID',
    username: 'gslixby0',
    country: 'El Salvador',
    phone: '(479) 232-9151',
    email: 'gslixby0@abc.net.au',
    status: 'inactive',
    avatar: '',
  },
  {
    id: 2,
    fullName: 'Halsey Redmore',
    company: 'Skinder PVT LTD',
    roleName: 'author',
    roleId: 'roleName-ID',
    username: 'hredmore1',
    country: 'Albania',
    phone: '(472) 607-9137',
    email: 'hredmore1@imgur.com',
    status: 'pending',
    avatar: 'https://images.ctfassets.net/juauvlea4rbf/2soPy6PvMaPJjN6z0uOj7L/ee55f82bb3d0203310c7f67d94f616e8/final.jpg'
  },
  {
    id: 3,
    fullName: 'Marjory Sicely',
    company: 'Oozz PVT LTD',
    roleName: 'maintainer',
    roleId: 'roleName-ID',
    username: 'msicely2',
    country: 'Russia',
    phone: '(321) 264-4599',
    email: 'msicely2@who.int',
    status: 'active',
    avatar: 'https://images.ctfassets.net/juauvlea4rbf/2soPy6PvMaPJjN6z0uOj7L/ee55f82bb3d0203310c7f67d94f616e8/final.jpg'
  },
  {
    id: 4,
    fullName: 'Cyrill Risby',
    company: 'Oozz PVT LTD',
    roleName: 'maintainer',
    roleId: 'roleName-ID',
    username: 'crisby3',
    country: 'China',
    phone: '(923) 690-6806',
    email: 'crisby3@wordpress.com',
    status: 'inactive',
    avatar: 'https://images.ctfassets.net/juauvlea4rbf/2soPy6PvMaPJjN6z0uOj7L/ee55f82bb3d0203310c7f67d94f616e8/final.jpg'
  },
  {
    id: 5,
    fullName: 'Maggy Hurran',
    company: 'Aimbo PVT LTD',
    roleName: 'subscriber',
    roleId: 'roleName-ID',
    username: 'mhurran4',
    country: 'Pakistan',
    phone: '(669) 914-1078',
    email: 'mhurran4@yahoo.co.jp',
    status: 'pending',
    avatar: 'https://images.ctfassets.net/juauvlea4rbf/2soPy6PvMaPJjN6z0uOj7L/ee55f82bb3d0203310c7f67d94f616e8/final.jpg'
  },
  {
    id: 6,
    fullName: 'Silvain Halstead',
    company: 'Jaxbean PVT LTD',
    roleName: 'author',
    roleId: 'roleName-ID',
    username: 'shalstead5',
    country: 'China',
    phone: '(958) 973-3093',
    email: 'shalstead5@shinystat.com',
    status: 'active',
    avatar: '',
  },
  {
    id: 7,
    fullName: 'Breena Gallemore',
    company: 'Jazzy PVT LTD',
    roleName: 'subscriber',
    roleId: 'roleName-ID',
    username: 'bgallemore6',
    country: 'Canada',
    phone: '(825) 977-8152',
    email: 'bgallemore6@boston.com',
    status: 'pending',
    avatar: '',
  },
  {
    id: 8,
    fullName: 'Kathryne Liger',
    company: 'Pixoboo PVT LTD',
    roleName: 'author',
    roleId: 'roleName-ID',
    username: 'kliger7',
    country: 'France',
    phone: '(187) 440-0934',
    email: 'kliger7@vinaora.com',
    status: 'pending',
    avatar: 'https://images.ctfassets.net/juauvlea4rbf/2soPy6PvMaPJjN6z0uOj7L/ee55f82bb3d0203310c7f67d94f616e8/final.jpg'
  },
  {
    id: 9,
    fullName: 'Franz Scotfurth',
    company: 'Tekfly PVT LTD',
    roleName: 'subscriber',
    roleId: 'roleName-ID',
    username: 'fscotfurth8',
    country: 'China',
    phone: '(978) 146-5443',
    email: 'fscotfurth8@dailymotion.com',
    status: 'pending',
    avatar: 'https://images.ctfassets.net/juauvlea4rbf/2soPy6PvMaPJjN6z0uOj7L/ee55f82bb3d0203310c7f67d94f616e8/final.jpg'
  },
  {
    id: 10,
    fullName: 'Jillene Bellany',
    company: 'Gigashots PVT LTD',
    roleName: 'maintainer',
    roleId: 'roleName-ID',
    username: 'jbellany9',
    country: 'Jamaica',
    phone: '(589) 284-6732',
    email: 'jbellany9@kickstarter.com',
    status: 'inactive',
    avatar: 'https://images.ctfassets.net/juauvlea4rbf/2soPy6PvMaPJjN6z0uOj7L/ee55f82bb3d0203310c7f67d94f616e8/final.jpg'
  },
  {
    id: 11,
    fullName: 'Jonah Wharlton',
    company: 'Eare PVT LTD',
    roleName: 'subscriber',
    roleId: 'roleName-ID',
    username: 'jwharltona',
    country: 'United States',
    phone: '(176) 532-6824',
    email: 'jwharltona@oakley.com',
    status: 'inactive',
    avatar: 'https://images.ctfassets.net/juauvlea4rbf/2soPy6PvMaPJjN6z0uOj7L/ee55f82bb3d0203310c7f67d94f616e8/final.jpg'
  },
  {
    id: 12,
    fullName: 'Seth Hallam',
    company: 'Yakitri PVT LTD',
    roleName: 'subscriber',
    roleId: 'roleName-ID',
    username: 'shallamb',
    country: 'Peru',
    phone: '(234) 464-0600',
    email: 'shallamb@hugedomains.com',
    status: 'pending',
    avatar: 'https://images.ctfassets.net/juauvlea4rbf/2soPy6PvMaPJjN6z0uOj7L/ee55f82bb3d0203310c7f67d94f616e8/final.jpg'
  },
  {
    id: 13,
    fullName: 'Yoko Pottie',
    company: 'Leenti PVT LTD',
    roleName: 'subscriber',
    roleId: 'roleName-ID',
    username: 'ypottiec',
    country: 'Philippines',
    phone: '(907) 284-5083',
    email: 'ypottiec@privacy.gov.au',
    status: 'inactive',
    avatar: 'https://images.ctfassets.net/juauvlea4rbf/2soPy6PvMaPJjN6z0uOj7L/ee55f82bb3d0203310c7f67d94f616e8/final.jpg'
  },
  {
    id: 14,
    fullName: 'Maximilianus Krause',
    company: 'Digitube PVT LTD',
    roleName: 'author',
    roleId: 'roleName-ID',
    username: 'mkraused',
    country: 'Democratic Republic of the Congo',
    phone: '(167) 135-7392',
    email: 'mkraused@stanford.edu',
    status: 'active',
    avatar: 'https://images.ctfassets.net/juauvlea4rbf/2soPy6PvMaPJjN6z0uOj7L/ee55f82bb3d0203310c7f67d94f616e8/final.jpg'
  },
  {
    id: 15,
    fullName: 'Zsazsa McCleverty',
    company: 'Kaymbo PVT LTD',
    roleName: 'maintainer',
    roleId: 'roleName-ID',
    username: 'zmcclevertye',
    country: 'France',
    phone: '(317) 409-6565',
    email: 'zmcclevertye@soundcloud.com',
    status: 'active',
    avatar: 'https://images.ctfassets.net/juauvlea4rbf/2soPy6PvMaPJjN6z0uOj7L/ee55f82bb3d0203310c7f67d94f616e8/final.jpg'
  },
  {
    id: 16,
    fullName: 'Bentlee Emblin',
    company: 'Yambee PVT LTD',
    roleName: 'author',
    roleId: 'roleName-ID',
    username: 'bemblinf',
    country: 'Spain',
    phone: '(590) 606-1056',
    email: 'bemblinf@wired.com',
    status: 'active',
    avatar: 'https://images.ctfassets.net/juauvlea4rbf/2soPy6PvMaPJjN6z0uOj7L/ee55f82bb3d0203310c7f67d94f616e8/final.jpg'
  },
  {
    id: 17,
    fullName: 'Brockie Myles',
    company: 'Wikivu PVT LTD',
    roleName: 'maintainer',
    roleId: 'roleName-ID',
    username: 'bmylesg',
    country: 'Poland',
    phone: '(553) 225-9905',
    email: 'bmylesg@amazon.com',
    status: 'active',
    avatar: '',
  }
]

class User extends LocalFsDB {
  constructor() {
    super()
    this.document = users
  }
}

export default User