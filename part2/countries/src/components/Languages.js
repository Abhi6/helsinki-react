const Languages = ({ languagesObj }) => {
	const languagesObjKeys = Object.getOwnPropertyNames(languagesObj)
	return (
		<>
			<h4>languages:</h4>
			<ul>
				{languagesObjKeys.map(l => <li key={l}>{languagesObj[l]}</li>)}
			</ul>
		</>
	)
}

export default Languages
