declare namespace NodeJS {
  interface ProcessEnv {
    PORT?: string;
    DB_PASSWORD?: string;
    DB?: string;
  }
}