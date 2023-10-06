import logo from './logo.svg';
import './App.css';
import { useState, useReducer } from 'react';

function App() {
	
	// const [count, setCount] = useState(0);

	// function add() {
	// 	setCount((count) => count + 1)
	// }
	// function subtract() {
	// 	setCount((count) => count - 1)
	// }
	// function reset() {
	// 	setCount(0)
	// }

	const initialState = 0;
	const reducer = (state, action) => {
		switch(action) {
			case 'add':
				return state + 1;
			case 'subtract':
				return state - 1;
			case 'reset':
				return 0;
			default: 
				throw new Error('Unexpected Action!')
		}
	}

	const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
        <h1>useReducer Example</h1>
		<h2>Count: {count}</h2>
		<button onClick={() => dispatch('add')}>add</button>&nbsp;
		<button onClick={() => dispatch('subtract')}>subtract</button>&nbsp;
		<button onClick={() => dispatch('reset')}>reset</button>&nbsp;
    </div>
  );
}

export default App;
