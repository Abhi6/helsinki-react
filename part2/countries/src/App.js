import { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './components/Form'
import List from './components/List'

const App = () => {
	const [query, setQuery] = useState('')
	const [countryList, setCountryList] = useState([])
	const [masterList, setMasterList] = useState([])

	useEffect(() => {
		axios.get('https://studies.cs.helsinki.fi/restcountries/api/all').then(response => {
			setMasterList(response.data)
			setCountryList(response.data)
		})
	}, [])

	const handleQueryChange = (event) => {
		setQuery(event.target.value)
		const newList = masterList.filter(country => country.name.common.toLowerCase().includes(event.target.value.toLowerCase()))
		setCountryList(newList)
	}

	return (
		<div>
			<Form change={handleQueryChange} query={query} />
			<List countryList={countryList} setCountryList={setCountryList} />
		</div>
	)
}

export default App
