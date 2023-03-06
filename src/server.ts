import { localConfig } from '@config/_localConfig'
import app from './app'
import connect from '@config/database'

const port = process.env.NODE_ENV === 'production' ? process.env.PORT : localConfig.server.port
const host = localConfig.server.host ?? undefined

connect()

app.listen({
  port,
  callback: (err: any) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server is running on ${host}:${port}`)
  }
})
