import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mariadb",
  host: "localhost",
  port: 3306,
  username:
    process.env.NODE_ENV === "production" ? process.env.DB_USER : "root",
  password:
    process.env.NODE_ENV === "production" ? process.env.DB_PASSWORD : "",
  database: "template-quasar",
  entities: ["src-ssr/database/entity/*.{ts,js}"],
  migrationsTableName: "migration_table",
  migrations: ["src-ssr/database/migrations/*.{ts,js}"],
  synchronize: false,
});
