import LocalFsDB from '../../fake-db/LocalFsDB.js'

const users = [
  {
    id: 'admin-id',
    roleId: '777',
    fullName: 'Sodium United',
    passwordHash: '$2a$12$BjW.uNoBbFVtuCYT4eH4reIky3jU/ZEqAtYHE9eUa.tnW9FD7n95O',
    roleName: 'Administrator',
    country: 'El Salvador',
    phone: '(479) 232-9151',
    email: 'testAdmin@conestoga.com',
    isAuthorized: true,
    avatar: 'https://pbs.twimg.com/profile_images/598503127629762562/iFySk-lp_400x400.jpg',
  },
  {
    id: 2,
    fullName: 'Halsey Redmore',
    passwordHash: '$2a$12$BjW.uNoBbFVtuCYT4eH4reIky3jU/ZEqAtYHE9eUa.tnW9FD7n95O',
    company: 'Skinder PVT LTD',
    roleName: 'author',
    roleId: '22',
    country: 'Albania',
    phone: '(472) 607-9137',
    email: 'hredmore1@imgur.com',
    isAuthorized: true,
    avatar: 'https://images.ctfassets.net/juauvlea4rbf/2soPy6PvMaPJjN6z0uOj7L/ee55f82bb3d0203310c7f67d94f616e8/final.jpg'
  },
  {
    id: 3,
    fullName: 'Marjory Sicely',
    passwordHash: '$2a$12$BjW.uNoBbFVtuCYT4eH4reIky3jU/ZEqAtYHE9eUa.tnW9FD7n95O',
    company: 'Oozz PVT LTD',
    roleName: 'maintainer',
    roleId: '25',
    country: 'Russia',
    phone: '(321) 264-4599',
    email: 'msicely2@who.int',
    isAuthorized: false,
    avatar: 'https://images.ctfassets.net/juauvlea4rbf/2soPy6PvMaPJjN6z0uOj7L/ee55f82bb3d0203310c7f67d94f616e8/final.jpg'
  },
  {
    id: 4,
    fullName: 'Cyrill Risby',
    passwordHash: '$2a$12$BjW.uNoBbFVtuCYT4eH4reIky3jU/ZEqAtYHE9eUa.tnW9FD7n95O',
    company: 'Oozz PVT LTD',
    roleName: 'maintainer',
    roleId: '66',
    country: 'China',
    phone: '(923) 690-6806',
    email: 'bemblinf@wired.com',
    isAuthorized: true,
    avatar: 'https://images.ctfassets.net/juauvlea4rbf/2soPy6PvMaPJjN6z0uOj7L/ee55f82bb3d0203310c7f67d94f616e8/final.jpg'
  },
  {
    id: 5,
    fullName: 'Maggy Hurran',
    passwordHash: '$2a$12$BjW.uNoBbFVtuCYT4eH4reIky3jU/ZEqAtYHE9eUa.tnW9FD7n95O',
    company: 'Aimbo PVT LTD',
    roleName: 'subscriber',
    roleId: '343',
    country: 'Pakistan',
    phone: '(669) 914-1078',
    email: 'mhurran4@yahoo.co.jp',
    isAuthorized: false,
    avatar: 'https://images.ctfassets.net/juauvlea4rbf/2soPy6PvMaPJjN6z0uOj7L/ee55f82bb3d0203310c7f67d94f616e8/final.jpg'
  },
  {
    id: 6,
    fullName: 'Silvain Halstead',
    passwordHash: '$2a$12$BjW.uNoBbFVtuCYT4eH4reIky3jU/ZEqAtYHE9eUa.tnW9FD7n95O',
    company: 'Jaxbean PVT LTD',
    roleName: 'author',
    roleId: '42',
    country: 'China',
    phone: '(958) 973-3093',
    email: 'shalstead5@shinystat.com',
    isAuthorized: false,
    avatar: '',
  },
  {
    id: 7,
    fullName: 'Breena Gallemore',
    passwordHash: '$2a$12$BjW.uNoBbFVtuCYT4eH4reIky3jU/ZEqAtYHE9eUa.tnW9FD7n95O',
    company: 'Jazzy PVT LTD',
    roleName: 'subscriber',
    roleId: '90',
    country: 'Canada',
    phone: '(825) 977-8152',
    email: 'bgallemore6@boston.com',
    isAuthorized: false,
    avatar: '',
  },
  {
    id: 8,
    fullName: 'Kathryne Liger',
    passwordHash: '$2a$12$BjW.uNoBbFVtuCYT4eH4reIky3jU/ZEqAtYHE9eUa.tnW9FD7n95O',
    company: 'Pixoboo PVT LTD',
    roleName: 'author',
    roleId: '26',
    country: 'France',
    phone: '(187) 440-0934',
    email: 'kliger7@vinaora.com',
    isAuthorized: false,
    avatar: 'https://images.ctfassets.net/juauvlea4rbf/2soPy6PvMaPJjN6z0uOj7L/ee55f82bb3d0203310c7f67d94f616e8/final.jpg'
  },
  {
    id: 9,
    fullName: 'Franz Scotfurth',
    passwordHash: '$2a$12$BjW.uNoBbFVtuCYT4eH4reIky3jU/ZEqAtYHE9eUa.tnW9FD7n95O',
    company: 'Tekfly PVT LTD',
    roleName: 'subscriber',
    roleId: '8284',
    country: 'China',
    phone: '(978) 146-5443',
    email: 'fscotfurth8@dailymotion.com',
    isAuthorized: true,
    avatar: 'https://images.ctfassets.net/juauvlea4rbf/2soPy6PvMaPJjN6z0uOj7L/ee55f82bb3d0203310c7f67d94f616e8/final.jpg'
  },
  {
    id: 10,
    fullName: 'Jillene Bellany',
    passwordHash: '$2a$12$BjW.uNoBbFVtuCYT4eH4reIky3jU/ZEqAtYHE9eUa.tnW9FD7n95O',
    company: 'Gigashots PVT LTD',
    roleName: 'maintainer',
    roleId: '988',
    country: 'Jamaica',
    phone: '(589) 284-6732',
    email: 'jbellany9@kickstarter.com',
    isAuthorized: true,
    avatar: 'https://images.ctfassets.net/juauvlea4rbf/2soPy6PvMaPJjN6z0uOj7L/ee55f82bb3d0203310c7f67d94f616e8/final.jpg'
  },
  {
    id: 11,
    fullName: 'Jonah Wharlton',
    passwordHash: '$2a$12$BjW.uNoBbFVtuCYT4eH4reIky3jU/ZEqAtYHE9eUa.tnW9FD7n95O',
    company: 'Eare PVT LTD',
    roleName: 'subscriber',
    roleId: '90382',
    country: 'United States',
    phone: '(176) 532-6824',
    email: 'jwharltona@oakley.com',
    isAuthorized: true,
    avatar: 'https://images.ctfassets.net/juauvlea4rbf/2soPy6PvMaPJjN6z0uOj7L/ee55f82bb3d0203310c7f67d94f616e8/final.jpg'
  },
  {
    id: 12,
    fullName: 'Seth Hallam',
    passwordHash: '$2a$12$BjW.uNoBbFVtuCYT4eH4reIky3jU/ZEqAtYHE9eUa.tnW9FD7n95O',
    company: 'Yakitri PVT LTD',
    roleName: 'subscriber',
    roleId: '44488',
    country: 'Peru',
    phone: '(234) 464-0600',
    email: 'shallamb@hugedomains.com',
    isAuthorized: true,
    avatar: 'https://images.ctfassets.net/juauvlea4rbf/2soPy6PvMaPJjN6z0uOj7L/ee55f82bb3d0203310c7f67d94f616e8/final.jpg'
  },
  {
    id: 13,
    fullName: 'Yoko Pottie',
    passwordHash: '$2a$12$BjW.uNoBbFVtuCYT4eH4reIky3jU/ZEqAtYHE9eUa.tnW9FD7n95O',
    company: 'Leenti PVT LTD',
    roleName: 'subscriber',
    roleId: '456111',
    country: 'Philippines',
    phone: '(907) 284-5083',
    email: 'ypottiec@privacy.gov.au',
    isAuthorized: false,
    avatar: 'https://images.ctfassets.net/juauvlea4rbf/2soPy6PvMaPJjN6z0uOj7L/ee55f82bb3d0203310c7f67d94f616e8/final.jpg'
  }
]

class User extends LocalFsDB {
  constructor() {
    super()
    this.document = users
  }
}

export default User