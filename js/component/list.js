/**
 * Created by xtong on 16/7/7.
 */
import  React, {Component} from 'react';
import  ListItem from './listItem'


class List extends Component {

    checkedChange(key) {
        this.props.checkedChange(key);
    }

    delTodo(key) {
        this.props.delTodo(key);
    }

    render() {
        if (this.props.data.length) {
            return (
                <div className='text-style'>
                    {this.props.data.map((item, i) =>
                        <ListItem key={i} data={item} checkedChange={this.checkedChange.bind(this)} mark={i}
                                  delTodo={this.delTodo.bind(this)} />
                    )}
                </div>
            )
        } else {
            return (
                <div className='text-style center'>
                    <div className="item-padding">
                        <span className="iconfont icon-kaixin fontLB"></span>
                    </div>
                    <div className="fontB item-padding"> Nothing to do</div>
                    <div className="title-color fontS item-padding"> Add a todo to get started</div>
                </div>
            )
        }
    }
}

export default List;
