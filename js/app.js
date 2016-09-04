/**
 * Created by xtong on 16/7/7.
 */
import React from 'react';

import TodoList from './component/todoList'

import Picture from './component/picture'

import About from './component/about'

import Home from './component/home'

import Error from './component/error'


import  {render} from 'react-dom';

import style from '../scss/style.scss'

import {Router, Route, browserHistory, IndexRoute} from 'react-router'

render(
    <Router history={browserHistory}>
        <Route path="/" component={Home}>
            <Route path="/picture(/:name)" component={Picture}/>
            <Route path="/about" component={About}/>
            <Route path="/todo-list" component={TodoList}/>
        </Route>
        <Route path='*' component={Error}/>
    </Router>,
    document.getElementById('App')
);