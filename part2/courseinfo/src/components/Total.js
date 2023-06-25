const Total = ({ parts }) => {
	const total = parts.reduce((sum, part) => {
		return part['exercises'] + sum
	}, 0)
	return (
		<b>total of {total} exercises</b>
	)
}

export default Total
