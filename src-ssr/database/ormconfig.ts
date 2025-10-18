import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST!,
  port: parseInt(process.env.DB_PORT!),
  username: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_NAME!,
  entities: ["src-ssr/database/tables/*.{ts,js}"],
  migrationsTableName: "migration_table",
  migrations: ["src-ssr/database/migrations/*.{ts,js}"],
  synchronize: false,
});
