import { IRequests } from "src/interfaces/globals"
import { rpmLinkListData } from "./mockdata"

export const RPMList: IRequests = async (request, response) => {
  const sql = 'SELECT * FROM RPMLink;'

  const [row] = await connection.query(sql)

  return response.json({ data: row, message: 'Encontramos os seguintes links.', success: true })
}

export const RPMIndex: IRequests = (request, response) => {
  const { id } = request.params

  return response.json({ data: rpmLinkListData[Number(id) - 1 ?? 0], message: 'Encontramos o link solicitado.', success: true })
}

export const RPMCreate: IRequests = async (request, response) => {
  const values = request.body

  const sql = 'INSERT INTO RPMLink(id, link) VALUES (?, ?, ?);'

  await connection.query(sql, values)

  return response.json({ message: 'O link foi criado com sucesso.', success: true })
}

export const RPMDelete: IRequests = (request, response) => {
  return response.json({ message: 'O link foi deletado com sucesso.', success: true })
}

export const RPMEdit: IRequests = (request, response) => {
  return response.json({ message: 'O link foi editado com sucesso.', success: true })
}