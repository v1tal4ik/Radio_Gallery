import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import sagas from './sagas';
import {mode,isLoading,inputValue,skin,currentStation,listRadio} from './reducers';

export default combineReducers({
    mode,
    isLoading,
    listRadio,
    skin,
    inputValue,
    currentStation,
});

export function* rootSaga() {
    yield fork(sagas);
}