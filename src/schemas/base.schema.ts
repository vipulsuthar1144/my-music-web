interface IBaseAPIResponse<T> {
  code: number;
  message: string;
  data?: T | null;
  error: IBaseErrorResponse;
}

interface IBaseErrorResponse {
  status: number;
  message: string;
}

export type { IBaseAPIResponse, IBaseErrorResponse };
