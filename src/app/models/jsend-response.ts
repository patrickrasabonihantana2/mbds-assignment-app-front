export enum JsendStatus {
  SUCCESS = "success",
  FAIL = "fail",
  ERROR = "error"
}

export interface JsendResponse {
  status?: JsendStatus;
  data?: any;
  message?: string;
}
