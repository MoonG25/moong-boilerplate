import * as express from 'express'
import * as next from 'next'
import * as helmet from 'helmet'
import nextI18NextMiddleware from 'next-i18next/middleware'
import nextI18next from '../i18n'

const port = process.env.PORT || 3000
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express()

  server.use(nextI18NextMiddleware(nextI18next))
  server.use(helmet())

  server.get('/showcase/:symbol', (req, res) => {
    return app.render(req, res, '/showcase', { symbol: req.params.symbol })
  })

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, err => {
    if (err) throw err

    console.log(`> Ready on http://localhost:${port}`)
  })
})