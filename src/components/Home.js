import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Link, useHistory } from "react-router-dom"

const Home = () => {
	const history = useHistory()
	const { currentUser, logout } = useContext(AuthContext);
	async function handleLogout() {
		await logout();
		history.push("/login")
	}

	return currentUser ? (
		<>
			<h2 className="title">Welcome to Auth app {currentUser ? currentUser.email : ''}</h2>
			<button className="btn danger" onClick={handleLogout}>Logout</button>
		</>	
	) : (
		<>
			<h2 className="title">Please log in</h2>
		</>	
	)
}
 
export default Home;