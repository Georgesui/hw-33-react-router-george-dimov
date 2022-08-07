import healtvalley from '../../../src/img/health_valley.jpg'
import meanshealth from '../../../src/img/menshealth.jpg'
import mentalhealth from '../../../src/img/mentalhealth.jpg'

export default function HealthEvents() {
	return(
		<div className="container_for_events">
			<div className="valley-main">
				<p className='valley-p'>Health Inc is happy to offer you our monthly event "Health Valley"</p>
		<img src={healtvalley} alt="health-valley"></img>
		</div>
		<div className="mens-health">
		<p className='mens-health-p'>Health Inc promoted first "Men's health week" in this year</p>
		<img src={meanshealth} alt="Men's health"></img>
		</div>
		<div className="mental-health">
		<p className='mental-health-p'>Health Inc from the begging of it's creation started annual "Mental Health" conference</p>
		<img src={mentalhealth} alt="Mental Health Conference"></img>
		</div>
		</div>
	)
}
