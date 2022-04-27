import Actions from "./Actions.js"

export default class Ability {
  constructor(actions = new Actions(), subject = '') {
    if (!(actions instanceof Actions)) throw Error('actions has to be an instance of Actions')
    this.actions = actions
    this.subject = subject
  }
}
