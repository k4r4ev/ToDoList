import {createStore} from 'redux';
import {rootReducer, initialState} from '../store';

export const store = createStore(rootReducer, initialState);
