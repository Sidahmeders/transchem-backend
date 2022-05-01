export default function buildMakeRole({ getUniqueId, buildImages }) {
  return function makeRole({
    id = getUniqueId(),
    imagesURL = buildImages(1),
    name = '',
    createdByRole = '',
    createdByUser = '',
    permissions = []
  }) {

    return Object.freeze({
      get id() { return id },
      get imagesURL() { return imagesURL },
      get name() { return name },
      get createdByRole() { return createdByRole },
      get createdByUser() { return createdByUser },
      get permissions() { return permissions }
    })
  }
}