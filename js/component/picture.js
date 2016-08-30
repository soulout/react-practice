/**
 * Created by xtong on 16/7/7.
 */
import React, {Component} from 'react';
import pictureData from '../data/pictures'

const ShowPicture =(id)=>{
    let imageData = pictureData.filter((item)=>item.id == id);
    return (
        imageData.length ?
            <div>
                <h2>{imageData[0].caption}</h2>
                <img src={imageData[0].display_src}/>
            </div> :
            <div>
                can't find picture
            </div>
    )
};
class picture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictureId:""
        }
    }

    showPicture(){
        this.setState({
            pictureId:this.refs.inputId.value
        });
    }

    render() {
        return (
            <div>
                <input placeholder="Put picture Id" type="text" ref="inputId"/>
                <button onClick={this.showPicture.bind(this)}>showPicture</button>
                {ShowPicture(this.state.pictureId)}
            </div>
        );
    };
}

export default picture;
