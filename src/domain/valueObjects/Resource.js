import Actions from "./Actions.js"

export default class Resource {
  constructor(subject = '', actions = new Actions()) {
    if (!(actions instanceof Actions)) throw Error('actions has to be an instance of Actions')
    this.subject = subject
    this.actions = actions
  }
}
