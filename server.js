import fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import fastifyCookie from '@fastify/cookie'

import corsConfig from './src/config/cors.js'
import cookiesConfig from './src/config/cookies.js'
import routes from './src/apis/routes/index.js'

const app = fastify()

app.register(fastifyCors, corsConfig)
app.register(fastifyCookie, cookiesConfig)

routes.forEach(route => app.route(route))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server running on port ${PORT}...`))