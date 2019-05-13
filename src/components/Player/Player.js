import React,{Component} from 'react';
import './Player.css';

class Player extends Component{
    render(){
        return (
            <div className='player-radio'>
                <div className="container-audio">
                <audio src="https://stream.brokenbeats.net/tune" controls>
                Your browser dose not Support the audio Tag
                </audio>
                </div>
            </div>
        )
    }
}

export default Player;
