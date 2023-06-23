import { useState } from 'react'

// Header
const Header = props => <h1>{props.text}</h1>

// Button
const Button = (props) => {
	return (
		<button onClick={props.handleClick}>{props.text}</button>
	)
}

// Stats
const Stats = (props) => {
	return (
		<div>
			{props.text} {props.value}
		</div>
	)
}

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	return (
		<div>
			<Header text={'give feedback'} />
			<Button handleClick={() => setGood(good + 1)} text={'good'} />
			<Button handleClick={() => setNeutral(neutral + 1)} text={'neutral'} />
			<Button handleClick={() => setBad(bad + 1)} text={'bad'} />
			<Header text={'statistics'} />
			<Stats text={'good'} value={good} />
			<Stats text={'neutral'} value={neutral} />
			<Stats text={'bad'} value={bad} />
		</div>
	)

}

export default App
