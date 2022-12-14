import React, { useEffect }  from 'react';
import AppointmentForm from './AppointmentForm'
import {fetchAddAppointments, fetchInitAppointments} from '../../store/actions/appointments.actions'
import { useSelector, useDispatch } from 'react-redux';
import AppointmentsList from './AppointmentsList'

function Appointments() {
	const appointments = useSelector((state)=> state.appointments.appointments)
	const dispatch = useDispatch()

	useEffect(()=>{
		dispatch(fetchInitAppointments())
},[])

	async function addAppointmentToTheList(clients) {
		dispatch(fetchAddAppointments(clients))
	}

	return(
		<>
		<h1 className="appointments_heading">You may add your details in order to cooperate with our management</h1>
	<AppointmentForm onSubmit={addAppointmentToTheList}></AppointmentForm>
	<AppointmentsList appointments={appointments}></AppointmentsList>
		</>
	)
}

export default Appointments