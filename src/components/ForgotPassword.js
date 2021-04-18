import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useHistory } from "react-router-dom"

const ForgotPassword = () => {
	const { resetPassword } = useContext(AuthContext);	
	const [email, setEmail] = useState('');
	const history = useHistory()

	async function handleSubmit(e) {
		e.preventDefault();
		if (email === '') {
			alert('please input email & password')
		}
		await resetPassword(email);
		history.push("/login");
	}	
	return ( 
		<div className="formContainer">
			<form className="form" onSubmit={handleSubmit}>
				<h2 className="title">Reset Password</h2>
				<input type="email" placeholder='input email' onChange={e => setEmail(e.target.value)}/>
				<button className="btn primary">Submit</button>
			</form>
		</div>
	 );
}
 
export default ForgotPassword;