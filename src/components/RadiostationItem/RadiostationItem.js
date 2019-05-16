import React, {Component} from 'react';
import { connect } from 'react-redux';
import {changeCurrentStation,fetchRadioListRequest,fetchFavRadioListRequest} from '../../modules/actions';
import {getMode} from '../../modules/reducers';
import {addToFavourite,deleteToFavourite,deleteRadioStation} from '../../api';
import Rodal from 'rodal';
import './RadiostationItem.css';
import 'rodal/lib/rodal.css';



class RadiostationItem extends Component{
    state={
        visible:false,
        message:''
    }
    addFocus=(id)=>{
        let arr = document.getElementsByClassName('radio-list-item');
        for(let item of arr){
            const itemId = item.getAttribute('data-id');
            item.classList.remove('active');
            if(id===itemId){
                item.classList.add('active');
            }
        }
    }

    changeCurrentStation=(e)=>{
        const {changeCurrentStation} = this.props;
        let id,nameStation,src,params;
        if(e.target.className === 'radio-list-item'){
            id = e.target.getAttribute('data-id');
            nameStation = e.target.getAttribute('data-name');
            src = e.target.getAttribute('data-steam');
        }
        if(e.target.parentElement.className === 'radio-list-item'){
            id = e.target.parentElement.getAttribute('data-id');
            nameStation = e.target.parentElement.getAttribute('data-name');
            src = e.target.parentElement.getAttribute('data-steam');
        }

        if(e.target.parentElement.parentElement.className === 'radio-list-item'){
            id = e.target.parentElement.parentElementgetAttribute('data-id');
            nameStation = e.target.parentElement.parentElement.getAttribute('data-name');
            src = e.target.parentElement.parentElement.getAttribute('data-steam');
        }
        params = {
            id:id,
            name:nameStation,
            stream:src
        }
        this.addFocus(id);
        changeCurrentStation(params);
    }

    async addToFav(e){
        e.stopPropagation();
        document.body.style.cursor = 'wait';
        const id = e.target.getAttribute('data-id');
        let result = await addToFavourite(id);
        document.body.style.cursor = 'pointer';
        this.setState({message:result, visible:true});
    }

    async deleteToFav(e){
        e.stopPropagation();
        document.body.style.cursor = 'wait';
        const id = e.target.getAttribute('data-id');
        let result = await deleteToFavourite(id);
        document.body.style.cursor = 'pointer';
        this.setState({message:result, visible:true});
    }

    async deleteRadioStation(e){
        e.stopPropagation();
        document.body.style.cursor = 'wait';
        const id = e.target.getAttribute('data-id');
        let result = await deleteRadioStation(id);
        document.body.style.cursor = 'pointer';
        this.setState({message:result, visible:true});
    }

    closeModalMessage=()=>{
        this.setState({visible:false});
        const {mode,fetchRadioListRequest,fetchFavRadioListRequest} = this.props;
        if(mode === 'all list'){
           fetchRadioListRequest();
        }
        if(mode === 'favourite'){
            fetchFavRadioListRequest();
        }
      }

    render(){
        const {id,name,image,stream,genres, favourite} = this.props;
        return (
            <>
            <div className='radio-list-item' data-id={id} data-steam={stream} data-name={name} onClick={this.changeCurrentStation}>
                <span  className='radio-id'>{id}</span>
                <span className='radio-container-image'>
                    <img src={image} className='radio-image' alt={name} />
                </span>
                <span  className='radio-name'>{name}</span>
                <span  className='radio-genres'>Genres: {genres}</span>
                <span className='action-block'>
                    <button className='list-btn'>
                        {favourite ?
                            <i className="fas fa-star"data-id={id} onClick={this.deleteToFav.bind(this)} ></i>
                            :
                            <i className="far fa-star" data-id={id} onClick={this.addToFav.bind(this)} ></i>}
                    </button>
                    <button className='list-btn'><i className="fas fa-times"  data-id={id} onClick={this.deleteRadioStation.bind(this)} ></i></button>
                </span>
            </div>
            <Rodal visible={this.state.visible} onClose={this.closeModalMessage.bind(this)}>
                <div className='modal-message'>{this.state.message}</div>
            </Rodal>
            </>
        )
    }
}  

export default connect(state=>({
    mode:getMode(state)
}),{
    changeCurrentStation,
    fetchRadioListRequest,
    fetchFavRadioListRequest
})(RadiostationItem);
