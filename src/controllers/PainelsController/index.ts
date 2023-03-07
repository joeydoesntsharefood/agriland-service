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

  const sql = `SELECT * from Painels WHERE painelId=${id}`

  const [row] = await conn.query(sql)

  const data = row.map(({ orderExp, painelId, title, uri }: {orderExp: number, title: string, uri: string, painelId: number}) => ({ orderExp, title, uri }))

  return response.json({ data, message: 'Encontramos o painel solicitado.', success: true })
}

export const PainelsCreate: IRequests = async (request, response) => {
  const conn = await connect()

  const values = request.body

  const sql = `INSERT INTO Painels (orderExp, title, uri, painelId) VALUES (${values.orderExp}, '${values.title}', '${values.uri}', ${values.painelId})`

  await conn.query(sql)

  return response.json({ message: 'O painel foi criado com sucesso.', success: true })
}

export const PainelsDelete: IRequests = async (request, response) => {
  const conn = await connect()

  const { id } = request.params

  const sql = `DELETE from Painels WHERE painelId=${id};`

  await conn.query(sql)

  return response.json({ message: 'O painel foi deletado com sucesso.', success: true })
}

export const PainelsEdit: IRequests = async (request, response) => {
  const conn = await connect()
  const { id } = request.params

  const values = request.body

  const sql = `UPDATE Painels SET orderExp=${values.orderExp}, title='${values.title}', uri='${values.uri}', painelId=${values.painelId} WHERE id=${id}`

  await conn.query(sql)

  return response.json({ message: 'O painel foi editado com sucesso.', success: true })
}