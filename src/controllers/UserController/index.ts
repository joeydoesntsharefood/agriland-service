import { IRequests } from "src/interfaces/globals"
import { userListData } from "./mockdata"

export const UserList: IRequests = (request, response) => {
  return response.json({ data: userListData, message: 'Encontramos os seguintes eventos.', success: true })
}

export const UserIndex: IRequests = (request, response) => {
  const { id } = request.params

  return response.json({ data: userListData[Number(id) - 1 ?? 0], message: 'Encontramo evento solicitado.', success: true })
}

export const UserCreate: IRequests = (request, response) => {
  return response.json({ message: 'O evento foi criado com sucesso.', success: true })
}

export const UserDelete: IRequests = (request, response) => {
  return response.json({ message: 'O evento foi deletado com sucesso.', success: true })
}

export const UserEdit: IRequests = (request, response) => {
  return response.json({ message: 'O evento foi editado com sucesso.', success: true })
}