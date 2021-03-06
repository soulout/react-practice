/**
 * Created by xtong on 16/7/7.
 */
import React, {Component} from 'react';
import List from './list';
import {getArrayCookie, setArrayCookie} from '../tools/controlCookies';


class todoList extends Component {
    constructor(props) {
        super(props);
        let list = getArrayCookie('todoList');
        if (!list) {
            list = [];
        }
        let text = "";
        this.state = {
            list,
            text
        }
    }

    handleOnchange(e) {
        this.setState({
            text: e.target.value
        });

    };


    addTodo(e) {
        if (e.keyCode == 13 && this.state.text) {
            let addData = {
                name: this.state.text,
                checked: false
            };
            this.state.list.push(addData);
            this.setState({text: ''});
            setArrayCookie('todoList', this.state.list);
        }
    }

    checkedChange(item) {
        item.checked = !item.checked;
        this.setState(this.state);
        setArrayCookie('todoList', this.state.list);
    }

    delTodo(key) {
        this.state.list.splice(key + 0, 1);
        this.setState(this.state);
        setArrayCookie('todoList', this.state.list);
    }


    render() {

        return (
            <div className='todo-list'>
                <span className="title-color"> {this.state.list.filter((item)=>item.checked == false).length}
                    + todo </span>
                <List data={this.state.list} checkedChange={this.checkedChange.bind(this)}
                      delTodo={this.delTodo.bind(this)}/>
                <input placeholder="New Todo" value={ this.state.text} type="text"
                       onChange={this.handleOnchange.bind(this)}
                       onKeyDown={this.addTodo.bind(this)}
                />
            </div>
        )
    };
}

export default todoList;