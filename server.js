const express = require('express')
const next = require('next')
const BodyParser = require('body-parser')
const Airtable = require('airtable')
const {
  join
} = require('path')

const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev
})
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()
    server.use(BodyParser.json())

    server.get('/p/:id', (req, res) => {
      const actualPage = '/post'
      const queryParams = {
        title: req.params.id
      }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/favicon.ico', (req, res) => {
      const favicon = join(__dirname, 'static', 'favicon.ico')
      return app.serveStatic(req, res, favicon)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })