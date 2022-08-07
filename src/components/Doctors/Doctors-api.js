const DOCTOR_URL = 'http://localhost:3000/doctors';

export async function updateDoctorInDb(id,doctor) {
	const res = await fetch(`${DOCTOR_URL}/${id}`,{
		method:'PUT',
		body: JSON.stringify(doctor),
		headers:{'Content-Type': 'application/json'}
	})
	return res.json();
}

export async function getDoctors() {
	const res = await fetch(`${DOCTOR_URL}`,{
		method:'GET'
	})

	return res.json();
}