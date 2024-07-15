import { request } from "@/assets/js/axiosSetting";

// 載入Menu
export const login = (data) => request({
    url: 'login',
    method: 'post',
    data: data
})