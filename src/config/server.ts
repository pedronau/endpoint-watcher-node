import { LogEntity, LogEntityStatus } from "./entities/log-entity";
import { CronPlugin } from "./plugins/cron-plugin";
import { envs } from "./plugins/envs-plugin";
import { CheckService } from "./services/check.service";
import { EmailService } from "./services/email.service";
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
        new EmailService().sendEmail({
          to: envs.NOTIFICATION_EMAIL,
          subject: "Aviso de endpoint caído",
          htmlBody: `
            <h3>⚠️ Aviso:</strong> El siguiente endpoint no está respondiendo:</h3>
            <p><code>${url}</code></p>
            <p>Por favor, revisa el servicio lo antes posible.</p>
          `,
        });
      }
    });
  }

  public static sendReportEmail() {
    CronPlugin.createJob("00 00 00 * * *", async () => {
      new EmailService().sendEmailPeriodically(envs.NOTIFICATION_EMAIL);
    });
  }
}
