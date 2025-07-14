interface CheckServiceOptions {
  execute(url: string): Promise<boolean>;
}

export class CheckService implements CheckServiceOptions {
  async execute(url: string): Promise<boolean> {
    try {
      const req = await fetch(url);
      if (!req.ok) {
        throw new Error(`Error en el fetch: ${url}`);
      }
      console.log(`${url} está funcionando`);
      return true;
    } catch (error) {
      return false;
    }
  }
}

//esto se va a encargar de comprobar si la url está activa o no
