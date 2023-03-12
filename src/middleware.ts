import dayjs from "dayjs"
import { Request, Response } from "express"

const logMiddleware = (req: Request, res: Response, next: any) => {
  const date = dayjs().format('HH:MM:ss')

  console.log(`[${req.method}] ${date} ${req.url}`)
  if (req.method === 'POST') console.log(req.body)
  
  return next()
}

export default logMiddleware