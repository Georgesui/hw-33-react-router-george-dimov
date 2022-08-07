import AppointmentsPlanning from './AppointmentsPlanning'

function AppointmentsList ({appointments, onChangeStatus}) {
	return (
		<ul className='list'>
				{
					appointments.map((appointment) => {
						return <AppointmentsPlanning  
						appointments={appointment}
						key={appointment.id}
						onChangeStatus ={onChangeStatus}></AppointmentsPlanning>
					})
				}
			</ul >
	)
}

export default AppointmentsList;