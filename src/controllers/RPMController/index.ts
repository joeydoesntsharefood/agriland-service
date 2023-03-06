import connect from "@config/database"
import { IRequests } from "src/interfaces/globals"

export const RPMList: IRequests = async (request, response) => {
  const conn = await connect()

  const sql = 'SELECT * FROM RPMLink;'

  const [row] = await conn.query(sql)

  return response.json({ data: row, message: 'Encontramos os seguintes links.', success: true })
}

export const RPMIndex: IRequests = async (request, response) => {
  const { id } = request.params

  const conn = await connect()

  const sql = `SELECT * from RPMLink WHERE id=${id}`

  const [row] = await conn.query(sql)

  return response.json({ data: row, message: 'Encontramos o link solicitado.', success: true })
}

export const RPMCreate: IRequests = async (request, response) => {
  const conn = await connect()

  const values = request.body

  const sql = `INSERT INTO RPMLink (id, link) VALUES (${values?.id}, '${values.link}');`

  await conn.query(sql)

  return response.json({ message: 'O link foi criado com sucesso.', success: true })
}

export const RPMDelete: IRequests = async (request, response) => {
  const conn = await connect()

  const { id } = request.params

  const sql = `DELETE from livros WHERE id=${id};`

  await conn.query(sql)

  return response.json({ message: 'O link foi deletado com sucesso.', success: true })
}

export const RPMEdit: IRequests = async (request, response) => {
  const conn = await connect()

  const { id } = request.params
  const { link } = request.body

  const sql = `UPDATE RPMLink SET link='${link}' WHERE id=${id};`

  await conn.query(sql)

  return response.json({ message: 'O link foi editado com sucesso.', success: true })
}