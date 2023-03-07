import { IRequests } from "src/interfaces/globals"

export const Redirect: IRequests = (request, response) => {
	const values = request.body

	console.log(values)

  return response.json({ message: 'O redirecionamento foi solicitado.' })
}