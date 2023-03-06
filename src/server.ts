import { localConfig } from '@config/_localConfig'
import app from './app'
import mysql from 'mysql'

const port = process.env.NODE_ENV === 'production' ? process.env.PORT : localConfig.server.port
const host = localConfig.server.host ?? undefined

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

export const connection = mysql.createConnection({
  host: localConfig.dba.host,
  user: localConfig.dba.user,
  password: localConfig.dba.password,
  database: localConfig.dba.data,
  port: localConfig.dba.port
})