import { getUniqueId } from '../../utils.js'

import buildMakeUser from './makeUser.js'

const makeUser = buildMakeUser({ getUniqueId })

export default Object.freeze({ makeUser })