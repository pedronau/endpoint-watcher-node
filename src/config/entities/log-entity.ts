export enum LogEntityStatus {
  success = "success",
  error = "error",
}

export interface LogEntityOptions {
  status: LogEntityStatus;
  message: string;
  createdAt?: Date;
}

export class LogEntity {
  status: LogEntityStatus;
  message: string;
  createdAt?: Date;

  constructor(options: LogEntityOptions) {
    const { status, message, createdAt = new Date() } = options;
    this.status = status;
    this.message = message;
    this.createdAt = createdAt;
  }
}
