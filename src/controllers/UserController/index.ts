import connect from "@config/database"
import { IRequests } from "src/interfaces/globals"

const emailValidator = (email: string) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export const UserList: IRequests = async (request, response) => {
  const conn = await connect()

  const sql = 'SELECT * FROM User;'

  const [row] = await conn.query(sql)

  return response.json({ data: row, message: 'Encontramos os seguintes usuários.', success: true })
}

export const UserIndex: IRequests = async (request, response) => {
  const { id } = request.params

  const conn = await connect()

  const sql = `SELECT * from User WHERE id=${id}`

  const [row] = await conn.query(sql)

  return response.json({ data: row, message: 'Encontramos o usuário solicitado.', success: true })
}

export const UserCreate: IRequests = async (request, response) => {
  try {
    const values = request.body
    let errors = []

    const { 
      name,
      lastName,
      email,
      accessLevel
    } = values

    if (!name) errors.push({ message: 'Insira um nome válido.', key: 'name' })
    if (!lastName) errors.push({ message: 'Insira um sobrenome válido.', key: 'lastName' })
    if (!email || !emailValidator(email)) errors.push({ message: 'Insira um e-mail válido.', key: 'email' })
    if (!accessLevel) errors.push({ message: 'Selecione um level de acesso.', key: 'accessLevel' })

    if (errors.length !== 0) return response.status(422).send({ message: 'Alguns campos estão invalídos.', error: errors })
    
    const conn = await connect()

    const sql = `INSERT INTO User (instituition, firstAccess, accessLevel, name, lastName, phone, areaOfIntrest, partOf, email, corpEmail, corp, role, acceptTerms, passwordHash, passwordSalt, verificationToken, verifiedAt, passwordResetToken, resetTokenExpires, rpmId) VALUES ('${values.institution}', ${true}, '${values.accessLevel}', '${values.name}', '${values.lastName}', '${values.phone}', '', false, '${values.email}', '', '', '', ${false}, '', 10, '', '', '', '', 0)`

    await conn.query(sql)

    return response.json({ message: 'O usuário foi pré cadastrado.', success: true })
  } catch (err: any) {
    return response.json({ message: 'Algo não saiu conforme o esperado.' })
  }
}

export const UserDelete: IRequests = async (request, response) => {
  const conn = await connect()

  const { id } = request.params

  const sql = `DELETE from User WHERE id=${id};`

  await conn.query(sql)

  return response.json({ message: 'O usuário foi deletado com sucesso.', success: true })
}

export const UserEdit: IRequests = async (request, response) => {
  return response.json({ message: 'O usuário foi editado com sucesso.', success: true })
}