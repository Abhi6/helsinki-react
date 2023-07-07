import axios from 'axios'

import Button from './Button'

import personService from '../services/persons'

const Persons = ({ persons, query, toDelete }) => {
	return (
		<ul>
			{persons.filter(person => person['name'].toLowerCase().includes(query.toLowerCase())).map(person => <li key={person['id']} >{person['name']} {person['number']}<Button id={person['id']} onClick={toDelete}/></li>)}
		</ul>
	)
}

export default Persons
