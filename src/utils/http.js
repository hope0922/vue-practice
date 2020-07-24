import { Message } from 'element-ui';
import axios from 'axios';
import qs from 'qs';
import store from '../store'

const API_URL = '';

let instance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    timeout: 10000,
});


//拦截器校验转换参数
instance.interceptors.request.use(config => {
    store.dispatch('setLoading');
    config.method === 'post'
        ? config.data = qs.stringify({ ...config.data })
        : config.params = { ...config.params };
    instance.defaults.headers.post['Content-Type'] = 'application/josn;charset=UTF-8';
    instance.defaults.headers.post["Cache-Control"] = "no-cache";
    return config;
}, error => {  //请求错误处理
    Promise.reject(error)
});

instance.interceptors.response.use(
    response => {
        // console.log('response', response)
        // if (response.data.data !== undefined && response.data.data === false) {
        //     Modal.info({
        //         title: "当前未授权或信息已过期,请授权",
        //         okText: "确定",
        //         onOk() {
        //             history.push("/");
        //         }
        //     });
        // }
        store.dispatch('setLoading');
        return response;
    },
    error => {
        if (error) {
            switch (error.response.status) {
                case 400:
                    Message({
                      message: error.response.data.message,
                      type: 'error',
                      duration: 5 * 1000
                    });
                    break;
                default:
                    break;
            }
        }
        return Promise.reject(error);
    }
);
export default instance;