import { ConsoleLogger, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { promises as fsPromises } from 'fs';
import * as path from 'path';

@Injectable()
export class LoggerService extends ConsoleLogger {
  async logToFile(entry: string) {
    const formattedEntry = `${Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'short',
      timeStyle: 'long',
      timeZone: 'America/Sao_Paulo',
    }).format(new Date())}\t${entry}\n`;

    try {
      if (!fs.existsSync(path.join(__dirname, '..', '..', 'logs'))) {
        await fsPromises.mkdir(path.join(__dirname, '..', '..', 'logs'));
      }

      await fsPromises.appendFile(
        path.join(__dirname, '..', '..', 'logs', 'logFile.log'),
        formattedEntry,
      );
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      } else {
        console.error(`Unexpected error:\n${e}`);
      }
    }
  }

  log(message: string, context?: string, ip?: string) {
    const entry = `LOG\t${ip}\t${context}\t${message}`;
    this.logToFile(entry);
    super.log(message, context);
  }

  error(
    message: string | object,
    stackOrContext?: string,
    ip?: string,
    requestBody?: string,
  ) {
    const entry = `ERROR\t${ip}\t${stackOrContext}\t${message}\t${requestBody}`;
    this.logToFile(entry);
    super.error(message, stackOrContext);
  }
}
