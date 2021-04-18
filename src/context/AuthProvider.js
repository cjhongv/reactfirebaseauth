import React, { createContext, useState, useEffect } from 'react';
import auth from '../firebase/fire';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
	const [currentUser, setCurrentUser] = useState();

	const signup = (email, password) => {
		return	auth.createUserWithEmailAndPassword(email, password)
	}

	const login = (email, password) => {
		return	auth.signInWithEmailAndPassword(email, password)
	}

	const logout = () => {
		return auth.signOut()
	}

	const resetPassword = (email) => {
		return auth.sendPasswordResetEmail(email)
	}

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setCurrentUser(user)
			}
		})
	}, []);

	return ( 
		<AuthContext.Provider value={{signup, login, logout, resetPassword, currentUser}}>
			{props.children}
		</AuthContext.Provider>
	 );
}
 
export default AuthContextProvider;