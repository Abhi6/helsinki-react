const Notification = ({ message, isError }) => {
	let componentStyle = {}

	if (isError === 1) {
		componentStyle = {
			color: 'red',
			background: 'lightgrey',
			fontSize: 20,
			borderStyle: 'solid',
			borderRadius: 5,
			padding: 10,
			marginBottom: 10
		}
	}
	else if (isError === 2) {
		componentStyle = {
			color: 'green',
			background: 'lightgrey',
			fontSize: 20,
			borderStyle: 'solid',
			borderRadius: 5,
			padding: 5,
			marginBottom: 10
		}
	}

	return (
		<div style={componentStyle}>
			{message}
		</div>
	)
}

export default Notification
