import Header from './Header'
import Geography from './Geography'
import Languages from './Languages'
import Flag from './Flag'

const Summary = ({ country }) => {
	return (
		<div> 
			<Header name={country.name.common} />
			<Geography capital={country.capital} area={country.area} />
			<Languages languagesObj={country.languages} />
			<Flag flagUrl={country.flags.svg} />
		</div>
	)
}

export default Summary
