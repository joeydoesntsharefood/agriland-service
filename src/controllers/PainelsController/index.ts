import { IRequests } from "src/interfaces/globals"
import { painelsListData } from "./mockdata"

export const PainelsList: IRequests = (request, response) => {
  return response.json({ data: painelsListData, message: 'Encontramos os seguintes paineis.', success: true })
}

export const PainelsIndex: IRequests = (request, response) => {
  const { id } = request.params

  return response.json({ data: painelsListData[Number(id) - 1 ?? 0], message: 'Encontramo painel solicitado.', success: true })
}

export const PainelsCreate: IRequests = (request, response) => {
  return response.json({ message: 'O painel foi criado com sucesso.', success: true })
}

export const PainelsDelete: IRequests = (request, response) => {
  return response.json({ message: 'O painel foi deletado com sucesso.', success: true })
}

export const PainelsEdit: IRequests = (request, response) => {
  return response.json({ message: 'O painel foi editado com sucesso.', success: true })
}