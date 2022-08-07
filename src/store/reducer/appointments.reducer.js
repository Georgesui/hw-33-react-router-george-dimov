import {ADD_APPOINTMENTS, INIT_APPOINTMENTS} from '../actions/appointments.actions'


const initialState = {
	appointments: []
}

export default function appointmentReducer(state=initialState, {type,payload}) {
	switch(type){
		case INIT_APPOINTMENTS:
			return{
				...state,
				appointments: payload
			}
		case ADD_APPOINTMENTS:
			return{
				...state,
				appointments: [...state.appointments, payload]
			}
			default:
			 		return state
				}
}