import * as Login from '@/api/Login/request.js';
import * as Sidebar from '@/api/sidebar/request.js';

export const apiLogin = (data) => {
    return Login.login(data);
}

export const apiMenu = (data) => {
    return Sidebar.menu(data);
}