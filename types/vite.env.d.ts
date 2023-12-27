/// <reference types="vite/client" />

interface ImportMetaEnv {
  // 请求路径
  readonly VITE_BASE_URL: string;
  // API 前缀
  readonly VITE_BASE_API_PREFIX: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
