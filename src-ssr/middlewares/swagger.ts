import { defineSsrMiddleware } from "#q-app/wrappers";

import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "../routesGenerate/routes";
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli-vite/developing-ssr/ssr-middleware
export default defineSsrMiddleware(
  async ({ app /*, resolveUrlPath, publicPath, render */ }) => {
    // something to do with the server "app"
    app.use(
      "/swagger",
      swaggerUi.serve,
      swaggerUi.setup(require("../swaggerGenerate/swagger.json"))
    );
    RegisterRoutes(app);
  }
);
