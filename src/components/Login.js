import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Link, useHistory } from "react-router-dom"

const Login = () => {

	const { login } = useContext(AuthContext);	
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory()

	async function handleSubmit(e) {
		e.preventDefault();
		if (email === '' || password === '') {
			alert('please input email & password')
		}
		await login(email, password);
		history.push("/")
	}	

	return ( 
		<form className="form" onSubmit={handleSubmit}>
			<h2 className="title">Log In</h2>
			<input type="email" placeholder='input email' onChange={e => setEmail(e.target.value)}/>
			<input type="password" placeholder='input password' onChange={e => setPassword(e.target.value)}/>
			<button className="btn primary">Login</button>
			<div className="textContainer">
				<Link to="forgot-password">Forgot password?</Link>
				<Link to="signup">Don't have an account? Sign Up</Link>
			</div>
		</form>
	 );
}
 
export default Login;