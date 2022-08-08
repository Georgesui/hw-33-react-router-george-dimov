import { Button } from '@mui/material';
import ListItem from '@mui/material/ListItem';

function DoctorsItems ({doctors, onChangeStatus}) {

	return (<ListItem className={[doctors.available ? 'statusTrue' : 'statusFalse', 'clientElement'].join(' ')}>
	{doctors.name} {doctors.surname} <div className='row'>
		< Button size="small" variant="contained" className='buttonToChangeStatus' onClick={() => onChangeStatus(doctors.id)}>changeStatus</Button>
		</div></ListItem>)
}

export default DoctorsItems