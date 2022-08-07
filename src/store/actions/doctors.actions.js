import {getDoctors, updateDoctorInDb} from '../../components/Doctors/Doctors-api'

export const INIT_DOCTORS = '[Doctors] init doctors'
export const CHANGE_DOCTORS = '[Doctors] change doctors'

export function initDoctorsAction (doctors) {
	return {
		type: INIT_DOCTORS,
		payload: doctors,
	}
}

export function changeDoctorsAction (payload) {
	return {
		type: CHANGE_DOCTORS,
		payload: payload,
	}
}

export function fetchInitDoctors() {
	return async function (dispatch) {
		try {
			const doctor = await getDoctors();
			dispatch(initDoctorsAction(doctor))
		} catch (e) {
			console.warn(e)
		}
	}
}

export function fetchChangeDoctors(id) {
	return async function (dispatch, getState) {try {
		const {doctors} = getState();
		const doctor = doctors.doctors.find((element)=> element.id === id)
		const updatedDoctor = {...doctor, available: !doctor.available}

		await updateDoctorInDb(id, updatedDoctor)
		dispatch(changeDoctorsAction(updatedDoctor))
	} catch (e) {
		console.warn(e)
	}}
}