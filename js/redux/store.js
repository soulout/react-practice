import { createStore } from 'redux'

import reducer from './reducer'

import { getArrayCookie } from '../tools/controlCookies';

let list = getArrayCookie('todoList');
if (!list) {
    list = [];
}

let text = "";

const defaultStore = {
    list,
    text
};

const store = createStore(reducer, defaultStore,
    window.devToolsExtension && window.devToolsExtension()
);

export  default store;

