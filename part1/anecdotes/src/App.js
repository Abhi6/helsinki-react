import { useState } from 'react'

const Header = (props) => {
	return (
		<h2>{props.text}</h2>
	)
}

const App = () => {
	const anecdotes = [
		'If it hurts, do it more often.',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
		'The only way to go fast, is to go well.'
	]

	const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

	const [selected, setSelected] = useState(0)

	const nextAnecdote = () => {
		setSelected(Math.floor(Math.random() * anecdotes.length))
	}

	const addVote = (index) => {
		const copy = [...votes]
		copy[index] += 1
		setVotes(copy)
	}

	const getMaxIndex = () => {
		let max = votes[0]
		let maxIndex = 0;
		for (let i = 0; i < votes.length; i += 1) {
			if (votes[i] > max) {
				max = votes[i]
				maxIndex = i
			}
		}
		return maxIndex
	}

	return (
		<div>
			<Header text={'Anecdote of the day'} />
			<div>
				{anecdotes[selected]}
			</div>
			<div>
				has {votes[selected]} votes
			</div>
			<button onClick={() => addVote(selected)}>vote</button>
			<button onClick={nextAnecdote}>next anecdote</button>
			<Header text={'Anecdote with most votes'} />
			<div>
				{anecdotes[getMaxIndex()]}
			</div>
			<div>
				has {votes[getMaxIndex()]} votes
			</div>
		</div>
	)
}

export default App
