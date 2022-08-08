import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchInitDoctors, fetchChangeDoctors} from '../../store/actions/doctors.actions'
import DoctorsList from '../Doctors/DoctorsList'

function Doctors() {
	const doctors = useSelector((state)=> state.doctors.doctors)
	const dispatch = useDispatch()

	useEffect(()=>{
		dispatch(fetchInitDoctors())
},[])

async function updateStatusOfDoctor(id) {
	dispatch(fetchChangeDoctors(id))
}

	return(
		<>
		<h1>You may find below list of our Doctors. Green color - the doctor is available today, yellow - not.</h1>
		<DoctorsList doctors={doctors} onChangeStatus={updateStatusOfDoctor}></DoctorsList>
		</>
	)
}

export default Doctors