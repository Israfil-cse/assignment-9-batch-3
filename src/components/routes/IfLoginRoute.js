import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { TourContext } from '../../Context/dataContext';

function IfLoginRoute({ children, ...rest }) {
	const { userLogin } = useContext(TourContext);
	// If User Logged In user can't browse Login and Sign Up page
	return (
		<Route
			{...rest}
			render={() =>
				!userLogin ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/',
						}}
					/>
				)
			}
		/>
	);
}

export default IfLoginRoute;
