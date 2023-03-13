import { clearEmptyPayload } from './../utils/common'
import Https from '@/apis/Interceptors'
import { Login } from '@/types/common'
export const authApi = {
  login: (data: Login) => Https.post(``, clearEmptyPayload(data))
}
