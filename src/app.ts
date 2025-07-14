import { ServerApp } from "./config/server";

(async () => {
  main();
})();

function main() {
  console.log("App running...");

  ServerApp.start("https://pedroesunmaldev.com");
  ServerApp.start("https://www.linkedin.com/in/pedro-pe%C3%B1as-759951246/");
  ServerApp.start("https://github.com/pedronau");

  ServerApp.sendReportEmail();
}
