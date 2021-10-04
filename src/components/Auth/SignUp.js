import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import IconLogin from './IconLogin';
import { useForm } from 'react-hook-form';
import { FirebaseInit, SignUpWithForm } from '../../firebase/FirebaseAuth';
import Warning from '../warning/Warning';

function SignUp() {
	const { register, errors } = useForm();
	const history = useHistory();
	const [userInfo, setUserInfo] = useState({
		email: '',
		password: '',
		confirmPassword: '',
		fullName: '',
	});

	const validatePass = () => {
		// if (userInfo.confirmPassword === userInfo.password) {
		// 	return true;
		// } else {
		// 	errMsg('Password Not Match, Please Try Again');
		// 	return false;
		// }
		return userInfo.confirmPassword.length > 6 &&
			userInfo.confirmPassword === userInfo.password
			? true
			: (false, errMsg('Password Not Match, Please Try Again'));
	};
	// Save To State
	const fromInput = (e) => {
		e.target.name === 'email'
			? setUserInfo({ ...userInfo, email: e.target.value.trim() })
			: e.target.name === 'password'
			? setUserInfo({ ...userInfo, password: e.target.value })
			: e.target.name === 'confirmPassword'
			? setUserInfo({ ...userInfo, confirmPassword: e.target.value })
			: setUserInfo({ ...userInfo, fullName: e.target.value.trim() });
	};

	// Firebase Init nad sent to firebase auth for create user
	FirebaseInit();
	const onSubmit = (e) => {
		const { email, confirmPassword, fullName } = userInfo;
		if (validatePass()) {
			SignUpWithForm(email, confirmPassword, fullName)
				.then((res) => history.push('/login'))
				.catch((err) => errMsg(err.message));
		}

		e.preventDefault();
	};

	const [callWarning, setCallWarning] = useState('');
	const errMsg = (e) => {
		setCallWarning(e);
	};

	return (
		<div className="container  mt-5 ">
			<Warning warning={callWarning} />
			<div className="w-75 d-block m-auto Auth rounded shadow-sm">
				<Form
					onSubmit={onSubmit}
					className="d-flex flex-column align-items-center"
				>
					<Form.Group controlId="formBasicName" className="w-75 mt-3">
						<Form.Control
							type="text"
							placeholder="Enter Full Name"
							name="firstName"
							required
							ref={register({ required: true, maxLength: 20 })}
							onChange={fromInput}
						/>
					</Form.Group>
					<Form.Group controlId="formBasicEmail" className="w-75 mt-3">
						<Form.Control
							type="email"
							name="email"
							placeholder="Enter email"
							required
							ref={register(
								{ required: true },
								{
									pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
								}
							)}
							onChange={fromInput}
						/>
					</Form.Group>
					{errors.email && errMsg()}
					<Form.Group controlId="formBasicPassword" className="w-75 mt-3">
						<Form.Control
							type="password"
							placeholder="Password"
							name="password"
							required
							onChange={fromInput}
						/>
					</Form.Group>
					{errors.password && <span>Please Type Correct Email</span>}
					<Form.Group
						controlId="formBasicConfirmPassword"
						className="w-75 mt-3"
					>
						<Form.Control
							type="password"
							placeholder="Confirm Password"
							onKeyUp={fromInput}
							required
							name="confirmPassword"
						/>
					</Form.Group>
					<Button variant="warning" type="submit" className="w-75 mt-3">
						SignUp
					</Button>
					<p className="mt-5 d-flex w-75 flex-wrap">
						Already have an Account?
						<Link to="/login" className="text-warning">
							Login
						</Link>
					</p>
				</Form>
			</div>

			<IconLogin />
		</div>
	);
}

export default SignUp;
