export interface IRestResponse<T> {
  data: T
  error: any
}

export interface IRestListResponse<T> {
  data: T[]
  error: any
}
