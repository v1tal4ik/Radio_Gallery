import { combineReducers } from 'redux';
//import { fork } from 'redux-saga/effects';
import {isLoading,inputValue,skin,currentStation,listRadio} from './reducers';

export default combineReducers({
    isLoading,
    listRadio,
    skin,
    inputValue,
    currentStation,
});

export function* rootSaga() {
    //yield fork(productsSagas);
    //yield fork(currencySagas);
}