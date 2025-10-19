import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "src-ssr/database/migrations",
  schema: "src-ssr/database/tables/*.{ts,js}",
  dialect: "mysql",
  dbCredentials: {
    host: process.env.DB_HOST!,
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
  },
});
