// 環境変数の読み込み
import dotenv from 'dotenv'
const appEnv = process.env.APP_ENV ?? 'local'
dotenv.config({ path: `${process.cwd()}/env/.env.${appEnv}` })

// これ以下にコードを書く

import express from 'express'
import { env } from './env'

const PORT = parseInt(process.env.PORT || '4000', 10)
const app = express()

app.get('/', (_, res) => {
  res.json({ hey: 'yo', nodeEnv: process.env.NODE_ENV ?? 'none', appEnv: env.appEnv ?? 'none' })
})

app.listen(PORT, () => {
  console.log(`start listening on port ${PORT}`)
})

export default app
