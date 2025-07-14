import { CheckService } from "./services/check.service";

export class ServerApp {
  public static async start(url: string) {
    const isWorking = await new CheckService().watch(url);
    if (isWorking) {
        //TODO: aqui tiene que hacer la creacion del archivo de logs
    }
  }
}
