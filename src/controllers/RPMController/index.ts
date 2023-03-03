import { IRequests } from "src/interfaces/globals"
import { rpmLinkListData } from "./mockdata"

export const RPMList: IRequests = (request, response) => {
  return response.json({ data: rpmLinkListData, message: 'Encontramos os seguintes links.', success: true })
}

export const RPMIndex: IRequests = (request, response) => {
  const { id } = request.params

  return response.json({ data: rpmLinkListData[Number(id) - 1 ?? 0], message: 'Encontramos o link solicitado.', success: true })
}

export const RPMCreate: IRequests = (request, response) => {
  return response.json({ message: 'O link foi criado com sucesso.', success: true })
}

export const RPMDelete: IRequests = (request, response) => {
  return response.json({ message: 'O link foi deletado com sucesso.', success: true })
}

export const RPMEdit: IRequests = (request, response) => {
  return response.json({ message: 'O link foi editado com sucesso.', success: true })
}