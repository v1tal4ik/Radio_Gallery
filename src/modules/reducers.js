import { handleActions } from 'redux-actions';
import {
    changeRadioSkin,
    changeRadioSkinByDefault,
    fetchRadioListRequest,
    fetchRadioListSuccess,
    fetchRadioListFailure
    } from './actions';


export const isLoading = handleActions({
    [fetchRadioListRequest]     : ()=> true,
    [fetchRadioListSuccess]     : ()=> true,
    [fetchRadioListFailure]     : ()=> true,
},false);

export const listRadio = handleActions({
    [fetchRadioListRequest] : ()=>[],
    [fetchRadioListSuccess] : (_state,action)=>action.payload,
    [fetchRadioListFailure] : (_state,action)=>action.payload,
},[]);

export const skin = handleActions({
    [changeRadioSkin] : (_state,action)=>action.payload,
    [changeRadioSkinByDefault] : (_state,action)=>action.payload,
},[138, 138, 233]);

export const inputValue = handleActions({
    [fetchRadioListRequest] : ()=>[],

},'');

export const currentStation = handleActions({
    [fetchRadioListRequest] : ()=>[],
},{})







export const getIsLoading=(state)=>state.isLoading;
export const getSkin=(state)=>state.skin;
