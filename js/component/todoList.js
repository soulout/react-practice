/**
 * Created by xtong on 16/7/7.
 */
import React, {Component} from 'react';
import List from './list';
import {bindActionCreators} from 'redux'
import * as actionsCreator from  '../redux/antion'
import {connect} from 'react-redux'


class todoList extends Component {

    handleOnchange(e) {
        this.props.inputChange(e.target.value);
    };

    addTodo(e) {
        if (e.keyCode == 13 && this.props.text) {
            this.props.addNewData();
        }
    }

    checkedChange(key) {
        this.props.changeStatus(key);
    }

    delTodo(key) {
        this.props.rmData(key);
    }


    render() {
        return (
            <div className='todo-list'>
                <span className="title-color"> {this.props.list.filter((item)=>item.checked == false).length}
                    + todo </span>
                <List data={this.props.list} checkedChange={this.checkedChange.bind(this)}
                      delTodo={this.delTodo.bind(this)}/>
                <input placeholder="New Todo" value={ this.props.text} type="text"
                       onChange={this.handleOnchange.bind(this)}
                       onKeyDown={this.addTodo.bind(this)}
                />
            </div>
        )
    };
}
function mapStateToProps(store) {
    return {
        list: store.list,
        text: store.text
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionsCreator, dispatch)
}

const todoListRedux = connect(mapStateToProps, mapDispatchToProps)(todoList);

export default todoListRedux;