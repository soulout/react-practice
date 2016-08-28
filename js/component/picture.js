/**
 * Created by xtong on 16/7/7.
 */
import React, {Component} from 'react';

class picture extends Component {

    componentDidMount(){
        //根据查询条件发送图片查询请求
    }


    render() {

        return (
        this.props.params.pictureId?
            <div>
                <h2>{this.props.params.pictureId}</h2>
            </div> :
            <div>
                input id please
            </div>
        )
    };
}

export default picture;
