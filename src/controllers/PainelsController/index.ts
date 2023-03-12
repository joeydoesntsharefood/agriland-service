import connect from "@config/database"
import { PainelsNameUse } from "@controllers/PainelsName"
import { IRequests } from "src/interfaces/globals"
import { IPainel } from "./types"

export const PainelsList: IRequests = async (request, response) => {
  try {
    const conn = await connect()
  
    const sql = 'SELECT * FROM Painels;'
  
    const [row] = await conn.query(sql)
  
    return response.json({ data: row, message: 'Encontramos os seguintes paineis.', success: true })
  } catch (err: any) {
    return response.json({ message: err.message, success: false })
  }
}

export const PainelsIndex: IRequests = async (request, response) => {
  try {
    const { id } = request.params

    const conn = await connect()
  
    const sql = `SELECT * from Painels WHERE painelId=${id}`
  
    const [row] = await conn.query(sql)
  
    return response.json({ data: row, message: 'Encontramos o painel solicitado.', success: true })

  } catch (err: any) {
    return response.json({ message: err.message, success: false })
  }
}

export const PainelsCreate: IRequests = async (request, response) => {
  try {
    const conn = await connect()
  
    const values = request.body
  
    const sql = `INSERT INTO Painels (painelTitle, orderExp, title, uri, painelId) VALUES ('${values.painelTitle}', ${values.orderExp}, '${values.title}', '${values.uri}', ${values.painelId})`
  
    await conn.query(sql)
  
    return response.json({ message: 'O painel foi criado com sucesso.', success: true })
  } catch (err: any) {
    return response.json({ message: err?.message, success: false })
  }
}

export const PainelsDelete: IRequests = async (request, response) => {
  try {
    const conn = await connect()
  
    const { id } = request.params
  
    const sql = `DELETE from Painels WHERE painelId=${id};`
  
    await conn.query(sql)
  
    return response.json({ message: 'O painel foi deletado com sucesso.', success: true })
  } catch (err: any) {
    return response.json({ message: err?.message, success: false })
  }
}

export const PainelsEdit: IRequests = async (request, response) => {
  try {
    const conn = await connect()
    const { id } = request.params
  
    const values = request.body
  
    const sql = `UPDATE Painels SET orderExp=${values.orderExp}, title='${values.title}', uri='${values.uri}', painelId=${values.painelId} WHERE id=${id}`
  
    await conn.query(sql)
  
    return response.json({ message: 'O painel foi editado com sucesso.', success: true })
  }
  catch (err: any) {
    return response.json({ message: err?.message, success: false })
  }
}

export const PainelAddContent: IRequests = async (request, response) => {
  try {
    const conn = await connect()
  
    const { id } = request.params
    
    const { contents, painelName } = request.body

    if (!painelName) return response.json({ error: [{ message: 'Insira um título válido.', key: 'painelName' }] })

    await PainelsNameUse(painelName, id)
   
    Promise.all(contents.forEach(async ({ domain, file, folder, orderExp, title, painelTitle }: IPainel) => {
      const uri = `${domain}${folder}${file}`
  
      const sql = `INSERT INTO Painels (painelTitle, orderExp, title, uri, painelId) VALUES ('${painelTitle}', ${orderExp}, '${title}', '${uri}', ${id})`
  
      await conn.query(sql)
    }))
  
    return response.json({ message: 'O conteudo foi adicionado ao painel com sucesso.', success: true })
  } catch (err: any) {
    return response.json({ message: err?.message, success: false })
  }
}