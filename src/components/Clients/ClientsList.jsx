import ClientsPersons from './ClientsPersons'

function ClientsList ({clients, onDelete,onChangeStatus}) {
	return (
		<ul className='list'>
				{
					clients.map((client) => {
						return <ClientsPersons  
						client={client}
						key={client.id}
						onDelete={onDelete}
						onChangeStatus ={onChangeStatus}></ClientsPersons>
					})
				}
			</ul >
	)
}

export default ClientsList;