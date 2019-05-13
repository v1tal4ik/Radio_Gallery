import React,{Component} from 'react';
import RadiostationItem from '../RadiostationItem';
import Player from '../Player';
import { connect } from 'react-redux';
import { getSkin } from '../../modules/reducers'
import './RadiostationList.css';
;




class RadiostationList extends Component{
    render(){
        const {skin} = this.props;
        return (
            <div className="wrapper" style={{backgroundColor:`rgb(${skin})`}}>
                <div className='radio-list'>
                <RadiostationItem />
                <RadiostationItem />
                <RadiostationItem />
                <RadiostationItem />
                <RadiostationItem />
                <RadiostationItem />
                <RadiostationItem />
                <RadiostationItem />
                <RadiostationItem />
                <RadiostationItem />
                <RadiostationItem />
                <RadiostationItem />
                <RadiostationItem />
                <RadiostationItem />
                <RadiostationItem />
                <RadiostationItem />
                <RadiostationItem />
                <RadiostationItem />
                </div>
                <h6 className='station-title'>Wellcome to Rofa Music store</h6>
                <Player />
            </div>
        )
    }
}

export default connect(state=>({
    skin:getSkin(state)
}),{})(RadiostationList);
