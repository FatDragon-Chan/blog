import axios from "axios";

const API_ROOT = "http://blogapi.codebear.cn/index.php";
const API_ROOT_DEV = "/localapi";

/* 判断是否为本地测试环境 */
axios.defaults.baseURL =
  process.env.NODE_ENV === "production" ? API_ROOT : API_ROOT_DEV;

axios.defaults.headers.Accept = "application/json; charset=utf-8";

/* 请求拦截器 */
axios.interceptors.request.use(
  function(config) {
    if (config.url.indexOf("a/") === 0) {
      // if (getAccessToken()) {
      //   config.headers["accessToken"] = getAccessToken();
      // }
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

/* 返回拦截器 */
axios.interceptors.response.use(
  function(response) {
    if (response.data.code < 0) {
      if (response.data.code === -4001) {
        // // 清空登录信息
        // removeAccessToken();
        // cachedAdminInfo.delete();
        // // // 弹出提示信息
        // store.commit(SHOW_TOKEN_ERROR, true);
        // // // 弹出登录窗口
        // store.commit(IS_LOGIN, false);
      }
      let error = {
        msg: response.data.msg
      };
      return Promise.reject(error);
    }
    return response.data;
  },
  function(error) {
    error = {
      msg: "请求出错"
    };
    return Promise.reject(error);
  }
);

export default {
  /*
   * 获取博客配置
   */
  getBlogConfig() {
    return axios.get("a/webConfig");
  }
};
