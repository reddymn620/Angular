
const Hapi = require('hapi')

// create a server with a host and port
const server = new Hapi.Server({  
  host: 'localhost',
  port: 3000
})

// const url = 'https://www.googleapis.com/books/v1/volumes/';

server.route({  
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Hello Future Studio!';
    }
  })

server.start().then(() => {
    console.log('Server running at:', server.info.uri)
  }).catch(err => {
    console.log(err)
    process.exit(1)
  })