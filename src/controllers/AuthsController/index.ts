import { IRequests } from "src/interfaces/globals"

export const AuthSignin: IRequests = (request, response) => {
  return response.json({ message: 'Encontramos os seguintes locais.', success: true })
}