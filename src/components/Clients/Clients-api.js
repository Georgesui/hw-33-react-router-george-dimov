const CLIENT_URL = 'http://localhost:3000/clients';

export async function addClientsToDb (client) {
	const res = await fetch(`${CLIENT_URL}`,{
		method:'POST',
		body: JSON.stringify(client),
		headers:{'Content-Type': 'application/json'}
	})
	return res.json();
}

export async function updateClientInDb(id,client) {
	const res = await fetch(`${CLIENT_URL}/${id}`,{
		method:'PUT',
		body: JSON.stringify(client),
		headers:{'Content-Type': 'application/json'}
	})
	return res.json();
}

export async function deleteClient(id) {
	const res = await fetch(`${CLIENT_URL}/${id}`,{
		method:'DELETE'
	})

	return res.json();
}

export async function getClient() {
	const res = await fetch(`${CLIENT_URL}`,{
		method:'GET'
	})

	return res.json();
}