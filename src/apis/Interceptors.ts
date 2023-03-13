import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import JSCookie from 'js-cookie'
const { ENV_ENDPOINT_API } = import.meta.env

interface IResponse {
  message: string
  statusCode: number
}

const Https = axios.create({
  baseURL: `${ENV_ENDPOINT_API}`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

const requestHandler = (config: any) => {
  const token = JSCookie.get('accessToken')
  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`,
      ...config.headers
    }
  }
  return config
}

const errorHandler = (error: AxiosError) => {
  const { response } = error
  const data = response?.data as IResponse
  switch (data.statusCode) {
    case 401:
      JSCookie.remove('accessToken')
      window.location.replace('')
      break
    case 403:
    case 404:
    case 504:
      window.location.href = '/error/404'
      break
    default:
      break
  }
  return Promise.reject(error)
}

Https.interceptors.request.use(
  (config: AxiosRequestConfig) => requestHandler(config),
  (error: AxiosError) => errorHandler(error)
)

Https.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => errorHandler(error)
)

export default {
  get: Https.get,
  post: Https.post,
  put: Https.put,
  delete: Https.delete,
  patch: Https.patch
}
