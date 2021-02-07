import axios from "axios";
// import qs from 'qs';
const service = axios.create({
  timeout: 30000 // 请求超时时间
});
// service.defaults.withCredentials = true
// 添加request拦截器
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// 添加respone拦截器
service.interceptors.response.use(
  response => {
    let res = {};
    res.status = response.status;
    res.data = response.data;
    return res;
  },
  error => {
    if (error.response && error.response.status == 404) {
        console.log("404")
    }

    return Promise.reject(error.response);
  }
);

//封装get请求
export function get(url, params = {}) {
  params.t = new Date().getTime(); //get方法加一个时间参数,解决ie下可能缓存问题.
  return service({
    url: url,
    method: "get",
    headers: {},
    params
  });
}

//封装post请求
export function post(url, data = {}) {
  //默认配置
  let sendObject = {
    url: url,
    method: "post",
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    },
    data: data
  };
  // sendObject.data = JSON.stringify(data)
  return service(sendObject);
}

export { service };
