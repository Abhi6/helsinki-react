import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

import personService from './services/persons'

const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [query, setQuery] = useState('')

	useEffect(() => {
		personService
			.getAll()
			.then(response => {
				setPersons(response.data)
			})
	}, [])

	const addPerson = (event) => {
		event.preventDefault()
		const personObject = {
			name: newName,
			number: newNumber,
		}

		const duplicateExists = persons.filter(person => person.name === personObject.name).length > 0

		if (duplicateExists) {
			const duplicateObject = persons.filter(person => person.name === personObject.name)[0]

			if (window.confirm(`${duplicateObject.name} already exists in the phonebook, replace the old number with a new one?`)) {
				personService
					.update(duplicateObject.id, personObject)
					.then(returnedPerson => {
						setPersons(persons.map(person => person.id !== duplicateObject.id ? person : returnedPerson.data))
						setNewName('')
						setNewNumber('')
					})
			}
		}
		else {
			personService
				.create(personObject)
				.then(returnedPerson => {
					setPersons(persons.concat(returnedPerson.data))
					setNewName('')
					setNewNumber('')
				})
		}

	}

	const toDelete = (event) => {
		const personObject = persons.filter(person => {
			return event.target.id == person.id
		})[0]

		if (window.confirm(`Delete ${personObject.name} ?`)) {
			personService
				.remove(personObject)
				.then(response => {
					setPersons(persons.filter(person => {
						return person.id != personObject.id
					}))
				})
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
			<Persons persons={persons} query={query} toDelete={toDelete} />
		</div>
	)
}

export default App
