import connect from "@config/database"
import { IRequests } from "src/interfaces/globals"
import bcrypt from 'bcrypt'

export const AuthSignup: IRequests = async (request, response) => {
  const conn = await connect()

  const values = request.body

  const sql = `INSERT INTO User (id, firstAccess, accessLevel, name, phone, areaOfIntrest, partOf, email, corpEmail, corp, role, acceptTerms, passwordHash, passwordSalt, verificationToken, verifiedAt, passwordResetToken, resetTokenExpires, rpmId) VALUES (${values.id}, ${values.firstAccess},' ${values.accessLevel}', '${values.name}',' ${values.phone}',' ${values.areaOfIntrest}', ${values.partOf}, '${values.email}', '${values.corpEmail}', '${values.corp}', '${values.role}', ${values.acceptTerms}, '${values.passwordHash}', ${values.passwordSalt}, '${values.verificationToken}', '${values.verifiedAt}', '${values.passwordResetToken}', '${values.resetTokenExpires}', ${values.rpmId})`

  await conn.query(sql)

  return response.json({ message: 'Usuario criado com sucesso.', success: true })
}

export const AuthSignin: IRequests = async (request, response) => {
  console.log('bateu')
  try {
    const { email, password } = request.body

    if (!email || !password) return response.json({ message: 'Insira os dados de acesso.', success: false })

    const conn = await connect()
  
    const sql = `SELECT * from User WHERE email='spntn.mateus@gmail.com'`
  
    const [row] = await conn.query(sql)

    const dbaValues = row[0]

    if (dbaValues?.email !== email) throw new Error('E-mail não cadastrado')

    const compare = await bcrypt.compare(password, dbaValues?.passwordHash)

    if (!compare) return response.json({ message: 'Os dados de acesso estão incorretos.', success: false })

    const userData = {
      accessLevel: dbaValues?.accessLevel,
      name: dbaValues?.name,
      phone: dbaValues?.phone,
      areaOfIntrest: dbaValues?.areaOfIntrest,
      partOf: dbaValues?.partOf,
      email: dbaValues?.email,
      corpEmail: dbaValues?.corpEmail,
      corp: dbaValues?.corp,
      role: dbaValues?.role,
      rpmId: dbaValues?.rpmId,
      instituition: dbaValues?.instituition,
      lastName: dbaValues?.lastName,
      occupation: dbaValues?.occupation,
    }
  
    return response.json({ message: 'Foi possível autenticar os dados', success: true, userData })
  } catch (err: any) {
    return response.json({ message: err?.message })
  }
}



