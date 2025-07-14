import { CheckService } from "./services/check.service";

export class ServerApp {
  public static start() {
    console.log("App running...");
    new CheckService().execute("https://google.com");
  }
}
