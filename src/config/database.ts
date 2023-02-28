import mysql from 'mysql2/promise'
import { localConfig } from './_localConfig'

const connect = async () => {
  const stringDba: string | undefined = localConfig.server.stringDba ?? undefined
  const stringName: string | undefined = localConfig.server.stringName ?? undefined

  if (!stringDba || !stringName) {
    console.log(`Fail connect with DB ${stringName}`)
    return null
  }

  if (global.connection && global.connection !== "disconnected")
    return global.connection

  const connection = await mysql.createConnection(stringDba)
  console.log(`Connect with DB ${stringName}`)

  global.connection = connection
  
  return connection
}

export default connect