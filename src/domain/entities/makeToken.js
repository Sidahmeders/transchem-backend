export default function buildMakeToken({ getUniqueId }) {
  return function makeToken({
    id = getUniqueId(),
    token,
    userId,
    expires,
    type,
    blacklisted = false
  }) {

    return Object.freeze({
      get id() { return id },
      get token() { return token },
      get userId() { return userId },
      get expires() { return expires },
      get type() { return type },
      get blacklisted() { return blacklisted }
    })
  }
}