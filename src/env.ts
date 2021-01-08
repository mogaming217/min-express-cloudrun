/* eslint-disable @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-explicit-any */
interface ServerEnv {
  appEnv: AppEnv
  firebase: { [key: string]: string }
}

type AppEnv = 'local' | 'dev' | 'prod'

// ブラウザから触ると落ちるようにしている
export const env: ServerEnv = (() => {
  return {
    appEnv: process.env.APP_ENV,
    firebase: {
      project_id: process.env.PUBLIC_PROJECT_ID,
      private_key_id: process.env.PRIVATE_KEY_ID,
      private_key: process.env.PRIVATE_KEY!.replace(/\\n/g, '\n'),
      client_email: process.env.CLIENT_EMAIL,
      client_id: process.env.CLIENT_ID,
      auth_uri: process.env.AUTH_URI,
      token_uri: process.env.TOKEN_URI,
      auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_URL,
      client_x509_cert_url: process.env.CLIENT_CERT_URL,
    },
  } as ServerEnv
})()
