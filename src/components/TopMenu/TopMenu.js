import React,{Component} from 'react';
import Rodal from 'rodal';
import AddModal from '../AddModal';
import EditModal from '../EditModal';
import { connect } from 'react-redux';
import {
    changeRadioSkin,
    changeRadioSkinByDefault,
    changeCurrentMode,
    changeInputValue,
    fetchRadioListRequest,
    fetchFavRadioListRequest
    } from '../../modules/actions';
import {getMode,getCurrentRadioStation} from '../../modules/reducers';
import './TopMenu.css';
import 'rodal/lib/rodal.css';

class TopMenu extends Component{

    state={
        visible:false,
        modalType:'',
        input:''
    }

    handleChangeRadioSkin=()=>{
        const{changeRadioSkin} = this.props;
        let rgb = [];
        for(let i=0;i<3;i++){
            let value = Math.floor(Math.random()*256);
            rgb.push(value);
        }
        changeRadioSkin(rgb);
    }
    handleChangeRadioSkinByDefault=()=>{
        const{changeRadioSkinByDefault} = this.props;
        changeRadioSkinByDefault([138, 138, 233]);
    }
    toggleRadioList=(e)=>{
        const {changeCurrentMode,fetchRadioListRequest,fetchFavRadioListRequest} = this.props;
        // eslint-disable-next-line
        if(e.target.innerText == 'FAVOURITE'){
            //press button favourite
            fetchFavRadioListRequest();
            changeCurrentMode('favourite')
        }
        // eslint-disable-next-line
        if(e.target.innerText == 'ALL LIST'){
            //press button all list
            fetchRadioListRequest();
            changeCurrentMode('all list');
        }
    }
    callHandleChangeInput=()=>{
        const{changeInputValue} = this.props;
        changeInputValue(this.state.input.toLowerCase());
    }
    handleChangeInput=(e)=>{
        const{changeInputValue} = this.props;
        this.setState({input:e.target.value});
        changeInputValue(e.target.value.toLowerCase());
    }
    handleOpenAddModal=()=>this.setState({visible:true,modalType:'add'});

    handleOpenEditModal=()=>this.setState({visible:true,modalType:'edit'});

    closeModalAdd=()=>{
        this.setState({visible:false,edit:false});
        const {mode,fetchRadioListRequest,fetchFavRadioListRequest} = this.props;
        if(mode === 'all list'){
           fetchRadioListRequest();
        }
        if(mode === 'favourite'){
            fetchFavRadioListRequest();
        }
      }
    

    render(){
        const {mode}=this.props;
        const w = window.innerWidth / 1.5;
        const h = window.innerHeight / 1.5
        return (
            <>
            <div className='top-menu'>
                <div>
                    <button className='btn fiolet' onClick={this.handleChangeRadioSkin}>Change Skin</button>
                    <button className='btn fiolet' onClick={this.handleChangeRadioSkinByDefault}>Default</button>
                </div>
                <button className='btn blue' onClick={this.toggleRadioList}>
                { mode === 'all list' ?
                `favourite` :
                `all list`
                }
                </button>
                <div className='search-block'>
                    <input className='top-inpt' type='text' placeholder='name...' onChange={this.handleChangeInput}/>
                    <button className='btn' onClick={this.callHandleChangeInput}>search</button>
                </div>
                <button className='btn green' onClick={this.handleOpenAddModal}>Add</button>
                <button className='btn yellow' onClick = {this.handleOpenEditModal}>edit</button>
            </div>
            <Rodal visible={this.state.visible} onClose={this.closeModalAdd.bind(this)} animation={'slideDown'}	duration={400} width={w} height={h} >
                    {this.state.modalType ==='add' ? <AddModal />: <EditModal />}
            </Rodal>
            </>
        )
    }
}

export default connect(state=>({
    mode:getMode(state),
    currentStation:getCurrentRadioStation(state)
}),{
    changeRadioSkin,
    changeRadioSkinByDefault,
    changeCurrentMode,
    changeInputValue,
    fetchRadioListRequest,
    fetchFavRadioListRequest
})(TopMenu);
