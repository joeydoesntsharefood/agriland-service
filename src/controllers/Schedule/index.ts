import { IRequests } from "src/interfaces/globals"
import returnBase from "src/utils/returnBase"

export const ScheduleList: IRequests = (request, response) => {
  return response.json(returnBase({ data: [], message: 'Encontramos os seguintes eventos.', type: 'success' }))
}

export const ScheduleIndex: IRequests = (request, response) => {
  return response.json(returnBase({ data: [], message: 'Encontramo evento solicitado.', type: 'success' }))
}

export const ScheduleCreate: IRequests = (request, response) => {
  return response.json(returnBase({ data: [], message: 'O evento foi criado com sucesso.', type: 'success' }))
}

export const ScheduleDelete: IRequests = (request, response) => {
  return response.json(returnBase({ data: [], message: 'O evento foi deletado com sucesso.', type: 'success' }))
}

export const ScheduleEdit: IRequests = (request, response) => {
  return response.json(returnBase({ data: [], message: 'O evento foi editado com sucesso.', type: 'success' }))
}