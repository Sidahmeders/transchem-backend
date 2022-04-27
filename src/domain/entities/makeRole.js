export default function buildMakeRole({ Ability }) {
  return function makeRole({ name = '', permissions = [] }) {
    permissions.forEach((ability) => {
      if (!(ability instanceof Ability)) throw Error('props.permissions.ability has to be and instance of Ability')
    })

    return Object.freeze({
      get name() { return name },
      get permissions() { return permissions }
    })
  }
}