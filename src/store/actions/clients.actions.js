import {getClient, addClientsToDb, deleteClient, updateClientInDb} from '../../components/Clients/Clients-api'
export const INIT_CLIENTS = '[Clients] init clients'
export const ADD_CLIENTS = '[Clients] add clients'
export const DELETE_CLIENTS = '[Clients] delete clients'
export const CHANGE_CLIENTS = '[Clients] change clients'



export function initClientsAction (clients) {
	return {
		type: INIT_CLIENTS,
		payload: clients,
	}
}

export function addClientsAction (clients) {
	return {
		type: ADD_CLIENTS,
		payload: clients,
	}
}

export function deleteClientAction (id) {
	return {
		type: DELETE_CLIENTS,
		payload: id ,
	}
}

export function changeClientAction (payload) {
	return {
		type: CHANGE_CLIENTS,
		payload: payload,
	}
}

export function fetchInitClients() {
	return async function (dispatch) {
		try {
			const client = await getClient();
			dispatch(initClientsAction(client))
		} catch (e) {
			console.warn(e)
		}
	}
}

export function fetchAddClients(client) {
	return async function (dispatch) {
		try {
			const addedClient = await addClientsToDb(client);
			dispatch(addClientsAction(addedClient))
		} catch (e) {
			console.warn(e)
		}
	}
}

export function fetchDeleteClient(id) {
	return async function (dispatch) {
		try {
			await deleteClient(id);
			dispatch(deleteClientAction(id))
		} catch (e) {
			console.warn(e)
		}
	}
}

export function fetchUpdateClients(id) {
	return async function (dispatch, getState) {
		try {
			const {clients} = getState();
			const client = clients.clients.find((element)=> element.id === id)
			const updatedClient = {...client, active: !client.active}

			await updateClientInDb(id, updatedClient)
			dispatch(changeClientAction(updatedClient))
		} catch (e) {
			console.warn(e)
		}
	}
}