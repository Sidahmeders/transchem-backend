import fastify from 'fastify'
import corsConfig from './src/config/cors.js'
import cookiesConfig from './src/config/cookies.js'
import swaggerConfig from './src/config/swagger.js'
import routes from './src/apis/routes/index.js'

const app = fastify()

app.register(import('@fastify/cors'), corsConfig)
app.register(import('@fastify/cookie'), cookiesConfig)
app.register(import('@fastify/swagger'), swaggerConfig)

routes.forEach(route => app.route(route))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server running on port ${PORT}...`))