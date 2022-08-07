import {addAppointmentsToDb, geAppointments} from '../../components/Appointments/Appointments-api'

export const INIT_APPOINTMENTS = '[Appointments] init appointments'
export const ADD_APPOINTMENTS = '[Appointments] add appointments'

export function initAppointmentsAction (appointments) {
	return {
		type: INIT_APPOINTMENTS,
		payload: appointments,
	}
}

export function addAppointmentsAction (appointments) {
	return {
		type: ADD_APPOINTMENTS,
		payload: appointments,
	}
}

export function fetchInitAppointments() {
	return async function (dispatch) {
		try {
			const appointment = await geAppointments();
			dispatch(initAppointmentsAction(appointment))
		} catch (e) {
			console.warn(e)
		}
	}
}


export function fetchAddAppointments(appointment) {
	return async function (dispatch) {
		try {
			const addedAppointments = await addAppointmentsToDb(appointment);
			dispatch(addAppointmentsAction(addedAppointments))
		} catch (e) {
			console.warn(e)
		}
	}
}