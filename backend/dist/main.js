"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const all_expections_filter_1 = require("./all-expections.filter");
const corsOptions_1 = require("./config/corsOptions");
const helmet_1 = require("helmet");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const { httpAdapter } = app.get(core_1.HttpAdapterHost);
    app.useGlobalFilters(new all_expections_filter_1.AllExceptionsFilter(httpAdapter));
    app.enableCors(corsOptions_1.default);
    app.use((0, helmet_1.default)());
    app.setGlobalPrefix('api');
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map