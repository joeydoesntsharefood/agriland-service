import connect from "@config/database"
import { IRequests } from "src/interfaces/globals"

export const PainelsNameUse = async (name: string, id: string) => {
  try {
    const conn = await connect()

    const sql = `UPDATE PainelsNames SET name='${name}', inUse=true WHERE id=${id}`

    await conn.query(sql)
  } catch (err: any) {
    return err
  }
}

export const PainelsNameCreate: IRequests = async (req, res) => {
  try {
    const conn = await connect()

    const sql = `INSERT INTO PainelsNames (name, inUse) VALUES ('', false);`

    await conn.query(sql)

    return res.json({ message: 'Criamos o painel.', success: true })
  } catch (err: any) {
    return res.json({ message: err?.message, success: false })
  }
}

export const PainelInUse: IRequests = async (req, res) => {
  try {
    const conn = await connect()

    const sql = `SELECT * FROM PainelsNames WHERE inUse=1;`

    const [response] = await conn.query(sql)

    return res.json({ message: 'Encontramos os seguintes paineis.', success: true, data: response })
  } catch (err: any) {
    return res.json({ message: err?.message, success: false })
  }
}

export const PainelsNamesList: IRequests = async (req, res) => {
  try {
    const conn = await connect()

    const sql = `SELECT * FROM PainelsNames;`

    const [response] = await conn.query(sql)

    return res.json({ message: 'Encontramos os seguintes paineis.', success: true, data: response })
  } catch (err: any) {
    return res.json({ message: err?.message, success: false })
  }
}
