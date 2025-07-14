import { CheckService } from "./services/check.service";

export class ServerApp {
  public static async start(url: string) {
    const isWorking = await new CheckService().watch(url);
    if (isWorking) {
        //TODO: aqui tiene que meter el aviso en un archivo de logs de succes
    } else {
        //TODO: aqui lo que sucede cuando hay un error: mandar un correo y ademas meterlo en los logs de error
    }
  }
}
