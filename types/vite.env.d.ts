/// <reference types="vite/client" />

interface ImportMetaEnv {
  // 请求路径
  readonly VITE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
