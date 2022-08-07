import { Button } from '@mui/material';

function DoctorsItems ({doctors, onChangeStatus}) {

	return (<li className={[doctors.available ? 'statusTrue' : 'statusFalse', 'clientElement'].join(' ')}>
	{doctors.name} {doctors.surname} <div className='row'>
		< Button size="small" variant="contained" className='buttonToChangeStatus' onClick={() => onChangeStatus(doctors.id)}>changeStatus</Button>
		</div></li>)
}

export default DoctorsItems