import connect from "@config/database"
import { IRequests } from "src/interfaces/globals"

export const UserList: IRequests = async (request, response) => {
  const conn = await connect()

  const sql = 'SELECT * FROM User;'

  const [row] = await conn.query(sql)

  return response.json({ data: row, message: 'Encontramos os seguintes links.', success: true })
}

export const UserIndex: IRequests = async (request, response) => {
  const { id } = request.params

  const conn = await connect()

  const sql = `SELECT * from User WHERE id=${id}`

  const [row] = await conn.query(sql)

  return response.json({ data: row, message: 'Encontramos o link solicitado.', success: true })
}

export const UserCreate: IRequests = async (request, response) => {
  const conn = await connect()

  const values = request.body

  const sql = `INSERT INTO User (id, firstAccess, accessLevel, name, phone, areaOfIntrest, partOf, email, corpEmail, corp, role, acceptTerms, passwordHash, passwordSalt, verificationToken, verifiedAt, passwordResetToken, resetTokenExpires, rpmId) VALUES (${values.id}, ${values.firstAccess}, ${values.accessLevel}, ${values.name}, ${values.phone}, ${values.areaOfIntrest}, ${values.partOf}, ${values.email}, ${values.corpEmail}, ${values.corp}, ${values.role}, ${values.acceptTerms}, ${values.passwordHash}, ${values.passwordSalt}, ${values.verificationToken}, ${values.verifiedAt}, ${values.passwordResetToken}, ${values.resetTokenExpires}, ${values.rpmId})`

  await conn.query(sql)

  return response.json({ message: 'O link foi criado com sucesso.', success: true })
}

export const UserDelete: IRequests = async (request, response) => {
  const conn = await connect()

  const { id } = request.params

  const sql = `DELETE from User WHERE id=${id};`

  await conn.query(sql)

  return response.json({ message: 'O link foi deletado com sucesso.', success: true })
}

export const UserEdit: IRequests = async (request, response) => {
  return response.json({ message: 'O link foi editado com sucesso.', success: true })
}