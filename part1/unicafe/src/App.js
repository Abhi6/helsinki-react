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
const StatisticLine = (props) => {
	if (props.text === 'positive') {
		return (
			<tr>
				<td>
					{props.text}
				</td>
				<td>
					{props.value} %
				</td>
			</tr>
		)
	}

	return (
		<tr>
			<td>
				{props.text}
			</td>
			<td>
				{props.value}
			</td>
		</tr>
	)
}

const Statistics = (props) => {
	if (props.clicks === 0) {
		return (
			<div>
				No feedback given
			</div>
		)
	}

	return (
		<table>
			<StatisticLine text={'good'} value={props.good} />
			<StatisticLine text={'neutral'} value={props.neutral} />
			<StatisticLine text={'bad'} value={props.bad} />
			<StatisticLine text={'average'} value={props.average} />
			<StatisticLine text={'positive'} value={props.positive} />
		</table>
	)
}

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	const [clicks, setClicks] = useState(0)

	const incrementGood = () => {
		setGood(good + 1)
		setClicks(clicks + 1)
	}
	const incrementNeutral = () => {
		setNeutral(neutral + 1)
		setClicks(clicks + 1)
	}
	const incrementBad = () => {
		setBad(bad + 1)
		setClicks(clicks + 1)
	}

	const avg = () => (good - bad) / clicks
	const pos = () => (good / clicks) * 100

	return (
		<div>
			<Header text={'give feedback'} />
			<Button handleClick={incrementGood} text={'good'} />
			<Button handleClick={incrementNeutral} text={'neutral'} />
			<Button handleClick={incrementBad} text={'bad'} />
			<Header text={'statistics'} />
			<Statistics clicks={clicks} good={good} neutral={neutral} bad={bad} average={avg()} positive={pos()} />
		</div>
	)

}

export default App
