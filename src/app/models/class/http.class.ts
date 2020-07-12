export interface IHttpStatus {
  loading: boolean;
  success: boolean;
  empty: boolean;
  error: boolean;
}

export class HttpStatus implements IHttpStatus {

  constructor(
    public empty: boolean,
    public error: boolean,
    public loading: boolean,
    public success: boolean,
  ) { }

  public static init(): IHttpStatus {
    return {
      empty: false,
      error: false,
      loading: false,
      success: false
    };
  }

  public static isLoading(): IHttpStatus {
    return {
      empty: false,
      error: false,
      loading: true,
      success: false
    };
  }

  public static isSuccess(): IHttpStatus {
    return {
      empty: false,
      error: false,
      loading: false,
      success: true
    };
  }

  public static isEmpty(): IHttpStatus {
    return {
      empty: true,
      error: false,
      loading: false,
      success: true
    };
  }

  public static isError(): IHttpStatus {
    return {
      empty: false,
      error: true,
      loading: false,
      success: false
    };
  }

}
