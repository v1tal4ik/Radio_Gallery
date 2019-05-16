import React,{Component} from 'react';
import RadiostationItem from '../RadiostationItem';
import Player from '../Player';
import Preloader from '../Preloader/Preloader';
import { connect } from 'react-redux';
import {fetchRadioListRequest} from '../../modules/actions';
import {getIsLoading,getSkin,getListRadio,getCurrentRadioStation} from '../../modules/reducers';
import './RadiostationList.css';





class RadiostationList extends Component{
    state={
        foo:0
    }

    baz=(e)=>{
        this.setState({foo:e.target.scrollTop});
    }
    

    componentDidMount=()=>{
        //console.log('work ',this.state.foo)
        document.getElementsByClassName('radio-list')[0].scrollTop = this.state.foo;
        const {fetchRadioListRequest} = this.props;
        fetchRadioListRequest();
    }
 
    render(){
        const {isLoading,skin,listRadio,currentStation:{name}} = this.props;
        return (
            <div className="wrapper" style={{backgroundColor:`rgb(${skin})`}}>
                <div className='radio-list' onScroll={this.baz}>
                {
                isLoading ? 
                        <Preloader /> : 
                listRadio.length > 0 ? 
                            listRadio.map(item=>{
                                const {id,name,image,stream,genres,favourite} = item;
                                return <RadiostationItem key={id} id={id} name={name} image={image} stream={stream} genres={genres} favourite={favourite} />
                            }) : null
                }
                </div>
                <h6 className='station-title'>{name}</h6>
                <Player />
            </div>
        )
    }
}

export default connect(state=>({
    isLoading:getIsLoading(state),
    skin:getSkin(state),
    listRadio:getListRadio(state),
    currentStation:getCurrentRadioStation(state)
}),{fetchRadioListRequest})(RadiostationList);
