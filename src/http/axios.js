/* --axios 2021/3/11 @王浩然QQ378237242 -- */
import axios from "axios";

//配置默认值
axios.defaults.baseURL = 'mock';
axios.defaults.timeout = 7000;

const request = {
    //创建一个用来发请求工厂
    /**
     * 一次请求
     * @param url    请求地址
     * @param type   method
     * @param data   参数 get请求时必须是 plain object
     * @returns {Promise<unknown>}
     */
    one({url, type = 'get', data = {}}) {
        return new Promise((resolve, reject) => {
            if (type == "get") {
                axios.get(url, {params: data}).then(res => {
                    resolve(res.data)
                }).catch(e => {
                    reject(e)
                })
            } else {
                axios[type](url, {data: data}).then(res => {
                    resolve(res.data)
                }).catch(e => {
                    reject(e)
                })
            }
        })
    },
    /**
     * 循环请求完成后执行某项操作
     * @param arr 数组
     * @returns {Promise<unknown>}
     */
    multiple(arr) {
        let parr = [];
        arr.forEach(async item => {
            parr.push(await this.one(item))
        })
        return new Promise((resolve, reject) => {
            Promise.all(parr).then(res => {
                resolve(res)
            }).catch(e => {
                reject(e)
            })
        })
    }
}
export default request
