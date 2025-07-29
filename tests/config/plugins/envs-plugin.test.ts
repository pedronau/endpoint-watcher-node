import { envs } from "../../../src/config/plugins/envs-plugin";

describe("envs-plugin.ts", () => {
  const envsOriginal = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...envsOriginal };
  });

  afterAll(() => {
    process.env = envsOriginal;
  });

  test("should return env options", () => {
    expect(envs).toEqual({
      MAILER_SERVICE: envs.MAILER_SERVICE,
      MAILER_EMAIL: envs.MAILER_EMAIL,
      MAILER_SECRET_KEY: envs.MAILER_SECRET_KEY,
      NOTIFICATION_EMAIL: envs.NOTIFICATION_EMAIL,
    });
  });

  test("should return error if MAILER_EMAIL is not a valid email", async () => {
    process.env.MAILER_EMAIL = "test";

    try {
      await import("../../../src/config/plugins/envs-plugin");
      expect(true).toBeFalsy();
    } catch (error) {
      expect(`${error}`).toContain(
        `"MAILER_EMAIL" should be a valid email address`
      );
    }
  });

  test("should return error if NOTIFICATION_EMAIL is not a valid email", async () => {
    process.env.NOTIFICATION_EMAIL = "test";

    try {
      await import("../../../src/config/plugins/envs-plugin");
      expect(true).toBeFalsy();
    } catch (error) {
      expect(`${error}`).toContain(
        `"NOTIFICATION_EMAIL" should be a valid email address`
      );
    }
  });

  test("should return error if MAILER_SERVICE is not found", async () => {
    process.env.MAILER_SERVICE = "";

    try {
      await import("../../../src/config/plugins/envs-plugin");
      expect(true).toBeFalsy();
    } catch (error) {
      expect(`${error}`).toContain(
        `"MAILER_SERVICE" is a required variable, but its value was empty`
      );
    }
  });

  test("should return error if MAILER_SECRET_KEY is not found", async () => {
    process.env.MAILER_SECRET_KEY = "";

    try {
      await import("../../../src/config/plugins/envs-plugin");
      expect(true).toBeFalsy();
    } catch (error) {
      expect(`${error}`).toContain(
        `"MAILER_SECRET_KEY" is a required variable, but its value was empty`
      );
    }
  });
});
