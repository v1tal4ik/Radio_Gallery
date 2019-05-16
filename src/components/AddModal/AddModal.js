import React,{Component} from 'react';
import Rodal from 'rodal';
import { connect } from 'react-redux';
import {} from '../../modules/actions';
import {getCurrentRadioStation,getListRadio} from '../../modules/reducers';
import {addNewRadioStation,editRadioStationById} from '../../api';
import './AddModal.css';
import 'rodal/lib/rodal.css';


class AddModal extends Component{

    state={
        visible:false,
        message:'',
        id:0,
        name:'',
        image:'',
        stream:'',
        genres:'',
        favourite:false,
        statusImage:'/img/no-photo.png'
    }

    changeInput=(e)=>(this.setState({[e.target.name]:e.target.value}));

    changeInputImage=(e)=>{
        //console.log(e.target.files[0]);
        //this.setState({image:e.target.value,statusImage:'/img/done.png'});
    }

    async handleSave(e){
        e.preventDefault();
        document.body.style.cursor = 'wait !important';
        console.log(this.state);
        const {name,image,stream,genres,favourite} = this.state;
        let id = Math.floor(Math.random()*100000)
        let obj = {
            id,
            name,
            image,
            stream,
            genres,
            favourite
        }
        let result = await addNewRadioStation(obj);
        document.body.style.cursor = 'pointer';
        this.setState({visible:true,message:result});
    }

    closeModalMessage=()=>{
        this.setState({
            visible:false,
            message:'',
            id:0,
            name:'',
            image:'',
            stream:'',
            genres:'',
            favourite:false,
            statusImage:'/img/no-photo.png'
        });
      }

    render(){
        const {name,stream,genres} = this.state;
        return (
            <>
            <form className='add-modal'>
                <div className='add-modal-block'>
                    <label className='add-modal-label'>Name *</label>
                    <input className='add-modal-inpt' onChange={this.changeInput} name="name" type="text"  value={name} required/>
                </div>
                <div className='add-modal-block'>
                    <label className='add-modal-label'>Source Link *</label>
                    <input className='add-modal-inpt' onChange={this.changeInput} name="stream" type="text"  value={stream} placeholder="http://example/com/stream" required/>
                </div>
                <div className='add-modal-block'>
                    <img src={this.state.statusImage} alt='Load img'/>
                    <input className='add-modal-inpt-img' onChange={this.changeInputImage} name="img"  type="file" accept="image/*" />
                </div>
                <div className='add-modal-block'>
                    <label className='add-modal-label'>Genres or small description</label>
                    <textarea className="add-modal-inpt-genres" onChange={this.changeInput} name="genres" type="text"  value={genres}  id="" cols="10" rows="4"></textarea>
                </div>
                <button className='modal-btn' onClick={this.handleSave.bind(this)}>Save</button>
            </form>
            <Rodal visible={this.state.visible} animation={'rotate'} onClose={this.closeModalMessage.bind(this)}>
                <div className='modal-message'>{this.state.message}</div>
            </Rodal>
            </>
        )
    }
}

export default connect(state=>({
    listRadio:getListRadio(state),
    currentStation:getCurrentRadioStation(state)
}),{})(AddModal);


/*
const {currentStation:{id},listRadio} = props;
            let editStation = listRadio.map((item)=>(item.id==id ? item:null));
            const{name,image,stream,genres,favourire}=editStation[0];
            return {id:editStation[0].id,name,image,stream,genres,favourire,statusImage:image};
            */