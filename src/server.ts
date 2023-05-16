import fastify from 'fastify'

const app = fastify()

app.post('/hello', () => {
  return 'hello'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('(★‿★) HTTP server running')
  })
