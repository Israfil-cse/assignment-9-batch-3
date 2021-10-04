import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';
import PMap from './PMap';
import TitleBar from '../Header/TitleBar';
import { TourContext } from '../../Context/dataContext';
// import Gomap from './Gomap';

function SearchDestination() {
	const { type } = useParams();
	const [isSearch, setSearch] = useState(true);
	const [location, setLocation] = useState({});
	const { userInformation } = useContext(TourContext);
	// Set Location from and to
	const searchLocationSet = {
		from: '',
		to: '',
		date: '',
	};
	// Search Location and search result show by condition
	const searchLocation = (e) => {
		const { from, to } = searchLocationSet;
		if (from.length !== 0 && to.length !== 0) {
			setLocation(searchLocationSet);
			setSearch(false);
		}
		e.preventDefault();
	};

	// Search Form Reset after showing result
	const resetSearch = (e) => {
		setSearch(true);
		setLocation({});
		e.preventDefault();
	};

	// Setting data
	const setData = (e) => {
		e.target.name === 'locationFrom'
			? (searchLocationSet.from = e.target.value)
			: e.target.name === 'date'
			? (searchLocationSet.data = e.target.value)
			: (searchLocationSet.to = e.target.value);
	};

	return (
		<div className="container">
			<TitleBar title={`${userInformation.name} || ${type}`} />
			<div className="row mt-5">
				<div className="col-md-4 p-4 rounded bg-secondary">
					{isSearch ? (
						<SearchForm searchLocation={searchLocation} setData={setData} />
					) : (
						<SearchResult
							resetSearch={resetSearch}
							location={location}
							transport={type}
						/>
					)}
				</div>
				<div className="col-md-8 my-3">
					<PMap />
					{/* Some how Not Working my Google Api Key That's Why I Try Something Else */}
					{/* <Gomap /> */}
				</div>
			</div>
		</div>
	);
}

export default SearchDestination;
