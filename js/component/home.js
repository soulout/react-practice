/**
 * Created by xtong on 16/7/7.
 */
import React, {Component} from 'react';
import {Link} from 'react-router'
import NavLink from './navLink'

class home extends Component {
    constructor(props){
        super(props);
        this.state = {
            pictureId:''
        }
    }

    handleOnchange(e) {
        this.setState({
            pictureId: e.target.value
        });

    };

    render() {

        return (
            <div className = 'practice'>
                <ul role="nav">
                    <li><NavLink to={`/picture/${this.state.pictureId}`}>Picture</NavLink></li>
                    <input placeholder="Put picture Id"  type="text"
                           value={ this.state.pictureId}
                           onChange={this.handleOnchange.bind(this)}
                    />
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/todo-list">Todo-List</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        )
    };
}

export default home