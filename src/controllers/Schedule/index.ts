import connect from "@config/database"
import { IRequests } from "src/interfaces/globals"

const formatData = (value: any) => {
  let startAt
  let endAt
  if (value.startAt) {
    const [date, time] = value.startAt.split('T')

    const [year, month, day] = date.split('-')
    const [hour, minute] = time.split(':')

    startAt = { day, month, year, hour, minute, seconds: 0 }
  }
  if (value.endAt) {
    const [date, time] = value.endAt.split('T')

    const [year, month, day] = date.split('-')
    const [hour, minute] = time.split(':')

    endAt = { day, month, year, hour, minute, seconds: 0 }
  }

  return { ...value, startAt, endAt }
}

export const ScheduleList: IRequests = async (request, response) => {
  const { search } = request.query
  const conn = await connect()

  const sql = search ? `SELECT * FROM Schedule WHERE eventName LIKE '${search}%';` : 'SELECT * FROM Schedule;'

  const [row] = await conn.query(sql)

  return response.json({ data: row.map(formatData), message: 'Encontramos os seguintes eventos.', success: true })
}

export const ScheduleIndex: IRequests = async (request, response) => {
  const { id } = request.params

  const conn = await connect()

  const sql = `SELECT * from Schedule WHERE id=${id}`

  const [row] = await conn.query(sql)

  return response.json({ data: formatData(row), message: 'Encontramos o evento solicitado.', success: true })
}

export const ScheduleCreate: IRequests = async (request, response) => {
  const conn = await connect()

  const values = request.body

  const sql = `INSERT INTO Schedule (ownerId, isEventOpen, hostId, eventName, chain, placeId, placeName, startAt, endAt, invitesId) VALUES ('${values.ownerId}', ${values.isEventOpen}, '${values.hostId}', '${values.eventName}', '${values.chain}', ${values.placeId}, '${values.placeName}', '${values.startAt}', '${values.endAt}', '${values.invitesId}');`
  
  await conn.query(sql)
  return response.json({ message: 'O link foi criado com sucesso.', success: true })
}

export const ScheduleDelete: IRequests = (request, response) => {
  return response.json({ message: 'O evento foi deletado com sucesso.', success: true })
}

export const ScheduleEdit: IRequests = async (request, response) => {
  const conn = await connect()

  const { id } = request.params
  const values = request.body

  const sql = `UPDATE RPMLink SET ownerId=${values.ownerId},
  isEventOpen=${values.isEventOpen},
  hostId=${values.hostId},
  eventName='${values.eventName}',
  chain='${values.chain}',
  placeId=${values.placeId},
  placeName='${values.placeName}',
  startAt='${values.startAt}',
  endAt='${values.endAt}',
  invitesId='${values.invitesId.toString()}' WHERE id=${id};`

  await conn.query(sql)

  return response.json({ message: 'O link foi editado com sucesso.', success: true })
}
