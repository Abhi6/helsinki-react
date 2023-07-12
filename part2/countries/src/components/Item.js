import { useState } from 'react'
import Summary from './Summary'
import List from './List'
import axios from 'axios'

const Item = ({ name, setCountryList }) => {
	const showSummary = (event) => {
		axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`).then(response => {
			setCountryList([response.data])
		})
	}

	return (
		<div>
			{name}
			<button onClick={showSummary}>
				show
			</button>
		</div>
	)
}

export default Item
