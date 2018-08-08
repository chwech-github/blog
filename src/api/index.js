import axios from 'axios'

let http = axios.create({
  /**
   * 对post发送的请求，使用Content-Type:application/x-www-form-urlencoded方式
   * 格式 username=111&password=111
   */
  transformRequest: [function (data) {
    let ret = '';
    for (let [key, value] of Object.entries(data)) {
      ret += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`
    }
    ret = ret.substr(0, ret.length - 1)
    return ret;
  }],
})

export default http