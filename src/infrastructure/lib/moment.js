export class Time {
  constructor() {
    this.second = 1000
    this.minute = this.second * 60
    this.hour = this.minute * 60
    this.day = this.hour * 24
    this.week = this.day * 7
    this.month = this.day * 30
    this.year = this.month * 12
  }
}

export default class MomentJs extends Date {
  static unix(timestamp = Date.now()) {
    const unixTime = (timestamp / 1000).toFixed(0)
    return parseInt(unixTime)
  }

  /**
   * @param {Number} number
   * @param {('minute' | 'hour' | 'day' | 'week' | 'month' | 'year')} string
   */
  static add(number, string) {
    const validParams = ['minute', 'hour', 'day', 'week', 'month', 'year']
    if (!validParams.includes(string)) {
      throw Error(`unvalid string field. got: "${string}" but expected: [${validParams.toString().replace(/,/g, ' | ')}]`)
    }
    const currentTime = new Date().getTime()
    const timeToAdd = number * new Time()[string]
    const newTime = new Date(currentTime + timeToAdd)
    return newTime
  }
}
