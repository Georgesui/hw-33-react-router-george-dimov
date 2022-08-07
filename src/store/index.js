import {applyMiddleware, createStore, combineReducers } from 'redux';
import clientReducer from './reducer/clients.reducer'
import doctorsReducer from './reducer/doctors.reducer';
import appointmentReducer from './reducer/appointments.reducer'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = combineReducers({
	clients: clientReducer,
	doctors: doctorsReducer,
	appointments:appointmentReducer})

export const store = createStore(rootReducer,applyMiddleware(thunk, logger));

export default store