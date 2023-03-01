import { IRequests } from "src/interfaces/globals"

const InitialController: IRequests = (request, response) => {

  return response.json({ message: 'Hello World' })
}

export default InitialController