/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REACT_APP_API_KEY: string
  readonly VITE_REACT_APP_AUTH_DOMAIN: string
  readonly VITE_REACT_APP_PROJECT_ID: string
  readonly VITE_REACT_APP_STORAGE_BUCKET: string
  readonly VITE_REACT_APP_MESSAGING_SENDER_ID: string
  readonly VITE_REACT_APP_APPID: string
  readonly VITE_REACT_APP_MEASUREMENT_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
