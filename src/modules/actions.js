import { createAction } from 'redux-actions';

export const changeRadioSkin = createAction('SKIN/CHANGE_COLOR');
export const changeRadioSkinByDefault = createAction('SKIN/CHANGE_COLOR_BY_DEFAULT');

export const changeCurrentStation = createAction('STATION/CHANGE_RADIO_STATION');
export const changeCurrentMode = createAction('MODE/CHANGE_CURRENT_MODE');
export const changeInputValue = createAction('INPUT/CHANGE_INPUT');



export const fetchRadioListRequest = createAction('RADIO/FETCH_RADIOSTATION');
export const fetchRadioListSuccess = createAction('RADIO/FETCH_SUCCESS');
export const fetchRadioListFailure = createAction('RADIO/FETCH_FAILURE');

export const fetchFavRadioListRequest = createAction('RADIO/FETCH_FAV_RADIOSTATION');
export const fetchFavRadioListSuccess = createAction('RADIO/FETCH_FAV_SUCCESS');
export const fetchFavRadioListFailure = createAction('RADIO/FETCH_FAV_FAILURE');

