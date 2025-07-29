import { CronPlugin } from "../../../src/config/plugins/cron-plugin";
import { CronJob } from "cron";

jest.mock("cron", () => {
  return {
    CronJob: jest.fn().mockImplementation((cronTime, onTick) => {
      return {
        start: jest.fn(),
        fireOnTick: onTick,
      };
    }),
  };
});

describe("cron-plugin.ts", () => {
  test("should create and start a CronJob", () => {
    const mockOnTick = jest.fn();
    const cronTime = "* * * * * *";

    const job = CronPlugin.createJob(cronTime, mockOnTick);

    expect(CronJob).toHaveBeenCalledWith(cronTime, mockOnTick);
    expect(job.start).toHaveBeenCalled();
  });

  test("should execute onTick when manually triggered", () => {
    const mockOnTick = jest.fn();
    const cronTime = "* * * * * *";

    const job = CronPlugin.createJob(cronTime, mockOnTick);

    job.fireOnTick();
    expect(mockOnTick).toHaveBeenCalled();
  });

  test("should return a CronJob instance", () => {
    const job = CronPlugin.createJob("* * * * * *", () => {});
    expect(job).toBeDefined();
    expect(typeof job.start).toBe("function");
  });
});
