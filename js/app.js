/**
 * Created by xtong on 16/7/7.
 */
import React from 'react';

import TodoList from './component/todoList'

import Repos from './component/repos'

import About from './component/about'

import Home from './component/home'




import  {render} from 'react-dom';

import style from '../scss/style.scss'

import { Router, Route, hashHistory, IndexRoute } from 'react-router'

render(
    <Router history={hashHistory}>
        <Route path="/" component={TodoList}>
            <IndexRoute component={Home}/>
            <Route path="/repos/:userName/:repoName" component={Repos}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('App')
);
console.time("dom");
document.getElementsByName("s_form_wrapper soutu-env-mac soutu-env-index");
console.timeEnd("dom");