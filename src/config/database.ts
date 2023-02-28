import mysql from 'mysql2/promise'
import consoleTime from 'src/utils/consoleTime'
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

  try {
    const connection = await mysql.createConnection(stringDba)
    consoleTime.success(`Connect with DB ${stringName}`)
    
    global.connection = connection
  
    return connection
  } catch (err: any) {
    consoleTime.error(`Fail connect with DB ${stringName}`)
    console.log(err)
  }
}

export default connect