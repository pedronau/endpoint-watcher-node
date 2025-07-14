import { CheckService } from "./services/check.service";

export class ServerApp {
  public static start() {
    console.log("App running...");

    new CheckService().execute('https://pedroesunmaldev.com');
    new CheckService().execute('https://www.linkedin.com/in/pedro-pe%C3%B1as-759951246/');
    new CheckService().execute('https://github.com/pedronau');
  }
}
