import connect from "@config/database"
import { IRequests } from "src/interfaces/globals"
import { painelsListData } from "./mockdata"

export const PainelsList: IRequests = async (request, response) => {
  const conn = await connect()

  const sql = 'SELECT * FROM Painels;'

  const [row] = await conn.query(sql)

  return response.json({ data: row, message: 'Encontramos os seguintes paineis.', success: true })
}

export const PainelsIndex: IRequests = async (request, response) => {
  const { id } = request.params

  const conn = await connect()

  const sql = `SELECT * from Painels WHERE id=${id}`

  const [row] = await conn.query(sql)

  return response.json({ data: row, message: 'Encontramos o painel solicitado.', success: true })
}

export const PainelsCreate: IRequests = async (request, response) => {
  const conn = await connect()

  const values = request.body

  const sql = `INSERT INTO User (order, title, uri) VALUES (${values.order}, '${values.title}', '${values.uri}')`

  await conn.query(sql)

  return response.json({ message: 'O painel foi criado com sucesso.', success: true })
}

export const PainelsDelete: IRequests = async (request, response) => {
  return response.json({ message: 'O painel foi deletado com sucesso.', success: true })
}

export const PainelsEdit: IRequests = async (request, response) => {
  const conn = await connect()
  const { id } = request.params

  const values = request.body

  const sql = `UPDATE User SET order=${values.order}, title='${values.title}', uri='${values.uri}' WHERE id=${id}`

  await conn.query(sql)

  return response.json({ message: 'O painel foi editado com sucesso.', success: true })
}