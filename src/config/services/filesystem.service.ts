import fs from "fs";
import { LogEntity } from "../entities/log-entity";

interface FileSystemLogs {
  saveSuccessLogs(newLog: LogEntity): Promise<boolean>;
  saveErrorLogs(newLog: LogEntity): Promise<boolean>;
}

export class FileSystem implements FileSystemLogs {
  private readonly logPath = "logs/";
  private readonly successLogsPath = "logs/succes.log";
  private readonly errorLogsPath = "logs/error.log";

  constructor() {
    this.createLogsFile();
  }

  private createLogsFile = () => {
    if (!fs.existsSync(this.logPath)) {
      fs.mkdirSync(this.logPath);
    }

    [this.successLogsPath, this.errorLogsPath].forEach((path) => {
      if (fs.existsSync(path)) {
        return;
      } else {
        fs.writeFileSync(path, "");
      }
    });
  };

  async saveSuccessLogs(newLog: LogEntity): Promise<boolean> {
    const logAsJson = `${JSON.stringify(newLog)}\n`;
    fs.appendFileSync(this.successLogsPath, logAsJson);
    return true;
  }

  async saveErrorLogs(newLog: LogEntity): Promise<boolean> {
    const logAsJson = `${JSON.stringify(newLog)}\n`;
    fs.appendFileSync(this.errorLogsPath, logAsJson);
    return false;
  }
}
