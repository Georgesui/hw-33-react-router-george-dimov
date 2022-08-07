import { Button  } from '@mui/material';
import ListItem from '@mui/material/ListItem';

function ClientsPersons ({client, onDelete, onChangeStatus}) {

	return (<ListItem className={[client.active ? 'statusTrue' : 'statusFalse', 'clientElement'].join(' ')}>
	{client.name} {client.surname} <div className='row'>
		<Button size="small" variant="contained"className='buttonForDelete' onClick={() => onDelete(client.id)}>DELETE</Button>
		< Button size="small" variant="contained" className='buttonToChangeStatus' onClick={() => onChangeStatus(client.id)}>changeStatus</Button>
		</div></ListItem>)
}

export default ClientsPersons