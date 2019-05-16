import React,{Component} from 'react';
import { connect } from 'react-redux';
import {getCurrentRadioStation} from '../../modules/reducers';
import './Player.css';

class Player extends Component{
    render(){
        const{stream} = this.props.currentStation;
        return (
            <div className='player-radio'>
                <div className="container-audio">
                <audio src={stream} controls autoPlay={true}>
                Your browser dose not Support the audio Tag
                </audio>
                </div>
            </div>
        )
    }
}

export default connect(state=>({
    currentStation:getCurrentRadioStation(state)
}))(Player);
