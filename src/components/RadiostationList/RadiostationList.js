import React,{Component} from 'react';
import RadiostationItem from '../RadiostationItem';
import Player from '../Player';
import Preloader from '../Preloader/Preloader';
import { connect } from 'react-redux';
import {fetchRadioListRequest} from '../../modules/actions';
import {getIsLoading,getSkin,getListRadio,getCurrentRadioStation,getinputValue} from '../../modules/reducers';
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
        const {isLoading,inputValue,skin,listRadio,currentStation:{name}} = this.props;
        return (
            <div className="wrapper" style={{backgroundColor:`rgb(${skin})`}}>
                <div className='radio-list' onScroll={this.baz}>
                {
                isLoading ? 
                        <Preloader /> : 
                listRadio.length > 0 ? 
                            listRadio.map(item=>{
                                const {id,name,image,stream,genres,favourite} = item;
                                if(inputValue){
                                    if(item.name.toLowerCase().indexOf(inputValue)!==-1){
                                        return <RadiostationItem key={id} id={id} name={name} image={image} stream={stream} genres={genres} favourite={favourite} />
                                      }
                                }else{
                                    return <RadiostationItem key={id} id={id} name={name} image={image} stream={stream} genres={genres} favourite={favourite} />
                                }
                                return null;
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
    inputValue:getinputValue(state),
    skin:getSkin(state),
    listRadio:getListRadio(state),
    currentStation:getCurrentRadioStation(state)
}),{fetchRadioListRequest})(RadiostationList);
