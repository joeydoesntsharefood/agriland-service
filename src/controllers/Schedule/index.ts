import { IRequests } from "src/interfaces/globals"
import { scheduleDataList } from "./mockdata"

export const ScheduleList: IRequests = (request, response) => {
  return response.json({ data: scheduleDataList, message: 'Encontramos os seguintes eventos.', success: true })
}

export const ScheduleIndex: IRequests = (request, response) => {
  const { id } = request.params

  return response.json({ data: scheduleDataList[Number(id) - 1 ?? 0], message: 'Encontramos o evento solicitado.', success: true })
}

export const ScheduleCreate: IRequests = (request, response) => {

  return response.json({ message: 'O evento foi criado com sucesso.', success: true })
}

export const ScheduleDelete: IRequests = (request, response) => {
  return response.json({ message: 'O evento foi deletado com sucesso.', success: true })
}

export const ScheduleEdit: IRequests = (request, response) => {
  return response.json({ message: 'O evento foi editado com sucesso.', success: true })
}