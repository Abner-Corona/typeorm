# Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2025-10-17 | Added Tsoa to the project for generating REST APIs with TypeScript decorators and automatic OpenAPI spec generation. | Tsoa provides type-safe API development, automatic route generation, and OpenAPI documentation, which aligns with the project's need for robust API capabilities in a TypeScript environment. |
| 2025-10-17 | Decidido colocar los controladores Tsoa en src-ssr para mantener la separación clara entre frontend (src) y backend/servidor (src-ssr). | Esto mantiene la arquitectura limpia, con el frontend en src y la lógica del servidor/API en src-ssr, aprovechando la estructura SSR de Quasar. |
