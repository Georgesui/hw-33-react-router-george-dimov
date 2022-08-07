import {INIT_DOCTORS, CHANGE_DOCTORS} from '../actions/doctors.actions'

const initialState = {
	doctors: []
}

export default function doctorsReducer(state=initialState, {type,payload}) {
	switch(type){
		case INIT_DOCTORS:
			return{
				...state,
				doctors: payload
			}
			case CHANGE_DOCTORS:
			return{
				...state,
				doctors: state.doctors.map((doctor)=>{
					if (doctor.id === payload.id) {
						return payload
					}
					return doctor
				})
			}
			default:
			 		return state
				}
	}