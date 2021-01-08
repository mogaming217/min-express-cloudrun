import * as admin from 'firebase-admin'
import { env } from '../env'

if (admin.apps.length === 0) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const config: any = {
    type: 'service_account',
    ...env.firebase,
  }

  admin.initializeApp({
    credential: admin.credential.cert(config),
    databaseURL: process.env.PUBLIC_DATABASE_URL,
  })
}

export default admin
