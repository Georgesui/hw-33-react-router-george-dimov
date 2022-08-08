import { useState } from "react"
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function AppointmentForm({onSubmit}) {
	const [appointment, setAppointment] = useState({
			name:'',
			surname:'',
			ready: true,
	})

	function changeAppointment(e){
		setAppointment({
			...appointment,
			[e.target.name]:e.target.value
		})
	}

	function submitForm(e) {
		e.preventDefault()
		onSubmit(appointment)
		setAppointment({
			name:'',
			surname:'',
			ready: true,
		})
	}

	return (
	<Box component="form" onSubmit={submitForm}>
		<TextField id="outlined-basic" label="Outlined" variant="outlined" type="text" name="name" value={appointment.name} onChange={changeAppointment}/>
		<TextField id="outlined-basic" label="Outlined" variant="outlined" type="text" name="surname" value={appointment.surname} onChange={changeAppointment}/>
		<Button variant="outlined" size="small" className='buttonToAdd'>Add Todo</Button>
	</Box>)
}