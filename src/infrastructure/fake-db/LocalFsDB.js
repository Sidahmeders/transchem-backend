import path from 'path'
import fs from 'fs'

export default class LocalFsDB {
  constructor(document) {
    this.document = document
  }

  // DATABASE PERSISTENCE
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

  // DATABASE QUERIES 
  #latency = 10

  create(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.document.push(data)
        resolve(data)
      }, this.#latency)
    })
  }

  findById(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = this.document.filter((obj) => (obj.id === id))[0]
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
        if (Object.keys(query) === 0) resolve(this.document)
        const result = []
        this.document.forEach((obj) => {
          let isValid = true
          Object.entries(query).forEach(([k, v]) => (isValid &= query[k] === obj[k] && query[v] === query[v]))
          if (isValid) result.push(obj)
        })
        resolve(result)
      }, this.#latency)
    })
  }
  
  findAll() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.document), this.#latency)
    })
  }

  findByIdAndUpdate(id, update) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = this.document.findIndex((obj) => obj.id == id)
        const updatedRole = Object.assign(this.document[index], update)
        this.document.splice(index, 1, updatedRole)
        resolve(updatedRole)
      }, this.#latency)
    })
  }

  findOneAndUpdate(query, update) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Object.keys(query) === 0) reject('query is empty')
        this.document.forEach((obj, index) => {
          let isValid = true
          Object.entries(query).forEach(([k, v]) => (isValid &= query[k] === obj[k] && query[v] === query[v]))
          if (isValid) {
            const updatedRole = Object.assign(obj, update)
            this.document.splice(index, 1, updatedRole)
            resolve(updatedRole)
          }
        })
        resolve(null)
      }, this.#latency)
    })
  }
}
