const Form = ({ change, query }) => {
	return (
		<form>
			find countries
			<input type="text" onChange={change} value={query} />
		</form>
	)
}

export default Form
