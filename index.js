const http = require('http')
const process = require('process')
require('dotenv').config()

const hostname = process.env.HOST
const port = process.env.PORT

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Hello!!</h1>')
})

server.listen(port, hostname, () => {
  console.log(`Server ${hostname}:${port}`)
})
