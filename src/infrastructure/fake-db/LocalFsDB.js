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
        const result = this.document.filter((doc) => (doc.id == id))[0]
        resolve(result)
      }, this.#latency)
    })
  }
  
  async findOne(query) {    
    const result = await this.find(query)
    return Promise.resolve(result[0])
  }

  find(query) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (Object.keys(query) === 0) resolve(this.document)
        const result = []
        this.document.forEach((doc) => {
          let isValid = true
          Object.entries(query).forEach(([k, v]) => (isValid &= query[k] == doc[k] && query[v] == query[v]))
          if (isValid) result.push(doc)
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
        const index = this.document.findIndex((doc) => doc.id == id)
        const targetDoc = this.document[index]
        const updatedDoc = Object.assign({ ...targetDoc }, update)
        this.document.splice(index, 1, updatedDoc)
        resolve(updatedDoc)
      }, this.#latency)
    })
  }

  findOneAndUpdate(query, update) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Object.keys(query) === 0) reject('query is empty')
        this.document.forEach((doc, index) => {
          let isValid = true
          Object.entries(query).forEach(([k, v]) => (isValid &= query[k] === doc[k] && query[v] === query[v]))
          if (isValid) {
            const updatedDoc = Object.assign({ ...doc }, update)
            this.document.splice(index, 1, updatedDoc)
            resolve(updatedDoc)
          }
        })
        resolve(null)
      }, this.#latency)
    })
  }

  updateMany(query, update) {
    return new Promise((resolve, reject) => {
      const updatedTokensList = []
      setTimeout(() => {
        if (Object.keys(query) === 0) reject('query is empty')
        this.document.forEach((doc, index) => {
          let isValid = false
          Object.entries(query).forEach(([k, v]) => (isValid &= query[k] === doc[k] && query[v] === query[v]))
          if (isValid) {
            const updatedToken = Object.assign({ ...doc }, update)
            this.document.splice(index, 1, updatedToken)
            updatedTokensList.push(updatedToken)
          }
        }, this.#latency)
        resolve(updatedTokensList)
      })
    })
  }
}
