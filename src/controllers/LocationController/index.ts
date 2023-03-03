import { IRequests } from "src/interfaces/globals"
import { locationDataList } from "./mockdata"

export const LocationList: IRequests = (request, response) => {
  return response.json({ data: locationDataList, message: 'Encontramos os seguintes locais.', success: true })
}

export const LocationIndex: IRequests = (request, response) => {
  const { id } = request.params

  return response.json({ data: locationDataList[Number(id) - 1 ?? 0], message: 'Encontramos o local solicitado.', success: true })
}

export const LocationCreate: IRequests = (request, response) => {
  return response.json({ message: 'O local foi criado com sucesso.', success: true })
}

export const LocationDelete: IRequests = (request, response) => {
  return response.json({ message: 'O local foi deletado com sucesso.', success: true })
}

export const LocationEdit: IRequests = (request, response) => {
  return response.json({ message: 'O local foi editado com sucesso.', success: true })
}