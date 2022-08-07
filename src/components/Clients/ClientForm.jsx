import { useState } from "react"
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function ClientForm ({onSubmit}) {
	const [client, setClient] = useState({
		name: '',
		surname: '',
		active: false
	})

	function changeTodo(e){
		setClient({
			...client,
			[e.target.name]:e.target.value
		})
	}

	function submitForm(e) {
		e.preventDefault()
		onSubmit(client)
		setClient({
			name: '',
			surname: '',
			active: false
		})
	}

	return (
	<Box component="form" onSubmit={submitForm}>
		<TextField id="outlined-basic" label="Outlined" variant="outlined" type="text" name="name" value={client.name} onChange={changeTodo}/>
		<TextField id="outlined-basic" label="Outlined" variant="outlined" type="text" name="surname" value={client.surname} onChange={changeTodo}/>
		<Button size="small" variant="contained" className='buttonToAdd'>Add Todo</Button>
	</Box>)
}

export default ClientForm