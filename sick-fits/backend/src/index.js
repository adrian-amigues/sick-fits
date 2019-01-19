const cookieParser = require('cookie-parser')

require('dotenv').config({ path: 'variables.env' })
const createServer = require('./createServer')
const db = require('./db')

const server = createServer()

// TODO user express middleware to handle cookies (JWT)
server.express.use(cookieParser())
// TODO user express middleware to populate current user

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  deets => {
    console.log(
      `Hey it's me. Server is now running on http://localhost:${deets.port}`
    )
  }
)
