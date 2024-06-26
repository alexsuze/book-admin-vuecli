import * as Sidebar from '@/api/sidebar/request.js';

export const apiMenu = (data) => {
    return Sidebar.menu(data);
}