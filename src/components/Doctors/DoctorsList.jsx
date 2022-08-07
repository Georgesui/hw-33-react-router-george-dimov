import DoctorsItems from './DoctorsItems'

function DoctorsList ({doctors, onChangeStatus}) {
	return (
		<ul className='list'>
				{
					doctors.map((doctor) => {
						return <DoctorsItems  
						doctors={doctor}
						key={doctor.id}
						onChangeStatus ={onChangeStatus}></DoctorsItems>
					})
				}
			</ul >
	)
}

export default DoctorsList;