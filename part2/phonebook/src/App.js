import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [query, setQuery] = useState('')

	useEffect(() => {
		axios
			.get('http://localhost:3001/persons')
			.then(response => {
				setPersons(response.data)
			})
	}, [])

	const addPerson = (event) => {
		event.preventDefault()
		const personObject = {
			name: newName,
			number: newNumber,
			id: persons.length + 1
		}

		const duplicate = (persons.filter(person => person.name === newName).length > 0) ||
			(persons.filter(person => person.number === newNumber).length > 0)

		if (duplicate) {
			alert(`${newName} and/or ${newNumber} is already added to the phonebook`)
		}
		else {
			setPersons(persons.concat(personObject))
			setNewName('')
			setNewNumber('')
		}
	}

	const handleNameChange = (event) => {
		setNewName(event.target.value)
	}

	const handleNumberChange = (event) => {
		setNewNumber(event.target.value)
	}

	const handleQueryChange = (event) => {
		setQuery(event.target.value)
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter query={query} handleChange={handleQueryChange} />
			<h3>add a new</h3>
			<PersonForm add={addPerson} name={newName} nameChange={handleNameChange} number={newNumber} numberChange={handleNumberChange} />
			<h3>Numbers</h3>
			<Persons persons={persons} query={query} />
		</div>
	)
}

export default App
