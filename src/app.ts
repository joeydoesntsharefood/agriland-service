import express from 'express'
import router from './routes'
import cors from 'cors'

const app = express()

const allowlist = ['*', 'http://localhost']

const corsOptionsDelegate = function (req: any, callback: any) {
  console.log('usando cors')
  
  let corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }
  } else {
    corsOptions = { origin: false }
  }
  callback(null, corsOptions)
}

app.use(express.json())
app.use(router)
app.use(cors(corsOptionsDelegate))

export default app