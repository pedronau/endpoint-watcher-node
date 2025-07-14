import nodemailer from "nodemailer";
import { envs } from "../plugins/envs.plugin";

interface SendMailOptions {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachments?: Attachment[];
}

interface Attachment {
  fileName: string;
  path: string;
}

export class EmailService {
  private transporter = nodemailer.createTransport({
    service: envs.MAILER_SERVICE,
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY,
    },
  });

  async sendEmail(options: SendMailOptions): Promise<boolean> {
    const { to, subject, htmlBody, attachments = [] } = options;
    try {
      const sentError = await this.transporter.sendMail({
        to: to,
        subject: subject,
        html: htmlBody,
        attachments: attachments,
      });
      //   console.log(sentError);
      return true;
    } catch (error) {
      return false;
    }
  }

  //TODO: hacer los correos periodicos con el archivo de error

  async sendEmailPeriodically(to: string | string[]) {
    const subject = "Informe de logs de error diario";
    const htmlBody = `
    <p>📄 ¡Hola!</p>
    <p>Te envío el informe de errores de hoy 📎</p>
    <p>Échale un vistazo cuando puedas 👀</p>
    <p>— Mensaje automático 🤖</p>
    `;
    const attachments: Attachment[] = [
      {
        fileName: "error.log",
        path: "./logs/error.log",
      },
    ];
    return this.sendEmail({ to, subject, attachments, htmlBody });
  }
}
