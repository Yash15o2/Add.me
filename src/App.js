import moon from './img/moon.svg';
import plus from './img/plus.svg';
import './App.css';
import { useState } from 'react';

function App() {
	const [num1, setNum1] = useState(0);
	const [num2, setNum2] = useState(0);
	const [text, setText] = useState('Answer');

	function randomNumberInRange(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	const handleClick = () => {
		setNum1(randomNumberInRange(1, 9));
		setNum2(randomNumberInRange(1, 9));
		setText('Answer');
	};
	const handleText = () => {
		setText(num1 + num2);
	};

	return (
		<div className="App">
			<header className="App-header">
				<div></div>
				<div className="logo">Add.me</div>
				<div>
					<img className="moon-img" src={moon} alt="Dark Mode" />
				</div>
			</header>

			<section className="App-section">
				<div className="sec-div">
					<div className="number">{num1}</div>
					<div>
						<img className="plus-img" src={plus} alt="Plus" />
					</div>
					<div className="number">{num2}</div>
				</div>
			</section>

			<footer className="App-footer">
				<button className="btn next-btn" onClick={handleText}>
					{text}
				</button>
				<button className="btn ans-btn" onClick={handleClick}>
					Next
				</button>
			</footer>
		</div>
	);
}

export default App;
