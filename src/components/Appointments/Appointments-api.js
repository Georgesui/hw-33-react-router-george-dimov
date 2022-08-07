const APPOINTMENTS_URL = 'http://localhost:3000/appointments';

export async function addAppointmentsToDb (appointment) {
	const res = await fetch(`${APPOINTMENTS_URL}`,{
		method:'POST',
		body: JSON.stringify(appointment),
		headers:{'Content-Type': 'application/json'}
	})
	return res.json();
}

export async function geAppointments() {
	const res = await fetch(`${APPOINTMENTS_URL}`,{
		method:'GET'
	})

	return res.json();
}