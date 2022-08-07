import {INIT_CLIENTS, ADD_CLIENTS, DELETE_CLIENTS, CHANGE_CLIENTS} from '../actions/clients.actions'

const initialState = {
	clients: []
}

export default function clientReducer(state=initialState, {type,payload}) {
	switch(type){
		case INIT_CLIENTS:
			return{
				...state,
				clients: payload
			}
			case ADD_CLIENTS:
			return{
				...state,
				clients: [...state.clients, payload]
			}
			case DELETE_CLIENTS:
			return{
				...state,
				clients: state.clients.filter((client)=> client.id !== payload)
			}
			case CHANGE_CLIENTS:
			return{
				...state,
				clients: state.clients.map((client)=>{
					if (client.id === payload.id) {
						return payload
					}
					return client
				})
			}
			default:
			 		return state
				}
	}