import { Button } from '@mui/material';

function AppointmentsPlanning ({appointments, onChangeStatus}) {

	return (<li className={[appointments.ready ? 'statusTrue' : 'statusFalse', 'clientElement'].join(' ')}>
	{appointments.name} {appointments.surname} <div className='row'>
		< Button variant="contained" size="small" color="success" className='buttonToChangeStatus' onClick={() => onChangeStatus(appointments.id)}>changeStatus</Button>
		</div></li>)
}

export default AppointmentsPlanning