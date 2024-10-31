import { ConsoleLogger } from '@nestjs/common';
export declare class LoggerService extends ConsoleLogger {
    logToFile(entry: string): Promise<void>;
    log(message: string, context?: string, ip?: string): void;
    error(message: string | object, stackOrContext?: string, ip?: string, requestBody?: string): void;
}
