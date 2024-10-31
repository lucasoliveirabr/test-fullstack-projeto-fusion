"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const fs_1 = require("fs");
const path = require("path");
let LoggerService = class LoggerService extends common_1.ConsoleLogger {
    async logToFile(entry) {
        const formattedEntry = `${Intl.DateTimeFormat('pt-BR', {
            dateStyle: 'short',
            timeStyle: 'long',
            timeZone: 'America/Sao_Paulo',
        }).format(new Date())}\t${entry}\n`;
        try {
            if (!fs.existsSync(path.join(__dirname, '..', '..', 'logs'))) {
                await fs_1.promises.mkdir(path.join(__dirname, '..', '..', 'logs'));
            }
            await fs_1.promises.appendFile(path.join(__dirname, '..', '..', 'logs', 'logFile.log'), formattedEntry);
        }
        catch (e) {
            if (e instanceof Error) {
                console.error(e.message);
            }
            else {
                console.error(`Unexpected error:\n${e}`);
            }
        }
    }
    log(message, context, ip) {
        const entry = `LOG\t${ip}\t${context}\t${message}`;
        this.logToFile(entry);
        super.log(message, context);
    }
    error(message, stackOrContext, ip, requestBody) {
        const entry = `ERROR\t${ip}\t${stackOrContext}\t${message}\t${requestBody}`;
        this.logToFile(entry);
        super.error(message, stackOrContext);
    }
};
exports.LoggerService = LoggerService;
exports.LoggerService = LoggerService = __decorate([
    (0, common_1.Injectable)()
], LoggerService);
//# sourceMappingURL=logger.service.js.map