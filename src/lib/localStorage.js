// import React from "react";

export const APP_TOKEN = {
    set: ({ accessToken, user}) => {
        localStorage.setItem('accessToken', accessToken);
    },
    get: () => ({
        accessToken:localStorage.getItem('accessToken')
    }),
    remove:(item) => {
        localStorage.removeItem(item);
    },
    clear:(item) => {
        localStorage.clear();
    },
};