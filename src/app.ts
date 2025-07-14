import { ServerApp } from "./config/server";

(async () => {
  main();
})();

function main() {
  ServerApp.start();
}
