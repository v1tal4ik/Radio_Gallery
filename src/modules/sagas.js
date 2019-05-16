import { takeEvery, put, call, fork } from 'redux-saga/effects';
import {
    fetchRadioListRequest,
    fetchRadioListSuccess,
    fetchRadioListFailure,
    fetchFavRadioListRequest,
    fetchFavRadioListSuccess,
    fetchFavRadioListFailure
  } from './actions';
import {getListRadio,getFavListRadio} from '../api';


function* fetchReducersWatcher() {
  yield takeEvery(fetchRadioListRequest, fetchRadioStationFlow);
  yield takeEvery(fetchFavRadioListRequest, fetchFavRadioStationFlow);
}

export function* fetchRadioStationFlow(action) {
  try{
    const result = yield call(getListRadio,action.payload);
    yield put(fetchRadioListSuccess(result));
  } catch (error){
    yield put(fetchRadioListFailure(error));
  }
}

export function* fetchFavRadioStationFlow(action) {
  try{
    const result = yield call(getFavListRadio,action.payload);
    yield put(fetchFavRadioListSuccess(result));
  } catch (error){
    yield put(fetchFavRadioListFailure(error));
  }
}


export default function*() {
  yield fork(fetchReducersWatcher);
}