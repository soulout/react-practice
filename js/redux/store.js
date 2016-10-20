import {createStore, applyMiddleware, compose} from 'redux'

import reducer from './reducer'

import {getArrayCookie} from '../tools/controlCookies';

let list = getArrayCookie('todoList');
if (!list) {
    list = [];
}

let text = "";

const defaultStore = {
    list,
    text
};

const logger = (store) => (next) => (action) => {
    console.log("action type : " + action.type);
    next(action);
};

const middleware = applyMiddleware(logger);


const store = createStore(reducer, defaultStore, compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

export  default store;

