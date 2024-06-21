interface IBaseAPIResponse<T> {
  code: number;
  message: string;
  data: T;
  errors: any[];
}
