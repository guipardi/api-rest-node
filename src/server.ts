import fastify from 'fastify'

const app = fastify()

/* Create one route => https://localhost:3333/hello */
app.get('/hello', () => {
  return 'Hello World!'
})

/* Running the server on port: 3333 */
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server is running')
  })
