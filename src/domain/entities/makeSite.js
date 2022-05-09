export default function buildMakeSite({ getUniqueId }) {
  return function makeSite({
    type = 'Feature',
    geometry = {},
    properties = {}
  }) {
    if (!geometry.type) throw Error('Site must have geometry.type')
    if (!geometry.coordinates || geometry.coordinates.length !== 2) throw Error('Site must have geometry.coordinates as [lat, lon]')
    properties.id = getUniqueId()

    return Object.freeze({
      get type() { return type },
      get geometry() { return geometry },
      get properties() { return properties }
    })
  }
}