import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TourContext } from '../../Context/dataContext';
import { FirebaseInit, SignInWithForm } from '../../firebase/FirebaseAuth';
import IconLogin from './IconLogin';
import { useHistory, useLocation } from 'react-router';
import './Auth.css';
import Warning from '../warning/Warning';

function Login() {
	FirebaseInit();
	const { setUserInformation } = useContext(TourContext);
	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: '/' } };

	const [userInfo, setUserInfo] = useState({
		email: '',
		password: '',
	});

	// Take Input and save to state
	const fromInput = (e) => {
		e.target.name === 'email'
			? setUserInfo({ ...userInfo, email: e.target.value.trim() })
			: setUserInfo({ ...userInfo, password: e.target.value.trim() });
	};
	// Sing In Data call firebase function which in Firebase auth
	const SignInForm = (e) => {
		const { email, password } = userInfo;
		SignInWithForm(email, password)
			.then((res) => {
				setUserInformation(res);
				history.replace(from);
			})
			.catch((err) => errMsg(err.message));
		e.preventDefault();
	};
	// For call warning or error
	const [callWarning, setCallWarning] = useState('');
	const errMsg = (e) => setCallWarning(e);
	return (
		<div className="container mt-5 ">
			<Warning warning={callWarning} />
			<div className="w-75 d-block m-auto Auth rounded shadow-sm">
				<Form
					onSubmit={SignInForm}
					className="d-flex flex-column align-items-center"
				>
					<Form.Group controlId="formBasicEmail" className="w-75 mt-3">
						<Form.Control
							type="email"
							placeholder="Enter email"
							onChange={fromInput}
							required
							name="email"
						/>
					</Form.Group>

					<Form.Group controlId="formBasicPassword" className="w-75 mt-3">
						<Form.Control
							type="password"
							placeholder="Password"
							onChange={fromInput}
							required
							name="password"
						/>
					</Form.Group>
					<Form.Group
						controlId="formBasicCheckbox"
						className="d-flex justify-content-between w-75 flex-wrap"
					>
						<Form.Check type="checkbox" label="Remember Me" />
						<Form.Label>
							<Link className="text-warning" to="#">
								Forgot Password
							</Link>
						</Form.Label>
					</Form.Group>
					<Button variant="warning" type="submit" className="w-75 mt-3">
						Login
					</Button>
					<p className="mt-5 d-flex w-75 flex-wrap">
						Don't have an account?
						<Link to="/signup" className="text-warning">
							Create an account
						</Link>
					</p>
				</Form>
			</div>

			<IconLogin />
		</div>
	);
}

export default Login;
