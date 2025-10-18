import { ssrMiddleware } from "quasar/wrappers";
import { AppDataSource } from "src-ssr/database/ormconfig";
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/developing-ssr/ssr-middlewares
export default ssrMiddleware(async () => {
  try {
    await AppDataSource.initialize();
  } catch (error) {
    console.error("Error during Data Source initialization:", error);
  }
});
