import { useState } from "react"
import "../App.css"

const Counter = () => {
	const [count, setCount] = useState(0)
	const increment = () => {
		setCount(count + 1)
	}
	const decrement = () => {
		setCount(count - 1)
	}
	const reset = () => {
		setCount(0)
	}
	return (
		<div className="App">
			<h2>Counter</h2>
			<p>Count : {count}</p>
			<button onClick={increment} className="btn btn-primary">
				Increment
			</button>
			<button onClick={decrement} className="btn btn-danger">
				Decrement
			</button>
			<button onClick={reset} className="btn btn-success">
				Reset
			</button>
		</div>
	)
}

export default Counter
