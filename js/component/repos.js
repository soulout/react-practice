/**
 * Created by xtong on 16/7/7.
 */
import React, {Component} from 'react';

class repos extends Component {


    render() {

        return (
            <div>
                <h2>{this.props.params.repoName}</h2>
            </div>
        )
    };
}

export default repos;
