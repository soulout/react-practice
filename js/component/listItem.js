/**
 * Created by xtong on 16/7/11.
 */
import  React, {Component} from 'react';

class ListItem extends Component {
    checkedChange() {
        this.props.checkedChange(this.props.data);
    }

    delTodo() {
        this.props.delTodo(this.props.mark);
    }

    render() {
        return (
            <div className="item">
                <input type="checkbox" checked={this.props.data.checked} onChange={this.checkedChange.bind(this)}/>
                <div className="over-flow , list-item" >
                    {this.props.data.name}
                </div>
                <div className="item-close">
                    <span  className="iconfont icon-guanbi111"   onClick={this.delTodo.bind(this)}></span>
                </div>
            </div>
        );
    }
}

export default ListItem
