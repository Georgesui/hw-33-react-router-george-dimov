import { Button } from '@mui/material';
import ListItem from '@mui/material/ListItem';

function AppointmentsPlanning ({appointments}) {

	return (<ListItem className={[appointments.ready ? 'statusTrue' : 'statusFalse', 'clientElement'].join(' ')}>
	{appointments.name} {appointments.surname} <div className='row'>
		</div></ListItem>)
}

export default AppointmentsPlanning