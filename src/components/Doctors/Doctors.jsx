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
		<DoctorsList doctors={doctors} onChangeStatus={updateStatusOfDoctor}></DoctorsList>
		</>
	)
}

export default Doctors