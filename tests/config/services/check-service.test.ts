import { CheckService } from "../../../src/config/services/check-service";

describe("check-service.ts", () => {
  test("should return true if fetch is ok", async () => {
    const wasSuccess = await new CheckService().watch("http://www.google.com");
    expect(wasSuccess).toBeTruthy();
  });

  test("should return false if fetch is not ok", async () => {
    const wasFail = await new CheckService().watch("http://www.asljdhfaksjhdf.com");
    expect(wasFail).toBeFalsy();
  });
});
