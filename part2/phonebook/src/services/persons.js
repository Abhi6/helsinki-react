import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
	return axios.get(baseUrl)
}

const create = (personObject) => {
	return axios.post(baseUrl, personObject)
}

const remove = (personObject) => {
	return axios.delete(`${baseUrl}/${personObject.id}`)
}

const update = (id, personObject) => {
	return axios.put(`${baseUrl}/${id}`, personObject)
}

export default { getAll, create, remove, update }
