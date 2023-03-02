import { IRequests } from "src/interfaces/globals"

export const ScheduleList: IRequests = (request, response) => {
  return response.json({ data: [], message: 'Encontramos os seguintes eventos.', success: true })
}

export const ScheduleIndex: IRequests = (request, response) => {
  return response.json({ data: [], message: 'Encontramo evento solicitado.', success: true })
}

export const ScheduleCreate: IRequests = (request, response) => {
  return response.json({ data: [], message: 'O evento foi criado com sucesso.', success: true })
}

export const ScheduleDelete: IRequests = (request, response) => {
  return response.json({ data: [], message: 'O evento foi deletado com sucesso.', success: true })
}

export const ScheduleEdit: IRequests = (request, response) => {
  return response.json({ data: [], message: 'O evento foi editado com sucesso.', success: true })
}