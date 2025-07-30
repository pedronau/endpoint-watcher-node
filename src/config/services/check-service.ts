interface CheckServiceOptions {
  watch(url: string): Promise<boolean>;
}

export class CheckService implements CheckServiceOptions {
  async watch(url: string): Promise<boolean> {
    try {
      await fetch(url);
      console.log("\x1b[32m" + url + " está funcionando\x1b[0m");
      return true;
    } catch (error) {
      console.log("\x1b[31m" + url + " no funciona correctamente\x1b[0m");
      return false;
    }
  }
}

