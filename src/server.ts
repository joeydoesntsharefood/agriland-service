import { localConfig } from '@config/_localConfig'
import express from 'express'
import database from './config/database'

const app = express()
const port = localConfig.server.port ?? undefined
const host = localConfig.server.host ?? undefined

database()

app.get('/', (req, res) => {
  return res.json({ message: 'teste' })
})

app.listen({
  port,
  host,
  callback: (err: any) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server is running on ${host}:${port}`)
  }
})

