
import { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import logo from './logo.svg';
import Page from './Page';
import Create from './Create';

function App() {

	const [inpVal, setInpVal] = useState("");

	const changeHeader = (newHeader) => {
		console.log(newHeader)
		document.querySelector(".heading").textContent = newHeader;
    };

	const deleteUser = (userID) => {
		
		const newUsers = users.filter((user) => user.id !== userID)
		setUsers(newUsers)

	}
	
	const uma = {
		person: "uma",
		age: 30
	}

	console.log(uma)

	const [umaAge, setUmaAge] = useState(1);


	const hemlo = () => {
		setUmaAge(umaAge + 1)
	}

	useEffect(() => {
		console.log("rerenduh waltuh")
	})

	const [users, setUsers] = useState([
		{ id: 1, name: 'john', age: 18, hobby: 'soccer' },
		{ id: 2, name: 'anastasia', age: 23, hobby: 'painting' },
		{ id: 3, name: 'julia', age: 15, hobby: 'web development' }
	]);
	


	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="heading">Me Neu React aPPP</h1>
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer">
						Learn React
					</a>
					<p>nóó me won't lóórn reject :C</p>
					<p onClick={hemlo}>{umaAge}</p>

					<Link to="/">Ω</Link>
					<Link to="/create">Kriet</Link>

				</header>

				<div className="content">
					<Routes>
						
						<Route exact path="/" element={
							<Page
								users={users}
								changeHeader={changeHeader}
								deleteUser={deleteUser}
							/>
						} />

						<Route exact path="/create" element={
							<Create />
						} />

					</Routes>
				</div>

				
				
			</div>
		</Router>
	);
}

export default App;
