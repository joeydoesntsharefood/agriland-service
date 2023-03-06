import mysql from 'mysql2/promise'
import { localConfig } from './_localConfig'

const connect = async () => {
  const prod = process.env.NODE_ENV === 'production' ? 'dba' : 'dbaDev'

  if (global.connection && global.connection !== "disconnected")
    return global.connection

  try {
    const connection = await mysql.createConnection({
      host: localConfig?.[prod].host,
      user: localConfig?.[prod].user,
      password: localConfig?.[prod].password,
      database: localConfig?.[prod].data,
      port: localConfig?.[prod].port
    })
    console.log(`Connect with DB ${localConfig.dba.data}`)
    
    global.connection = connection
  
    return connection
  } catch (err: any) {
    console.log(err)
  }
}

export default connect