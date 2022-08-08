import React, { useEffect } from 'react';
import ClientForm from '../Clients/ClientForm';
import ClientsList from './ClientsList'
import { useSelector, useDispatch } from 'react-redux';
import {fetchInitClients, fetchAddClients, fetchDeleteClient, fetchUpdateClients} from '../../store/actions/clients.actions'

function Clients() {
	const clients = useSelector((state)=> state.clients.clients)
	const dispatch = useDispatch()
	
	useEffect(()=>{
		dispatch(fetchInitClients())
},[])

async function addClientToTheList(clients) {
	dispatch(fetchAddClients(clients))
}

async function deleteClient(id) {
		dispatch(fetchDeleteClient(id))
}

	 async function updateStatusOfClient(id) {
			dispatch(fetchUpdateClients(id))
		}

	return(
		<>
		<h1>Please add your details in order to visit a doctor. If color is green - you may come in to the doctor's office. Yellow - you should wait for some time</h1>
		<ClientForm onSubmit={addClientToTheList}></ClientForm>
		<ClientsList clients={clients} onDelete={deleteClient} onChangeStatus={updateStatusOfClient}></ClientsList>
		</>
	)
}

export default Clients