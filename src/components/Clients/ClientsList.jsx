import ClientsPersons from './ClientsPersons'
import List from '@mui/material/List';

function ClientsList ({clients, onDelete,onChangeStatus}) {
	return (
		<List className='list'>
				{
					clients.map((client) => {
						return <ClientsPersons  
						client={client}
						key={client.id}
						onDelete={onDelete}
						onChangeStatus ={onChangeStatus}></ClientsPersons>
					})
				}
			</List >
	)
}

export default ClientsList;