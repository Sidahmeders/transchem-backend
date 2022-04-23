const path = require('path')
const fs = require('fs')

class LocalFsDB {
  fakeDB = {
    users: {
      testUser1: {
        id: 1,
        username: 'testUserName',
        email: 'admin@gmail.com',
        hashPassword: 'pass123',
        avatar: '',
        onlineStatus: false,
      },
    }
  }

  queryDB(fileName) {
    return new Promise((resolve, reject) => {
      fs.readFile(path.join(`${__dirname}`, `${fileName}.json`), 'utf8', (err, data) => {
        if (err) reject(err)
        else resolve(JSON.parse(data))
      })
    })
  }

  async persistDB(fileName, data, message) {
    await fs.writeFile(path.join(`${__dirname}`, `${fileName}.json`), JSON.stringify(data), (err) => {
      if (err) throw Error(err.message)
      console.log(message)
    })
  }
}

module.exports = LocalFsDB
