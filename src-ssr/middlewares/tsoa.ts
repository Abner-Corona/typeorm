import { defineSsrMiddleware } from "#q-app/wrappers";
import {
  generateSpec,
  ExtendedSpecConfig,
  ExtendedRoutesConfig,
  generateRoutes,
} from "tsoa";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli-vite/developing-ssr/ssr-middleware
export default defineSsrMiddleware(async () => {
  // something to do with the server "app"
  const specOptions: ExtendedSpecConfig = {
    basePath: "/api",
    entryFile: "./src-ssr/server.ts",
    specVersion: 3,
    outputDirectory: "./src-ssr/swaggerGenerate",
    controllerPathGlobs: ["./src-ssr/controllers/**/*.ts"],
    noImplicitAdditionalProperties: "throw-on-extras",
  };

  const routesOptions: ExtendedRoutesConfig = {
    basePath: "/api",
    entryFile: "./src-ssr/server.ts",
    controllerPathGlobs: ["./src-ssr/controllers/**/*.ts"],
    routesDir: "./src-ssr/routesGenerate",
    noImplicitAdditionalProperties: "throw-on-extras",
    bodyCoercion: true,
  };

  await generateSpec(specOptions);
  await generateRoutes(routesOptions);
});
