import "dotenv/config";
import * as env from "env-var";

export const envs = {
  MAILER_SERVICE: env.get("MAILER_SERVICE").required().asString(),
  MAILER_EMAIL: env.get("MAILER_EMAIL").required().asEmailString(),
  MAILER_SECRET_KEY: env.get("MAILER_SECRET_KEY").required().asString(),
  NOTIFICATION_EMAIL: env.get("NOTIFICATION_EMAIL").required().asEmailString(),
};
