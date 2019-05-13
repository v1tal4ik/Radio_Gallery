import { createAction } from 'redux-actions';

export const changeRadioSkin = createAction('SKIN/CHANGE_COLOR');
export const changeRadioSkinByDefault = createAction('SKIN/CHANGE_COLOR_BY_DEFAULT');

export const fetchRadioListRequest = createAction('RADIO/FETCH_RADIOSTATION');
export const fetchRadioListSuccess = createAction('RADIO/FETCH_SUCCESS');
export const fetchRadioListFailure = createAction('RADIO/FETCH_FAILURE');

