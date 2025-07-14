import { LogEntity, LogEntityStatus } from "./entities/log.entity";
import { CronPlugin } from "./plugins/cron.plugin";
import { CheckService } from "./services/check.service";
import { FileSystem } from "./services/filesystem.service";

export class ServerApp {
  public static async start(url: string) {
    CronPlugin.createJob("*/30 * * * * *", async () => {
      const isWorking = await new CheckService().watch(url);
      if (isWorking) {
        new FileSystem().saveSuccessLogs(
          new LogEntity({
            status: LogEntityStatus.success,
            message: `El endpoint ${url} funciona correctamente`,
          })
        );
      } else {
        new FileSystem().saveErrorLogs(
          new LogEntity({
            status: LogEntityStatus.error,
            message: `El endpoint ${url} no está funcionando`,
          })
        );
      }
    });
  }
}
