import Summary from './Summary'
import Item from './Item'
import Weather from './Weather'
import axios from 'axios'

const List = ({ countryList, setCountryList }) => {
	if (countryList.length === 1) {
		const country = countryList[0]
		return (
			<>
				<Summary country={country} />
				<Weather country={country} />
			</>
		)
	}
	else if (countryList.length <= 10) {
		return (
			<div>
				{countryList.map(country => <Item key={country.name.common} name={country.name.common} setCountryList={setCountryList} />)}
			</div>
		)
	}
	else {
		return (
			<div>Too many matches, specify another filter</div>
		)
	}
}

export default List
