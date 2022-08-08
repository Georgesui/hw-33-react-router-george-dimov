import DoctorsItems from './DoctorsItems'
import List from '@mui/material/List';

function DoctorsList ({doctors, onChangeStatus}) {
	return (
		<List className='list'>
				{
					doctors.map((doctor) => {
						return <DoctorsItems  
						doctors={doctor}
						key={doctor.id}
						onChangeStatus ={onChangeStatus}></DoctorsItems>
					})
				}
			</List >
	)
}

export default DoctorsList;