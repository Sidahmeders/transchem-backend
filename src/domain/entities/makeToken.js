export default function buildMakeToken({ getUniqueId }) {
  return function makeToken({
    id = getUniqueId(),
    token,
    user,
    expires,
    type,
    blacklisted = false
  }) {

    return Object.freeze({
      get id() { return id },
      get token() { return token },
      get user() { return user },
      get expires() { return expires },
      get type() { return type },
      get blacklisted() { return blacklisted }
    })
  }
}