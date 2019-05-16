import React,{Component} from 'react';
import Rodal from 'rodal';
import { connect } from 'react-redux';
import {getCurrentRadioStation,getListRadio} from '../../modules/reducers';
import {editRadioStationById} from '../../api';
import './EditModal.css';
import 'rodal/lib/rodal.css';


class EditModal extends Component{

    state={
        visible:false,
        message:'',
        id:'',
        name:'',
        image:'',
        stream:'',
        genres:'',
        favourite:false,
        statusImage:'/img/no-photo.png'
    }

    static getDerivedStateFromProps(props,state){
        const {currentStation:{id}, listRadio} = props;
        if(id && listRadio.length){
            if(state.mode==='edit'){
                return state;
            }else{
             //Station ready for editing, load data for input
            let arr = listRadio.map(item=>item.id==id?item:null);
            let editStation;
            arr.forEach((item)=>{
                    if(item!==null){editStation=item};
            });
            //console.log(editStation);
            return {...editStation,statusImage:editStation.image}
            }
        }
        if(state.id==='0'){
            //Its default value for state.(After closing message window)
            return {...state};
        }
        if(id === 0){
            //Station dont choosse, open modal window
            return {visible:true,message:`Choose Radio Station for editing, please!`};
        }
        return state;
    }


    changeInput=(e)=>(this.setState({[e.target.name]:e.target.value,mode:'edit'}));

    changeInputImage=(e)=>{
        //console.log(e.target.files[0]);
        //this.setState({image:e.target.value,statusImage:'/img/done.png'});
    }

    async handleSave(e){
        e.preventDefault();
        document.body.style.cursor = 'wait ';
        const {id,name,image,stream,genres,favourite} = this.state;
        let obj = {
            id,
            name,
            image,
            stream,
            genres,
            favourite
        }
         let result = await editRadioStationById(obj);
         document.body.style.cursor = 'pointer';
         this.setState({visible:true,message:result});
    }

    closeModalMessage=()=>{
        this.setState({
            visible:false,
            message:'',
            id:'0',
            name:'',
            image:'',
            stream:'',
            genres:'',
            favourite:false,
            statusImage:'/img/no-photo.png',
            mode:''
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
                    <input className='add-modal-inpt' onChange={this.changeInput} name="stream" type="text" value={stream} placeholder="http://example/com/stream" required/>
                </div>
                <div className='add-modal-block'>
                    <img src={this.state.statusImage} alt='Load img'/>
                    <input className='add-modal-inpt-img' onChange={this.changeInputImage} name="img" type="file"  accept="image/*" />
                </div>
                <div className='add-modal-block'>
                    <label className='add-modal-label'>Genres or small description</label>
                    <textarea className="add-modal-inpt-genres" onChange={this.changeInput} name="genres" type="text" value={genres}  cols="10" rows="4"></textarea>
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
}))(EditModal);


