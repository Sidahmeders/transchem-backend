export default function cors() {
  return (req, callback) => {
    const development = true // process.env === 'development'
    const allowedOrigins = ['example.com', 'transchem.com']

    const corsOptions = {
      origin: development || allowedOrigins.includes(req.headers.origin),
      exposedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
      credentials: true,
      methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE']
    }
    // callback expects two parameters: error and options
    callback(null, corsOptions)
  }
}