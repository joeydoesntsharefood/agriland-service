import connect from "@config/database"
import { IRequests } from "src/interfaces/globals"

export const AuthSignup: IRequests = async (request, response) => {
  const conn = await connect()

  const values = request.body

  const sql = `INSERT INTO User (id, firstAccess, accessLevel, name, phone, areaOfIntrest, partOf, email, corpEmail, corp, role, acceptTerms, passwordHash, passwordSalt, verificationToken, verifiedAt, passwordResetToken, resetTokenExpires, rpmId) VALUES (${values.id}, ${values.firstAccess},' ${values.accessLevel}', '${values.name}',' ${values.phone}',' ${values.areaOfIntrest}', ${values.partOf}, '${values.email}', '${values.corpEmail}', '${values.corp}', '${values.role}', ${values.acceptTerms}, '${values.passwordHash}', ${values.passwordSalt}, '${values.verificationToken}', '${values.verifiedAt}', '${values.passwordResetToken}', '${values.resetTokenExpires}', ${values.rpmId})`

  await conn.query(sql)

  return response.json({ message: 'Usuario criado com sucesso.', success: true })
}

export const AuthSignin: IRequests = async (request, response) => {
  const values = request.body

  const conn = await connect()

  const sql = `SELECT * from User WHERE email='${values.email}'`

  const [row] = conn.query(sql)

  console.log(row)

  return response.json({ message: 'Não foi possível logar. Dados incorretos.', success: false })
}