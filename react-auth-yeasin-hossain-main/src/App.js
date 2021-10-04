import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/routes/PrivateRoute';
import Home from './components/Home/Home';
import SearchDestination from './components/LocationSearch/SearchDestination';
import Header from './components/Header/Header';
import IfLoginRoute from './components/routes/IfLoginRoute';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					{/* Public Home Route */}
					<Route exact path="/">
						<Home />
					</Route>
					{/* Private Route */}
					<PrivateRoute path="/destination/:type">
						<SearchDestination />
					</PrivateRoute>
					{/* Protected Route If user Login , can't browse Those Page  */}
					<IfLoginRoute path="/login">
						<Login />
					</IfLoginRoute>
					<IfLoginRoute path="/signup">
						<SignUp />
					</IfLoginRoute>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
