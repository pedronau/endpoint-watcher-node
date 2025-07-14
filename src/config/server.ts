import { LogEntityStatus } from "./entities/log.entity";
import { CheckService } from "./services/check.service";
import { FileSystem } from "./services/filesystem.service";

export class ServerApp {
  public static async start(url: string) {
    const isWorking = await new CheckService().watch(url);
    if (isWorking) {
      new FileSystem().saveSuccessLogs({
        status: LogEntityStatus.success,
        message: `El endpoint ${url} funciona correctamente`,
      });
    } else {
      new FileSystem().saveErrorLogs({
        status: LogEntityStatus.error,
        message: `El endpoint ${url} no está funcionando`,
      });
    }
  }
}
