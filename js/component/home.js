/**
 * Created by xtong on 16/7/7.
 */
import React, {Component} from 'react';
import {Link} from 'react-router'
import NavLink from './navLink'

class Home extends Component {

    render() {

        return (
            <div className = 'practice'>
                <ul role="nav">
                    <li><NavLink to={`/picture`}>Picture</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/todo-list">Todo-List</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        )
    };
}

export default Home