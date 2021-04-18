import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Link, useHistory } from "react-router-dom"

const Signup = () => {
	const { signup } = useContext(AuthContext);	
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory()

	async function handleSubmit(e) {
		e.preventDefault();
		if (email === '' || password === '') {
			alert('please input email & password')
		}
		await signup(email, password);
		history.push("/")
	}	

	return ( 
		<div className="formContainer">
			<form className="form" onSubmit={handleSubmit}>
				<h2 className="title">Sign Up</h2>
				<input type="email" placeholder='input email' onChange={e => setEmail(e.target.value)}/>
				<input type="password" placeholder='input password' onChange={e => setPassword(e.target.value)}/>
				<button className="btn primary">Signup</button>
				<div className="textContainer">
				<Link to="forgot-password">Forgot password?</Link>
				<Link to="login">Already have an account? Log in</Link>
				</div>
			</form>
		</div>
	 );
}
 
export default Signup;