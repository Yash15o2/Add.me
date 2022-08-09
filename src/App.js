import moon from './img/moon.svg';
import sun from './img/sun.svg';
import dplus from './img/dplus.svg';
import plus from './img/plus.svg';
import './App.css';
import { useState } from 'react';
import { createContext } from 'react';

export const ThemeContext = createContext(null);

function App() {
	const [num1, setNum1] = useState(0);
	const [num2, setNum2] = useState(0);
	const [text, setText] = useState('Answer');
	const [theme, setTheme] = useState('light');
	const [modeImg, setModeImg] = useState(moon);
	const [plusImg, setPlusImg] = useState(plus);

	function toggleTheme(curr) {
		setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
		setModeImg((currImg) => (currImg === moon ? sun : moon));
		setPlusImg((currImg) => (currImg === plus ? dplus : plus));
	}

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
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<div className="App" id={theme}>
				<header className="App-header">
					<div></div>
					<div className="logo">Add.me</div>
					<div>
						<img
							className="moon-img"
							src={modeImg}
							alt="Dark Mode"
							onClick={toggleTheme}
						/>
					</div>
				</header>

				<section className="App-section">
					<div className="sec-div">
						<div className="number">{num1}</div>
						<div>
							<img className="plus-img" src={plusImg} alt="Plus" />
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
		</ThemeContext.Provider>
	);
}

export default App;
