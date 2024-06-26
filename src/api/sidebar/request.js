import { request } from "@/assets/js/axiosSetting";

// 載入Menu
export const menu = (data) => request({
    url: '/assets/json/menu.json',
    method: 'get',
    data: data
})