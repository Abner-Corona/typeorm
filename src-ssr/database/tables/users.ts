import { int, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";

export const usersTable = mysqlTable("users", {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  agex: int().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});
