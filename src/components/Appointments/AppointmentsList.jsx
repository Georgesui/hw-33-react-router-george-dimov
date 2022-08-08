import AppointmentsPlanning from './AppointmentsPlanning'

function AppointmentsList ({appointments}) {
	return (
		<ul className='list'>
				{
					appointments.map((appointment) => {
						return <AppointmentsPlanning  
						appointments={appointment}
						key={appointment.id}></AppointmentsPlanning>
					})
				}
			</ul >
	)
}

export default AppointmentsList;