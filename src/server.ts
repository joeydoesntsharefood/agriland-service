import { localConfig } from '@config/_localConfig'
import express from 'express'
import router from './routes'
import cors from 'cors'
import connect from '@config/database'
import logMiddleware from './middleware'

// const app = express()

const port = process.env.NODE_ENV === 'production' ? process.env.PORT : localConfig.server.port

const app = express();

connect()

app.use(cors());

app.use('/', logMiddleware, router);

app.listen(port, () => {
  console.log(`Node server listening on port ${port}`)
})