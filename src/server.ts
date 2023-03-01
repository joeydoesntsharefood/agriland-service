import { localConfig } from '@config/_localConfig'
import app from './app'
import database from './config/database'

const port = localConfig.server.port ?? undefined
const host = localConfig.server.host ?? undefined

// database()

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