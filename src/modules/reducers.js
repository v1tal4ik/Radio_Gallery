import { handleActions } from 'redux-actions';
import {
    changeRadioSkin,
    changeRadioSkinByDefault,
    changeCurrentStation,
    changeCurrentMode,
    changeInputValue,
    fetchRadioListRequest,
    fetchRadioListSuccess,
    fetchRadioListFailure,
    fetchFavRadioListRequest,
    fetchFavRadioListSuccess,
    fetchFavRadioListFailure
    } from './actions';


export const isLoading = handleActions({
    [fetchRadioListRequest]     : ()=> true,
    [fetchRadioListSuccess]     : ()=> false,
    [fetchRadioListFailure]     : ()=> false,

    [fetchFavRadioListRequest]     : ()=> true,
    [fetchFavRadioListSuccess]     : ()=> false,
    [fetchFavRadioListFailure]     : ()=> false,
},false);

export const listRadio = handleActions({
    [fetchRadioListRequest] : ()=>[],
    [fetchRadioListSuccess] : (_state,action)=>action.payload,
    [fetchRadioListFailure] : (_state,action)=>action.payload,

    [fetchFavRadioListRequest] : ()=>[],
    [fetchFavRadioListSuccess] : (_state,action)=>action.payload,
    [fetchFavRadioListFailure] : (_state,action)=>action.payload,
},[]);

export const skin = handleActions({
    [changeRadioSkin] : (_state,action)=>action.payload,
    [changeRadioSkinByDefault] : (_state,action)=>action.payload,
},[138, 138, 233]);

export const mode = handleActions({
    [changeCurrentMode] : (_state,action)=>action.payload
},'all list');

export const inputValue = handleActions({
    [fetchRadioListRequest] : ()=>'',
    [fetchFavRadioListRequest] : ()=>'',
    [changeInputValue] : (_state,action)=>action.payload
    

},'');

export const currentStation = handleActions({
    [changeCurrentStation] : (_state,action)=>action.payload,
},{id:0,name:'Choose RadioStation in list', stream:''})







export const getIsLoading=(state)=>state.isLoading;
export const getinputValue=(state)=>state.inputValue;
export const getSkin=(state)=>state.skin;
export const getMode=(state)=>state.mode;
export const getListRadio=(state)=>state.listRadio;
export const getCurrentRadioStation=(state)=>state.currentStation;
