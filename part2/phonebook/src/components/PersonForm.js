const PersonForm = ({ add, name, nameChange, number, numberChange }) => {
	return (
		<form onSubmit={add}>
			<div>
				name: <input value={name} onChange={nameChange} />
			</div>
			<div>
				phone number: <input value={number} onChange={numberChange} />
			</div>
			<div>
				<button type='submit'>add</button>
			</div>
		</form>
	)
}

export default PersonForm
