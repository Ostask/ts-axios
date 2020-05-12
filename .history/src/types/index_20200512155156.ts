export type Method = 'get'|'GET'|'delete'|'Delete'|

export interface AxiosRequestConfig {
    url: string
    method?: string
    data?:any
    params?:any
}