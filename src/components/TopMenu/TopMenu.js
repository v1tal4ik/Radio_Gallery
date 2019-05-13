import React,{Component} from 'react';
import { connect } from 'react-redux';
import {changeRadioSkin,changeRadioSkinByDefault} from '../../modules/actions';
import './TopMenu.css';

class TopMenu extends Component{
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
    render(){
        return (
            <div className='top-menu'>
                <div>
                    <button className='btn fiolet' onClick={this.handleChangeRadioSkin}>Change Skin</button>
                    <button className='btn fiolet' onClick={this.handleChangeRadioSkinByDefault}>Default</button>
                </div>
                <button className='btn blue'>favourite</button>
                <div className='search-block'>
                    <input className='top-inpt' type='text' placeholder='name...' />
                    <button className='btn'>search</button>
                </div>
                <button className='btn green'>Add</button>
                <button className='btn yellow'>edit</button>
            </div>
        )
    }
}

export default connect(state=>({}),{changeRadioSkin,changeRadioSkinByDefault})(TopMenu);
