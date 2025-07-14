import { ServerApp } from "./config/server";

(async () => {
  main();
})();

function main() {
  ServerApp.start();
}

//TODO: cambiar la url como parametro en variables de entorno para que la puedan cambiar???
