import { createContext, useEffect, useState } from 'react';

export const TourContext = createContext();

export const TourContextProvider = (props) => {
	// User Information Context
	const [userInformation, setUserInformation] = useState({});
	const [userLogin, setUserLogin] = useState(false);

	// If any Change in User Information and call useEffect function
	useEffect(() => {
		userInformation?.isLoggedIn ? setUserLogin(true) : setUserLogin(false);
	}, [userInformation]);

	// All Context Wrap With Context Info object and never use UseReducer For not making complex
	const ContextInfo = {
		userInformation,
		setUserInformation,
		userLogin,
	};
	return (
		<TourContext.Provider value={ContextInfo}>
			{props.children}
		</TourContext.Provider>
	);
};
