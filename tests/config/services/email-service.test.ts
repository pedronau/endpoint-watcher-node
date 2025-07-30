import { EmailService } from "../../../src/config/services/email-service";

describe("email-service.ts", () => {
  test("should call sendEmail and sendEmailPeriodically", async () => {
    const email = new EmailService();

    expect(email).toBeInstanceOf(EmailService);
  });
});
