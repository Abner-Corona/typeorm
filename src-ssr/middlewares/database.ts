import { ssrMiddleware } from "quasar/wrappers";
import { DataSource } from "typeorm";
const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST!,
  port: parseInt(process.env.DB_PORT!),
  username: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_NAME!,
  entities: ["src-ssr/database/entity/*.{ts,js}"],
  migrationsTableName: "migration_table",
  migrations: ["src-ssr/database/migrations/*.{ts,js}"],
  synchronize: false,
});

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/developing-ssr/ssr-middlewares
export default ssrMiddleware(async () => {
  try {
    await AppDataSource.initialize();
  } catch (error) {
    console.error("Error during Data Source initialization:", error);
  }
});
