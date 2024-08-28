import axios from 'axios'
import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'
import router from '@/router'
// const baseURL = 'http://localhost:8080/'
const baseURL = '/api'

const instance = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL,
  timeout: 10000
})
//请求拦截器
instance.interceptors.request.use(
  (config) => {
    // TODO 2. 携带token
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = userStore.token
    }
    return config
  },
  (err) => Promise.reject(err)
)
//响应拦截器
instance.interceptors.response.use(
  (res) => {
    // TODO 3. 处理业务失败
    // TODO 4. 摘取核心响应数据
    if (res.data.code === 1) {
      return res
    }
    //处理业务失败,给错误提示 抛出错误
    console.log('request', res.data.msg)
    ElMessage.error(res.data.msg)
    return Promise.reject(res.data.msg || '服务异常')
  },
  (err) => {
    // TODO 5. 处理401错误
    //特殊情况->权限不足或token过期
    if (err.response?.status === 401) {
      router.push('/login')
    }
    //默认情况->只要给提示
    ElMessage.error(err.response.data.msg || '服务异常')
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
