import {Link} from 'react-router-dom'

function Navigation () {
	return (
		<>
		<h1>Home Page</h1>
		<nav>
			<Link to='/'>Home Page</Link> | {' '}
			<Link to='clients'>Clients</Link> | {' '}
			<Link to='appointments'>Appointments</Link> | {' '}
			<Link to='doctors'>Doctors</Link> | {' '}
			<Link to='events'>Events</Link> | {' '}
		</nav>
		</>
	)
}

export default Navigation