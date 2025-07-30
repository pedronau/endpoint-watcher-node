import {
  LogEntity,
  LogEntityStatus,
} from "../../../src/config/entities/log-entity";

describe("log-entity.ts", () => {
  const logOptionsTest = {
    status: LogEntityStatus.success,
    message: "Soy un test",
  };

  const log = new LogEntity(logOptionsTest);

  test("should create a LogEntity instance", () => {
    expect(log).toBeInstanceOf(LogEntity);
    expect(log.message).toBe(logOptionsTest.message);
    expect(log.status).toBe(logOptionsTest.status);
  });

  test("createdAt should be the date of today", () => {
    expect(log.createdAt).toBeInstanceOf(Date);
    expect(log.createdAt?.getDay()).toBe(new Date().getDay());
    expect(log.createdAt?.getHours()).toBe(new Date().getHours());
    expect(log.createdAt?.getMinutes()).toBe(new Date().getMinutes());
    expect(log.createdAt?.getSeconds()).toBe(new Date().getSeconds());
  });
});
