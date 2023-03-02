import { localConfig } from '@config/_localConfig'
import app from './app'

const port = process.env.NODE_ENV === 'production' ? process.env.PORT : localConfig.server.port
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